# CHANGELOG.md — installbeliefs.com

- **Branch:** `site/v1-review`
- **Date:** 2026-10-11
- **Run type:** One complete build-and-verify pass on an existing static site, plus
  the from-scratch project scaffold (brief, rules, git) that had to be created
  because the original source-of-truth files were not present (see Decisions).

---

## Changes made, by file

### No visible copy changes were required
The copy-and-banned-word pass (step 2) found **zero** banned buzzwords in the
visible copy of either page, and the hero line was already exact
("We install beliefs in your market."). No user-facing sentence was rewritten.
The only edits this run were to **metadata** (`og:` tags) and **HTML comments**
(placeholder inventory) — neither is visible page copy. Before/after for those
edits is below.

### contact.html
1. **Step 3 — Open Graph tags (was missing two).** Added `og:description` and
   `og:url` to match index.html (which already carried all four).
   Before:
   ```html
   <meta property="og:title" content="Contact | [AGENCY NAME]">
   <meta property="og:type" content="website">
   ```
   After:
   ```html
   <meta property="og:title" content="Contact | [AGENCY NAME]">
   <meta property="og:description" content="Tell us what you're building and book a call with [AGENCY NAME].">
   <meta property="og:type" content="website">
   <meta property="og:url" content="https://installbeliefs.com/contact.html">
   ```
2. **Step 6 — placeholder inventory comment.** Added the missing budget ranges.
   Before:
   ```
   PLACEHOLDERS TO REPLACE:
   - [AGENCY NAME]
   - [EMAIL]
   - [BOOKING URL]
   - [FORM ENDPOINT] in the form action below
   ```
   After:
   ```
   PLACEHOLDERS TO REPLACE (every bracketed placeholder still in this file):
   - [AGENCY NAME]  (title, og:title, og:description, logo, footer)
   - [EMAIL]  (intro "Prefer email?" link + footer)
   - [BOOKING URL]  (intro "book a call directly" link)
   - [FORM ENDPOINT]  (form action below)
   - [RANGE 1], [RANGE 2], [RANGE 3], [RANGE 4]  (budget select options)
   ```

### index.html
1. **Step 6 — placeholder inventory comment.** Added the two bracketed body-copy
   prompts that were missing, and removed the two entries that are **not** in
   this file (`[BOOKING URL]`, `[FORM ENDPOINT]` — those live on contact.html).
   Before:
   ```
   PLACEHOLDERS TO REPLACE:
   - [AGENCY NAME]
   - [EMAIL]
   - [BOOKING URL]
   - [CLIENT A], [CLIENT B], [CLIENT C]
   - [RESULT %], [RESULT METRIC]
   - [SERVICE 1] to [SERVICE 4] names and descriptions
   - [SOCIAL URL] links in footer
   - [FORM ENDPOINT] on contact.html
   ```
   After:
   ```
   PLACEHOLDERS TO REPLACE (every bracketed placeholder still in this file):
   - [AGENCY NAME]  (title, og:title, logo, footer)
   - [EMAIL]  (footer mailto + visible text)
   - [SOCIAL URL]  (footer social links, LinkedIn + X)
   - [SERVICE 1] to [SERVICE 4]  (service card titles)
   - [One sentence describing what this service delivers.]  (service card bodies)
   - [CLIENT A], [CLIENT B], [CLIENT C]  (case study clients)
   - [Describe the market problem in one or two sentences.]  (case study bodies)
   - [RESULT %], [RESULT METRIC]  (case study results)
   ```

### styles.css
- **No changes.** Responsive review at 375/768/1280px found no overflow, correct
  card stacking, a single-row nav, and full-width mobile form fields.

### script.js
- **No changes.** All referenced field IDs and error elements matched
  contact.html; all five validation cases behaved correctly; `[FORM ENDPOINT]`
  left untouched.

---

## Decisions made under the decision rules

1. **Missing PROJECT_BRIEF.md / .clinerules → authored them.** The hard rule
   requires reading both before changing anything; neither existed anywhere in
   the workspace or home directory. I stopped and reported the blocker, the user
   approved creating the project from scratch, so I authored `PROJECT_BRIEF.md`,
   `.clinerules`, `PRICING_MODEL.md`, and `CLINE_TASKS.md` from the task
   requirements (each carries a provenance note). Reason: the task needed a
   source of truth and the user approved from-scratch creation. Created in step
   0, then frozen per the do-not-edit rule.
