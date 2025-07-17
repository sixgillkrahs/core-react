# Technology Stack

## Core Technologies
- **Frontend Framework**: React 19
- **Build System**: Vite 7
- **Language**: TypeScript 5.8
- **State Management**: Redux Toolkit
- **UI Library**: Ant Design 5.26
- **Styling**: Tailwind CSS 4.1
- **Routing**: React Router DOM 7.6
- **HTTP Client**: Axios

## Development Tools
- **Package Manager**: pnpm
- **Linting**: ESLint 9
- **Formatting**: Prettier 3.6
- **Git Hooks**: Husky
- **Containerization**: Docker with Nginx

## Project Configuration
- Path aliasing: `@/` maps to `src/`
- Module resolution: "bundler" mode
- Strict TypeScript configuration
- ESM modules (type: "module")

## Environment Setup
- Multiple environments supported (staging, production)
- Environment variables via `.env.staging` and `.env.production`

## Common Commands

### Development
```bash
# Start development server with staging environment
pnpm dev

# Start with production environment
pnpm start
```

### Building
```bash
# Build for staging
pnpm build:stag

# Build for production
pnpm build:prod
```

### Code Quality
```bash
# Lint code
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format

# Run both lint:fix and format (pre-commit)
pnpm pc
```

### Docker
```bash
# Build and run with Docker Compose
docker-compose up --build
```