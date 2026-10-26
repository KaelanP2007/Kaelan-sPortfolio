# Kaelan Patterson — portfolio

A static portfolio with a 3D cartoon-avatar entrance, five topic pages, six project case studies and a resume download. Includes original experience and projects alongside newer work. Dark mode is the first-visit default; the theme toggle remembers explicit choices.

## Publish with GitHub Pages

1. Extract the GitHub upload ZIP.
2. Open `KaelanP2007/Kaelan-sPortfolio` on GitHub and select **Add file → Upload files**.
3. Drag the contents of the extracted `Kaelan-sPortfolio` folder into the upload area. Upload its contents, not the ZIP or outer folder. `index.html`, `assets/` and `work/` must sit at the repository root.
4. Propose the upload on a new branch such as `portfolio-redesign`, then open a pull request to `main`.
5. Review and merge when ready to replace the live site.
6. In **Settings → Pages**, use **Deploy from a branch**, `main`, `/(root)` and save. If these are already the publishing settings, keep them.
7. Wait for the Pages deployment to finish in Actions, then open https://kaelanp2007.github.io/Kaelan-sPortfolio/.

The compiled HTML is included. No npm install or hosting build command is required to publish it.

## Local editing

Requires Node.js 22+ for generating pages. There are no npm dependencies.

```sh
npm run build
npm test
npm run preview
```

The preview command uses Python 3 and serves http://localhost:4173.

| Content | Source |
| --- | --- |
| Avatar menu | `src/entrance.mjs` |
| Avatar image and hand layers | `assets/kaelan-avatar-3d.png`, `src/avatar.mjs` |
| Project case studies | `src/projects.mjs` |
| Experience and skills | `src/profile.mjs` |
| Topic page layouts and content | `src/topic-pages.mjs` |
| Shared header/footer and generated pages | `scripts/build.mjs` |
| Appearance | `assets/style.css`, `assets/motion.css`, `assets/entrance.css`, `assets/topics.css` |
| Dark default and saved theme | `assets/theme.js` |
| Wave replay | `assets/entrance.js` |
| Resume | `assets/kaelan-patterson-resume.pdf` |

After editing sources, run `npm run build` and commit the generated HTML with the source changes. `node scripts/export-preview.mjs` creates a separate standalone offline review file in the sibling `downloads` directory; use the normal HTML pages for GitHub Pages.

System reduced-motion preferences are supported. Automatic motion respects that preference; the brief wave can be explicitly replayed using the Wave again button. No global Pause motion button is shown.

Design began with the Astro Starter visual direction and developed into a custom static implementation. The reference template's MIT notice is in `docs/ASTRO-STARTER-LICENSE.txt`.