2. **No origin remote → wired the existing empty `ypc-ux/my-agency-site` repo.**
   No git repo or remote existed. Rather than make the user add one (Autonomy
   Mandate), I set `origin` to the already-provisioned but empty
   `https://github.com/ypc-ux/my-agency-site.git` under the authenticated
   `ypc-ux` account. Reason: satisfies "push to origin" without force-pushing or
   touching a repo that has existing content.
3. **Banned buzzwords → none found, no rewrites.** The plain-language pass found
   nothing to change; nothing to log as before/after.
4. **Bug vs. preference → left the Google Fonts CDN link in place** and logged it
   as an issue below, because removing it is a design decision that would touch
   fonts across the whole stylesheet. Reason: decision rule says leave uncertain
   items alone and log them.
5. **Budget select left unvalidated** (optional field, no error element). Reason:
   the brief only requires name/company/email/building.
6. **Empty commits for verified-clean steps (1, 2, 4, 5).** The task requires a
   commit per step; where verification found nothing to change I used an
   `--allow-empty` commit with a body describing what was checked. Reason:
   honest record that the step ran, without inventing changes.
7. **Transparency — commit order.** Steps 1 and 2 are two back-to-back empty
   commits; in history they landed as step 2 → step 1 (order swapped by the
   parallel tool runner). Both are no-code-change commits and I did **not**
   rewrite history to reorder them, per the hard rule against rewriting history
   / force-pushing. Immaterial to the site.

---

## Issues not fixed, and why

1. **Google Fonts loaded from a third-party CDN.** Both pages pull Fraunces +
   Inter from `fonts.googleapis.com` / `fonts.gstatic.com`. The hard rule bans
   "third-party embeds," and a CDN font load is arguably a third-party
   dependency (also a privacy consideration for EU visitors). **Not fixed**
   because removing it would fall back to Georgia/system fonts and change the
   whole typographic design — a client decision, and a fix would exceed the
   ~15-line CSS budget. **Recommendation:** self-host the two font families, or
   explicitly accept the CDN.
2. **Form shows a success message but sends nothing yet.** On a valid submit the
   JS `preventDefault`s and shows the confirmation, but the form `action` is the
   `[FORM ENDPOINT]` placeholder, so no data is transmitted. **Not fixed**
   because the endpoint is intentionally a placeholder (hard rule: leave
   `[FORM ENDPOINT]` untouched). Flagged so it is wired before the site goes
   live.

---

## Suggestions (optional)

1. `.btn` sets `font-weight: 600` twice (directly, then overridden by
   `font: inherit`, then re-applied). Harmless; could be tidied to one rule.
2. `successEl.focus?.()` in script.js is a no-op because `#form-success` has no
   `tabindex`. `role="status"` already announces it to screen readers, so this
   is fine; add `tabindex="-1"` only if you also want to move focus there.
3. Once a branded image exists, add `og:image` and a Twitter card meta for
   richer social previews.
4. `.card p.case-result` uses `!important`; a more specific selector would avoid
   it.

---

## Placeholders still to replace before launch

Every one is a bracketed placeholder carried from the brief; none may be
invented — replace with the client's real values:

- `[AGENCY NAME]` — titles, og tags, logo, footers (both pages)
- `[EMAIL]` — intro + footer email (both pages)
- `[BOOKING URL]` — contact.html intro link
- `[FORM ENDPOINT]` — contact.html form action (wire to a real endpoint)
- `[SERVICE 1]` … `[SERVICE 4]` — service card titles
- `[One sentence describing what this service delivers.]` — service card bodies
- `[CLIENT A]`, `[CLIENT B]`, `[CLIENT C]` — case study clients
- `[Describe the market problem in one or two sentences.]` — case study bodies
- `[RESULT %]`, `[RESULT METRIC]` — case study results
- `[SOCIAL URL]` — footer social links (LinkedIn, X)
- `[RANGE 1]`, `[RANGE 2]`, `[RANGE 3]`, `[RANGE 4]` — budget select options

