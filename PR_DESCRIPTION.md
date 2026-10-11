# PR: installbeliefs launch prep

**Branch:** `cursor/launch-prep`
**Base:** `main`
**Commit count:** 5 (`git rev-list --count main..HEAD`, including this description)
**Recommendation:** Ready after named items. Do not merge until the open items below are accepted or done.

## What changed

Launch prep on the existing static site. No new marketing sections, no copy rewrites, no design or layout changes, and no new CSS in `styles.css`.

- Real form submit in `script.js`. Existing validation is unchanged. `[FORM ENDPOINT]` still shows a setup error and does not send. A real action is a JSON POST. Failures point at the footer mailto. A filled `company_website` honeypot sends nothing.
- `contact.html` has the honeypot, a form-level alert, a favicon, and `og:image`.
- `index.html` has the same favicon and `og:image`. The hero line is still "We install beliefs in your market."
- `404.html`, `robots.txt`, and `sitemap.xml` are new. The sitemap lists the home page and `contact.html` only.
- `og-image.svg` is a 1200x630 share image using the site colours and the exact hero line.
- `CHANGELOG.md` has a "Cursor launch prep" section.

## What was verified

Headless Chrome, with network blocked:

- One H1 on `index.html`, `contact.html`, and `404.html`.
- Hero H1 is exactly "We install beliefs in your market."
- Relative links and anchors resolve.
- No new external hosts. Google Fonts remains the only external resource.
- Empty name, empty company, invalid email, and empty "building" still show field errors and do not send.
- Valid fields with `[FORM ENDPOINT]` show "This form isn't set up yet." and make no request.
- Valid fields with a real action reach `fetch` POST with `Content-Type: application/json` and no honeypot field.
- A filled honeypot sends nothing and shows no message.
- A non-ok response and a network failure show "This didn't send. Email [EMAIL]." from the footer mailto, not the success message.

## Tasks skipped

- `privacy.html` — Tearsmith only. This repo is installbeliefs. There is no consent checkbox to retarget.

## Open items before merge

- Replace every placeholder below. Do not invent the values.
- Export `og-image.svg` to a 1200x630 PNG and point `og:image` at it. X, WhatsApp, LinkedIn, and Facebook do not render SVG previews.
- Set the form `action` to a real endpoint and confirm a test submission. Until then the form correctly refuses to send.
- Leave the `company_website` honeypot empty.
- Do not push this branch to `main` from this prep. Merge is a separate step.

## Placeholders still to replace

- `[AGENCY NAME]`
- `[EMAIL]`
- `[BOOKING URL]`
- `[FORM ENDPOINT]`
- `[SERVICE 1]`
- `[SERVICE 2]`
- `[SERVICE 3]`
- `[SERVICE 4]`
- `[One sentence describing what this service delivers.]`
- `[CLIENT A]`
- `[CLIENT B]`
- `[CLIENT C]`
- `[Describe the market problem in one or two sentences.]`
- `[RESULT %]`
- `[RESULT METRIC]`
- `[SOCIAL URL]`
- `[RANGE 1]`
- `[RANGE 2]`
- `[RANGE 3]`
- `[RANGE 4]`
- `[DOMAIN]`

Full detail is in `CHANGELOG.md`.
