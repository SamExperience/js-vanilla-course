# Mini-project 3 — Market dashboard

**Prerequisites:** topics 01 → 23.
**Repo to create:** `js-market-dashboard` (public).
**Setup and git:** [PUBLISHING_GUIDE.md](../PUBLISHING_GUIDE.md).

This is the biggest project of the course so far, and the most useful one to show. Do
it in two passes — that split is the exercise, not a suggestion.

## The brief

A dashboard of crypto market data: a list of assets, a search field, and a detail view
for the one you click.

**Pass 1 — static.** Build the whole thing against a hardcoded dataset in
`src/market-data.js`. Copy a handful of real entries from
`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`, opened once in your
browser, so the shape is realistic.

**Pass 2 — live.** Replace the import with a real `fetch` to that same URL. Nothing
about the rendering should need to change. If it does, your rendering knew too much
about where the data came from.

Commit pass 1 before starting pass 2. Those commits are the story this repo tells.

## Requirements

- [ ] List of assets, each row showing symbol, name, image and current price
- [ ] Only assets with `total_volume` above 1,000,000 are listed
- [ ] The header shows `shown/total`, e.g. `28/100`
- [ ] A search field filters the list by symbol as you type
- [ ] Clicking a row opens a detail view with more fields than the list shows, and a
      button back to the list — with the search still applied
- [ ] URLs live in `src/services/`, and no file that touches the DOM contains one
- [ ] Loading, error and no-results states are all handled and visible
- [ ] The data refreshes on its own every 60 seconds

## Constraints

By this point the course has taught you the whole language, so nothing here is out of
reach. That makes restraint the actual skill: a brief this small is finished when it
does what it says, not when you have used everything you know.

- One listener on the list container, not one per row. The rows are created after the
  listener exists — this is exactly what delegation is for (LESSON 45).
- URLs live in `src/services/` only. No file that touches the DOM may contain one.
- No `localStorage` caching. Get the live path working first; caching a response you
  cannot fetch reliably only hides the problem.
- No framework, no library, no CSS framework. Plain JavaScript and plain CSS.

## Done when

- [ ] Reloading twice shows slightly different prices — proof the data is live
- [ ] The volume filter and the symbol search both give counts you can verify by hand
- [ ] Clicking any row opens the matching asset, and "back" returns to the filtered list
- [ ] Turning off your network and reloading shows the error state, not a blank page
      and not an uncaught error in the console
- [ ] Leaving the page open for 60 seconds updates it with no interaction
- [ ] `npm run build` passes and the console is clean
- [ ] The README says, in one sentence, that the project started on a static dataset
      and moved to live data — it is the most interesting thing about it
- [ ] The repo is pushed

## If you get stuck

Reread `23_fetch_api` (`response.ok`, the loading/error states, the `services/` split)
and `21_dom_events` (delegation). If nothing arrives, open the Network tab: the public
CoinGecko API rate-limits, and reloading too fast returns 429. That is not your bug,
but handling it visibly is your job.

## If you want to push further

Optional, and only once everything above is done: format prices and volumes with
`Intl.NumberFormat` instead of printing raw numbers. Mention it in the README if you do.

## Check your work

When you think you are finished — not before, and not instead of the checklist above —
open a new session with your AI assistant and paste **three things**: `review-prompt.txt`
from this folder, the whole of this file, and your code.

The file carries the requirements and constraints, so the assistant reviews you against
this brief rather than its own idea of what a project should look like. It will point
at what is wrong without fixing it for you. If it finds nothing, you are done: write
the README and push.
