# PROJECT_BRIEF.md — installbeliefs.com

> **Provenance (read first):** No pre-existing PROJECT_BRIEF.md was found in the
> workspace or home directory during the site/v1-review run on 2026-10-11. The
> blocker was reported to the user, who approved creating the project from
> scratch in a new folder. This brief was assembled by Cline from the task
> instructions for that run. The four site files (index.html, contact.html,
> styles.css, script.js) were carried over from
> `/Users/thefuckingman/Documents/cursor/files/`. Nothing about clients,
> metrics, testimonials, logos, team, or prices is invented anywhere in this
> project — all of it stays a bracketed placeholder until the client supplies
> the real values.

## Project

- **Site:** installbeliefs.com — one-page marketing site for a creative
  agency serving startups and tech companies.
- **Hero line (exact — never change):** "We install beliefs in your market."
- **Stack:** static HTML + CSS + vanilla JS only. No frameworks, build tools,
  npm packages, analytics, tracking scripts, or third-party embeds.

## Pages

### index.html (one page, all marketing sections)
- Skip link, sticky header with logo `[AGENCY NAME]` and nav
- Hero: eyebrow, H1 (the hero line), lead, two CTAs (`contact.html`, `#work`)
- Problem section
- Services section — `id="services"`, four cards `[SERVICE 1]`..`[SERVICE 4]`
- Work section — `id="work"`, three case cards with `[CLIENT A/B/C]`,
  `[RESULT %]`, `[RESULT METRIC]`
- Process section — `id="process"`, four steps (Diagnose / Position / Create / Launch)
- Closing CTA, footer (`[EMAIL]`, `[SOCIAL URL]` links, `#year` filled by JS)

Nav anchors `#services`, `#work`, `#process` must match the section IDs above;
Contact points to `contact.html`.

### contact.html
- H1: "Tell us what you're building."
- Intro copy with `[BOOKING URL]` and `[EMAIL]` links
- Form (`id="contact-form"`, `action="[FORM ENDPOINT]"` — never edit the
  action), `method="POST"`, `novalidate`
- Required fields: `name`, `company`, `email`, `building`
  ("What are you building?")
- Optional field: `budget` select with options `[RANGE 1]`..`[RANGE 4]`
- Error elements `name-error`, `company-error`, `email-error`, `building-error`
  and `form-success`, all wired to script.js
- Footer matching index.html

## Copy placeholders (keep exactly as written)

| Placeholder | Where |
|---|---|
| `[AGENCY NAME]` | titles, og:title, logo, footers (both pages) |
| `[EMAIL]` | mailto + visible email, both pages |
| `[BOOKING URL]` | contact.html intro link |
| `[FORM ENDPOINT]` | contact.html form action |
| `[CLIENT A]`, `[CLIENT B]`, `[CLIENT C]` | index.html case cards |
| `[RESULT %]`, `[RESULT METRIC]` | index.html case results |
| `[SERVICE 1]` .. `[SERVICE 4]` | index.html service card titles |
| `[One sentence describing what this service delivers.]` | index.html service cards |
| `[Describe the market problem in one or two sentences.]` | index.html case cards |
| `[SOCIAL URL]` | index.html footer social links |
| `[RANGE 1]` .. `[RANGE 4]` | contact.html budget select |

No client names, metrics, testimonials, logos, team members, or prices may be
invented. If copy needs one of those, it stays bracketed.

## Definition of done

1. Hero line reads exactly: "We install beliefs in your market."
2. Every bracketed placeholder preserved as written; the comment at the top of
   each HTML file lists every placeholder still present in that file.
3. One H1 per page; meta description + Open Graph tags on both pages; alt text
   on any images; visible focus states; a working skip link; nav anchors match
   section IDs.
4. Every field ID script.js references exists in contact.html, and each error
   element matches. Validation covers: empty name, empty company, invalid
   email, empty "building" field, and a fully valid submission.
   `[FORM ENDPOINT]` untouched.
5. Responsive at 375px, 768px, 1280px: hero wraps cleanly, cards stack on
   mobile, nav does not overflow, form fields are full width on mobile.
   Individual CSS fixes stay around 15 lines or fewer — bigger ones get logged
   as issues instead.
6. Visible copy passes the plain-language (banned-word) pass in `.clinerules`.
7. `CHANGELOG.md` covers changes by file with before/after, decisions, issues
   not fixed, suggestions, and placeholders still to replace before launch.