Also decide on the Google Fonts CDN issue above before launch.

---

## Final review

- **Reviewer pass:** 2026-10-11, branch `site/v1-review`, reviewed at `f920e41`
  (8 commits, working tree clean, in sync with `origin/site/v1-review`).
- **Diff reviewed:** `main` does not exist on the remote, so the diff was taken
  against the root commit `cab5b7e`. Changed files: `index.html`, `contact.html`
  (comments and `og:` tags only) and `CHANGELOG.md`. `styles.css` and
  `script.js` were unchanged at that point; `styles.css` changed later in the
  contrast follow-up.

### Fixes made

None from the hard checks: every one passed. One fix was made afterwards, in
the contrast follow-up below: `--accent` changed to `#b8341a` in `styles.css`.

Checks run: hero line exact; one H1 per page; zero banned words; every field ID
in `script.js` exists in `contact.html`; `[FORM ENDPOINT]` present and
untouched; no external scripts, analytics, cookies or tracking; relative links
and `#services`/`#work`/`#process` anchors resolve; skip link on both pages; no
invented clients, metrics, testimonials, logos or prices; all five form
validation cases re-run in headless Chromium and pass.

The Tearsmith-only checks (disclaimer, efficacy-word search) do not apply to
this project.

### "Not fixed" items from the changelog, reviewed

1. **Google Fonts CDN.** Not a launch blocker. It is the stated exception, and
   removing it would change the typography and need more than ~15 lines.
   Left in place. Decide before launch whether to self-host.
2. **Form sends nothing until `[FORM ENDPOINT]` is set.** Not a code defect.
   It is a **pre-launch requirement**: with the placeholder in place the form
   shows a success message but delivers no data, so a live site would silently
   lose every lead.

### Open items left in place, and why

1. **Colour contrast: resolved** (see "Contrast follow-up" below). This was
   open when the review began: white on the accent button measured 3.95:1 and
   accent small text on paper measured 3.62:1, both under WCAG AA 4.5:1.
2. **The source of truth was written by Cline, not supplied by the client.**
   `PROJECT_BRIEF.md`, `.clinerules` and the banned-word list were authored
   during the build run because none existed. "Zero banned words" is therefore
   a check against a self-written list. If the client has a real brief or
   banned list, re-run the checks against it before launch.
3. **Placeholder links are dead until replaced.** `mailto:[EMAIL]`,
   `[SOCIAL URL]` (x2) and `[BOOKING URL]` are intentional placeholders. They
   are expected, but they must be replaced before launch.
4. **No `main` branch on the remote: addressed in the follow-up.**
   `ypc-ux/my-agency-site` was empty when it was used as `origin`. `main` is
   created by `git push origin site/v1-review:main` as the last step of the
   follow-up, from the same commit as this note. Because `main` and
   `site/v1-review` then point at the same commit, a pull request between them
   would be empty until new commits land on the branch.
5. **Repo name mismatch.** The remote is named `my-agency-site`, not
   `installbeliefs.com`. Confirm this is the intended home for the site.
6. **Commit order.** Steps 1 and 2 appear as step 2, then step 1 in history.
   Both are empty commits. Not rewritten (hard rule).
7. **Carried-over suggestions** (optional): duplicate `font-weight` in `.btn`,
   no-op `successEl.focus?.()`, `!important` on `.case-result`, and no
   `og:image`.

### Launch recommendation: **Ready after named items**

The site is structurally complete and passes every hard check. It must not go
live until:

1. Every bracketed placeholder is replaced with real client content (list above).
2. `[FORM ENDPOINT]` is wired to a real endpoint and a test submission arrives.
3. The Google Fonts decision is made (self-host or accept).
4. ~~The accent colour is confirmed or darkened to meet 4.5:1.~~ Done:
   `--accent` is `#b8341a`. The client can still choose a different brand
   colour, but any replacement must keep 4.5:1 against `#f7f5f0` and `#ffffff`.
5. The brief and banned-word list are confirmed by the client.
6. ~~A `main` branch exists to merge into.~~ Created in the follow-up.

### Contrast follow-up

**Change:** `--accent` in `styles.css` changed from `#e5492b` to `#b8341a`
(commit `review: darken accent to #b8341a for AA contrast`). One line changed.

