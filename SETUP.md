# Setup Guide for vibe-init

This guide will walk you through publishing the `vibe-init` package to npm so that users can run `pnpm dlx vibe-init@latest` to create new projects with multiple template options.

## Prerequisites

1. **Node.js 16+** installed on your system
2. **npm account** - Create one at [npmjs.com](https://www.npmjs.com/)
3. **npm CLI** logged in to your account

## Step 1: Verify Your Package

First, make sure you're in the vibe-init directory and everything is set up correctly:

```bash
cd vibe-init
npm install
```

Test the CLI locally:

```bash
node index.js
```

This should prompt you for project details. You can exit with `Ctrl+C` after verifying it works.

## Step 2: Login to npm

If you haven't already, log in to npm:

```bash
npm login
```

Enter your npm username, password, and email when prompted.

## Step 3: Update Package Information

Before publishing, update the package.json with your information:

```json
{
  "name": "vibe-init",
  "version": "1.0.0",
  "description": "Create a new project with good vibes ✨",
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/your-repo.git"
  },
  "bugs": {
    "url": "https://github.com/yourusername/your-repo/issues"
  },
  "homepage": "https://github.com/yourusername/your-repo#readme"
}
```

## Step 4: Check Package Name Availability

Check if your desired package name is available:

```bash
npm view vibe-init
```

If it returns "npm ERR! 404 Not Found", the name is available. If you get package information, the name is taken and you'll need to choose a different one.

**Alternative names to consider:**
- `vibe-init-app`
- `vibe-init-template`
- `create-vibe-project`

## Step 5: Test the Package

Before publishing, test the package works correctly:

```bash
# Test in a temporary directory
mkdir ../test-install
cd ../test-install
node ../vibe-init/index.js
```

Follow the prompts to create a test project and verify everything works.

## Step 6: Publish to npm

Back in the vibe-init directory:

```bash
cd ../vibe-init
npm publish
```

If this is your first time publishing, you might need to verify your email address first.

## Step 7: Test the Published Package

Wait a few minutes for npm to propagate your package, then test it:

```bash
# Test with pnpm
pnpm dlx vibe-init@latest

# Test with npm
npx vibe-init@latest

# Test with yarn
yarn create vibe-init
```

## Step 8: Update Documentation

Update your main project's README.md to include instructions for using your new template:

```markdown
## Quick Start

Create a new project using this template:

```bash
pnpm dlx vibe-init@latest
```

Or with npm:

```bash
npx vibe-init@latest
```
```

## Updating the Package

When you make changes to the template:

1. Update the version in package.json:
   ```bash
   npm version patch  # for bug fixes
   npm version minor  # for new features
   npm version major  # for breaking changes
   ```

2. Publish the update:
   ```bash
   npm publish
   ```

## Package Structure

Your published package will include:
- `index.js` - Main CLI script
- `lib/template.js` - Template utilities
- `templates/` - All template files
- `package.json` - Package configuration
- `README.md` - Package documentation

## Troubleshooting

### Permission Errors
If you get permission errors, make sure you're logged in:
```bash
npm whoami
```

### Package Name Conflicts
If your package name is taken, update the name in package.json and try again.

### Template Issues
If users report issues with the generated template:
1. Test the template generation locally
2. Update the template files in `templates/`
3. Increment the version
4. Publish the update

## Best Practices

1. **Test thoroughly** before publishing
2. **Use semantic versioning** (semver)
3. **Keep templates up to date** with the latest dependencies
4. **Document changes** in release notes
5. **Monitor for issues** from users

## Example Usage

After publishing, users can create new projects with:

```bash
# Use default template (turbo-react-router)
pnpm dlx vibe-init@latest my-awesome-project

# Use specific template
pnpm dlx vibe-init@latest --template simple-react
pnpm dlx vibe-init@latest -t turbo-react-router

# List available templates
pnpm dlx vibe-init@latest --list

# Show help
pnpm dlx vibe-init@latest --help
```

This will:
1. Validate and use the specified template (or default)
2. Prompt for project details
3. Copy template files
4. Replace template variables
5. Install dependencies
6. Provide next steps

## Adding New Templates

To add a new template:

1. Create a new directory in `templates/` (e.g., `templates/my-new-template/`)
2. Add all template files with `{{VARIABLE_NAME}}` placeholders
3. Test the template locally:
   ```bash
   node index.js --template my-new-template
   ```
4. Update the README.md to document the new template
5. Increment the version and publish

### Template Variables

Available template variables:
- `{{PROJECT_NAME}}` - User-friendly project name
- `{{PROJECT_DESCRIPTION}}` - Project description
- `{{AUTHOR}}` - Author name
- `{{KEBAB_CASE_NAME}}` - kebab-case project name
- `{{SNAKE_CASE_NAME}}` - snake_case project name
- `{{PASCAL_CASE_NAME}}` - PascalCase project name

## Support

If users encounter issues, direct them to:
- The package README
- Your project's GitHub issues
- The template documentation

Remember to keep your templates updated and respond to user feedback!