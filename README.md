# IBS Clinic — Landing Page

Paid-traffic landing page for IBS Clinic, hosted at `consultation.ibsclinic.com`. Next.js 16 (App Router) + Tailwind + Resend on Vercel. WordPress (`ibsclinic.com`) stays untouched — this app lives on a subdomain.

## What this app does

- Renders a fast, conversion-optimised single-page LP for cold Google Ads traffic.
- Captures leads via a validated React Hook Form + Zod form.
- Server route `/api/lead`:
  - Validates server-side (same Zod schema).
  - Honeypots bot submissions.
  - Rate-limits per IP.
  - Sends a clinic notification email via Resend.
  - Appends the lead to a Google Sheet (backup) via Apps Script webhook.
  - Returns `{ ok: true }`; client redirects to `/thanks`.
- `/thanks` fires Google Ads conversion (when configured) and offers call/WhatsApp/calendar tiles.

## Local development

```sh
npm install
cp .env.local.example .env.local
# fill in real values for RESEND_API_KEY, GOOGLE_SHEETS_WEBHOOK_URL, etc.
npm run dev
```

Open http://localhost:3000.

## Required env vars

See `.env.local.example` for the full list. Critical ones:

| Var | Required? | Notes |
|---|---|---|
| `RESEND_API_KEY` | yes | New key — never reuse a leaked one |
| `RESEND_FROM` | yes | `IBS Clinic <consultation@mail.ibsclinic.com>` once domain is verified |
| `CLINIC_NOTIFY_EMAIL` | yes | `info@ibsclinic.com` |
| `GOOGLE_SHEETS_WEBHOOK_URL` | recommended | Apps Script Web App URL |
| `NEXT_PUBLIC_GTM_CONTAINER_ID` | for paid traffic | GTM container |
| `NEXT_PUBLIC_GA4_ID` | for paid traffic | GA4 measurement ID |
| `NEXT_PUBLIC_ADS_CONVERSION_ID` | for paid traffic | Google Ads conversion ID |
| `NEXT_PUBLIC_ADS_CONVERSION_LABEL` | for paid traffic | Google Ads conversion label |

## Deploy (one-time setup)

### 1. GitHub (public, personal account)

```sh
cd landing-page
git init
git add .
git commit -m "feat: initial landing page scaffold"

# create the repo via GitHub UI or gh CLI:
gh repo create ibsclinic-landing --public --source=. --push
```

### 2. Resend domain

- Resend dashboard → **Domains** → Add domain → `mail.ibsclinic.com`.
- Resend gives you 3 DNS records (SPF, DKIM, MX).
- In **Hostinger hPanel → Domains → DNS Zone Editor**, add those records.
- Verify in Resend (5–60 min).
- Generate a NEW API key.

### 3. Google Sheet

Follow the setup notes at the top of `scripts/google-sheets-apps-script.js`. Get the Web App URL.

### 4. Vercel

- Import the GitHub repo as a new Vercel project.
- Framework auto-detected as Next.js. Default build/install commands.
- **Settings → Environment Variables**: add every var from `.env.local.example` with real values. Apply to Production + Preview + Development.
- Deploy. Get a `*.vercel.app` URL. Test the form end-to-end.

### 5. Custom domain

- Vercel → **Settings → Domains** → add `consultation.ibsclinic.com`.
- Vercel shows a CNAME target (typically `cname.vercel-dns.com`).
- In **Hostinger DNS Zone Editor**, add CNAME:
  ```
  Type: CNAME
  Name: consultation
  Target: cname.vercel-dns.com.
  TTL: 300
  ```
- Vercel auto-issues SSL in 1–10 min.

### 6. Tracking

- Set up GTM container, install GA4 + Google Ads conversion tags.
- Verify the `lead_form_submit` event fires from `/thanks`.

### 7. Launch

- Set Google Ads Final URL to `https://consultation.ibsclinic.com/`.
- Run a real test lead. Confirm:
  - Email lands in `info@ibsclinic.com`
  - Row appears in the Google Sheet
  - GA4 conversion event fires
