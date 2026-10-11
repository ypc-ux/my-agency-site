# PR: installbeliefs launch prep

**Branch:** `cursor/launch-prep`
**Base:** `main`
**Commit count:** 17 (`git rev-list --count origin/main..HEAD`, including the commit that adds this file)
**Recommendation:** Ready to merge once the open items below are accepted. All verification checks passed. This branch has not been merged into `main`.

## What changed

Launch prep on the static site. No new marketing sections and no new CSS.

- **Real form submit in `script.js`.** Existing validation is unchanged. `[FORM ENDPOINT]` shows "This form isn't set up yet." and does not send. A real action gets a JSON POST. A failure points at the footer mailto. A filled `company_website` honeypot sends nothing.
- **Launch files:** `404.html`, `robots.txt`, `sitemap.xml` (home and `contact.html` only), a favicon on every page, and `og-image.svg` plus `og-image.png` (1200x630).
- **Domain set:** `installbeliefs.com` in `robots.txt`, `sitemap.xml` and every `og:image` tag. Every `og:image` now points at `https://installbeliefs.com/og-image.png`.
- **`vercel.json`:** four security headers on all paths (`X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY`, and a `Permissions-Policy` with camera, microphone and geolocation off). `cleanUrls` is not set, because links, `og:url` and the sitemap use `.html` and it would redirect every one. No Content-Security-Policy yet, because the form endpoint is not chosen.
- **Content update merged in from `main`** (commit `80e68b8`): agency name `installbeliefs`, the four supplied services, the four supplied budget ranges, the Work section and its links removed, and the hero secondary button now reads "See how we work" and goes to `#process`. The 404 page's leftover Work link is also removed.
- **`CHANGELOG.md`** has "Cursor launch prep", "Launch prep part 2", "Content update" and "Launch prep part 3" sections.

## Merge conflicts resolved

Merging `origin/main` into this branch conflicted in two files.

- `contact.html`, placeholder comment: kept main's copy (no budget-range entry) and this branch's `company_website` honeypot line.
- `CHANGELOG.md`: kept both sides. Main's "Content update" section and this branch's launch-prep sections are all present.

`index.html` merged without a conflict. `script.js` and the launch files were not touched by main.

## What was verified

Headless Chromium with the network blocked, 50 checks, 0 failures.

- Hero H1 is exactly "We install beliefs in your market." One H1 on each of `index.html`, `contact.html` and `404.html`.
- All 19 relative links and anchors resolve. Both sitemap pages exist, and none is a Work page.
- Google Fonts is the only external host. No analytics, cookie or tracking code.
- Empty fields, an invalid email, valid fields with `[FORM ENDPOINT]` (error, no request), a real URL (POSTs), and a filled honeypot (sends nothing) all behave correctly.
- The home page has no horizontal overflow at 375, 768 and 1280px.
- `og-image.png` is 1200x630, made with locally installed Georgia and no network. The text fits with at least a 79px margin.

## Open items before merge

- Replace the placeholders below. Do not invent the values.
- Set the form `action` to a real endpoint and confirm a test submission. Until then the form correctly refuses to send.
- Add a Content-Security-Policy once the endpoint is chosen. It needs to allow Google Fonts and the endpoint host.
- Leave the `company_website` honeypot empty.
- `styles.css` still has `.case-client`, `.case-result` and `.work` rules from the removed Work section. They match nothing and are harmless. Delete them later if you like.
- The PNG share image is plain text on a solid background. Replace it if you want a designed one.

## Tasks skipped

- `privacy.html`: Tearsmith only. This repo is installbeliefs.

## Placeholders still to replace

- `[EMAIL]` (index, contact, 404)
- `[SOCIAL URL]` (index)
- `[BOOKING URL]` (contact)
- `[FORM ENDPOINT]` (contact)

`[AGENCY NAME]`, `[SERVICE 1]` to `[SERVICE 4]`, `[CLIENT A]` to `[CLIENT C]`, `[RESULT %]`, `[RESULT METRIC]`, `[RANGE 1]` to `[RANGE 4]` and `[DOMAIN]` are all resolved.

Full detail is in `CHANGELOG.md`.
