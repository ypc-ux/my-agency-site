# PR: installbeliefs.com v1 review

**Branch:** `site/v1-review`
**Base:** none yet. The remote (`ypc-ux/my-agency-site`) has no `main`. See "Before merge".
**Recommendation:** Ready after named items. Do not launch until they are done.

## What changed

Four static files carried over from `~/Documents/cursor/files/` were reviewed
and lightly corrected. There are no new pages, sections, services or prices.

| File | Change |
|---|---|
| `contact.html` | Added the missing `og:description` and `og:url`. Placeholder-inventory comment now includes `[RANGE 1]` to `[RANGE 4]`. |
| `index.html` | Placeholder-inventory comment now lists exactly the placeholders in the file. No visible copy changed. |
| `styles.css`, `script.js` | Unchanged. |
| `CHANGELOG.md` | New. Changes, decisions, issues, suggestions, placeholders, final review. |
| `PROJECT_BRIEF.md`, `.clinerules`, `PRICING_MODEL.md`, `CLINE_TASKS.md`, `.gitignore` | New project scaffold. These were missing, so they were written during the build (each has a provenance note). |

The final review added no code fixes.

## What was verified

- Hero reads exactly "We install beliefs in your market."
- One H1 per page; meta description and Open Graph tags on both pages.
- Skip link and `:focus-visible` styles present; nav anchors match section IDs.
- No banned words in visible copy (checked against `.clinerules`).
- Every field ID used by `script.js` exists in `contact.html`.
- `[FORM ENDPOINT]` present and untouched.
- Form validation re-run in headless Chromium: empty name, empty company,
  invalid email, empty "building", and a valid submission all behave correctly.
- Responsive at 375, 768 and 1280px: no overflow, cards stack on mobile, nav
  stays on one row, form fields are full width on mobile.
- No external scripts except Google Fonts; no analytics, cookies or tracking.
- No invented clients, metrics, testimonials, logos or prices.

## What is still open

- **Contrast:** white on the accent button is 3.95:1 and accent small text on
  the paper background is 3.62:1. Both are below WCAG AA 4.5:1. The accent is
  marked as a placeholder, so this is a brand decision.
- **Form:** with `[FORM ENDPOINT]` unset, a valid submit shows a success message
  but sends nothing.
- **Google Fonts:** loaded from Google's CDN. Self-host or accept.
- **Brief and banned-word list** were written during the build, not supplied by
  the client. The "zero banned words" result is against that list.
- **Dead placeholder links** (`mailto:[EMAIL]`, `[SOCIAL URL]`, `[BOOKING URL]`)
  until real values go in.
- **Repo name** is `my-agency-site`; confirm it is the right home.
- Commit order: steps 1 and 2 appear swapped in history (both empty commits).

## Before merge

1. Create a `main` branch on the remote so this PR has a base. This was not done
   in the review.
2. Replace every bracketed placeholder with real client content. The list is in
   `CHANGELOG.md`.
3. Set `[FORM ENDPOINT]` and confirm a test submission arrives.
4. Decide on Google Fonts.
5. Confirm or darken the accent colour to reach 4.5:1.
6. Have the client confirm the brief and banned-word list.
7. No deploys on Fridays.

Full detail is in `CHANGELOG.md`.
