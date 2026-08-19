#!/usr/bin/env node
/* =====================================================================
   Sets your live domain everywhere it is needed, in one command:

       node tools/set-domain.js https://your-domain.com

   Updates:
     js/data.js    site.domain
     index.html    canonical, og:url, og:image, twitter:image
     robots.txt    Sitemap line
     sitemap.xml   every <loc> and hreflang href
   ===================================================================== */

const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");

let domain = process.argv[2];
if (!domain) {
  console.error("Usage: node tools/set-domain.js https://your-domain.com");
  process.exit(1);
}
domain = domain.trim().replace(/\/+$/, "");
/* A base URL, with an optional path — GitHub Pages project sites live under
   one (https://user.github.io/repo), Cloudflare Pages and custom domains
   do not (https://easin.dev). Both are accepted. */
if (!/^https?:\/\/[^\s/]+\.[^\s/]+(\/[^\s]*)?$/.test(domain)) {
  console.error("That does not look like a site URL.");
  console.error("Examples:  https://easin.dev");
  console.error("           https://username.github.io/repo-name");
  process.exit(1);
}

/* find whatever domain is configured right now, so we can replace it */
const dataPath = path.join(ROOT, "js", "data.js");
const current = (fs.readFileSync(dataPath, "utf8").match(/domain:\s*"([^"]+)"/) || [])[1];
if (!current) { console.error("Could not read site.domain from js/data.js"); process.exit(1); }
if (current === domain) { console.log("Domain is already set to " + domain + " — nothing to do."); process.exit(0); }

const files = ["js/data.js", "index.html", "robots.txt", "sitemap.xml"];
const changed = [];
for (const rel of files) {
  const p = path.join(ROOT, rel);
  const before = fs.readFileSync(p, "utf8");
  const after = before.split(current).join(domain);
  if (after !== before) {
    fs.writeFileSync(p, after);
    const n = before.split(current).length - 1;
    changed.push(rel + " (" + n + (n === 1 ? " reference)" : " references)"));
  }
}

/* keep sitemap lastmod honest */
const smPath = path.join(ROOT, "sitemap.xml");
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(smPath, fs.readFileSync(smPath, "utf8").replace(/<lastmod>[^<]*<\/lastmod>/g, "<lastmod>" + today + "</lastmod>"));

console.log("Domain set to " + domain);
changed.forEach(f => console.log("  updated " + f));
console.log("  updated sitemap.xml lastmod -> " + today);
console.log("\nCommit and push, then redeploy.");
