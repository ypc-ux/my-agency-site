# Design pass plan

Branch: `design/bible-implementation`. Base: `main` at `2246191`. Date: 2026-10-12.

Rules are cited by name or number only. WDB = Web Design Bible. IB = Influence Bible.
Baseline measurements were taken in headless Chromium at 375, 768, and 1280px.

## What the sources can and cannot give this site

The WDB design sections target local-service sites: phone CTAs, review walls, counters, animation libraries, stock-free photo galleries. This repo bans frameworks and libraries, and it has no real proof to show. Those rules are not applied. The rules below are the ones that apply to a static, text-only agency site and can be met honestly.

The sources give no numeric line-length rule and no spacing scale for this kind of site. No change is planned for either.

## Rules to implement

| # | Rule | File and element | Expected effect |
|---|---|---|---|
| 1 | IB 4.2: minimum body size on mobile | `styles.css`: `.site-nav a`, `.site-footer`, `.step-num`, `.error` (all 14.4 to 15.2px) | All body-size text is 16px. Eyebrow is a label and stays (see Optional). |
| 2 | IB 4.2: at most three font weights per page | `styles.css`: `.field label` (500) | Contact page drops from four weights (400, 500, 600, 800) to three. |
| 3 | WDB Voice 4, IB 15, WDB principle 8 (rhythm): short sentences | `index.html`: Sprint card, one 25-word sentence | Three short sentences. Same meaning. No new claim. |
| 4 | WDB CTA formula (first-person verb) | `index.html`: two "Book a call" buttons. `contact.html`: "Send inquiry" | "Book my call" (both), "Send my details". |
| 5 | WDB Four Horsemen (vague header), Voice 3 (second person) | `index.html`: "What we do", "How we work" | "What you get", "What happens, step by step". Both are five words or fewer. |
| 6 | WDB QA: mobile 375px test | `styles.css`: `html` scroll padding | Planned because the header is 83px at 375px and scroll padding is 72px. Measured after the jump: headings land 86px below the header at 375px and 104px at 768 and 1280px. No change needed. Dropped. |
| 7 | WDB checklist and selection algorithm: AA contrast | all pages | Re-measured. No change expected. Text 4.5:1, borders and inputs 3:1. |
| 8 | Accessibility: focus, one H1, anchors | all pages | Re-verified. No change expected. |

Frozen and not touched: the hero line, the four service names, contact details, `script.js`, form field IDs and names, the form action, `vercel.json`.

## Optional, my decision

Not applied. Each needs an owner call.

- O1. Hero size. The bible's hero scale is larger than the site's (36 to 64px). It is written for a different heading font and weight.
- O2. Palette. IB 4.1 sets black, silver, and purple. The site is warm paper with a red accent. Changing it exceeds the 40-line CSS limit.
- O3. Heading font. IB 4.2 says Inter only. Headings use Fraunces, a serif. Body is already Inter.
- O4. Eyebrow label, 13.6px uppercase. It is a label, not body text.
- O5. Footer and inline link height is 19 to 22px. The bible has no target-size rule. WCAG 2.2 sets a 24px minimum.
- O6. Closing headline "Ready to install a belief?" and problem headline. Several reasonable options are in `MARKETING_NARRATIVE.md`.
- O7. 404 meta description is 15 characters.
- O8. Larger CTAs. The bible's CTA size rule is for phone-call buttons on local-service sites.
- O9. Asymmetric layouts and varied section backgrounds (anti-slop table). Taste.

## Rules that cannot be met honestly yet

- Proof formula, trust zones, stats counters, reviews: there is no real client, result, or quote.
- Offer formula (price, guarantee, risk reversal): no prices may show, and no guarantee has been confirmed.
- Hero hook with a number a visitor cannot argue with: no real number exists.
- Real photos: none supplied.
- Phone CTAs: no phone number.
