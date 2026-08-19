# cv/

## Served path

    /cv/MD-Easin-Bhuyian-CV.pdf

Every "Download CV" button on the site points here. The path is configured in
`js/data.js` → `site.cvFile`. If you rename the file, update that one value.

## Files

| File | Purpose |
|---|---|
| `MD-Easin-Bhuyian-CV.pdf` | The live download. A real, generated PDF. |
| `cv-source.html` | Editable source for the PDF above. |

## Replacing the CV

**Option A — use your own PDF (simplest)**

Replace `MD-Easin-Bhuyian-CV.pdf`, keeping the exact filename.

**Option B — edit the included source**

1. Edit `cv-source.html`
2. Rebuild:

   ```bash
   bash ../tools/build-cv.sh
   ```

   Needs Chrome or Chromium. If it is not on your PATH:
   `bash ../tools/build-cv.sh /path/to/chrome`

## What is in the current PDF

Only information that is verifiable from the portfolio itself: profile summary,
skills with indicative levels, services, current focus, and the planned
portfolio projects labelled by status. There is **no** employment history and
**no** certifications section, because none have been provided — their absence
is accurate, and inventing them would not be.

Add real roles, education and certifications to `js/data.js` first, then mirror
them here.

## After deploying

Confirm the file actually serves:

    https://YOUR-DOMAIN/cv/MD-Easin-Bhuyian-CV.pdf
