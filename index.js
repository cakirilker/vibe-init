#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const inquirer = require("inquirer");
const mustache = require("mustache");
const chalk = require("chalk");
const ora = require("ora");
const { execSync } = require("child_process");

const { copyTemplate, replaceTemplateVariables } = require("./lib/template");

async function main() {
  console.log(chalk.blue.bold("✨ Welcome to vibe-init!"));
  console.log(chalk.gray("This will create a new project with good vibes.\n"));

  // Get project details from user
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is your project name?",
      default: "my-vibe-project",
      validate: (input) => {
        if (input.trim().length === 0) {
          return "Project name is required";
        }
        if (!/^[a-zA-Z0-9-_]+$/.test(input)) {
          return "Project name can only contain letters, numbers, hyphens, and underscores";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "description",
      message: "Project description (optional):",
      default: "A new project created with vibe-init",
    },
    {
      type: "input",
      name: "author",
      message: "Author name (optional):",
      default: "",
    },
    {
      type: "confirm",
      name: "installDeps",
      message: "Install dependencies after creating the project?",
      default: true,
    },
  ]);

  const projectPath = path.join(process.cwd(), answers.projectName);

  // Check if directory already exists
  if (fs.existsSync(projectPath)) {
    console.log(
      chalk.red(`❌ Directory ${answers.projectName} already exists!`),
    );
    process.exit(1);
  }

  const spinner = ora("Creating project...").start();

  try {
    // Create project directory
    await fs.ensureDir(projectPath);

    // Copy template files
    const templatePath = path.join(__dirname, "templates");
    await copyTemplate(templatePath, projectPath);

    // Replace template variables
    const templateVars = {
      PROJECT_NAME: answers.projectName,
      PROJECT_DESCRIPTION: answers.description,
      AUTHOR: answers.author,
      KEBAB_CASE_NAME: answers.projectName.toLowerCase().replace(/\s+/g, "-"),
      SNAKE_CASE_NAME: answers.projectName.toLowerCase().replace(/\s+/g, "_"),
      PASCAL_CASE_NAME: answers.projectName
        .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
        .replace(/^./, (c) => c.toUpperCase()),
    };

    await replaceTemplateVariables(projectPath, templateVars);

    spinner.succeed(chalk.green("✅ Project created successfully!"));

    // Install dependencies
    if (answers.installDeps) {
      const installSpinner = ora("Installing dependencies...").start();
      try {
        process.chdir(projectPath);
        execSync("pnpm install", { stdio: "inherit" });
        installSpinner.succeed(
          chalk.green("✅ Dependencies installed successfully!"),
        );
      } catch (error) {
        installSpinner.fail(chalk.red("❌ Failed to install dependencies"));
        console.log(chalk.yellow("You can install them manually by running:"));
        console.log(chalk.cyan(`  cd ${answers.projectName}`));
        console.log(chalk.cyan("  pnpm install"));
      }
    }

    // Success message
    console.log(chalk.green.bold("\n🎉 Your project is ready!"));
    console.log(chalk.gray("\nNext steps:"));
    console.log(chalk.cyan(`  cd ${answers.projectName}`));
    if (!answers.installDeps) {
      console.log(chalk.cyan("  pnpm install"));
    }
    console.log(chalk.cyan("  pnpm dev"));
    console.log(chalk.gray("\nHappy coding! 🚀"));
  } catch (error) {
    spinner.fail(chalk.red("❌ Failed to create project"));
    console.error(chalk.red("Error:"), error.message);
    process.exit(1);
  }
}

main().catch(console.error);