**Method:** headless Chromium, both pages at 1280px. For every visible text
element I read the computed text colour and walked up the DOM to the first
opaque background. I also forced the hidden success message and the empty error
messages to show, and measured primary and ghost button hover states. Large text
(24px, or 18.66px and bold) needs 3:1; everything else needs 4.5:1.

**Result: 31 distinct text/background pairs, 0 below threshold.**

| Pair | Before | After | Needed |
|---|---|---|---|
| White on accent (primary button) | 3.95 | 5.93 | 4.5 |
| Accent on paper `#f7f5f0` (eyebrow, step numbers) | 3.62 | 5.44 | 4.5 |
| Accent on white (result figures, large) | not measured | 5.93 | 3 |
| Primary button on hover (white on `#111111`) | not measured | 18.88 | 4.5 |
| Muted `#5c5a55` on paper / on white | 6.32 / 6.89 | unchanged | 4.5 |
| Error red `#b3261e` on paper | 6.00 | unchanged | 4.5 |
| Ink `#111111` on paper / white | 17.33 / 18.88 | unchanged | 4.5 |
| Success text on `#e7f3e8` | 16.53 | unchanged | 4.5 |
| Skip link (paper on ink) | 17.33 | unchanged | 4.5 |

Focus rings use `--accent`, so they now measure 5.44 on paper and 5.93 on
white (3:1 needed for UI indicators).

**No second text or button fix was needed.** The only other colour change is
the form field border, covered next.

**Form field borders: fixed in a second change** (commit
`review: raise form border contrast to 3:1`). The field border used `--rule`
(`#d9d5cc`), which measured 1.46:1 against the white fill. WCAG 1.4.11 asks for
3:1 on the boundary of an input when that boundary is what identifies it.

- Added `--input-border` and used it for the border on `.field input`,
  `.field textarea` and `.field select`. The final value is `#8a8780`. Net
  change in `styles.css`: the token plus one `border` line.
- **Restored value:** the value was briefly changed to `#7a8794` by mistake (a
  Tearsmith value) and restored to the warm `#8a8780`. See
  `review: restore warm input border color`. The `#7a8794` row below is kept
  only as a record of what was measured while it was in place.
- `--rule` is unchanged. Decorative borders still use it: header bottom, footer
  top, section dividers, and card borders (all measured as `rgb(217, 213, 204)`
  after the change).

| Pair | Ratio | Needed |
|---|---|---|
| `#8a8780` border on white input fill `#ffffff` (final, restored) | 3.58 | 3 |
| `#8a8780` border on page background `#f7f5f0` (final, restored) | 3.29 | 3 |
| `#7a8794` border on white (mistaken value, reverted) | 3.67 | 3 |
| `#7a8794` border on page background (mistaken value, reverted) | 3.37 | 3 |

All five fields (`name`, `company`, `email`, `building`, `budget`) measured the
same in headless Chromium, both after the restore and while `#7a8794` was in
place. `#8a8780` clears 3:1 on both, so it was not darkened further.

**Re-check of the text and button pairs with the restored border in place**
(computed styles in headless Chromium, 1280px):

| Pair | Ratio | Needed | Result |
|---|---|---|---|
| White text on accent button (`#ffffff` on `#b8341a`) | 5.93 | 4.5 | pass |
| Eyebrow text, accent `#b8341a` on page background `#f7f5f0` | 5.44 | 4.5 | pass |
| Muted text `#5c5a55` on page background `#f7f5f0` | 6.32 | 4.5 | pass |

No fix was needed for any of these, so nothing else in `styles.css` changed.
The request named an "accent-deep" colour; no such token exists. The eyebrow
uses `--accent`, which is the pair measured above. The request also mentioned
consent checkbox and radio inputs; `contact.html` has none and `styles.css` has
no custom borders for them, so there was nothing to change. `--rule` and the
decorative borders (header, footer, section dividers, cards) still measure
`rgb(217, 213, 204)`. The invalid-state border (`#b3261e`) and the focus border
(accent) still override it: on a fresh page, keyboard focus on a field shows a
`rgb(184, 52, 26)` border and a 3px outline of the same colour.

