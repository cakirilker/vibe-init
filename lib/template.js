const fs = require("fs-extra");
const path = require("path");
const mustache = require("mustache");

/**
 * Copy template files from source to destination
 */
async function copyTemplate(sourcePath, destPath) {
  const items = await fs.readdir(sourcePath);

  for (const item of items) {
    const sourceItemPath = path.join(sourcePath, item);
    const destItemPath = path.join(destPath, item);

    const stat = await fs.stat(sourceItemPath);

    if (stat.isDirectory()) {
      // Skip node_modules and other build directories
      if (
        item === "node_modules" ||
        item === ".turbo" ||
        item === "dist" ||
        item === "build"
      ) {
        continue;
      }

      await fs.ensureDir(destItemPath);
      await copyTemplate(sourceItemPath, destItemPath);
    } else {
      // Skip lock files - they will be regenerated
      if (
        item === "pnpm-lock.yaml" ||
        item === "yarn.lock" ||
        item === "package-lock.json"
      ) {
        continue;
      }

      await fs.copy(sourceItemPath, destItemPath);
    }
  }
}

/**
 * Replace template variables in files
 */
async function replaceTemplateVariables(projectPath, variables) {
  // Get all files in the project
  const allFiles = await getAllFiles(projectPath);

  // Process each file to check for template variables
  for (const filePath of allFiles) {
    try {
      const content = await fs.readFile(filePath, "utf-8");

      // Check if file contains template variables (but not JSX object literals)
      // Template variables should be like {{VARIABLE_NAME}} (uppercase with underscores)
      const templateVarRegex = /\{\{[A-Z_][A-Z0-9_]*\}\}/;
      const hasTemplateVars = templateVarRegex.test(content);

      if (hasTemplateVars) {
        // Use a more specific replacement that only matches template variable patterns
        let processedContent = content;

        // Replace each template variable individually
        Object.keys(variables).forEach((key) => {
          const templateVar = `{{${key}}}`;
          const regex = new RegExp(
            templateVar.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
            "g",
          );
          processedContent = processedContent.replace(regex, variables[key]);
        });

        await fs.writeFile(filePath, processedContent);

        // Log which file was processed for debugging
        const relativePath = path.relative(projectPath, filePath);
        console.log(`Processed template variables in: ${relativePath}`);
      }
    } catch (error) {
      // Skip binary files or files that can't be read as text
      if (error.code !== "EISDIR") {
        const relativePath = path.relative(projectPath, filePath);
        console.warn(
          `Warning: Could not process template variables in ${relativePath}:`,
          error.message,
        );
      }
    }
  }
}

/**
 * Get all files recursively from a directory
 */
async function getAllFiles(dir, fileList = []) {
  const files = await fs.readdir(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory()) {
      // Skip certain directories
      if (
        file === "node_modules" ||
        file === ".git" ||
        file === ".turbo" ||
        file === "dist" ||
        file === "build"
      ) {
        continue;
      }
      await getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }

  return fileList;
}

module.exports = {
  copyTemplate,
  replaceTemplateVariables,
  getAllFiles,
};
