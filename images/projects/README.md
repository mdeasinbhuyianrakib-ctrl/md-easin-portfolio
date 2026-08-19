# images/projects/

Each project card shows one image. The path is set per project in
`js/data.js` → `projects[].image`.

## What is here now

Six generated workflow diagrams (`*.svg`), drawn from each project's own
`workflow` value in `js/data.js`, so the picture always matches what the card
says. They are labelled **PLANNED WORKFLOW** — they show a designed process,
not a screenshot of a running system.

Regenerate them after editing a project title or workflow:

```bash
node tools/build-diagrams.js
```

No dependencies, no browser needed. Each file is around 4 KB.

## Replacing them with real screenshots

Once a project actually exists, a real screenshot is far more convincing than
a diagram. Drop the file in this folder and point `js/data.js` at it:

```js
image: "images/projects/ai-customer-support.jpg"
```

Good screenshots to use:
- the n8n or Make.com canvas of the running workflow
- a dashboard or report the automation produces
- a before/after of the process

Recommendations: 16:10 ratio, around 1280 × 800 px, under ~250 KB each.

Do not use stock photos that imply work you have not done. If an image is
missing or fails to load, the card falls back to a clean navy tile — the
layout never breaks.
