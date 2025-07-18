# vibe-init ✨

A CLI tool to create new projects with good vibes - a modern full-stack monorepo setup with React, TypeScript, and Turborepo.

## Usage

Create a new project with the default template:

```bash
pnpm dlx vibe-init@latest
```

Or specify a template:

```bash
pnpm dlx vibe-init@latest --template simple-react
```

Alternative package managers:

```bash
# With npm
npx vibe-init@latest

# With yarn
yarn create vibe-init
```

## Templates

List all available templates:

```bash
pnpm dlx vibe-init@latest --list
```

### Available Templates

- **`turbo-react-router`** (default) - Full-stack monorepo with React Router, TypeScript, and Turborepo
- **`simple-react`** - Simple React app with Vite and TypeScript

## CLI Options

- `-t, --template <name>` - Template to use (default: turbo-react-router)
- `-l, --list` - List available templates
- `-h, --help` - Show help message

## What's Included

### turbo-react-router Template (Default)

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
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

### Features

- **Monorepo structure** with shared packages
- **TypeScript** throughout the entire codebase
- **Hot reloading** in development
- **Optimized builds** with Turborepo
- **Code quality** with ESLint and Prettier
- **Workspace dependencies** with pnpm

### simple-react Template

This template creates a simple React application with:

- **React 18** with TypeScript
- **Vite** for fast development and building
- **ESLint** for code linting
- **Hot Module Replacement** for instant updates
- **Modern CSS** with custom styling

## Getting Started

After creating your project:

```bash
cd your-project-name
pnpm install  # install dependencies (if not already done)
pnpm dev      # start development server
```

> **Note**: vibe-init uses pnpm as the primary package manager for better performance and disk space efficiency. Make sure you have pnpm installed: `npm install -g pnpm`

### Template-specific Commands

#### turbo-react-router
```bash
pnpm dev      # start all apps in development
pnpm build    # build all packages
pnpm lint     # lint all packages
pnpm format   # format code with Prettier
```

#### simple-react
```bash
pnpm dev      # start development server
pnpm build    # build for production
pnpm preview  # preview production build
pnpm lint     # run ESLint
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build all packages
- `pnpm lint` - Lint all packages
- `pnpm format` - Format code with Prettier

## Project Structure

### turbo-react-router Template
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

### simple-react Template
```
your-project/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── App.css
│   └── index.css
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Development

To contribute to this template:

1. Clone the repository
2. Make your changes in the `templates/` directory
3. Test the changes by running `node index.js` in the vibe-init directory
4. Submit a pull request

## License

MIT