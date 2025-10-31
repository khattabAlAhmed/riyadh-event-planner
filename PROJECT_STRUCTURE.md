# Riyadh Event Planner - Project Structure & Stack

## 📋 Project Overview

**Riyadh Event Planner** is a modern web application built with Next.js 16, featuring internationalization (i18n), authentication, and a PostgreSQL database. The project supports both English and Arabic languages with RTL support.

## 🛠️ Technology Stack

### Core Framework
- **Next.js 16.0.0** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type-safe JavaScript

### Internationalization
- **next-intl 4.4.0** - Internationalization library for Next.js
  - Supports English (`en`) and Arabic (`ar`) locales
  - RTL (Right-to-Left) support for Arabic
  - Message files stored in `/messages` directory

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Component library (New York style)
- **Radix UI** - Headless UI components
  - `@radix-ui/react-label`
  - `@radix-ui/react-separator`
  - `@radix-ui/react-slot`
- **lucide-react** - Icon library
- **next-themes** - Theme management (dark/light mode)
- **class-variance-authority** - Component variant management
- **clsx** & **tailwind-merge** - Conditional class utilities

### Forms & Validation
- **react-hook-form 7.65.0** - Form state management
- **@hookform/resolvers** - Form validation resolvers
- **zod 4.1.12** - Schema validation
- **yup 1.7.1** - Alternative validation library

### Authentication
- **better-auth 1.3.29** - Authentication solution
  - Email/Password authentication
  - Google OAuth provider
  - Session management
  - Cookie-based sessions

### Database & ORM
- **PostgreSQL** - Relational database (via Neon serverless)
- **Drizzle ORM 0.44.7** - TypeScript ORM
- **@neondatabase/serverless 1.0.2** - Neon database driver
- **drizzle-kit 0.31.5** - Database migrations and tooling

### Utilities
- **sonner 2.0.7** - Toast notifications
- **dotenv** - Environment variable management

### Development Tools
- **ESLint 9** - Code linting
- **eslint-config-next** - Next.js ESLint configuration
- **tsx** - TypeScript execution
- **tw-animate-css** - Tailwind animations

## 📁 Project Structure

