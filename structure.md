# Project Structure

## Directory Organization

```
src/
├── assets/       # Static assets like images, fonts, etc.
├── components/   # Reusable UI components
├── hooks/        # Custom React hooks
├── layouts/      # Page layout components
│   ├── MainLayout/   # Main application layout
│   ├── AuthLayout/   # Authentication pages layout
│   └── BlankLayout/  # Minimal layout for error pages
├── pages/        # Application pages
│   ├── Auth/     # Authentication related pages
│   ├── Home/     # Home page
│   └── 404.tsx   # Not found page
├── routes/       # Routing configuration
├── services/     # API services and data fetching
├── store/        # Redux store configuration and slices
├── types/        # TypeScript type definitions
└── utils/        # Utility functions
```

## Architecture Patterns

### Routing
- Routes are defined in `src/routes/router.ts`
- Split into public and private routes
- Uses React Router with lazy loading for code splitting
- Route components include layout wrappers

### Component Structure
- Pages are organized in the `pages/` directory
- Each page is typically in its own folder with an `index.tsx` file
- Reusable components are in the `components/` directory
- Custom hooks are in the `hooks/` directory

### State Management
- Redux is used for global state management
- Store configuration is in the `store/` directory

### File Naming Conventions
- React components use PascalCase (e.g., `HomePage.tsx`)
- Folders for components use PascalCase
- Hooks use camelCase with `use` prefix (e.g., `useChunkedUpload.ts`)
- Utility functions use camelCase

### Import Conventions
- Use path aliases: `@/` instead of relative paths
- Group imports by external libraries first, then internal modules

### Code Organization
- Each component should have a single responsibility
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use TypeScript interfaces for props and state