# AGENTS.md

## Dev Commands

```bash
npm run dev      # Start dev server (Vite)
npm run build    # Build for production -> dist/
npm run lint     # ESLint check
npm run preview  # Preview production build locally
```

## Build & Deploy

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS with custom colors (see `tailwind.config.js`)
- **Deployment**: Netlify automatic deploys
  - Build command: `npm run build`
  - Publish directory: `dist/`
- No CI/CD config (deploys via Netlify dashboard or git push)

## Project Structure

- `src/main.jsx` — Entry point (renders App into #root)
- `src/App.jsx` — Main component
- `src/components/` — UI components
- `src/index.css` — Global styles + Tailwind imports

## Key Dependencies

- `unicornstudio-react` — Video player component
- `@hackernoon/pixel-icon-library` — Icon library (CSS loaded in main.jsx)

## Fonts

Loaded via Google Fonts in `index.html`:
- **Unbounded** — Headings (400-700)
- **Inter** — Body text (300-600)
- **JetBrains Mono** — Code/mono (400-500)

## Testing

No test suite configured.

## Custom Tailwind Colors

Use these instead of arbitrary values:
- `bg`, `card`, `surface`, `hover`, `border-col`
- `text-primary`, `text-muted`, `text-dim`
- `accent`, `accent-bg`, `cta`
