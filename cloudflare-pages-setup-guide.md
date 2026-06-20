# Cloudflare Pages Setup Guide For Jaihden's Website

This guide documents the recommended Cloudflare Pages setup for Jaihden Torres' personal creator and brand hub.

Sources checked:

- [Cloudflare Pages Git integration](https://developers.cloudflare.com/pages/get-started/git-integration/)
- [Cloudflare Pages build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/)
- [Cloudflare Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Cloudflare Pages redirects](https://developers.cloudflare.com/pages/configuration/redirects/)
- [Cloudflare Pages docs index](https://developers.cloudflare.com/pages/llms.txt)

## Recommended Deployment Approach

Use **Cloudflare Pages with GitHub integration**.

Why:

- Every push to `main` can automatically deploy production.
- Pull requests and branches can get preview deployments.
- It is low-maintenance after initial setup.
- It is a good fit for a mostly static creator and brand site.
- It avoids manually managing servers, SSL certificates, CDN, or hosting infrastructure.

Important Cloudflare note: if a Pages project is created using Git integration, Cloudflare says that same project cannot later be switched to Direct Upload. You can disable automatic deployments and use Wrangler manually, but the project remains Git-integrated.

## What You Need Before Starting

1. A Cloudflare account.
2. A GitHub repository for the website.
3. At least one branch pushed to GitHub, usually `main`.
4. A working local build command.
5. Optional: a custom domain, such as `jaihdentorres.com`, `jaihdentorres.co`, or a subdomain.

## Recommended Project Settings

If the site is built with Astro, use:

| Setting | Value |
| --- | --- |
| Framework preset | `Astro` |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | Leave blank unless the app is inside a subfolder |
| Environment variables | Only add if needed |

Cloudflare's build configuration docs list Astro as `npm run build` with output directory `dist`.

If the site is built with Vite/React instead:

| Setting | Value |
| --- | --- |
| Framework preset | `React (Vite)` |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |

If the site is plain static HTML:

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Build command | Leave blank |
| Build output directory | Folder containing static files, often `/` or `public` depending on repo structure |

## Step-By-Step Setup

### 1. Push The Website Repo To GitHub

The repo should contain:

- `package.json`
- Source files
- Public assets
- Build configuration
- A lockfile, usually `package-lock.json`, `pnpm-lock.yaml`, or `yarn.lock`

Before connecting Cloudflare, confirm the build locally:

```bash
npm install
npm run build
```

The build should finish successfully and produce a `dist` folder if using Astro or Vite.

### 2. Create A Cloudflare Pages Project

In Cloudflare:

1. Go to **Workers & Pages**.
2. Select **Create application**.
3. Choose **Pages**.
4. Select **Connect to Git**.
5. Sign in with GitHub.
6. Authorize Cloudflare Pages to access the repo.
7. Select the website repository.
8. Click **Begin setup**.

Cloudflare supports GitHub and GitLab for Pages Git integration.

### 3. Configure Build And Deployment

Recommended Astro configuration:

```txt
Project name: jaihden-torres
Production branch: main
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Root directory: blank
```

The project name controls the temporary Pages URL:

```txt
https://jaihden-torres.pages.dev
```

If the repo becomes a monorepo later, set the root directory to the site folder, for example:

```txt
apps/website
```

For this project, avoid a monorepo unless there is a clear need.

### 4. Add Environment Variables If Needed

For a simple static site, environment variables may not be needed.

Possible future variables:

```txt
PUBLIC_SITE_URL=https://jaihdentorres.com
PUBLIC_INSTAGRAM_URL=https://www.instagram.com/jaihdentorres/
PUBLIC_UOFPUMP_URL=https://uofpump.com/
FORMSPREE_ENDPOINT=...
CALENDLY_URL=...
```

Rule of thumb:

- Variables prefixed with `PUBLIC_` are usually safe to expose to browser code.
- Private API keys should never be exposed client-side.
- If forms require secrets, use a third-party form service or a serverless function.

### 5. First Deploy

Click **Save and Deploy**.

Cloudflare will:

1. Clone the repo.
2. Install dependencies.
3. Run the build command.
4. Upload the output folder.
5. Give you a `*.pages.dev` URL.

After deploy, test:

- Homepage loads.
- Images load.
- Links work.
- Mobile layout works.
- No broken console errors appear.
- Contact and booking CTAs go to the right destination.

### 6. Preview Deployments

Cloudflare Pages can create preview deployments for non-production branches.

Recommended workflow:

- `main` is production.
- Feature branches get preview URLs.
- Pull requests are reviewable before they merge into production.

This is useful because Jaihden can review previews before anything goes live.

### 7. Add A Custom Domain

In the Pages project:

1. Go to **Custom domains**.
2. Select **Set up a domain**.
3. Enter the domain, for example:

```txt
jaihdentorres.com
```

For an apex/root domain like `jaihdentorres.com`, Cloudflare says the domain needs to be added as a Cloudflare zone and nameservers should point to Cloudflare.

For a subdomain like:

```txt
www.jaihdentorres.com
```

or:

```txt
jaihden.example.com
```

you can add a CNAME pointing to:

```txt
<YOUR_SITE>.pages.dev
```

Cloudflare warns that the custom domain should be added through the Pages dashboard. Manually adding only the CNAME without associating the domain in Pages can cause resolution errors.

### 8. Recommended Domain Setup

Use both:

```txt
jaihdentorres.com
www.jaihdentorres.com
```

Pick one canonical version. Recommended canonical domain:

```txt
https://jaihdentorres.com
```

Then redirect:

```txt
https://www.jaihdentorres.com -> https://jaihdentorres.com
```

Also redirect the `*.pages.dev` URL to the custom domain once the custom domain is live.

### 9. Redirects

Cloudflare Pages supports a `_redirects` file in the static assets directory.

For Astro, place it in:

```txt
public/_redirects
```

Example:

```txt
/www https://jaihdentorres.com 301
/instagram https://www.instagram.com/jaihdentorres/ 302
/uofpump https://uofpump.com/ 302
/shop https://uofpump.com/collections/trademark-tee 302
```

Useful creator-site redirects:

- `/ig`
- `/instagram`
- `/shop`
- `/coaching`
- `/youtube`
- `/contact`

These make links easy to say in videos and captions.

### 10. Analytics

Recommended:

- Enable **Cloudflare Web Analytics**.
- Track CTA clicks separately if possible:
  - `Start Coaching`
  - `Shop UofPump`
  - `Instagram`
  - `YouTube`
  - `Book Call`
  - `Contact`

If more detailed event tracking is needed later, add Plausible, PostHog, Google Analytics, or another analytics provider. For a low-maintenance creator site, Cloudflare Web Analytics is enough for v1.

### 11. Forms

Cloudflare Pages can host the frontend, but forms need a backend or third-party service.

Recommended options:

- **Formspree**: easiest for contact and collaboration forms.
- **Tally**: good if Jaihden wants easy form editing.
- **Calendly**: best for booking calls.
- **Cloudflare Pages Functions**: more control, but more code and maintenance.

For v1, recommended form approach:

- Coaching CTA goes to Instagram DM or Calendly.
- Collaboration/contact form uses Formspree or Tally.
- No custom backend unless there is a clear need.

## Deployment Checklist

Before launch:

- `npm run build` passes locally.
- Cloudflare build passes.
- Production URL works.
- Custom domain works.
- `www` redirects correctly.
- Social preview image works.
- Favicon works.
- Instagram, UofPump, and YouTube links work.
- Contact form or booking flow works.
- Mobile layout is tested.
- Cloudflare Web Analytics is enabled.
- Old or short links redirect correctly.

## Recommended V1 Setup

Use:

```txt
Host: Cloudflare Pages
Repo: GitHub
Framework: Astro
Build command: npm run build
Output directory: dist
Production branch: main
Forms: Formspree, Tally, or Calendly
Shop: External link to UofPump
Analytics: Cloudflare Web Analytics
```

This keeps the site fast, cheap, easy to maintain, and self-sufficient.
