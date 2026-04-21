# Selah Studios

A modern web application built with React, TypeScript, and Vite.

## Overview

Selah Studios is a Faith-based platform created to capture and bring to life God's vision for every individual. The project encapsulates the technical details of the webpage components and infrastructure.

## Features

- 🎨 **UI Components** - Built with shadcn/ui and Radix UI
- ⚡ **Fast Performance** - Powered by Vite for rapid development and optimized builds
- 🎯 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🎬 **Smooth Animations** - Framer Motion for delightful interactions
- 📱 **Type-Safe** - Full TypeScript support
- 🔄 **Server State Management** - React Query for efficient data fetching
- 🧪 **Testing Ready** - Playwright and Vitest configured

## Tech Stack

- **Frontend Framework**: React 18+
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Component Library**: shadcn/ui + Radix UI
- **Routing**: React Router
- **State Management**: React Query
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Testing**: Vitest + Playwright
- **Linting**: ESLint
- **Infrastructure**: Terraform

## Getting Started

### Prerequisites
- Node.js 16+ or Bun
- npm, yarn, or bun package manager

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd selahstudios-1
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run test` - Run tests once
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── sections/       # Page sections (Hero, About, Album, etc.)
│   └── ui/            # shadcn/ui components
├── pages/             # Page components
│   ├── Index.tsx      # Home page
│   ├── Album.tsx      # Album page
│   ├── Connect.tsx    # Connect page
│   └── ComingSoon.tsx # Coming soon page
├── hooks/             # Custom React hooks
├── lib/               # Utilities and helpers
│   ├── routes.ts      # Route definitions
│   └── utils.ts       # Utility functions
├── assets/            # Static assets
└── App.tsx           # Root application component
```

## Pages

- **Home** (`/`) - Main landing page with brand summary
- **Album** (`/album`) - Album showcase page
- **Connect** (`/connect`) - Connect/contact page
- **Coming Soon** (`/coming-soon`) - Coming soon page for unreleased features

## Sections

The application includes multiple content sections:
- Hero Section
- About Section
- Album Section
- Podcast Section
- Scripture Section
- Community Section
- Giving Section
- Shop Section
- Footer Section

## Configuration

- **Vite**: See `vite.config.ts`
- **TypeScript**: See `tsconfig.json`
- **Tailwind CSS**: See `tailwind.config.ts`
- **PostCSS**: See `postcss.config.js`
- **ESLint**: See `eslint.config.js`

## Infrastructure

Infrastructure is managed with Terraform. Configuration files are located in the `terraform/` directory:
- `main.tf` - Main infrastructure configuration
- `providers.tf` - Provider configuration
- `variables.tf` - Variable definitions
- `outputs.tf` - Output values

## Testing

Run tests with:
```bash
npm run test        # Run tests once
npm run test:watch  # Run tests in watch mode
```

Playwright configuration is available in `playwright.config.ts` for end-to-end testing.

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is private and proprietary.

## Support

For questions or support, please reach out to the development team.
