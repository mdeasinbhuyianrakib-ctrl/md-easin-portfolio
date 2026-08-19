# MD Easin Bhuyian — AI Automation Engineer

Personal CV + portfolio website. Static HTML/CSS/vanilla JS, no build step, no
dependencies. Deployable to Cloudflare Pages as-is.

**পুরো সাইটের কনটেন্ট একটি ফাইল থেকে এডিট করা যায়: [`js/data.js`](js/data.js)**

---

## ১. প্রজেক্ট স্ট্রাকচার / Project structure

```
/
├── index.html                    # page shell + SEO meta + inline icon sprite
├── robots.txt
├── sitemap.xml
├── _headers                      # Cloudflare Pages security + cache headers
├── README.md
├── css/
│   └── styles.css                # all styling (mobile-first, RTL-aware)
├── js/
│   ├── data.js                   # ← আপনার সব কনটেন্ট এখানে (EDIT THIS)
│   ├── i18n.js                   # interface translations (en / ar / bn)
│   └── app.js                    # renderer + interactions (no need to edit)
├── cv/
│   ├── MD-Easin-Bhuyian-CV.pdf   # served at /cv/MD-Easin-Bhuyian-CV.pdf
│   ├── cv-source.html            # editable CV source
│   └── README.md
├── images/
│   ├── profile/                  # your portrait
│   ├── projects/                 # project screenshots
│   └── branding/                 # favicon, logo, og-cover.png
└── tools/
    ├── check-ready.js            # কী কী এখনো বাকি তা দেখায়
    ├── set-domain.js             # এক কমান্ডে সব জায়গায় ডোমেইন বসায়
    ├── build-diagrams.js         # প্রজেক্টের ওয়ার্কফ্লো ডায়াগ্রাম তৈরি করে
    └── build-cv.sh               # cv-source.html থেকে CV PDF তৈরি করে
```

## দ্রুত কমান্ড / Quick commands

```bash
node tools/check-ready.js                          # কী কী বাকি আছে দেখুন
node tools/set-domain.js https://your-domain.com   # ডোমেইন বসান (৪ ফাইলে, ১৩ জায়গায়)
node tools/build-diagrams.js                       # প্রজেক্ট ডায়াগ্রাম আবার বানান
bash  tools/build-cv.sh                            # CV PDF আবার বানান
python3 -m http.server 8000                        # লোকালি চালান
```

---

## ২. কীভাবে কনটেন্ট আপডেট করবেন / How to update content

সবকিছু `js/data.js`-এর `PORTFOLIO_DATA` অবজেক্টে আছে। UI-এর কোড ছুঁতে হবে না।

| আপনি যা বদলাতে চান | `js/data.js`-এর কোন অংশ |
|---|---|
| নাম, টাইটেল, লোকেশন, ট্যাগলাইন, ইন্ট্রো | `personal` |
| প্রোফাইল ছবি | `personal.photo` |
| ইমেইল, ফোন, WhatsApp, LinkedIn, GitHub | `contact` |
| ডোমেইন, CV ফাইলের নাম | `site` |
| About-এর তিনটি ব্লক ও ফোকাস লিস্ট | `about` |
| সেবা (৬টি কার্ড) | `services` |
| দক্ষতা ও লেভেল (`core` / `working` / `learning`) | `skills` |
| প্রজেক্ট (problem, solution, workflow, tech, outcome, status, links) | `projects` |
| Current Focus টাইমলাইন | `focus` |
| আসল চাকরির অভিজ্ঞতা | `experience` |
| শিক্ষা | `education` |
| সার্টিফিকেট | `certifications` |
| ফর্মের প্রজেক্ট টাইপ ও বাজেট অপশন | `form` |

### গুরুত্বপূর্ণ নিয়ম / Important rules

- **খালি স্ট্রিং (`""`) দিলে সেই আইটেম সাইট থেকে নিজে থেকেই লুকিয়ে যায়।**
  যেমন `whatsapp: ""` থাকলে WhatsApp বাটন দেখাবে না, বরং "Not published yet" লেখা থাকবে।
- প্রতিটি দৃশ্যমান লেখা `{ en, ar, bn }` ফরম্যাটে। অনুবাদ না দিলে ইংরেজিটাই দেখাবে।
- `// TODO` মার্ক করা প্রতিটি ভ্যালু প্রকাশের আগে ঠিক করে নিন।
- `experience: []` খালি থাকা অবস্থায় সাইট "Current Focus" দেখায়, কোনো বানানো চাকরি নয়।
- `certifications: []` খালি থাকলে একটি সৎ নোট দেখায় — কোনো ভুয়া সার্টিফিকেট কার্ড নয়।
- প্রজেক্টের `status` কখনো `"live"` করবেন না যতক্ষণ না সেটি সত্যিই লাইভ।
  বৈধ মান: `"planned"` · `"development"` · `"live"`

### উদাহরণ / Example

