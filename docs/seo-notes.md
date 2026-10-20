# SEO monitoring notes

Tracking notes from Google Search Console audits. Not published anywhere on
the site; kept here so findings aren't lost between review cycles.

## Backlinks (reviewed 2026-10-20, from GSC Links report)

| Source         | Status                | Action                                   |
| -------------- | ---------------------- | ----------------------------------------- |
| nextdoor.co.uk | Active                 | Keep                                      |
| yell.com       | Active                 | Keep                                      |
| leadboba.com   | Inactive (404 on referring page) | Monitor only — do not disavow/remove. Re-check next audit; only consider disavowing if it starts showing spam/toxic signals, not just because the page 404s. |

## Sitemap (reviewed 2026-10-20)

- `app/sitemap.ts` was checked against the live route list: 24 URLs, all
  unique, all returning HTTP 200 locally, no `<script>` or other non-sitemap
  elements in the rendered XML.
- GSC's "23 discovered" count (vs. the sitemap's 24 URLs) and the reported
  `<script>` elements were not reproducible from the current codebase or a
  local production build. The most likely explanation is that GSC's figure
  predates the `/areas` hub page (added shortly before this audit) and/or
  reflects a stale crawl of an older deployment. No code issue was found to
  fix. Recommended follow-up: resubmit the sitemap in GSC and request
  indexing for `/areas`, then re-check the discovered-page count and the
  raw sitemap source after the next crawl.