```
riyadh-event-planner/
├── messages/                  # Internationalization files
│   ├── ar.json               # Arabic translations
│   └── en.json               # English translations
│
├── public/                    # Static assets
│   └── assets/
│       └── images/
│
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── [locale]/         # Locale-based routing
│   │   │   ├── (auth)/       # Authentication routes (grouped)
│   │   │   │   ├── sign-in/
│   │   │   │   ├── sign-up/
│   │   │   │   ├── forgot-password/
│   │   │   │   ├── reset-password/
│   │   │   │   └── confirm/
│   │   │   ├── dashboard/    # Dashboard page
│   │   │   ├── layout.tsx    # Root layout with i18n setup
│   │   │   ├── page.tsx      # Home page
│   │   │   └── globals.css   # Global styles
│   │   └── api/              # API routes
│   │       └── auth/
│   │           └── [...all]/ # Better Auth catch-all route
│   │               └── route.ts
│   │
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── field.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── separator.tsx
│   │   │   └── sonner.tsx    # Toast notifications
│   │   ├── sections/         # Page sections
│   │   ├── LanguageSwitch.tsx # Language switcher component
│   │   ├── login-form.tsx    # Login form component
│   │   ├── logout.tsx        # Logout component
│   │   ├── mode-toggler.tsx  # Theme toggle component
│   │   ├── signup-form.tsx   # Signup form component
│   │   └── theme-provider.tsx # Theme context provider
│   │
│   ├── hooks/                # Custom React hooks
│   │
│   ├── i18n/                 # Internationalization configuration
│   │   ├── navigation.ts     # Navigation utilities
│   │   ├── request.ts        # Request utilities
│   │   └── routing.ts        # Routing configuration
│   │
│   ├── lib/                   # Utility libraries
│   │   ├── db/               # Database configuration
│   │   │   ├── drizzle.ts    # Drizzle ORM instance
│   │   │   ├── migrations/   # Database migrations
│   │   │   └── schema/       # Database schemas
│   │   │       ├── auth-schema.ts  # Authentication tables
│   │   │       └── index.ts       # Schema exports
│   │   ├── auth.ts           # Better Auth server configuration
│   │   ├── auth-client.ts    # Better Auth client configuration
│   │   └── utils.ts          # Utility functions
│   │
│   └── server/                # Server-side utilities
│       └── users.ts          # User-related server functions
│
├── components.json            # shadcn/ui configuration
├── drizzle.config.ts          # Drizzle Kit configuration
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts             # Next.js configuration
├── postcss.config.mjs         # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🗄️ Database Schema

The project uses Drizzle ORM with PostgreSQL. The authentication schema includes:

### Tables:
1. **user** - User accounts
   - `id` (text, primary key)
   - `name` (text)
   - `email` (text, unique)
   - `emailVerified` (boolean)
   - `image` (text, optional)
   - `createdAt`, `updatedAt` (timestamps)

2. **session** - User sessions
   - `id` (text, primary key)
   - `token` (text, unique)
   - `expiresAt` (timestamp)
   - `userId` (foreign key to user)
   - `ipAddress`, `userAgent` (optional)

3. **account** - OAuth accounts
   - `id` (text, primary key)
   - `accountId`, `providerId` (text)
   - `userId` (foreign key to user)
   - `accessToken`, `refreshToken`, `idToken` (optional)
   - Token expiration timestamps

4. **verification** - Email verification tokens
   - `id` (text, primary key)
   - `identifier`, `value` (text)
   - `expiresAt` (timestamp)

## 🌐 Internationalization

- **Supported Locales**: English (`en`), Arabic (`ar`)
- **Default Locale**: English
- **RTL Support**: Automatic RTL layout for Arabic (`dir="rtl"`)
- **Fonts**: 
  - IBM Plex Sans (Latin)
  - IBM Plex Sans Arabic (Arabic)

## 🔐 Authentication Features

- Email/Password authentication
- Google OAuth integration
- Session management with cookies
- Password reset flow
- Email verification
- Protected routes support

## 🎨 UI/UX Features

- Dark/Light theme support
- Responsive design
- Toast notifications (Sonner)
- Form validation
- Accessible components (Radix UI)

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:generate  # Generate database migrations
npm run db:migrate   # Run database migrations
npm run db:push      # Push schema changes to database
npm run db:studio    # Open Drizzle Studio (DB GUI)
```

## 🔧 Configuration Files

### Next.js (`next.config.ts`)
- Configured with `next-intl` plugin for internationalization

### TypeScript (`tsconfig.json`)
- Path aliases: `@/*` → `./src/*`
- Strict mode enabled
- JSX: react-jsx

### Drizzle (`drizzle.config.ts`)
- PostgreSQL dialect
- Schema location: `./src/lib/db/schema`
- Migrations output: `./src/lib/db/migrations`

### shadcn/ui (`components.json`)
- Style: New York
- RSC (React Server Components) enabled
- Base color: Neutral
- CSS variables enabled
- Icon library: Lucide

## 🌍 Environment Variables

Required environment variables:
- `DATABASE_URL` - PostgreSQL connection string
- `GOOGLE_CLIENT_ID` - Google OAuth client ID
- `GOOGLE_CLIENT_SECRET` - Google OAuth client secret
- `NODE_ENV` - Environment (development/production)

## 🚀 Deployment Considerations

- Uses Next.js App Router (requires Node.js 18+)
- Serverless-friendly (Neon database)
- Environment-based configuration
- Production base URL configuration in auth setup

## 📦 Key Dependencies Summary

**Framework & Core:**
- Next.js 16, React 19, TypeScript 5

**UI & Styling:**
- Tailwind CSS 4, shadcn/ui, Radix UI, Lucide Icons

**Internationalization:**
- next-intl

**Database:**
- Drizzle ORM, PostgreSQL (Neon)

**Authentication:**
- better-auth

**Forms:**
- react-hook-form, zod, yup

**Utilities:**
- next-themes, sonner, clsx, tailwind-merge

---

*Last updated: Based on current project structure*

