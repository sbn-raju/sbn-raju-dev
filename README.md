# ⚡ sbn-raju-dev

> A premium, interactive, terminal-styled developer portfolio showcasing full-stack & backend engineering expertise.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)

**Live Site:** [sbn-raju.github.io/sbn-raju-dev](https://sbn-raju.github.io/sbn-raju-dev/)

---

## ✨ Features

- **📺 3D-Tilt Interactive Terminal:** A realistic interactive-feeling CLI card built with React state-based typing and immersive mouse tilt physics.
- **🎯 Dynamic Custom Cursor:** Tailored interactive cursor tracker that reacts and morphs contextually when hovering over different sections (e.g. `view`, `chat`, `scroll`).
- **🔮 Slick Retro-Modern UI:** Styled with deep terminal themes, customizable neon glow effects, and custom micro-interactions.
- **🚀 Advanced Animations:** Smooth, organic scroll-revelations and spring-based magnetic icons for social anchors.
- **📱 Responsive & Accessible:** Fully mobile-first viewport design ensuring consistency from smartphones to large ultra-wides.

---

## 🛠️ The Tech Stack

- **Core Framework:** [React 18](https://react.dev/) with [Vite](https://vitejs.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Tailwind Animate](https://github.com/jamiebuilds/tailwindcss-animate)
- **UI Components:** [Radix UI primitives](https://www.radix-ui.com/) & [lucide-react](https://lucide.dev/)
- **Data Fetching:** [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

---

## 📂 Project Structure

```text
sbn-raju-dev/
├── src/
│   ├── components/
│   │   ├── portfolio/         # Core portfolio sections (Hero, About, Projects, etc.)
│   │   └── ui/                # Reusable design tokens & primitives (Magnetic, SpotlightCard)
│   ├── hooks/                 # Custom React hooks (e.g., useReveal)
│   ├── pages/                 # Routing page views (Index, NotFound)
│   ├── App.tsx                # Application root with router
│   ├── index.css              # Custom design tokens, scrollbars, & glassmorphism
│   └── main.tsx               # Bootstrap configuration
├── public/                    # Static assets
└── package.json               # Package declarations & deployment actions
```

---

## 🚀 Getting Started

To spin up a local development server in seconds:

### 1. Clone the repository
```bash
git clone https://github.com/sbn-raju/sbn-raju-dev.git
cd sbn-raju-dev
```

### 2. Install dependencies
```bash
# If using npm:
npm install

# If using Bun:
bun install
```

### 3. Start local development server
```bash
# Using npm:
npm run dev

# Using Bun:
bun dev
```

Your server will be running locally at `http://localhost:5173`.

---

## 📦 Building & Deploying

### Production Build
To build a static production bundle into `dist/`:
```bash
npm run build
```

### Deploying to GitHub Pages
The project uses `gh-pages` under the hood. To deploy the master build:
```bash
npm run deploy
```

---

## 🤝 Contact & Socials

Say hi or chat about collaboration:
- **Developer:** SBN Raju
- **Email:** [simhardgaraju@gmail.com](mailto:simhardgaraju@gmail.com)
- **LinkedIn:** [linkedin.com/in/sbnraju](https://www.linkedin.com/in/sbnraju/)
- **GitHub:** [github.com/sbn-raju](https://github.com/sbn-raju)
