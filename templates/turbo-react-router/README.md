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

## Installation

1. **Install dependencies**

```sh
pnpm install
```

2. **Set up environment variables**

Copy the example environment file and configure your settings:

```sh
cp apps/web/.env.example apps/web/.env
```

Edit `apps/web/.env` with your database configuration:

```env
# PostgreSQL Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"

# Better Auth Configuration
BETTER_AUTH_SECRET="your-secret-key-here-make-it-long-and-random"
BETTER_AUTH_URL="http://localhost:5173"
```

**Database Setup Options:**

- **Local PostgreSQL**: Install PostgreSQL locally and create a database
- **Cloud Database**: Use services like Supabase, Neon, or PlanetScale
- **Docker**: Run PostgreSQL in a Docker container

For local PostgreSQL setup:
```sh
# Create a new database
createdb your_database_name

# Or using psql
psql -U postgres -c "CREATE DATABASE your_database_name;"
```

3. **Set up the database**

Generate and apply database migrations:

```sh
# Apply migrations to set up the database schema
pnpm db:migration:apply

# Optional: Generate new migrations (only if you modify the schema)
pnpm db:migration:generate
```

**Note**: The initial migration files are already included in the project, so you typically only need to run `pnpm db:migration:apply` to set up your database schema.

4. **Start the development server**

```sh
pnpm dev
```

The application will be available at `http://localhost:3000`

## Development

### Database Management

This project uses [Drizzle ORM](https://orm.drizzle.team/) for database management. The following scripts are available:

- `pnpm db:migration:generate` - Generate database migrations based on schema changes
- `pnpm db:migration:apply` - Apply pending migrations to the database
- `pnpm db:studio` - Launch Drizzle Studio for database management

### Available Scripts

- `pnpm dev` - Start development server for all apps
- `pnpm build` - Build all packages and apps
- `pnpm lint` - Run ESLint across all packages
- `pnpm format` - Format code with Prettier

## Troubleshooting

### Database Connection Issues

If you encounter database connection errors:

1. **Check your DATABASE_URL**: Ensure it's correctly formatted and accessible
2. **Verify database exists**: Make sure the database specified in your URL exists
3. **Check permissions**: Ensure your database user has the necessary permissions
4. **Test connection**: Use a database client to verify you can connect with the same credentials

### Common Issues

- **Migration errors**: If migrations fail, check your database schema and ensure no conflicting changes
- **Port conflicts**: If port 5173 is in use, update the `BETTER_AUTH_URL` in your `.env` file
- **Environment variables**: Ensure all required environment variables are set in your `.env` file

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `web`: react [vite](https://vitejs.dev) ts app
- `@{{KEBAB_CASE_NAME}}/ui`: a stub component library shared by `web` application
- `@{{KEBAB_CASE_NAME}}/eslint-config`: shared `eslint` configurations
- `@{{KEBAB_CASE_NAME}}/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Tech Stack

- **Framework**: [React](https://reactjs.org/) with [React Router](https://reactrouter.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Database**: [Drizzle ORM](https://orm.drizzle.team/)
- **Monorepo**: [Turborepo](https://turbo.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom component library with [Radix UI](https://radix-ui.com/)

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Drizzle ORM](https://orm.drizzle.team/) for database management
