# Funngro Website Revamp

Premium responsive frontend built with:
- React + Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide Icons

## Installation (Most Important)

### 1. Prerequisites
- Node.js `18+` (recommended: latest LTS)
- npm (comes with Node)
- VS Code (optional, but recommended)

### 2. Clone / Open Project
If already downloaded, open this folder:
`C:\Users\PRENEEL\Downloads\Fungro`

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```

Then open the local URL shown in terminal (usually `http://localhost:5173`).

### Windows Quick Start
You can also run:
`run.bat`

It installs packages (if missing) and starts the dev server.

## Scripts
- `npm run dev` - Start local dev server
- `npm run build` - Create production build in `dist/`
- `npm run preview` - Preview production build locally

## Project Structure
```text
src/
  components/
  pages/
  data/
  App.jsx
  main.jsx
  index.css
```

## Routes
- `/` -> Home Page
- `/company` -> Company/Career Page

## Production Build
```bash
npm run build
```
Output is generated in `dist/`.

## Notes
- Fully responsive for desktop/tablet/mobile
- Uses smooth scroll, section animations, counters, FAQ accordion, and page transitions
- No backend required
