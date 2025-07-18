# {{PROJECT_NAME}}

{{PROJECT_DESCRIPTION}}

{{#AUTHOR}}
Created by {{AUTHOR}}
{{/AUTHOR}}

## Getting Started

This project was created using `vibe-init`.

```sh
pnpm dlx vibe-init@latest
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `web`: react [vite](https://vitejs.dev) ts app
- `@{{KEBAB_CASE_NAME}}/ui`: a stub component library shared by `web` application
- `@{{KEBAB_CASE_NAME}}/eslint-config`: shared `eslint` configurations
- `@{{KEBAB_CASE_NAME}}/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Database

This project uses [Drizzle ORM](https://orm.drizzle.team/) for database management. The following scripts are available:

- `pnpm db:migration:generate` - Generate database migrations based on schema changes
- `pnpm db:migration:apply` - Apply pending migrations to the database
- `pnpm db:studio` - Launch Drizzle Studio for database management

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Drizzle ORM](https://orm.drizzle.team/) for database management
