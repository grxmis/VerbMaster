# VerbMaster - English Verb Conjugation Web App

## Overview

VerbMaster is an interactive web application designed to help users learn and master English verb conjugations. The app allows users to search for any English verb and instantly view its conjugations across all major tenses (present simple, present continuous, past simple, past continuous, future, present perfect, and past perfect). The application features a playful, educational design inspired by modern language learning platforms like Duolingo and Memrise, with a focus on clarity and user engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast hot module replacement
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **TanStack Query (React Query)** for server state management and API data fetching

**UI Component Library**
- **shadcn/ui** components built on top of Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **class-variance-authority (CVA)** for type-safe component variants
- Custom color system using CSS variables for consistent theming

**Design System**
- Typography: DM Sans/Inter for interface, Fredoka/Outfit for playful headings
- Spacing system based on Tailwind units (2, 4, 6, 8, 12)
- Card-based modular layout with responsive grid (1/2/3 columns)
- Playful, educational aesthetic with emphasis on micro-interactions

**State Management Strategy**
- Server state managed by TanStack Query with stale-while-revalidate pattern
- Local UI state managed with React hooks (useState, useEffect)
- No global state management library needed due to simple application scope

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with TypeScript
- RESTful API design pattern
- Custom middleware for request logging and JSON parsing

**API Structure**
- `GET /api/conjugate/:verb` - Returns complete conjugation data for a given verb
- Simple validation: verbs must contain only letters
- Error handling with appropriate HTTP status codes (400 for bad requests, 500 for server errors)

**Conjugation Engine**
- Custom algorithmic conjugation system in `server/conjugation.ts`
- Hardcoded irregular verb dictionary for common exceptions (be, have, do, go, make, take, etc.)
- Rule-based regular verb conjugation following standard English grammar patterns
- Returns structured data for all tenses with subject-specific forms (I, you, he/she/it, we, they)

**Type Safety**
- Shared TypeScript types between client and server via `shared/schema.ts`
- Zod schemas for runtime validation and type inference
- Path aliases configured for clean imports (@, @shared)

### Data Storage

**Current Implementation**
- In-memory storage implementation (`MemStorage`) for user data
- No database currently used for verb conjugations (algorithmic generation)
- User storage interface defined for future database integration

**Database Configuration (Prepared)**
- **Drizzle ORM** configured with PostgreSQL dialect
- **Neon Database** serverless PostgreSQL driver included
- Schema defined in `shared/schema.ts`, migrations output to `./migrations`
- Connection string expected via `DATABASE_URL` environment variable

**Storage Interface Design**
- Abstract `IStorage` interface allows swapping storage implementations
- Current methods: `getUser`, `getUserByUsername`, `createUser`
- Designed for easy migration from in-memory to database-backed storage

### External Dependencies

**UI Component Libraries**
- **Radix UI**: Unstyled, accessible component primitives (accordion, dialog, dropdown, popover, select, tabs, toast, tooltip, etc.)
- **cmdk**: Command menu interface component
- **embla-carousel-react**: Touch-friendly carousel component
- **react-day-picker**: Calendar/date picker component
- **vaul**: Drawer component for mobile interfaces

**Form Management**
- **react-hook-form**: Performant form state management
- **@hookform/resolvers**: Form validation resolver for Zod schemas

**Styling & Utilities**
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **clsx** & **tailwind-merge**: Conditional class name utilities
- **Autoprefixer**: CSS vendor prefixing via PostCSS

**Development Tools (Replit-specific)**
- **@replit/vite-plugin-runtime-error-modal**: Error overlay during development
- **@replit/vite-plugin-cartographer**: Project structure visualization
- **@replit/vite-plugin-dev-banner**: Development environment indicator

**Build & Development**
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast bundling for production server build
- **TypeScript**: Type checking across entire codebase

**Session Management (Configured but Unused)**
- **connect-pg-simple**: PostgreSQL session store for Express
- Prepared for future authentication implementation

**Utility Libraries**
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **lucide-react**: Icon library