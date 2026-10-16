# Bio-System · Organic Control-Room UI

A modern, responsive React interface prototype with dashboards, analytics, searchable specimens, process topology, and interactive **local-only** controls. The application uses representative sample data; it is **not** real monitoring, a connected device platform, or a production telemetry system.

## Stack and hosting

- React 19 + TypeScript + Vite
- Tailwind CSS compiled locally (no production Tailwind CDN)
- Lucide, Recharts, and Framer Motion
- Cloudflare **Workers Static Assets** (no servers or paid add-ons)
- GitHub Actions CI and continuous deployment to Cloudflare

No Gemini account, API key, database, paid service, or Cloudflare billing upgrade is required to build and serve this **static interface**. Cloudflare's free-tier quotas and GitHub's policies still apply.

## Run locally

Requires Node.js 22+ and npm.

1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000`

For a production build, run `npm run check`. The compiled site is written to `dist/`. To test it, run `npm run preview`.

## Deploy from GitHub (free tier)

1. Create a free Cloudflare account with Workers enabled.
2. Create a **Cloudflare API token scoped to Workers Scripts: Edit** and get your **Account ID** from Cloudflare. Do not commit these values.
3. In GitHub repository **Settings → Secrets and variables → Actions**, add two repository secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
4. Merge to the `master` branch. The workflow verifies TypeScript and the Vite build, then deploys `dist/` using `wrangler.jsonc` to a Workers static-assets site.
5. Find the resulting `*.workers.dev` URL in the GitHub Actions deployment log / Cloudflare dashboard.

Pull requests run validation only, never deploy. Commits to master automatically deploy **when both secrets are present**. If they are missing, verification still runs and deployment is skipped without falsely claiming a live site. You can also run `npm run deploy` locally after `npx wrangler login`.

## Security and architecture

- Cloudflare serves built HTML/CSS/JS directly; no Worker script is invoked for normal static assets.
- **No secrets are injected into client-side code.** Never place tokens inside Vite environment variables prefixed with `VITE_` or in browser bundle files.
- There is no telemetry backend. The dashboard, analytics, and device controls are clearly labeled simulated data. UI preferences persist only in browser localStorage.
- Mobile and desktop layouts, accessible navigation and reduced-motion preferences are supported.
- A real backend can be added later on Workers Free, subject to runtime quotas, without forcing users into a paid dependency.

## CI

`.github/workflows/ci-deploy.yml` runs `npm install`, `npm run check` and uploads the static bundle as an Actions artifact; on master it also deploys with Cloudflare credentials.

## License

No license is included in the original repository; all rights remain with the repository owner.