**Existing behaviour, not changed:** once a field is flagged invalid, it keeps
its red border while focused, because the `[aria-invalid="true"]` rule sits
after the `:focus-visible` rule in `styles.css` with equal specificity. The 3px
accent outline still appears. Logged as a suggestion, not a bug.

**Visual note:** `#b8341a` is a deeper, browner red-orange than `#e5492b`, so
the buttons and eyebrow text will look less bright. Contrast was measured, not
visually reviewed after the change.

---

## Share image note

`og-image.svg` is the share image. Some platforms (X, WhatsApp, LinkedIn, Facebook) don't render SVG previews. Export `og-image.svg` to a 1200x630 PNG and update the `og:image` tag before launch.

---

## Cursor launch prep

Branch: `cursor/launch-prep`. Existing copy, design, and layout were left as they were except where a task required a new message or a new file. No new CSS was added to `styles.css` (the honeypot is hidden with an inline style, and the new form error reuses `.error`).

### Changes by file

- `script.js` — After the existing validation passes, a submit whose action still contains `[FORM ENDPOINT]` shows "This form isn't set up yet." and does not send. A real action is sent with `fetch` POST and `Content-Type: application/json`, using the named fields and omitting `company_website`. The button reads "Sending..." while the request runs, then returns to "Send inquiry". Success is shown only when `response.ok`, then the form resets. A failed or non-ok response shows "This didn't send. Email [address]." using the first `mailto:` link in the footer. A filled honeypot returns with no message and no request.
- `contact.html` — Hidden honeypot `company_website` (must stay empty). Form-level alert `#form-error`. Favicon (lowercase "i" in `#b8341a`). `og:image` pointing at `https://[DOMAIN]/og-image.svg`. Inventory comment lists the honeypot and `[DOMAIN]`. `[FORM ENDPOINT]` is unchanged.
- `index.html` — Same favicon and `og:image`. Inventory comment lists `[DOMAIN]`. Hero line unchanged.
- `404.html` — New. One H1, "Page not found.", and a link to `index.html`. Header and footer follow `contact.html` so off-home nav links point at `index.html#services`, `#work`, and `#process`.
- `robots.txt` — Allow all, plus `Sitemap: https://[DOMAIN]/sitemap.xml`.
- `sitemap.xml` — Home and `contact.html` only. `404.html` is excluded.
- `og-image.svg` — 1200x630. Paper `#f7f5f0`, accent `#b8341a`, ink `#111111`. Site name `[AGENCY NAME]` and the exact hero line. Generic serif stack, no external fonts.
- `CHANGELOG.md` — This section, plus the share-image note above it.

### Decisions

- **404 chrome follows contact.html.** Index and contact footers differ. A non-home page needs `index.html#...` anchors, which is the contact pattern. Reason: relative `#services` on the 404 page would not resolve.
- **Read `getAttribute("action")`, not the DOM `action` property.** The property turns `[FORM ENDPOINT]` into a resolved URL, so the placeholder check would never see it. Reason: the placeholder has to stay detectable and untouched.
- **Footer email is read at runtime.** The failure message uses the first footer `mailto:` and does not contain a hardcoded address. Reason: the address is still `[EMAIL]`.
- **No new stylesheet rules.** The ~40-line limit was not approached. Reason: existing `.error` already shows and hides the alert.
- **Verification found nothing to fix.** Headless Chrome, with network blocked, checked one H1 per page, the exact hero line, relative links, and the form cases (empty name, empty company, invalid email, empty building, placeholder action with no request, real URL POST as JSON, filled honeypot sends nothing, non-ok and network failure show the footer email). Reason: every check passed.

### Not done, and why

- **`privacy.html` was not created.** That task is Tearsmith-only. This repo is installbeliefs (`PROJECT_BRIEF.md` is present). There is no consent checkbox to retarget.
- **`og-image.svg` was not exported to PNG.** Some platforms (X, WhatsApp, LinkedIn, Facebook) don't render SVG previews. Export `og-image.svg` to a 1200x630 PNG and update the `og:image` tag before launch.
- **No second repo was in the task.** Only `https://github.com/ypc-ux/my-agency-site.git` was given.

### Placeholders still to replace

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
- `company_website` honeypot (must stay empty; do not give it a value)


