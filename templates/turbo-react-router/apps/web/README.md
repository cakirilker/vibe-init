# Web App

A full-stack web application built with React Router, Hono, and Cloudflare Workers.

## Architecture

- **Frontend**: React Router v7 with SSR
- **Backend**: Hono for API routes
- **Runtime**: Cloudflare Workers
- **Build Tool**: Vite with Cloudflare plugin

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)
- Cloudflare account (for deployment)

### Development

1. Install dependencies:

```bash
pnpm install
```

2. Start the development server:

```bash
pnpm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building

```bash
pnpm run build
```

### Deployment

1. Make sure you have Wrangler installed and configured
2. Deploy to Cloudflare Workers:

```bash
pnpm run deploy
```
