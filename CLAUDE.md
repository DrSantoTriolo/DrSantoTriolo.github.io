# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website built with Next.js 14 as a static site (SSG), featuring animated particle effects, dark mode support, and visual testing capabilities. Deployed as a static export to GitHub Pages.

## Development Commands

### Core Development
```bash
npm run dev              # Start dev server on port 4005
npm run build            # Production build with static export
npm run start            # Start production server (testing only)
npm run clean            # Remove .next, .swc, and out directories
npm run build-prod       # Clean build (runs clean then build)
```

### Code Quality
```bash
npm run lint             # Run ESLint
npm run format           # Auto-fix ESLint issues and format JSON/YAML
npm run check-types      # TypeScript type checking (no emit)
```

### Visual Testing
```bash
npm run test:visual      # Capture screenshots and generate preview gallery
npm run capture:all      # Capture responsive screenshots across devices/themes
npm run preview:screenshots  # Generate HTML gallery of captured screenshots
```

### Analysis
```bash
npm run build-stats      # Build with bundle analyzer enabled
```

## Architecture

### Static Export Configuration
- Next.js configured for static export (`output: 'export'`)
- Image optimization disabled (`images.unoptimized: true`)
- No server-side features (no API routes, ISR, or SSR)
- Trailing slashes enabled for static hosting compatibility

### Theme System
**Global theme management** via React Context (`src/context/ThemeContext.tsx`):
- Persists theme preference in localStorage
- Applies `dark` class to `document.documentElement` for Tailwind dark mode
- Default theme is dark mode
- Theme state accessible via `useTheme()` hook throughout app

**Implementation pattern**:
```tsx
import { useTheme } from '../context/ThemeContext';

const Component = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  // Use theme state for conditional rendering
};
```

### Particle Background System
**Global animated background** using `@tsparticles/react`:
- Initialized once in `_app.tsx` using `initParticlesEngine` with slim bundle
- Background component (`src/background/Background.tsx`) wraps content with interactive particles
- Theme-aware configuration: particle count, opacity, colors adjust based on dark/light mode
- Interaction modes: hover (bubble effect), click (repulse effect)

### Component Organization
```
src/
├── templates/          # Page-level compositions (Hero, Base, Companies)
├── layout/            # Layout components (Meta, Section)
├── navigation/        # Navigation components (Navbar, ThemeSwitch)
├── background/        # Particle background system
├── hero/              # Hero section components
├── feature/           # Feature row components
├── button/            # Button components
├── cta/               # Call-to-action components
├── context/           # React contexts (ThemeContext)
├── config/            # Configuration files (social-links, AppConfig)
├── components/        # Shared components (DevicePreview)
├── utils/             # Utilities (AppConfig, screenCapture)
└── pages/             # Next.js pages (_app, _document, index)
```

### Page Composition Pattern
- `pages/index.tsx` → `templates/Base.tsx` → `templates/Hero.tsx` + `templates/Companies.tsx`
- Templates compose sections using layout components
- All templates wrapped in `ThemeProvider` at `_app.tsx` level

### Styling Architecture
- **Tailwind CSS** with custom configuration (`tailwind.config.js`)
- **Dark mode**: Class-based strategy (`darkMode: 'class'`)
- **Custom fonts**: Inter (body), Poppins (heading), Space Grotesk (display)
- **CSS custom properties**: Design tokens defined in global.css using `--variable` syntax
- **Theme-aware colors**: Primary, secondary, accent colors with HSL custom properties

### Visual Testing System
**Puppeteer-based screenshot capture** (`scripts/capture-all.js`):
- Captures screenshots across 5 device sizes (mobile, tablet, laptop, desktop, large)
- Tests both light and dark themes
- Generates full-page, hero-section, and viewport screenshots
- Records animated GIFs for theme toggle interactions
- Versioned output in `temp/v{N}/` directories with metadata.json
- Preview gallery generated at `temp/v{N}/gallery.html`

**Device matrix**:
- Mobile: 375×667 (iPhone viewport)
- Tablet: 768×1024 (iPad viewport)
- Laptop: 1366×768
- Desktop: 1440×900
- Large: 1920×1080

## Code Quality Standards

### ESLint Configuration
- Extends Airbnb TypeScript style guide
- Next.js core-web-vitals rules enabled
- Prettier integration for formatting
- Custom rules: unused imports removed, simple import sorting enforced

### Pre-commit Hooks
- Husky configured with lint-staged
- Runs ESLint auto-fix and Prettier on staged files
- Type checking runs after linting (`--concurrent false`)

### Import Conventions
- Use `import type` for type-only imports (enforced by `@typescript-eslint/consistent-type-imports`)
- Simple import sorting applied automatically
- Named exports preferred over default exports

## Project-Specific Patterns

### Adding Social Links
Edit `src/config/social-links.ts` to add/modify social media icons in navbar. Each link requires:
- `href`: URL
- `ariaLabel`: Accessibility label
- `icon`: SVG path data

### Extending Visual Tests
Add new animation scenarios in `scripts/capture-all.js` under `animationScenarios` array. Each scenario requires:
- `name`: Identifier for filenames
- `description`: Human-readable description
- `actions`: Async function performing page interactions

### Theme Toggle Implementation
Theme switching handled by `ThemeContext` - do not implement separate theme state. Use `useTheme()` hook to access theme state and toggle function.

### Static Export Limitations
- No dynamic API routes
- No server-side rendering (SSR)
- No incremental static regeneration (ISR)
- Images must use `unoptimized: true` flag
- All paths must be known at build time