- Start the campaign.

## Architecture at a glance

```
Google Ads → consultation.ibsclinic.com (Vercel / Next.js)
              ├─ /         (the LP)
              ├─ /api/lead (POST: validate → email → sheets → 200)
              └─ /thanks   (conversion fire)
                    │
                    ├─ Resend → info@ibsclinic.com (clinic)
                    └─ Apps Script → Google Sheet (backup)
```

## Performance targets (Indian 4G mobile)

| Metric | Target |
|---|---|
| LCP | <1.5s |
| INP | <100ms |
| CLS | <0.05 |
| Total JS shipped | <120kb gzipped |
| Lighthouse Mobile | ≥90 across all four categories |

## Compliance

- DPDP Act 2023 — privacy notice + consent + grievance officer (`/privacy`).
- ASCI — outcome claims at-or-below ceilings (80–90%, ~90 days, 70%+).
- Telemedicine Practice Guidelines 2020 — `/medical-disclaimer`.
- Drugs and Magic Remedies Act 1954 — no cure/miracle/magic claims.
- Google Ads Healthcare policy — LP claim parity with ad copy.

See `../IBS-EEAT-Checklist.md` (campaign root) for the full compliance gate.

## Content & voice

This app is a code skeleton. Voice and copy follow:

- `../IBS-Brand-Moodboard.md` — palette, fonts, tone, photography brief
- `../IBS-Landing-Page-Content.md` — production copy (already wired into `app/page.tsx`)
- `../ibsclinic-writer/` — writer skill (Ananya Reddy)
- `../ibsclinic-editor/` — editor skill (Neha Sharma)

Any copy change must pass the editor skill's 6-phase review.

## Security notes (read this)

- **Secrets only in Vercel env vars and `.env.local`**. Never in source. The `.gitignore` excludes `.env*.local`.
- **No PII in logs**. The route handler uses `console.error` only for failure paths and never logs the form payload.
- **Rate-limited** per IP (5 req / 15 min). Replace the in-memory limiter with Vercel KV before high-traffic launch.
- **Honeypot** field invisible to humans, mandatory empty. Bots that fill it get a silent 200.
- **Resend API key from `prompt.txt` was rotated** — never re-use exposed keys.

## File map

```
landing-page/
├── README.md                           ← this file
├── package.json
├── tsconfig.json
├── tailwind.config.ts                  ← brand tokens
├── postcss.config.mjs
├── next.config.ts                      ← security headers
├── .env.local.example
├── .gitignore
├── app/
│   ├── layout.tsx                       ← fonts, GTM, schema
│   ├── globals.css                      ← Tailwind + brand classes
│   ├── page.tsx                         ← the LP (all sections)
│   ├── thanks/page.tsx                  ← post-submit
│   ├── privacy/page.tsx                 ← DPDP-compliant draft
│   ├── terms/page.tsx
│   ├── medical-disclaimer/page.tsx
│   └── api/lead/route.ts                ← form handler
├── components/
│   ├── lead-form.tsx                    ← RHF + Zod, client component
│   └── floating-cta.tsx                 ← mobile sticky bar
├── lib/
│   ├── schema.ts                        ← Zod (single source of truth)
│   ├── resend.ts                        ← email client + templates
│   ├── sheets.ts                        ← Apps Script POST
│   └── utils.ts                         ← cn() + rate limit
├── scripts/
│   └── google-sheets-apps-script.js     ← paste into Apps Script
└── public/
    └── README.md                        ← what assets to drop in
```

## Next iterations (after v1 launches)

- Replace placeholder hero + doctor portraits with real photography.
- Move rate-limiter to Vercel KV.
- Add Cloudflare Turnstile if spam climbs.
- Add A/B variant of H1 + CTA via Vercel Edge Config (when traffic justifies).
- Build out paid blog cluster pages following the writer skill's content templates.