```js
// js/data.js
contact: {
  email:    "mdeasinbhuyianrakib@gmail.com",
  phone:    "+966500000000",
  whatsapp: "966500000000",              // digits only, with country code
  linkedin: "https://www.linkedin.com/in/your-handle",
  github:   "https://github.com/mdeasinbhuyianrakib-ctrl"
}
```

সেভ করে ব্রাউজার রিফ্রেশ করলেই পরিবর্তন দেখা যাবে। কোনো বিল্ড লাগে না।

---

## ৩. ছবি / Images

| ফোল্ডার | কী রাখবেন |
|---|---|
| `images/profile/` | আপনার পোর্ট্রেট (~800×1000px, JPG/WebP, <200KB) |
| `images/projects/` | প্রজেক্টের ছবি — এখন ৬টি জেনারেট করা ওয়ার্কফ্লো ডায়াগ্রাম আছে |
| `images/branding/` | favicon, logo, og-cover.png (তৈরি করা আছে) |

ছবি যোগ করার পর `js/data.js`-এ পাথ বসান:

```js
personal: { photo: "images/profile/md-easin-bhuyian.jpg" }
projects: [{ image: "images/projects/ai-customer-support.jpg", ... }]
```

ছবি না থাকলে বা লোড না হলে সাইট নিজে থেকেই পরিচ্ছন্ন প্লেসহোল্ডার দেখায় —
কোনো ভাঙা ছবির আইকন বা ভাঙা লেআউট হয় না। অন্য কারো স্টক ফটো ব্যবহার করবেন না।

**প্রজেক্টের ছবি:** প্রতিটি প্রজেক্টের জন্য একটি করে ওয়ার্কফ্লো ডায়াগ্রাম
তৈরি করা আছে (`images/projects/*.svg`), যেগুলো `js/data.js`-এর `workflow`
থেকেই আঁকা — তাই কার্ডে যা লেখা, ছবিতেও তাই। প্রতিটিতে "PLANNED WORKFLOW"
লেখা আছে, অর্থাৎ এটি পরিকল্পিত প্রসেসের ডায়াগ্রাম, চালু সিস্টেমের স্ক্রিনশট নয়।
ওয়ার্কফ্লো এডিট করলে `node tools/build-diagrams.js` চালালেই ছবি আপডেট হবে।
আসল প্রজেক্ট দাঁড়িয়ে গেলে n8n/Make ক্যানভাসের স্ক্রিনশট দিয়ে বদলে দিন —
সেটাই সবচেয়ে বিশ্বাসযোগ্য।

---

## ৪. CV / সিভি

CV সার্ভ হয় ঠিক এই পাথে:

```
/cv/MD-Easin-Bhuyian-CV.pdf
```

সাইটের তিনটি "Download CV" বাটনই এই একই ফাইলে যায় (পাথ আসে
`js/data.js` → `site.cvFile` থেকে)।

**আপনার নিজের CV বসানোর দুইটি উপায়:**

1. **সহজ উপায়** — আপনার তৈরি PDF-টির নাম `MD-Easin-Bhuyian-CV.pdf` রেখে
   `cv/` ফোল্ডারে থাকা ফাইলটি রিপ্লেস করুন।
2. **এখানকার টেমপ্লেট এডিট করে** — `cv/cv-source.html` এডিট করে চালান:

   ```bash
   bash tools/build-cv.sh
   ```

   (Chrome বা Chromium লাগবে। অন্য পাথে থাকলে:
   `bash tools/build-cv.sh /path/to/chrome`)

ডিপ্লয়ের পর যাচাই করুন: `https://YOUR-DOMAIN/cv/MD-Easin-Bhuyian-CV.pdf`
আসল PDF ফাইলটি রিটার্ন করছে কি না।

---

## ৫. লোকাল রান / Run locally

`file://` দিয়ে খুললে `fetch` কাজ করে না, তাই একটি ছোট সার্ভার ব্যবহার করুন:

```bash
python3 -m http.server 8000
# অথবা
npx http-server -p 8000 -c-1
```

তারপর ব্রাউজারে: http://localhost:8000

---

## ৬. Cloudflare Pages ডিপ্লয়

### GitHub থেকে (রেকমেন্ডেড)

1. এই রিপোজিটরি GitHub-এ পুশ করুন।
2. Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Pages**
   → **Connect to Git**.
3. রিপোজিটরি সিলেক্ট করুন।
4. বিল্ড সেটিংস:
   - **Framework preset:** `None`
   - **Build command:** *(খালি রাখুন)*
   - **Build output directory:** `/`
   - **Production branch:** `main`
5. **Save and Deploy** → `https://<project>.pages.dev` লিংক পাবেন।

### সরাসরি আপলোড

Cloudflare Pages → Create application → Pages → **Upload assets** → পুরো
ফোল্ডারটি ড্র্যাগ করে দিন।

