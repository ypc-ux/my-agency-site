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
