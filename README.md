# IBS Clinic — Landing Page

Paid-traffic landing page for IBS Clinic, hosted at `consultation.ibsclinic.com`. Next.js 16 (App Router) + Tailwind on Vercel. WordPress (`ibsclinic.com`) stays untouched — this app lives on a subdomain.

## What this app does

- Renders a fast, conversion-optimised single-page LP for cold Google Ads traffic.
- Captures leads via validated React Hook Form + Zod forms that **POST straight from the browser** — no server route. This keeps the exact same flow working after the WordPress/Hostinger migration.
  - **Short `LeadForm`** (site-wide): dual-sink → **formsubmit.co** (clinic alert email) **+** **Apps Script webhook** (Google Sheet row, CSV-exportable). The Sheet write is fire-and-forget, so a Sheet hiccup never blocks the lead.
  - **Long `PatientIntakeForm`** (`/contact` only): **email only** via formsubmit.co (no Sheet).
  - Both honeypot bot submissions, validate with Zod client-side, and redirect to `/thanks` on success.
- `/thanks` fires Google Ads conversion (when configured) and offers call/WhatsApp/calendar tiles.

## Local development

```sh
npm install
cp .env.local.example .env.local
# fill in NEXT_PUBLIC_FORMSUBMIT_ENDPOINT and NEXT_PUBLIC_LEAD_SHEET_WEBHOOK_URL
npm run dev
```

Open http://localhost:3000.

## Required env vars

See `.env.local.example` for the full list. Critical ones:

| Var | Required? | Notes |
|---|---|---|
| `NEXT_PUBLIC_FORMSUBMIT_ENDPOINT` | yes | formsubmit.co id — hashed token (hides email) or `info@ibsclinic.com`. Both forms |
| `NEXT_PUBLIC_LEAD_SHEET_WEBHOOK_URL` | recommended | Apps Script Web App `/exec` URL — short LeadForm → Sheet |
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

### 2. formsubmit.co activation

- Set `NEXT_PUBLIC_FORMSUBMIT_ENDPOINT=info@ibsclinic.com` (or a hashed token to hide the email).
- The **first** real submission triggers a one-time confirmation email to that address — click the link once to enable delivery. Until clicked, no alert emails arrive.
- Optional hardening: after activation, switch the endpoint to the hashed token formsubmit shows you. Flip `_captcha` to `"true"` in the form payloads (or add Turnstile) only if spam appears.

### 3. Google Sheet

Follow the setup notes at the top of `../tools/lead-capture/leads-to-sheet.gs` (deploy as a Web App). Copy the `/exec` URL into `NEXT_PUBLIC_LEAD_SHEET_WEBHOOK_URL`. Only the short LeadForm writes here.

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
  - Alert email lands in `info@ibsclinic.com` (short form and long form both email)
  - Row appears in the Google Sheet (short form only — the long intake form is email-only)
  - GA4 conversion event fires
- Start the campaign.

## Architecture at a glance

```
Google Ads → consultation.ibsclinic.com (Vercel / Next.js)
              ├─ /         (the LP — LeadForm site-wide)
              ├─ /contact  (PatientIntakeForm)
              └─ /thanks   (conversion fire)

  LeadForm (browser) ─┬─► formsubmit.co ───► info@ibsclinic.com (alert email)
                      └─► Apps Script ─────► Google Sheet (CSV, fire-and-forget)

  PatientIntakeForm (browser) ──► formsubmit.co ──► info@ibsclinic.com (email only)
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

- **No server secrets.** Forms post from the browser to formsubmit.co + a write-only Apps Script webhook. The `NEXT_PUBLIC_*` endpoints are intentionally public; use a hashed formsubmit token so the clinic email never appears in the bundle.
- **Honeypot** (`website_url` field + formsubmit `_honey`) invisible to humans, mandatory empty. Bots that fill it get a silent redirect and no email/row.
- **Client-side Zod validation** blocks malformed submissions before they leave the browser.
- **Anti-spam escalation** (only if abuse appears): flip `_captcha` to `"true"` in the form payloads, or wire up Cloudflare Turnstile (`NEXT_PUBLIC_TURNSTILE_SITE_KEY`).
- **The Apps Script webhook is append-only** — it cannot read or expose existing rows.

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
│   └── medical-disclaimer/page.tsx
├── components/
│   ├── lead-form.tsx                    ← short form, RHF + Zod → formsubmit + Sheet
│   ├── patient-intake-form.tsx          ← long form, RHF + Zod → formsubmit only
│   ├── lead-form-modal.tsx              ← modal wrapper for LeadForm
│   └── floating-cta.tsx                 ← mobile sticky bar
├── lib/
│   ├── schema.ts                        ← LeadForm Zod (single source of truth)
│   ├── patient-schema.ts                ← PatientIntakeForm Zod
│   ├── forms-config.ts                  ← formsubmit + Sheet endpoints (NEXT_PUBLIC_*)
│   ├── analytics.ts                     ← GTM pushEvent
│   └── utils.ts                         ← cn() only
└── public/
    └── README.md                        ← what assets to drop in
```

The deployable Apps Script lives at `../tools/lead-capture/leads-to-sheet.gs`.

## Next iterations (after v1 launches)

- Replace placeholder hero + doctor portraits with real photography.
- Switch the formsubmit endpoint to a hashed token (hide the clinic email).
- Add Cloudflare Turnstile (or flip `_captcha`) if spam climbs.
- Add A/B variant of H1 + CTA via Vercel Edge Config (when traffic justifies).
- Build out paid blog cluster pages following the writer skill's content templates.