### ডিপ্লয়ের পরের কাজ

ডোমেইন ঠিক হয়ে গেলে একটি কমান্ডেই সব জায়গায় বসে যাবে:

```bash
node tools/set-domain.js https://your-domain.com
```

এটি `js/data.js`, `index.html` (canonical, og:url, og:image, twitter:image),
`robots.txt` আর `sitemap.xml` — চারটি ফাইলের ১৩টি রেফারেন্স আপডেট করে এবং
sitemap-এর `lastmod` আজকের তারিখে সেট করে। এরপর commit + push করলেই
Cloudflare নিজে থেকে আবার ডিপ্লয় করবে।

---

## ৭. কন্টাক্ট ফর্ম / Contact form

ডিফল্টে **কোনো ব্যাকএন্ড নেই** — সাবমিট করলে ভিজিটরের নিজের ইমেইল অ্যাপ খোলে
এবং সব তথ্য আগে থেকেই ভরা থাকে। এই ওয়েবসাইটে কিছুই সেভ হয় না, এবং ফর্মটি
মিথ্যা করে "পাঠানো হয়েছে" দেখায় না। WhatsApp নম্বর দিলে একটি WhatsApp
বাটনও দেখা যাবে।

আসল ব্যাকএন্ড যুক্ত করতে হলে `js/data.js`-এ শুধু endpoint দিন:

```js
form: { endpoint: "https://your-worker.workers.dev/inquiry" }
```

ফর্মটি তখন ওই URL-এ JSON POST করবে (`name, email, company, projectType,
budget, message`)।

> **নিরাপত্তা:** কোনো API key, token বা পাসওয়ার্ড কখনোই এই রিপোজিটরির কোনো
> ফাইলে রাখবেন না। ফ্রন্টএন্ড কোড সবাই পড়তে পারে। সিক্রেট রাখুন Cloudflare
> Worker-এর environment variable-এ।

---

## ৮. ভাষা / Languages

- English (ডিফল্ট) · العربية (RTL) · বাংলা
- ভাষা বদলালে পেজ রিলোড হয় না; পছন্দটি `localStorage`-এ সেভ থাকে।
- আরবিতে `dir="rtl"` সেট হয় এবং পুরো লেআউট মিরর হয়।
- ইন্টারফেসের লেখা `js/i18n.js`-এ, আপনার কনটেন্টের অনুবাদ `js/data.js`-এ।

নতুন লেখা যোগ করলে তিন ভাষাতেই দিন — অনুবাদ না থাকলে ইংরেজিটাই দেখাবে।

---

## ৯. যা যাচাই করা হয়েছে / Verified

- ৩২০px থেকে ১৯২০px পর্যন্ত ১৪টি ভিউপোর্টে × ৩ ভাষায় — কোনো horizontal scroll নেই
- ৩৬০×৮০০, ৩৯০×৮৪৪, ৪১২×৯১৫, ৭৬৮×১০২৪, ১৩৬৬×৭৬৮, ১৪৪০×৯০০ — সবগুলো পরীক্ষিত
- কোনো console error নেই, কোনো ভাঙা internal link নেই, কোনো ভাঙা asset নেই
- সব ছবিতে alt টেক্সট, সব ফর্ম ফিল্ডে label, সব বাটনে accessible name
- কীবোর্ড নেভিগেশন, ফোকাস রিং, Escape দিয়ে মেনু বন্ধ, স্কিপ লিংক
- মোবাইল মেনু সেকশন সিলেক্ট করার পর ঠিকভাবে বন্ধ হয়
- আরবি RTL ও বাংলা ইউনিকোড রেন্ডারিং
- CV পাথ তিনটি বাটনেই এক: `cv/MD-Easin-Bhuyian-CV.pdf`
- `prefers-reduced-motion` সাপোর্ট, JavaScript বন্ধ থাকলেও সব কনটেন্ট দেখা যায়

---

## ১০. সততার নিয়ম / Honesty policy

এই সাইটে কোনো বানানো তথ্য নেই:

- কোনো চাকরির ইতিহাস, ক্লায়েন্ট, রেভিনিউ বা টেস্টিমোনিয়াল নেই
- কোনো ভুয়া সার্টিফিকেট কার্ড নেই — শুধু একটি সৎ নোট
- কোনো "X বছরের অভিজ্ঞতা" বা বানানো পরিসংখ্যান নেই
- প্রজেক্টগুলো স্পষ্টভাবে **Planned** লেবেল করা এবং "Target outcome" লেখা
- দক্ষতার লেভেল ইঙ্গিতমূলক, এবং সাইটে সেটি স্পষ্ট করে বলা আছে
- কোনো ভুয়া রিভিউ বা structured data নেই

নতুন কিছু যোগ করার সময় এই নিয়মটাই ধরে রাখুন — এটিই সাইটটিকে বিশ্বাসযোগ্য রাখে।

---

© MD Easin Bhuyian
