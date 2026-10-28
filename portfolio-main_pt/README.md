# Lucas Palma — Portfolio

Bilingual (EN/PT) personal portfolio for a Salesforce Administrator / Data Analyst profile.
Built with Express and EJS, deployed on Vercel.

## Features
- English and Portuguese with a header toggle (`?lang=`, cookie, then `Accept-Language`)
- Light and dark themes (follows the system, with a manual toggle)
- Audio avatar on the home page: a ~35 s self-introduction (EN/PT) in my own cloned ElevenLabs voice, with a transcript (`public/audio/`)
- Content in `data/content.js` and UI strings in `locales/*.json`, so views contain no hard-coded copy
- No third-party scripts or styles: strict Content-Security-Policy via `helmet`
- Content stays visible without JavaScript; scroll animations respect `prefers-reduced-motion`
- Route tests with Supertest, ESLint and Lighthouse CI on GitHub Actions

## Getting started
Requires Node 22+.

```bash
npm install
npm run dev     # http://localhost:3000 with nodemon
npm test        # route tests
npm run lint
```

## Configuration
| Variable | Purpose |
| --- | --- |
| `PORT` | Local port (default `3000`) |
| `SITE_URL` | Public URL, used for canonical and `hreflang` tags |
| `CONTACT_EMAIL` | Shows the email button/link when set |

Drop a `public/downloads/resume.pdf` to show the résumé button automatically.

## Structure
```
app.js              Vercel entry point (exports the Express app)
src/server.js       App, routes, security headers
src/i18n.js         Language detection and t()/loc() helpers
data/content.js     Experience, skills, projects, education (EN/PT)
locales/            UI strings
views/              EJS pages and partials
public/             CSS, JS, images, downloads
test/               Supertest route tests
```

## Deployment
Vercel (Root Directory `portfolio-main_pt`) detects the Express app through `app.js`, which exports the app from `src/server.js`.
Set `SITE_URL` and `CONTACT_EMAIL` in the Vercel project settings.
