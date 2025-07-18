# vibe-init ✨

A CLI tool to create new projects with good vibes - a modern full-stack monorepo setup with React, TypeScript, and Turborepo.

## Usage

Create a new project with:

```bash
pnpm dlx vibe-init@latest
```

Or with npm:

```bash
npx vibe-init@latest
```

Or with yarn:

```bash
yarn create vibe-init
```

## What's Included

This template creates a modern monorepo with:

### Apps and Packages

- **`web`**: A React application built with Vite and TypeScript
- **`@your-project/ui`**: A shared component library
- **`@your-project/eslint-config`**: Shared ESLint configurations
- **`@your-project/typescript-config`**: TypeScript configurations

### Technologies

- **[React](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking
- **[Vite](https://vitejs.dev/)** - Fast build tool
- **[Turborepo](https://turbo.build/)** - Monorepo build system
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[pnpm](https://pnpm.io/)** - Package manager

### Features

- **Monorepo structure** with shared packages
- **TypeScript** throughout the entire codebase
- **Hot reloading** in development
- **Optimized builds** with Turborepo
- **Code quality** with ESLint and Prettier
- **Workspace dependencies** with pnpm

## Getting Started

After creating your project:

```bash
cd your-project-name
pnpm install  # if not already installed
pnpm dev      # start development server
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build all packages
- `pnpm lint` - Lint all packages
- `pnpm format` - Format code with Prettier

## Project Structure

```
your-project/
├── apps/
│   └── web/              # React application
├── packages/
│   ├── ui/               # Shared UI components
│   ├── eslint-config/    # ESLint configuration
│   └── typescript-config/ # TypeScript configuration
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## Development

To contribute to this template:

1. Clone the repository
2. Make your changes in the `templates/` directory
3. Test the changes by running `node index.js` in the vibe-init directory
4. Submit a pull request

## License

MIT