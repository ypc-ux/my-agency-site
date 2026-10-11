# Marketing narrative: installbeliefs.com

Status: draft for owner review. Date: 2026-10-11. Branch: `narrative/bible-pass`.

Source rules are cited by name or number only. The source documents are not in this repo.
Abbreviations: WDB = Web Design Bible, IB = Influence Bible, MM = Master Marketing.

## 1. Positioning (one sentence)

installbeliefs is a creative agency that finds the wrong belief a market holds about a startup or tech company, then builds the positioning, creative, and launch that replace it.

## 2. The belief shift

Both items below are hypotheses to validate in founder interviews. None comes from data.

| | Belief |
|---|---|
| Old belief (founder) | If the product is good, the market will work it out. |
| Old belief (market) | A vague, category-level impression of the company. It is not known what this is for any real client yet. |
| New belief | The market chooses what it believes about you. That belief can be built on purpose, and it starts with finding out what it is today. |

## 3. Rules from the source documents that apply here

The site is a one-page agency site for founders. Many rules in the sources are written for local-service sites (phone CTAs, review walls, counters, animation libraries) and do not apply.

Applies:
- WDB Copy Stack: Voice rules 1 to 7 (cut inflation, one idea per sentence, second person, no stock phrases, specific beats impressive, numbers over adjectives, read it aloud)
- WDB Copy Stack: Section-by-Section Formulas (hero hook, hero sub, pain, solution, proof, offer, CTA)
- WDB Copy Correctness Checklist (title under 60 characters, description under 155, every claim traceable, no placeholders)
- WDB 8 Principles for Website Copy (speed to value, clarity, absorption, rhythm) and Four Horsemen
- WDB Anti-AI-Slop table (real proof only, specific over vague, varied layout)
- WDB Professional Services vertical (hook with a real result, one-line method, short call CTA)
- WDB Selection Algorithm: contrast check at WCAG AA
- IB principles 9 (specific over general), 15 (easy to read), 16 (ethics line), 13 (gift before ask), 19 (own a word)
- IB 4.4 Voice and banned-word list, 4.6 Humanizer Gate, 4.7 Ethics Checklist
- MM section 6 Copy Rules

Does not apply, or conflicts with project rules:
- WDB CTA System (phone CTAs), Trust System counters and reviews, Animation Stack, Image System, background layers. The repo bans frameworks and libraries (`.clinerules` hard rule 3), and there is no real proof to display yet.
- IB principle 12 (anchor with the highest price) and all price display. The owner rule is no prices on the site.
- IB 4.1 palette (black, silver, purple) and 4.2 typography (Inter only, three weights). The site uses a warm paper background, a red accent, and Fraunces for headings. Recommendation only, see section 9.

## 4. Audit

Measured with a script (reading grade, sentence length, banned words, weights). Quotes are the site's own text. Impact: H high, M medium, L low.

### Hero

| # | Site text | Rule | Why it fails | Impact |
|---|---|---|---|---|
| 1 | "For founders and tech leaders from seed to Series B who need a brand the market remembers, believes, and chooses." | WDB Voice 5, 6; IB 9 | Reads as a category claim. No number, no mechanism, no proof. Two sentences, 35 words. | H |
| 2 | "We build the positioning, creative, and launch that change what people think about your company." | WDB hero sub formula | Names deliverables, not the mechanism or one proof point. | M |
| 3 | "Book a call" (hero and closing) | WDB CTA formula | Not first person. It also asks for a call before any proof exists. | L |
| 4 | "We install beliefs in your market." | WDB Four Horsemen (clarity) | Abstract. A founder may not know what "install" means. Frozen by owner rule. Recommendation only. | M |

### Problem

| # | Site text | Rule | Why it fails | Impact |
|---|---|---|---|---|
| 5 | "Good products lose to louder competitors." | WDB pain formula | States the agency's view, not the founder's words. Unvalidated. | M |
| 6 | "Most startups don't lose because their product is weak." | IB 16, WDB checklist (traceable claim) | "Most startups" is a statistic-shaped claim with no source. | H |

### Services

| # | Site text | Rule | Why it fails | Impact |
|---|---|---|---|---|
| 7 | "What we do" | WDB Four Horsemen | Generic label that fits any agency. | L |
| 8 | "Four weeks to learn what your market believes about you, choose the one belief worth installing, and leave with messaging and your first ten assets." | WDB Voice 4 | 25 words in one sentence. The reading grade is about 10, against a 6th-grade rule. | M |
| 9 | "with a review of what landed after 60 days." | IB 16 | A 60-day review is a commitment. Confirm it is real before keeping it. | M |
| 10 | "Creative, content, and paid creative" | WDB Voice 2 | "Creative" is used twice in four words. | L |

### Process

| # | Site text | Rule | Why it fails | Impact |
|---|---|---|---|---|
| 11 | "measure whether the belief is taking hold." | IB 9 | No named measure. A skeptic will ask what the measure is. | M |
| 12 | "How we work" | WDB Four Horsemen | Generic label. | L |

### Closing and contact

