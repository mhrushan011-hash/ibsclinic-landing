# `/public` — static assets

Drop image and other static assets here. They are served from the site root.

## Files to add before launch

| Path | What | Notes |
|---|---|---|
| `/public/logo.png` | IBS Clinic wordmark | 512×512 minimum. Used by OG tags + schema. |
| `/public/og-image.jpg` | Social preview | 1200×630. Use the hero photo with a brand overlay. |
| `/public/favicon.ico` | Browser tab icon | 32×32. |
| `/public/icons/apple-touch-icon.png` | iOS home-screen | 180×180. |
| `/public/hero/consult.jpg` | Hero photo | Real consult shot per moodboard photography brief. AVIF + WebP variants ideal. |
| `/public/doctors/kamal.jpg` | Dr. Kamal K Khajuria portrait | 800×800. Daylight, sage backdrop. |
| `/public/doctors/keshav.jpg` | Dr. Keshav Raj portrait | Same. |
| `/public/doctors/rajeev.jpg` | Dr. Rajeev Gaur portrait | Same. |
| `/public/doctors/nishikant.jpg` | Dr. Nishikant Dwivedi portrait | Same. |

Until real assets land, the page renders a sage-coloured placeholder block with a label, and the doctor cards render initials in a sage circle. Both are intentional — they signal "art directed asset goes here," not broken images.

After adding the photos, swap the placeholder block in `app/page.tsx` for a `next/image` with `priority` on the hero image, and add `<img>` tags or `next/image` instances inside each doctor card.
