# Copilot Instructions

## Project Overview

This is a personal blog built with Next.js 13 (Pages Router), MDX, TypeScript, and SCSS. The blog includes an "About" page and a blog posts section, deployed via Docker to a custom domain.

## Build, Test, and Lint Commands

```bash
# Development server (with hot reload)
pnpm dev

# Production build
pnpm build

# Start production server (after building)
pnpm start

# Lint
pnpm lint

# Static export (generates static HTML)
pnpm export
```

**Package Manager**: This project uses `pnpm` (v10.30.0). Always use `pnpm` instead of `npm` or `yarn`.

## Architecture

### Pages Router Structure

- Uses Next.js Pages Router (not App Router)
- Pages are in `src/pages/`
- Each page uses a wrapper pattern: `index.tsx` imports and renders `index.mdx`
  - Example: `src/pages/index.tsx` → renders `src/pages/index.mdx`
  - Example: `src/pages/posts/index.tsx` → renders `src/pages/posts/index.mdx`

### MDX Configuration

- MDX content can be written in `.mdx` files and rendered through the wrapper pattern
- Configured with math support:
  - `remark-math` for parsing LaTeX-style math notation
  - `rehype-katex` for rendering math expressions
- Custom MDX components can be defined in `src/mdx-components.tsx`

### Component Organization

- React components live in `src/components/`
- About page components are in `src/components/about/`
  - Each component is exported from its own file
  - Components are re-exported through `src/components/about/index.ts`

### Data Layer

- Static data (personal info, social links, etc.) is stored in `src/data/`
- Use TypeScript `as const` assertions for type-safe data structures
- Example: `src/data/about.ts` contains all About page data

### Styling

- Global styles: `src/styles/globals.scss`
- Layout-specific styles: `src/styles/layout.scss`, `src/styles/about.scss`
- Uses SCSS modules with BEM-like naming (e.g., `about-hero`, `about-avatar`)
- Tailwind CSS is configured but SCSS is the primary styling approach

### Global Layout

- `src/pages/_app.tsx` defines the global layout with header and footer
- Navigation is defined in the `navItems` array
- Active route highlighting uses `useRouter()` to check `pathname`

## Key Conventions

### Path Aliases

- `@/*` maps to `src/*` (configured in `tsconfig.json`)
- Always use `@/` for imports within the src directory
  - ✅ `import { aboutHero } from "@/data/about"`
  - ❌ `import { aboutHero } from "../../data/about"`

### Page Creation Pattern

When creating new pages:
1. Create an `index.mdx` file with the content
2. Create an `index.tsx` wrapper that imports and renders the MDX:
   ```tsx
   import Content from './index.mdx'
   
   export default function Page() {
     return <Content />
   }
   ```

### Component Exports

- Individual component files export the component as default
- Barrel exports (`index.ts`) re-export all components from a directory
- Components follow PascalCase naming

### Assets

- Static assets go in `public/`
- Icons are in `public/icons/`
- Reference with absolute paths: `/GraphiumIcon.png`, `/icons/github.svg`

## Deployment

- Deployed via Docker using `docker-compose.yml`
- Uses Traefik reverse proxy with automatic HTTPS
- Deploy script: `./deploy.sh` (rsyncs code to server, builds and restarts container)
- Production domain: https://pisnp.net
- Container exposes port 3000 internally

## Notes

- No test suite is currently configured
- The site is in Japanese (日本語) - maintain this language in content and UI strings
- MDX files can include LaTeX math expressions using standard LaTeX syntax