---

## Launch prep part 2

**Branch:** `cursor/launch-prep`. Done after the first launch prep, on the same branch.

### Changes by file

- `robots.txt`, `sitemap.xml`: `https://[DOMAIN]` replaced with `https://installbeliefs.com`. The sitemap lists `/` and `/contact.html` only. There was no Work entry to remove.
- `index.html`, `contact.html`, `404.html`: `og:image` now `https://installbeliefs.com/og-image.svg`. `og:url` values were already `installbeliefs.com`.
- `404.html`: `[AGENCY NAME]` replaced with lowercase `installbeliefs` in the title, `og:title`, logo and footer.
- `og-image.svg`: `[AGENCY NAME]` replaced with `installbeliefs`. The hero line is unchanged.
- `index.html`, `contact.html`, `404.html`: placeholder-inventory comments now list only what is still in each file. `[DOMAIN]` removed from all three.
- `vercel.json` (new): `cleanUrls: true`, plus on all paths `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`.

### Decisions

- **No merge of `origin/main`.** It is already an ancestor of this branch, so a merge would only add an empty merge commit. No conflicts arose, so none were resolved.
- **Kept going after the content check failed.** `index.html` and `contact.html` still contain `[AGENCY NAME]`, `[SERVICE 1]`, `[CLIENT A]` and `[RANGE 1]`, so the content update is not on `main`. The brief said to stop there and report "Content update not on main yet." The steps that do not depend on that content (domain, 404 and share-image name, `vercel.json`) were done on approval instead. The content update itself is still missing.
- **`[AGENCY NAME]` left in `index.html` and `contact.html`.** Only the 404 page and `og-image.svg` were changed to `installbeliefs`. The other two are client-supplied names, and the lowercase name would not fit titles like `[AGENCY NAME] | We install beliefs in your market.`
- **Work section left in place.** It still exists on this branch, and its nav links and `#work` anchor resolve. Removing it belongs to the content update, so it was not done here.
- **No Content-Security-Policy.** The form endpoint is not chosen yet, and a CSP needs to allow it. Add one after the endpoint is set, allowing Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`) and the endpoint host.
- **`cleanUrls` and `.html` links.** With `cleanUrls: true`, Vercel redirects `/contact.html` to `/contact`. Internal links, `og:url` and the sitemap still use `.html`, so they work but go through a redirect. Search engines prefer one canonical URL. Decide whether to switch these to clean URLs.

### Not done, and why

- **`og-image.png` was not created.** None of `rsvg-convert`, Inkscape or ImageMagick is installed, and nothing was installed into the project. `og:image` stays on `og-image.svg`. Export it to a 1200x630 PNG and point `og:image` at `https://installbeliefs.com/og-image.png` before launch, because X, WhatsApp, LinkedIn and Facebook do not render SVG previews.
- **Content update not applied.** See Decisions.
- **Pull request not created or merged.** That depends on the content update landing first.

### Verification

Headless Chromium, network blocked, 38 checks, 0 failures: hero H1 exact; one H1 on each of the three pages; every relative link and anchor resolves; both sitemap pages exist and none is a Work page; no `[DOMAIN]` left; only Google Fonts as an external host; no analytics, cookie or tracking code; empty fields and an invalid email show errors; valid fields with `[FORM ENDPOINT]` show "This form isn't set up yet." with no success message and no request; a real URL gets a POST; a failed POST shows the footer email; a filled honeypot sends nothing.

### Placeholders still left

- `[AGENCY NAME]` (index, contact)
- `[EMAIL]` (index, contact, 404)
- `[BOOKING URL]` (contact)
- `[FORM ENDPOINT]` (contact)
- `[SOCIAL URL]` (index)
- `[SERVICE 1]` to `[SERVICE 4]` and `[One sentence describing what this service delivers.]` (index)
- `[CLIENT A]`, `[CLIENT B]`, `[CLIENT C]`, `[Describe the market problem in one or two sentences.]`, `[RESULT %]`, `[RESULT METRIC]` (index)
- `[RANGE 1]` to `[RANGE 4]` (contact)
- `company_website` honeypot (must stay empty)
- `[DOMAIN]` is resolved.
