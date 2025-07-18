# TypeScript Configuration Package

This package provides shared TypeScript configurations for the monorepo. Each configuration extends the base configuration and adds specific settings for different environments.

## Available Configurations

### `base.json`
The foundation configuration with common TypeScript settings:
- Strict mode enabled
- Module resolution set to bundler
- ESNext module system
- Declaration files enabled
- Skip lib check for performance

### `react-library.json`
For React library packages:
- Extends base configuration
- Adds React JSX support

### `vite.json`
For Vite-based applications:
- Extends base configuration
- Optimized for Vite bundler
- DOM libraries included
- Source maps enabled
- Additional strict checks

### `react-router.json`
For React Router applications:
- Extends vite configuration
- Optimized for React Router apps
- ES2022 target
- DOM libraries included
- React JSX support

### `node.json`
For Node.js tooling files (like `vite.config.ts`):
- Extends base configuration
- Node.js types included
- Composite setup for project references
- ES2022 target

### `cloudflare.json`
For Cloudflare Workers:
- Extends base configuration
- Cloudflare Workers types
- ESNext target for modern runtime
- Worker-specific optimizations

## Usage

In your `tsconfig.json`, extend the appropriate configuration:

```json
{
  "extends": "../../packages/typescript-config/react-router.json",
  "include": ["src/**/*"],
  "compilerOptions": {
    "rootDirs": [".", "./generated-types"]
  }
}
```

## Configuration Hierarchy

```
base.json
├── react-library.json
├── node.json
├── cloudflare.json
└── vite.json
    └── react-router.json
```

Each configuration builds upon its parent, adding or overriding specific settings for the target environment.