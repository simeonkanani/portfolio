# Portfolio — Run & Build Instructions

## Prerequisites
- Node.js (recommended >= 18)
- npm (or pnpm / yarn)
- This project uses Vite + React + Tailwind (configs: `tailwind.config.cjs`, `postcss.config.cjs`)

## Quick start

1. Install dependencies
```sh
cd d:\Projects\portfolio
npm install
```

2. Run development server
```sh
npm run dev
```
Open http://localhost:5173 (Vite default).

## Build & preview production
```sh
npm run build
npm run preview
```

## Notes & troubleshooting
- If you encounter dependency issues, try `npm ci` to install exactly what's in package-lock.json.
- If Tailwind styles don't appear, ensure `src/index.css` imports the Tailwind directives:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
  and that `tailwind.config.cjs` lists the correct content paths (`./index.html`, `./src/**/*.{js,jsx,ts,tsx}`).
- To change the dev server port:
  ```sh
  npm run dev -- --port 3000
  ```

## Important files
- `index.html` — app entry loaded by Vite
- `package.json` — scripts & dependencies
- `tailwind.config.cjs` — Tailwind configuration
- `postcss.config.cjs` — PostCSS config
- `src/main.jsx` — React entry that mounts `App`
- `src/App.jsx` — main component
- `src/index.css` — Tailwind imports and global styles

## Recommended environment (Windows)
- Use PowerShell or CMD; examples above assume Windows paths.
- Ensure Node and npm are in PATH.
