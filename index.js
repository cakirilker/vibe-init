#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const inquirer = require("inquirer");
const mustache = require("mustache");
const chalk = require("chalk");
const ora = require("ora");
const { execSync } = require("child_process");

const { copyTemplate, replaceTemplateVariables } = require("./lib/template");

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    template: "turbo-react-router", // default template
    help: false,
    listTemplates: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === "--template" || arg === "-t") {
      options.template = args[i + 1];
      i++; // skip next argument since it's the template value
    } else if (arg === "--help" || arg === "-h") {
      options.help = true;
    } else if (arg === "--list" || arg === "-l") {
      options.listTemplates = true;
    }
  }

  return options;
}

// Get available templates
async function getAvailableTemplates() {
  const templatesDir = path.join(__dirname, "templates");
  const templates = [];

  try {
    const entries = await fs.readdir(templatesDir);
    for (const entry of entries) {
      const templatePath = path.join(templatesDir, entry);
      const stat = await fs.stat(templatePath);
      if (stat.isDirectory()) {
        templates.push(entry);
      }
    }
  } catch (error) {
    console.error(
      chalk.red("Error reading templates directory:"),
      error.message,
    );
    process.exit(1);
  }

  return templates;
}

// Show help message
function showHelp() {
  console.log(chalk.blue.bold("✨ vibe-init"));
  console.log(chalk.gray("Create a new project with good vibes\n"));

  console.log(chalk.yellow("Usage:"));
  console.log("  vibe-init [options]\n");

  console.log(chalk.yellow("Options:"));
  console.log(
    "  -t, --template <name>   Template to use (default: turbo-react-router)",
  );
  console.log("  -l, --list              List available templates");
  console.log("  -h, --help              Show this help message\n");

  console.log(chalk.yellow("Examples:"));
  console.log("  vibe-init");
  console.log("  vibe-init --template turbo-react-router");
  console.log("  vibe-init -t my-custom-template");
  console.log("  vibe-init --list");
}

// List available templates
async function listTemplates() {
  const templates = await getAvailableTemplates();

  console.log(chalk.blue.bold("✨ Available templates:\n"));

  templates.forEach((template) => {
    const isDefault = template === "turbo-react-router";
    console.log(
      `  ${chalk.cyan(template)}${isDefault ? chalk.gray(" (default)") : ""}`,
    );
  });

  console.log(chalk.gray(`\nUse: vibe-init --template <name>`));
}

async function main() {
  const options = parseArgs();

  if (options.help) {
    showHelp();
    return;
  }

  if (options.listTemplates) {
    await listTemplates();
    return;
  }

  // Get available templates
  const availableTemplates = await getAvailableTemplates();

  if (availableTemplates.length === 0) {
    console.log(chalk.red("❌ No templates found in templates directory!"));
    process.exit(1);
  }

  // Validate template choice
  if (!availableTemplates.includes(options.template)) {
    console.log(chalk.red(`❌ Template "${options.template}" not found!`));
    console.log(chalk.yellow("Available templates:"));
    availableTemplates.forEach((template) => {
      console.log(`  - ${template}`);
    });
    process.exit(1);
  }

  console.log(chalk.blue.bold("✨ Welcome to vibe-init!"));
  console.log(chalk.gray("This will create a new project with good vibes.\n"));

  console.log(chalk.cyan(`Using template: ${options.template}\n`));

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
    const templatePath = path.join(__dirname, "templates", options.template);
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
