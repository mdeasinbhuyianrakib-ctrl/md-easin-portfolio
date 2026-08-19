#!/usr/bin/env node
/* =====================================================================
   Pre-publish checklist. Tells you exactly what is still unset:

       node tools/check-ready.js

   Nothing here is an error — an empty value simply hides that item on the
   site. This is a reminder list, not a build step.
   ===================================================================== */

const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
global.window = {};
require(path.join(ROOT, "js", "data.js"));
const D = global.window.PORTFOLIO_DATA;

const set = v => typeof v === "string" && v.trim() !== "";
const todo = [], done = [], note = [];
const add = (ok, label, hint) => (ok ? done : todo).push(ok ? label : label + "  →  " + hint);

/* --- contact --- */
add(set(D.contact.email),    "Email",           "js/data.js → contact.email");
add(set(D.contact.phone),    "Phone",           'js/data.js → contact.phone   e.g. "+9665XXXXXXXX"');
add(set(D.contact.whatsapp), "WhatsApp",        'js/data.js → contact.whatsapp   digits only, e.g. "9665XXXXXXXX"');
add(set(D.contact.linkedin), "LinkedIn",        "js/data.js → contact.linkedin");
add(set(D.contact.github),   "GitHub",          "js/data.js → contact.github");

/* --- images --- */
add(set(D.personal.photo),   "Profile photo",   "put a photo in images/profile/ then set personal.photo");
const noImg = D.projects.filter(p => !set(p.image)).length;
add(noImg === 0, "Project images", noImg + " project(s) have no image");

/* --- files --- */
const cv = path.join(ROOT, D.site.cvFile);
add(fs.existsSync(cv), "CV file (" + D.site.cvFile + ")", "add the PDF, or run: bash tools/build-cv.sh");

/* --- domain --- */
const placeholder = /pages\.dev$/.test(D.site.domain);
add(set(D.site.domain) && !placeholder, "Live domain", "run: node tools/set-domain.js https://your-domain.com");

/* --- language levels --- */
const langs = D.personal.spokenLanguages.filter(l => set(l.note && l.note.en)).length;
add(langs === D.personal.spokenLanguages.length, "Language levels", "js/data.js → personal.spokenLanguages[].note");

/* --- things that are intentionally empty --- */
if (!D.experience.length)     note.push("experience[] is empty  → the site shows the Current Focus timeline instead of employment history");
if (!D.certifications.length) note.push("certifications[] is empty  → the site shows one honest note instead of certificate cards");
if (!D.education.length)      note.push("education[] is empty  → the education block is hidden");
const live = D.projects.filter(p => p.status === "live").length;
note.push(D.projects.length + " project(s): " + D.projects.filter(p => p.status === "planned").length + " planned, " +
          D.projects.filter(p => p.status === "development").length + " in development, " + live + " live");
if (set(D.form.endpoint)) note.push("Contact form POSTs to " + D.form.endpoint);
else note.push("Contact form has no backend  → it opens the visitor's email app (this is intentional and honest)");

const line = "─".repeat(64);
console.log("\n" + line + "\n  PORTFOLIO READINESS\n" + line);
console.log("\n  Ready (" + done.length + ")");
done.forEach(d => console.log("    [x] " + d));
if (todo.length) {
  console.log("\n  Still to add (" + todo.length + ")");
  todo.forEach(t => console.log("    [ ] " + t));
} else {
  console.log("\n  Nothing outstanding.");
}
console.log("\n  By design");
note.forEach(n => console.log("    -  " + n));
console.log("\n" + line);
console.log("  Empty values hide themselves — the site never shows a broken link.");
console.log(line + "\n");