| # | Site text | Rule | Why it fails | Impact |
|---|---|---|---|---|
| 13 | "Ready to install a belief?" | WDB hero hook, Voice 2 | Repeats the pitch. It does not name what the visitor gets from the call. | L |
| 14 | "We'll tell you honestly whether we can help." | IB 13, 19 | This is the strongest line on the site. It is a real gift. Keep it and move it up. | Keep |
| 15 | "Send inquiry" | WDB CTA formula | Not first person. | L |
| 16 | Contact page meta description, 65 characters | WDB checklist | Within limits. Passes. | Pass |

### Page-level gaps

| # | Gap | Rule | Impact |
|---|---|---|---|
| 17 | No proof of any kind: no named result, client, or founder quote | WDB proof formula, Anti-Slop (real proof only) | H |
| 18 | No answer to "why should I trust a new agency?" | WDB Professional Services vertical (credibility first) | H |
| 19 | No gift before the ask, such as a free diagnosis | IB 13; MM Trojan Horse rules | M |
| 20 | 404 meta description is "Page not found." (15 characters) | WDB checklist | L |

### Measured, no fix needed

- Banned words: none found on any page, against the IB and `.clinerules` lists.
- Hedging words: none found.
- Prices: none in visible copy. The contact form budget ranges are dollar amounts. See open question Q3.
- Weights: the home page uses 400, 600, and 800. The contact page also uses 500. IB 4.2 allows at most three on one page. The contact page has four.
- Contrast: measured earlier in this repo. See the Contrast follow-up in `CHANGELOG.md`.

## 5. Narrative diagnostic

### 5.1 Pain (hypotheses to validate in founder interviews)

No quotes. No statistics. Every line below is a guess until a founder says it.

- H1. A founder knows the product is good and cannot explain why buyers pick someone else.
- H2. Investors and early customers describe the company in words the founder would not use.
- H3. The founder's own team gives three different one-line answers to "what do you do?"
- H4. A louder competitor with a weaker product keeps winning the same deals.
- H5. Marketing spend has gone out and nothing changed in how people talk about the company.

Interview test: ask five seed to Series B founders to describe, in their own words, the last deal they lost. Count how many of H1 to H5 come up unprompted.

### 5.2 Value: (Dream outcome x Perceived likelihood) / (Time delay x Effort)

Scores are my estimates from the page text, 1 to 5. They are not measured.

| Variable | Score | Basis |
|---|---|---|
| Dream outcome | 4 | "A brand the market remembers, believes, and chooses" is the outcome. It is clear but has no number. |
| Perceived likelihood | 1 | No proof, no client, no result. The page asks for trust on the word of a new agency. |
| Time delay | 3 | "Four weeks" is stated for the Sprint. The other offers have no time stated. |
| Effort | 3 | The page does not say what the founder must do or provide. |

Weakest variable: perceived likelihood. Honest ways to raise it, in order:
1. Say plainly that the agency is new and that this is why the first diagnosis is offered at a founding-client rate. This needs owner approval. No price shown.
2. Show the method, not results. Say what the Sprint produces in week one, so a founder can judge the thinking.
3. Publish one real result only when a founding client approves it in writing.

### 5.3 Attribution: every claim and what backs it

| Claim on the site | Checkable result behind it? |
|---|---|
| "Most startups don't lose because their product is weak." | No. No source. Flag. |
| "Good products lose to louder competitors." | No. Opinion. Flag. |
| "a brand the market remembers, believes, and chooses" | No. Promise, no result. Flag. |
| "Four weeks ... your first ten assets." | Backed by the offer design only. Confirm it is deliverable. |
| "a review of what landed after 60 days" | Confirm the owner commits to it. |
| "measure whether the belief is taking hold" | No named measure. Flag. |
| "We'll tell you honestly whether we can help." | Yes, if the owner keeps the promise. |
| No client, logo, quote, or statistic appears | Nothing invented. Good. |

### 5.4 Voice: blunt, direct, short, no hedging, no buzzwords

- Banned words and hedges: zero found. Good.
- Longest sentences: the hero lead (about 18 words per sentence) and the Sprint card (25 words in one sentence).
- Process steps use "we" and abstract nouns ("the belief", "the story that carries it"). Founders do not say "belief" about their market in the first week. Hypothesis, not fact.
- Second person: the hero lead and services use "you" only in passing. The Problem section never uses "you".

### 5.5 Levers: three persuasion principles, no more

| Principle (IB number) | Where it is used |
|---|---|
| Specific beats general (IB 9) | Hero sub, Sprint card, process measure. Replace adjectives with what is delivered and by when. |
| Gift before the ask (IB 13) | Closing section: the first call is a free honest read on fit. Add a free diagnosis only if the owner approves it. |
| Easy to read is easy to believe (IB 15) | Every section. Short sentences, plain words. |

No loss framing, anchoring, scarcity, or urgency. Not enough real proof exists to support them, and IB 16 forbids false ones.

### 5.6 Objections a skeptical founder would raise

