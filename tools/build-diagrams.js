#!/usr/bin/env node
/* =====================================================================
   Generates one workflow diagram per project into images/projects/.

   The diagrams are drawn from each project's own `workflow` string in
   js/data.js, so they always match what the card says. They are labelled
   "Planned workflow" (or the project's real status) — they are diagrams of
   a designed process, not screenshots of a running system.

   Pure Node, no dependencies:

       node tools/build-diagrams.js

   Re-run it whenever you change a project title or workflow. Once you have
   a real screenshot (an n8n / Make canvas, a dashboard), just replace the
   file and point `image` in js/data.js at it.
   ===================================================================== */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
global.window = {};
require(path.join(ROOT, "js", "data.js"));
const DATA = global.window.PORTFOLIO_DATA;

const W = 1280, H = 800;
const STATUS = { planned: "Planned workflow", development: "Workflow in development", live: "Workflow" };

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/* rough text width for the system sans stack at a given size */
const textW = (s, size) => s.length * size * 0.56;

function layout(steps) {
  const FS = 21, PAD = 26, GAP = 26, ARROW = 34, MAXW = W - 160;
  const nodes = steps.map(t => ({ t, w: Math.max(150, Math.round(textW(t, FS) + PAD * 2)) }));
  const rows = [];
  let row = [], rowW = 0;
  for (const n of nodes) {
    const add = (row.length ? GAP + ARROW + GAP : 0) + n.w;
    if (row.length && rowW + add > MAXW) { rows.push({ items: row, w: rowW }); row = []; rowW = 0; }
    rowW += row.length ? add : n.w;
    row.push(n);
  }
  if (row.length) rows.push({ items: row, w: rowW });
  return { rows, FS, GAP, ARROW, H: 68 };
}

function diagram(project) {
  const title = project.title.en;
  const steps = String(project.workflow.en).split(/\s*(?:→|->)\s*/).map(s => s.trim()).filter(Boolean);
  const label = STATUS[project.status] || STATUS.planned;
  const { rows, FS, GAP, ARROW, H: NH } = layout(steps);

  const ROWGAP = 56;
  const TOP = 96, BOTTOM = H - 120;   /* the card supplies the title, so the canvas is the flow */
  const blockH = rows.length * NH + (rows.length - 1) * ROWGAP;
  let y = Math.round(TOP + (BOTTOM - TOP - blockH) / 2);

  let body = "";
  for (let ri = 0; ri < rows.length; ri++) {
    const r = rows[ri];
    let x = Math.round((W - r.w) / 2);
    r.items.forEach((n, i) => {
      if (i) {
        const ax = x + GAP;
        body += `<path d="M${ax} ${y + NH / 2} h${ARROW - 10}" stroke="#4C9AFF" stroke-width="2" fill="none"/>` +
                `<path d="M${ax + ARROW - 14} ${y + NH / 2 - 5} l6 5 -6 5" stroke="#4C9AFF" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
        x += GAP + ARROW + GAP;
      }
      body += `<rect x="${x}" y="${y}" width="${n.w}" height="${NH}" rx="12" fill="#ffffff" fill-opacity="0.07" stroke="#ffffff" stroke-opacity="0.20"/>` +
              `<text x="${x + n.w / 2}" y="${y + NH / 2 + 7}" text-anchor="middle" font-size="${FS}" fill="#DCE8F8" font-weight="500">${esc(n.t)}</text>`;
      x += n.w;
    });
    /* the flow continues on the next line — say so explicitly */
    if (ri < rows.length - 1) {
      const cx = W / 2, top = y + NH + 12, bot = y + NH + ROWGAP - 12;
      body += `<path d="M${cx} ${top} v${bot - top}" stroke="#4C9AFF" stroke-width="2" stroke-opacity="0.75" fill="none"/>` +
              `<path d="M${cx - 5} ${bot - 6} l5 6 5 -6" stroke="#4C9AFF" stroke-width="2" stroke-opacity="0.75" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    y += NH + ROWGAP;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(label)}: ${esc(steps.join(" then "))}">
  <title>${esc(title)} — ${esc(label)}</title>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#06162F"/><stop offset="0.55" stop-color="#0A1F44"/><stop offset="1" stop-color="#123063"/>
    </linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
    <radialGradient id="glow" cx="0.82" cy="0.1" r="0.7">
      <stop offset="0" stop-color="#1D6FE0" stop-opacity="0.34"/><stop offset="1" stop-color="#1D6FE0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <g font-family="Inter, 'Segoe UI', Helvetica, Arial, sans-serif">
    <rect width="${W}" height="${H}" fill="url(#bg)"/>
    <rect width="${W}" height="${H}" fill="url(#grid)"/>
    <rect width="${W}" height="${H}" fill="url(#glow)"/>
    <rect x="0" y="0" width="7" height="${H}" fill="#1D6FE0"/>
    ${body}
    <path d="M64 ${H - 78} h130" stroke="#1D6FE0" stroke-width="3" stroke-linecap="round"/>
    <text x="64" y="${H - 44}" font-size="19" font-weight="700" letter-spacing="3.6" fill="#7FB2FF">${esc(label.toUpperCase())}</text>
  </g>
</svg>
`;
}

const outDir = path.join(ROOT, "images", "projects");
fs.mkdirSync(outDir, { recursive: true });
const written = [];
for (const p of DATA.projects) {
  const name = slug(p.title.en) + ".svg";
  fs.writeFileSync(path.join(outDir, name), diagram(p));
  written.push("images/projects/" + name);
}
console.log("Generated " + written.length + " diagram(s):");
written.forEach(f => console.log("  " + f));
