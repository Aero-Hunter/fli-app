# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Development
- **Start development server**: `npm run dev` - Starts Vite dev server with HMR
- **Build for production**: `npm run build` - TypeScript compilation followed by Vite build
- **Preview production build**: `npm run preview` - Preview the production build locally
- **Lint code**: `npm run lint` - Run ESLint on all TypeScript/TSX files

### Testing & Debugging
- **Enable debug logging**: Set `localStorage.setItem('log', 'true')` in browser console to enable API logging via the custom loggerUtil

## Architecture Overview

### Tech Stack
- **Frontend**: React 19 with TypeScript and Vite
- **Styling**: Emotion CSS-in-JS with Ant Design components
- **Content Management**: Contentful CMS integration
- **Build Tool**: Vite with React Compiler enabled via Babel plugin

### Project Structure
```
src/
├── api/           # Contentful API integration layer
│   ├── api.ts     # Main API client and blog post fetching
│   ├── api.config.ts  # Environment-based Contentful configuration
│   └── api.helpers.ts # Data transformation utilities
├── components/    # Reusable React components
│   └── RichText.tsx   # Contentful rich text renderer
├── hooks/         # Custom React hooks
│   └── useContentful.ts # Hook for fetching Contentful data
├── util/          # Utility functions
│   └── loggerUtil.ts  # Conditional logging utility
└── themes/        # Theme configuration
    └── theme.ts   # Color palette and theme constants
```

### Key Architectural Patterns

#### Content Management Integration
- Uses Contentful as a headless CMS for blog content
- Environment-aware configuration in `api.config.ts` supports localhost, staging, and production domains
- Custom data transformation pipeline: `getEntries` → `extractFields` → `parseArray`
- Rich text content is rendered using `@contentful/rich-text-react-renderer` with custom component mappings

#### State Management & Data Flow
- Simple React state with custom hooks pattern
- `useContentful` hook encapsulates all Contentful API interactions
- Data flows: Contentful API → useContentful hook → App component → RichText component

#### Styling Architecture
- Emotion ThemeProvider at app root provides theme context
- Ant Design components for UI consistency
- Theme configuration centralized in `themes/theme.ts`
- Mix of CSS files and inline styles via Emotion

### Environment Configuration
The app automatically selects Contentful configuration based on the current domain:
- `localhost` - Uses preview environment with preview access token
- `stdominics.infinatech.co.uk` - Production environment
- `saintdominics.org.uk` - Production environment

## Development Notes

### React Compiler
- React Compiler is enabled via Babel plugin in Vite config
- This may impact development and build performance but enables new React optimizations

### TypeScript Configuration
- Uses project references with separate configs for app and Node.js environments
- Main tsconfig.json references both `tsconfig.app.json` and `tsconfig.node.json`

### Content Type Structure
- Primary content type: `blogPost` in Contentful
- Fields expected: `title` and `body` (rich text)
- Rich text supports headings (H1, H2), paragraphs, and unordered lists

### API Helpers
- `extractFields`: Transforms Contentful entries to include sys.id
- `parseArray`: Converts array to object with key-based access
- `first`: Helper to get first item from array
- `extractPicture/extractPictures`: Utilities for image URL extraction (available but not currently used)