| # | Objection | Page answers it today? | Gap |
|---|---|---|---|
| 1 | You have no case studies. | No. The page is silent. | Say so plainly and offer the founding-client route. |
| 2 | You are a new agency. Why trust you? | Partly. "We'll tell you honestly whether we can help" helps. | Show the method and who does the work. Needs owner input. |
| 3 | Why pay for a Sprint before I see results? | Partly. Four weeks and ten assets are named. | State what the founder walks away with even if they never hire again. |

## 6. Narrative arc for the homepage

| Section | Job | Direction |
|---|---|---|
| Hero | Stop the scroll | Keep the frozen H1. Make the sub-line say what happens and in how long. |
| Problem | Make them nod | Use the founder's pain, validated in interviews. Drop "most startups". |
| Services | Show the mechanism | One line per offer: what you get and when. |
| Process | Remove effort anxiety | Add what the founder does at each step. |
| Closing | Own the action | Lead with the honest-fit promise. First-person CTA. |

## 7. Proof plan

Missing today: a named result, a client, a quote, a number that can be checked.

How the first founding client produces proof:
1. Offer one founding client the Diagnose and Position Sprint. No price is shown on the site. Terms are set in private.
2. In exchange, get written permission to publish the before and after belief, with a date.
3. Record the starting belief in week one, from the client's buyers, in their words.
4. Measure again at 60 days with the same method and the same question.
5. Publish only what the client approves in writing. No invented numbers.
6. Until then the page makes no result claims.

## 8. Voice rules for this site

1. Short sentences. One idea each.
2. Say "you". Name the founder's problem before ours.
3. Numbers and named deliverables over adjectives.
4. No hedging. If unsure, leave the claim out.
5. Nothing on the banned lists in IB 4.4 and `.clinerules`.
6. Read it aloud. If it would not survive saying it to a founder's face, cut it.

## 9. Recommendations that need owner decisions (not applied in code)

- Hero line: the bible's clarity and hook rules would test it as abstract. It is frozen by owner rule, so no change is made. If revisited, test it with five founders first.
- Palette and type: IB 4.1 and 4.2 describe black, silver, purple and Inter-only. The site is warm paper with a red accent and Fraunces. Changing it exceeds the 40-line CSS limit. Owner decision.
- Weights: the contact page uses four weights. IB 4.2 allows three. Low impact.
- Proof section: no proof exists, so none is added.

## 10. Copy options for failing sections

The hero H1, service names, contact details, and form logic are frozen. Options use only facts already on the site. Pick one per row.

| Section | Option A | Option B |
|---|---|---|
| Hero sub (audit 1, 2) | "For founders from seed to Series B. We find what your market believes about you, then build the positioning and launch to change it." | "Your product is good. Your market may not know it. We find out what they believe, then change it." |
| Hero CTA (3) | "Book my call" | "Talk to us" |
| Problem headline (5) | "A good product is not enough." | "Your market has already decided." |
| Problem body (6) | "Buyers form a belief about your company before they use your product. We find that belief first." | "Without a clear belief about why you matter, buyers pick the louder name. We fix that before we design anything." |
| Services headline (7) | "What you get" | "Four ways to work with us" |
| Sprint card (8) | "Four weeks. We find what your market believes about you and pick the one belief to change. You leave with messaging and ten assets." | "In four weeks you get a read on your market, one chosen belief, your messaging, and ten assets." |
| Launch card (9, 10) | "Content and paid creative for a launch. We review what worked after 60 days." | "Creative and content for your launch, then a 60-day review of what worked." |
| Process headline (12) | "What happens, step by step" | "Four steps" |
| Process step 4 (11) | "We put the work in front of the right people. Then we check whether their view of you has changed." | "We launch. Then we ask the same questions we asked in step one, and compare." |
| Closing headline (13) | "Not sure we fit? Ask." | "Tell us what you're building." |
| Closing body (14) | "We will tell you honestly whether we can help. If we can't, we will say so on the first call." | "Tell us what you're building. We'll tell you honestly whether we can help." |
| Closing CTA (3) | "Book my call" | "Start the conversation" |
| Form button (15) | "Send my details" | "Send it" |

Item 9 and the Launch card: keep the 60-day review only if the owner confirms it is a real commitment.
Item 14: the honest-fit line is already on the page. Option B keeps it as is.

## 11. Open questions for the owner

1. Q1. Is the 60-day review on the Launch Campaign a real commitment?
2. Q2. Do you want to say on the page that the agency is new and taking founding clients? This answers objections 1 and 2.
3. Q3. The contact form lists budget ranges in dollars. That is a price signal. Keep, rename without numbers, or remove?
4. Q4. Who does the work? Naming people would answer objection 2. Nothing is named today.
5. Q5. What is the measure at the end of the Launch step? "Whether the belief is taking hold" needs a named measure.
6. Q6. Do you want to test the hero line with five founders before deciding whether to change it?
7. Q7. Palette and type: stay as is, or move toward the Influence Bible palette?
8. Q8. Will you offer a free diagnosis as the gift before the ask? If yes, what exactly is in it?
9. Q9. Vercel serves every file in this repo. After a merge, this document would be public at `installbeliefs.com/docs/MARKETING_NARRATIVE.md`, as `CHANGELOG.md` already is. Keep it public, or add an ignore file so docs are not served? The GitHub repo is public either way.
