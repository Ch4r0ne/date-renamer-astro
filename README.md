# Date Renamer Website
Landingpage für den **Date Renamer**

## Highlights

- **Startseite** mit klaren Value-Statements und Story-Bereich.
- **Modernes Astro + React Setup** mit Tailwind CSS und Framer Motion.

## Tech Stack

- **Framework:** Astro 5
- **UI:** React
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React

## Lokales Setup

> Voraussetzung: Node.js (LTS) + pnpm

```bash
pnpm install
```

### Dev Server

```bash
pnpm run dev
```

Standardmäßig unter `http://localhost:4321`.

### Build

```bash
pnpm run build
```

## Projektstruktur

```
src/
  components/   # React Komponenten (HomePage, etc.)
  layouts/      # Layout, globale Styles, SEO
  pages/        # Astro Routes
public/
  img/          # Branding Assets (Icons, Preview)
```

## Anpassungen

- **Texte & Layout:** `src/components/HomePage.tsx`
- **Theme-Farben:** `src/layouts/Layout.astro` (CSS Custom Properties)
- **Assets:** `public/img/`

## Lizenz

[MIT](LICENSE)
