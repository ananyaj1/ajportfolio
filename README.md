# Portfolio Site

personal portfolio website showcasing my journey & work. built in react, typescript, & vite.

live at: https://ananyaj1.github.io/ajportfolio/

The Play gallery displays current Girl Math screenshots from `public/play/screenshots/`.
Visitors can swipe through the pages or open a larger screenshot. The live demo
opens separately at https://girl-math-plum.vercel.app/; the portfolio
does not embed the Girl Math app. Its demo URL lives in `src/features/play/data/gallery.ts`.

## Project organization

The source follows [Bulletproof React's feature-based structure](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md), sized for this portfolio:

```text
src/
├── app/                    Application composition and hash navigation
├── assets/icons/           Shared visual assets
├── components/layout/      Navbar, belt, dot grid, and shared page styles
├── data/                   Project content shared by Work and About
├── features/
│   ├── about/              Career timeline components, data, and types
│   ├── play/               Project presentation, screenshot gallery, and data
│   └── work/               Work project presentation
├── styles/                 Global styles
├── types/                  Shared navigation and project types
└── main.tsx                React entry point
```

Keep feature-specific components and types in their feature. Keep CSS modules
beside their components. Use relative imports within a feature and `@/` imports
for shared modules. Compose features in `src/app`; do not import one feature
from another. ESLint checks these dependency boundaries. Import files directly
without barrel exports, and add new folders only when they contain real code.

## Formatting and validation

[Prettier](https://prettier.io/docs/configuration) formats source, configuration,
and documentation using the repository's `.prettierrc.json`. Dependencies, build output, and artwork are excluded in `.prettierignore`.

- `npm run format` formats the project.
- `npm run format:check` checks formatting without changing files.
- `npm run lint` checks React, TypeScript, and feature import boundaries.
- `npm run build` type-checks and creates the production bundle.
