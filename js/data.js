/* =====================================================================
   PORTFOLIO_DATA — SINGLE SOURCE OF TRUTH
   ---------------------------------------------------------------------
   এই একটি ফাইল এডিট করলেই পুরো ওয়েবসাইটের কনটেন্ট বদলে যাবে।
   Edit ONLY this file to update the website content.
   You never need to touch index.html, styles.css or app.js.

   RULES (গুরুত্বপূর্ণ):
   1. Never write anything here that is not true.
   2. Empty string ("") = the item is hidden automatically on the site.
   3. Every text field that visitors read is written as { en, ar, bn }.
      If a translation is missing, English is used as fallback.
   4. Placeholder / not-yet-verified values are marked with  // TODO
   ===================================================================== */

window.PORTFOLIO_DATA = {

  /* ------------------------------------------------------------------
     1. PERSONAL
     ------------------------------------------------------------------ */
  personal: {
    name:      "MD Easin Bhuyian",
    shortName: "MD EASIN BHUYIAN",
    initials:  "ME",
    title: {
      en: "AI Automation Engineer",
      ar: "مهندس أتمتة بالذكاء الاصطناعي",
      bn: "এআই অটোমেশন ইঞ্জিনিয়ার"
    },
    location: {
      en: "Hafar Al Batin, Saudi Arabia",
      ar: "حفر الباطن، المملكة العربية السعودية",
      bn: "হাফার আল বাতিন, সৌদি আরব"
    },
    availability: {
      en: "Available for freelance projects",
      ar: "متاح لمشاريع العمل الحر",
      bn: "ফ্রিল্যান্স প্রজেক্টের জন্য উপলব্ধ"
    },
    tagline: {
      en: "Automating workflows. Building intelligent solutions.",
      ar: "أتمتة سير العمل. بناء حلول ذكية.",
      bn: "ওয়ার্কফ্লো অটোমেশন। বুদ্ধিমান সমাধান তৈরি।"
    },
    intro: {
      en: "I design AI-powered workflows, automation systems and intelligent business solutions that help organizations reduce repetitive work and scale operations.",
      ar: "أصمّم سير عمل مدعوماً بالذكاء الاصطناعي وأنظمة أتمتة وحلول أعمال ذكية تساعد المؤسسات على تقليل العمل المتكرر وتوسيع نطاق عملياتها.",
      bn: "আমি এআই-চালিত ওয়ার্কফ্লো, অটোমেশন সিস্টেম ও বুদ্ধিমান ব্যবসায়িক সমাধান ডিজাইন করি, যা প্রতিষ্ঠানের পুনরাবৃত্ত কাজ কমায় এবং কার্যক্রম সম্প্রসারণে সহায়তা করে।"
    },
    /* Profile photo.
       Leave "" and a clean initials placeholder is shown — nothing breaks.
       TODO: add your portrait to images/profile/ and set the path here, e.g.
             photo: "images/profile/md-easin-bhuyian.jpg" */
    photo:    "",
    photoAlt: {
      en: "Portrait of MD Easin Bhuyian, AI Automation Engineer",
      ar: "صورة شخصية لـ MD Easin Bhuyian، مهندس أتمتة بالذكاء الاصطناعي",
      bn: "এমডি ইয়াসিন ভূঁইয়া, এআই অটোমেশন ইঞ্জিনিয়ারের ছবি"
    },
    /* Spoken languages — shown in the hero card.
       TODO: `note` is intentionally blank because your actual proficiency is
       not something this site should guess. Fill each one in yourself, e.g.
         note: { en: "Native", ar: "اللغة الأم", bn: "মাতৃভাষা" }
         note: { en: "Professional", ar: "مستوى مهني", bn: "পেশাগত" }
         note: { en: "Working", ar: "مستوى عملي", bn: "কর্মক্ষম" }
         note: { en: "Basic", ar: "مستوى أساسي", bn: "প্রাথমিক" }
       A blank note simply shows the language name with no level. */
    spokenLanguages: [
      { name: { en: "English", ar: "الإنجليزية", bn: "ইংরেজি" }, note: { en: "", ar: "", bn: "" } },
      { name: { en: "Arabic",  ar: "العربية",    bn: "আরবি" },   note: { en: "", ar: "", bn: "" } },
      { name: { en: "Bengali", ar: "البنغالية",  bn: "বাংলা" },  note: { en: "", ar: "", bn: "" } }
    ]
  },

  /* ------------------------------------------------------------------
     2. CONTACT + SOCIAL
     Leave a value as "" and the item disappears from the whole site.
     ------------------------------------------------------------------ */
  contact: {
    // TODO: verify this is the address you want public.
    email: "easinbhuyian@gmail.com",

    // TODO: add your real phone number in international format, e.g. "+9665XXXXXXXX"
    phone: "",

    // TODO: add WhatsApp number, DIGITS ONLY with country code, e.g. "9665XXXXXXXX"
    whatsapp: "",

    // TODO: add your LinkedIn profile URL, e.g. "https://www.linkedin.com/in/username"
    linkedin: "",

    // GitHub account that owns this repository.
    github: "https://github.com/mdeasinbhuyianrakib-ctrl",

    /* Prefilled WhatsApp / email subject text */
    inquirySubject: "Project inquiry — AI automation"
  },

  /* ------------------------------------------------------------------
     3. SITE / SEO / CV
     ------------------------------------------------------------------ */
  site: {
    // TODO: replace with your real domain after deploying (no trailing slash)
    domain: "https://md-easin-portfolio.pages.dev",
    /* The CV file. Place the PDF at exactly this path. */
    cvFile: "cv/MD-Easin-Bhuyian-CV.pdf",
    copyrightStartYear: 2026
  },

  /* ------------------------------------------------------------------
     4. ABOUT
     ------------------------------------------------------------------ */
  about: {
    blocks: [
      {
        icon: "user",
        title: { en: "Who I Am", ar: "من أنا", bn: "আমি কে" },
        text: {
          en: "An AI Automation Engineer based in Hafar Al Batin, Saudi Arabia. I focus on connecting AI models, business software and data sources into workflows that run reliably without manual effort.",
          ar: "مهندس أتمتة بالذكاء الاصطناعي مقيم في حفر الباطن بالمملكة العربية السعودية. أركّز على ربط نماذج الذكاء الاصطناعي وبرامج الأعمال ومصادر البيانات في سير عمل يعمل بموثوقية دون تدخل يدوي.",
          bn: "সৌদি আরবের হাফার আল বাতিনে অবস্থানরত একজন এআই অটোমেশন ইঞ্জিনিয়ার। এআই মডেল, ব্যবসায়িক সফটওয়্যার ও ডেটা সোর্সকে এমন ওয়ার্কফ্লোতে যুক্ত করাই আমার কাজ, যা হাতে কাজ না করেই নির্ভরযোগ্যভাবে চলে।"
        }
      },
      {
        icon: "layers",
        title: { en: "What I Build", ar: "ما الذي أبنيه", bn: "আমি যা তৈরি করি" },
        text: {
          en: "Workflow automations, AI agents, API integrations and data pipelines — built with tools such as Python, n8n, Make.com and the OpenAI API, and documented so a team can actually maintain them.",
          ar: "أتمتة سير العمل، ووكلاء الذكاء الاصطناعي، وتكامل واجهات البرمجة، ومسارات معالجة البيانات — باستخدام أدوات مثل Python وn8n وMake.com وواجهة OpenAI، مع توثيق يتيح للفريق صيانتها فعلياً.",
          bn: "ওয়ার্কফ্লো অটোমেশন, এআই এজেন্ট, এপিআই ইন্টিগ্রেশন ও ডেটা পাইপলাইন — Python, n8n, Make.com ও OpenAI API-এর মতো টুল দিয়ে তৈরি এবং এমনভাবে ডকুমেন্টেড যাতে একটি টিম সেটি রক্ষণাবেক্ষণ করতে পারে।"
        }
      },
      {
        icon: "compass",
        title: { en: "How I Work", ar: "أسلوبي في العمل", bn: "আমি যেভাবে কাজ করি" },
        text: {
          en: "Map the process first, automate the repetitive part second. Every workflow is delivered with a clear diagram, an error path and a handover document — no black boxes, no hidden dependencies.",
          ar: "أرسم خريطة العملية أولاً، ثم أُتمِت الجزء المتكرر. يُسلَّم كل سير عمل مع مخطط واضح ومسار للأخطاء ووثيقة تسليم — بلا صناديق سوداء أو اعتماديات خفية.",
          bn: "প্রথমে প্রসেস ম্যাপ করি, এরপর পুনরাবৃত্ত অংশটি অটোমেট করি। প্রতিটি ওয়ার্কফ্লো স্পষ্ট ডায়াগ্রাম, এরর হ্যান্ডলিং পথ ও হ্যান্ডওভার ডকুমেন্টসহ ডেলিভার করা হয় — কোনো ব্ল্যাক বক্স বা লুকানো নির্ভরতা নয়।"
        }
      }
    ],
    /* Short factual highlights. Keep these verifiable. */
    highlights: [
      { en: "AI & workflow automation",       ar: "أتمتة الذكاء الاصطناعي وسير العمل", bn: "এআই ও ওয়ার্কফ্লো অটোমেশন" },
      { en: "Business process improvement",   ar: "تحسين عمليات الأعمال",              bn: "ব্যবসায়িক প্রক্রিয়া উন্নয়ন" },
      { en: "API & system integration",       ar: "تكامل واجهات البرمجة والأنظمة",     bn: "এপিআই ও সিস্টেম ইন্টিগ্রেশন" },
      { en: "Data processing & reporting",    ar: "معالجة البيانات وإعداد التقارير",   bn: "ডেটা প্রসেসিং ও রিপোর্টিং" },
      { en: "Documented, maintainable builds",ar: "أنظمة موثقة وقابلة للصيانة",        bn: "ডকুমেন্টেড ও রক্ষণাবেক্ষণযোগ্য সিস্টেম" }
    ]
  },

  /* ------------------------------------------------------------------
     5. SERVICES
     ------------------------------------------------------------------ */
  services: [
    {
      icon: "workflow",
      name: { en: "AI Workflow Automation", ar: "أتمتة سير العمل بالذكاء الاصطناعي", bn: "এআই ওয়ার্কফ্লো অটোমেশন" },
      desc: {
        en: "Design and build end-to-end workflows where AI handles classification, drafting and decision support, and the system handles the routing.",
        ar: "تصميم وبناء سير عمل متكامل يتولى فيه الذكاء الاصطناعي التصنيف وصياغة الردود ودعم القرار، بينما يتولى النظام التوجيه.",
        bn: "এমন এন্ড-টু-এন্ড ওয়ার্কফ্লো ডিজাইন ও তৈরি করা, যেখানে এআই শ্রেণিবিন্যাস, খসড়া তৈরি ও সিদ্ধান্ত-সহায়তা সামলায় এবং সিস্টেম রাউটিং সামলায়।"
      },
      tools: ["n8n", "Make.com", "OpenAI API", "Webhooks"]
    },
    {
      icon: "gears",
      name: { en: "Business Process Automation", ar: "أتمتة عمليات الأعمال", bn: "বিজনেস প্রসেস অটোমেশন" },
      desc: {
        en: "Map a repetitive manual process, remove the handoffs, and turn it into a reliable automated pipeline with error handling and alerts.",
        ar: "رسم خريطة العملية اليدوية المتكررة، وإزالة التسليمات اليدوية، وتحويلها إلى مسار آلي موثوق مع معالجة الأخطاء والتنبيهات.",
        bn: "পুনরাবৃত্ত ম্যানুয়াল প্রসেস ম্যাপ করে হাতবদল কমিয়ে সেটিকে এরর হ্যান্ডলিং ও অ্যালার্টসহ নির্ভরযোগ্য অটোমেটেড পাইপলাইনে রূপ দেওয়া।"
      },
      tools: ["Python", "n8n", "REST APIs", "Cron"]
    },
    {
      icon: "bot",
      name: { en: "AI Agent Development", ar: "تطوير وكلاء الذكاء الاصطناعي", bn: "এআই এজেন্ট ডেভেলপমেন্ট" },
      desc: {
        en: "Task-focused AI agents and assistants with defined tools, guardrails and a knowledge base — built for a specific job, not a generic chatbot.",
        ar: "وكلاء ومساعدون بالذكاء الاصطناعي مخصصون لمهام محددة، بأدوات وضوابط وقاعدة معرفة واضحة — مبنيّون لغرض محدد لا كروبوت محادثة عام.",
        bn: "নির্দিষ্ট কাজভিত্তিক এআই এজেন্ট ও অ্যাসিস্ট্যান্ট — সুনির্দিষ্ট টুল, গার্ডরেল ও নলেজ বেসসহ; সাধারণ চ্যাটবট নয়, নির্দিষ্ট কাজের জন্য তৈরি।"
      },
      tools: ["OpenAI API", "LangChain", "Python", "Vector search"]
    },
    {
      icon: "plug",
      name: { en: "API Integration", ar: "تكامل واجهات البرمجة", bn: "এপিআই ইন্টিগ্রেশন" },
      desc: {
        en: "Connect CRMs, spreadsheets, messaging platforms and internal tools so data moves between them automatically and consistently.",
        ar: "ربط أنظمة إدارة العملاء وجداول البيانات ومنصات المراسلة والأدوات الداخلية لتنتقل البيانات بينها تلقائياً وباتساق.",
        bn: "সিআরএম, স্প্রেডশিট, মেসেজিং প্ল্যাটফর্ম ও অভ্যন্তরীণ টুল সংযুক্ত করা, যাতে ডেটা স্বয়ংক্রিয় ও সামঞ্জস্যপূর্ণভাবে এক জায়গা থেকে আরেক জায়গায় যায়।"
      },
      tools: ["REST APIs", "Webhooks", "OAuth", "JSON"]
    },
    {
      icon: "sheet",
      name: { en: "Data & Spreadsheet Automation", ar: "أتمتة البيانات وجداول البيانات", bn: "ডেটা ও স্প্রেডশিট অটোমেশন" },
      desc: {
        en: "Automated collection, cleaning and consolidation of business data into spreadsheets or databases, with scheduled refreshes.",
        ar: "جمع البيانات وتنظيفها وتوحيدها تلقائياً في جداول بيانات أو قواعد بيانات، مع تحديث مجدول.",
        bn: "ব্যবসায়িক ডেটা স্বয়ংক্রিয়ভাবে সংগ্রহ, পরিষ্কার ও একত্র করে স্প্রেডশিট বা ডেটাবেসে রাখা, নির্ধারিত সময়ে রিফ্রেশসহ।"
      },
      tools: ["Google Sheets API", "Python", "SQL", "PostgreSQL"]
    },
    {
      icon: "blocks",
      name: { en: "Custom Automation Systems", ar: "أنظمة أتمتة مخصصة", bn: "কাস্টম অটোমেশন সিস্টেম" },
      desc: {
        en: "When an off-the-shelf tool does not fit, a custom script or service built around your exact process, deployed and documented.",
        ar: "عندما لا تناسبك الأدوات الجاهزة، أبني سكربتاً أو خدمة مخصصة حول عمليتك بالضبط، مع النشر والتوثيق.",
        bn: "রেডিমেড টুল যখন উপযুক্ত নয়, তখন আপনার নির্দিষ্ট প্রসেস ঘিরে কাস্টম স্ক্রিপ্ট বা সার্ভিস — ডিপ্লয় ও ডকুমেন্টেশনসহ।"
      },
      tools: ["Python", "JavaScript", "TypeScript", "Git"]
    }
  ],

  /* ------------------------------------------------------------------
     6. SKILLS
     level MUST be one of: "core" | "working" | "learning"
     These are self-assessed positioning labels, NOT certification scores.
     ------------------------------------------------------------------ */
  skills: {
    core: [
      { name: "AI & Workflow Automation", level: "core" },
      { name: "API Integrations",         level: "core" },
      { name: "Python",                   level: "working" },
      { name: "n8n",                      level: "working" },
      { name: "Make.com",                 level: "working" },
      { name: "JavaScript",               level: "working" },
      { name: "SQL / PostgreSQL",         level: "working" }
    ],
    tools: [
      { name: "OpenAI API",    level: "working" },
      { name: "REST APIs",     level: "core" },
      { name: "LangChain",     level: "learning" },
      { name: "Google Sheets", level: "working" },
      { name: "Git & GitHub",  level: "working" },
      { name: "Linux",         level: "working" },
      { name: "TypeScript",    level: "learning" }
    ]
  },

  /* ------------------------------------------------------------------
     7. PROJECTS
     status MUST be one of: "planned" | "development" | "live"
     NEVER set "live" unless the project is genuinely published.
     Empty links are hidden automatically.
     outcome = the TARGET outcome while status is planned/development.
     ------------------------------------------------------------------ */
  projects: [
    {
      status: "planned",
      image: "images/projects/ai-customer-support-automation.svg", // generated diagram — replace with a real screenshot when you have one
      title: { en: "AI Customer Support Automation", ar: "أتمتة دعم العملاء بالذكاء الاصطناعي", bn: "এআই কাস্টমার সাপোর্ট অটোমেশন" },
      problem: {
        en: "Support teams re-answer the same questions across email, WhatsApp and web chat, and replies slow down outside working hours.",
        ar: "تكرر فرق الدعم الإجابة على الأسئلة نفسها عبر البريد وواتساب والدردشة، وتتأخر الردود خارج ساعات العمل.",
        bn: "সাপোর্ট টিমকে ইমেইল, হোয়াটসঅ্যাপ ও ওয়েব চ্যাটে একই প্রশ্নের বারবার উত্তর দিতে হয় এবং অফিস সময়ের বাইরে উত্তর দিতে দেরি হয়।"
      },
      solution: {
        en: "An AI layer that reads the incoming message, answers from an approved knowledge base, and escalates anything it is not confident about to a human.",
        ar: "طبقة ذكاء اصطناعي تقرأ الرسالة الواردة وتجيب من قاعدة معرفة معتمدة، وتحوّل ما ليست واثقة منه إلى موظف بشري.",
        bn: "একটি এআই লেয়ার আসা মেসেজ পড়ে অনুমোদিত নলেজ বেস থেকে উত্তর দেয় এবং যেখানে নিশ্চিত নয়, সেটি মানুষের কাছে পাঠায়।"
      },
      workflow: {
        en: "Message → Intent detection → Knowledge base lookup → Draft reply → Confidence check → Send or escalate",
        ar: "رسالة ← تحديد النية ← البحث في قاعدة المعرفة ← صياغة الرد ← فحص الثقة ← الإرسال أو التصعيد",
        bn: "মেসেজ → ইনটেন্ট শনাক্তকরণ → নলেজ বেস অনুসন্ধান → খসড়া উত্তর → কনফিডেন্স যাচাই → পাঠানো বা এস্কেলেট"
      },
      outcome: {
        en: "Consistent first responses around the clock, with every uncertain case handed to a person.",
        ar: "ردود أولى متسقة على مدار الساعة، مع تحويل كل حالة غير مؤكدة إلى شخص.",
        bn: "চব্বিশ ঘণ্টা সামঞ্জস্যপূর্ণ প্রথম উত্তর, আর প্রতিটি অনিশ্চিত ক্ষেত্র মানুষের কাছে হস্তান্তর।"
      },
      tech: ["n8n", "OpenAI API", "Vector search", "Webhooks"],
      links: { github: "", demo: "", caseStudy: "" }
    },
    {
      status: "planned",
      image: "images/projects/lead-generation-automation.svg", // generated diagram — replace with a real screenshot when you have one
      title: { en: "Lead Generation Automation", ar: "أتمتة جذب العملاء المحتملين", bn: "লিড জেনারেশন অটোমেশন" },
      problem: {
        en: "Inbound leads arrive through several channels and are qualified by hand, so follow-up is inconsistent and slow.",
        ar: "تصل الفرص الواردة عبر قنوات متعددة ويجري تأهيلها يدوياً، فتصبح المتابعة غير متسقة وبطيئة.",
        bn: "একাধিক চ্যানেল দিয়ে লিড আসে এবং হাতে যাচাই করতে হয়, ফলে ফলো-আপ অসামঞ্জস্যপূর্ণ ও ধীর হয়।"
      },
      solution: {
        en: "A pipeline that captures every lead, scores it against defined criteria, writes it to the CRM and triggers the right follow-up sequence.",
        ar: "مسار يلتقط كل فرصة ويقيّمها وفق معايير محددة ويسجلها في نظام إدارة العملاء ويطلق تسلسل المتابعة المناسب.",
        bn: "একটি পাইপলাইন প্রতিটি লিড ধরে, নির্ধারিত মানদণ্ডে স্কোর করে, সিআরএমে লেখে এবং সঠিক ফলো-আপ সিকোয়েন্স চালু করে।"
      },
      workflow: {
        en: "Form or ad → Validation → AI scoring → CRM record → Assigned owner → Follow-up sequence",
        ar: "نموذج أو إعلان ← تحقق ← تقييم بالذكاء الاصطناعي ← سجل في CRM ← تعيين مسؤول ← تسلسل المتابعة",
        bn: "ফর্ম বা অ্যাড → যাচাই → এআই স্কোরিং → সিআরএম রেকর্ড → দায়িত্বপ্রাপ্ত ব্যক্তি → ফলো-আপ সিকোয়েন্স"
      },
      outcome: {
        en: "Every lead captured once, scored the same way, and followed up without manual sorting.",
        ar: "التقاط كل فرصة مرة واحدة، وتقييمها بالطريقة نفسها، ومتابعتها دون فرز يدوي.",
        bn: "প্রতিটি লিড একবারে ধরা, একই নিয়মে স্কোর করা এবং হাতে বাছাই ছাড়াই ফলো-আপ।"
      },
      tech: ["Make.com", "Webhooks", "Google Sheets", "CRM API"],
      links: { github: "", demo: "", caseStudy: "" }
    },
    {
      status: "planned",
      image: "images/projects/ai-email-automation.svg", // generated diagram — replace with a real screenshot when you have one
      title: { en: "AI Email Automation", ar: "أتمتة البريد الإلكتروني بالذكاء الاصطناعي", bn: "এআই ইমেইল অটোমেশন" },
      problem: {
        en: "A shared inbox mixes invoices, support requests and sales enquiries, and someone has to triage it manually every morning.",
        ar: "يختلط في البريد المشترك الفواتير وطلبات الدعم واستفسارات المبيعات، ويضطر شخص لفرزها يدوياً كل صباح.",
        bn: "একটি শেয়ার্ড ইনবক্সে ইনভয়েস, সাপোর্ট রিকোয়েস্ট ও সেলস জিজ্ঞাসা মিশে থাকে এবং প্রতিদিন সকালে কাউকে হাতে বাছাই করতে হয়।"
      },
      solution: {
        en: "Automatic classification, labelling and routing, with an AI-drafted reply that a human approves before it is sent.",
        ar: "تصنيف ووسم وتوجيه تلقائي، مع رد مقترح من الذكاء الاصطناعي يعتمده شخص قبل الإرسال.",
        bn: "স্বয়ংক্রিয় শ্রেণিবিন্যাস, লেবেলিং ও রাউটিং, সঙ্গে এআই-লিখিত খসড়া উত্তর যা পাঠানোর আগে মানুষ অনুমোদন করে।"
      },
      workflow: {
        en: "Inbox → Parse → Classify → Route to owner → Draft reply → Human approval → Send",
        ar: "البريد ← تحليل ← تصنيف ← توجيه للمسؤول ← صياغة رد ← موافقة بشرية ← إرسال",
        bn: "ইনবক্স → পার্স → শ্রেণিবিন্যাস → দায়িত্বপ্রাপ্তের কাছে রাউট → খসড়া উত্তর → মানুষের অনুমোদন → প্রেরণ"
      },
      outcome: {
        en: "A sorted inbox before the working day starts, with drafts ready for review.",
        ar: "بريد مرتّب قبل بدء يوم العمل، مع مسودات جاهزة للمراجعة.",
        bn: "কর্মদিবস শুরুর আগেই গোছানো ইনবক্স, রিভিউয়ের জন্য প্রস্তুত খসড়াসহ।"
      },
      tech: ["Python", "Gmail API", "OpenAI API", "n8n"],
      links: { github: "", demo: "", caseStudy: "" }
    },
    {
      status: "planned",
      image: "images/projects/business-data-automation.svg", // generated diagram — replace with a real screenshot when you have one
      title: { en: "Business Data Automation", ar: "أتمتة بيانات الأعمال", bn: "বিজনেস ডেটা অটোমেশন" },
      problem: {
        en: "Operational numbers live in separate exports, so building a weekly view means repeating the same copy-paste work.",
        ar: "تتوزع أرقام التشغيل على ملفات تصدير منفصلة، فيتحول إعداد تقرير أسبوعي إلى تكرار النسخ واللصق نفسه.",
        bn: "কার্যক্রমের সংখ্যাগুলো আলাদা আলাদা এক্সপোর্টে থাকে, তাই সাপ্তাহিক চিত্র তৈরি করতে একই কপি-পেস্ট কাজ বারবার করতে হয়।"
      },
      solution: {
        en: "A scheduled pipeline that pulls each source through its API, normalises the fields and writes one clean consolidated dataset.",
        ar: "مسار مجدول يسحب كل مصدر عبر واجهته البرمجية ويوحّد الحقول ويكتب مجموعة بيانات موحدة ونظيفة.",
        bn: "একটি নির্ধারিত সময়ে চলা পাইপলাইন প্রতিটি সোর্স তার এপিআই দিয়ে টেনে আনে, ফিল্ড স্ট্যান্ডার্ডাইজ করে এবং একটি পরিচ্ছন্ন সমন্বিত ডেটাসেট তৈরি করে।"
      },
      workflow: {
        en: "Sources → API pull → Clean and normalise → Store → Scheduled refresh",
        ar: "المصادر ← سحب عبر API ← تنظيف وتوحيد ← تخزين ← تحديث مجدول",
        bn: "সোর্স → এপিআই পুল → পরিষ্কার ও স্ট্যান্ডার্ডাইজ → সংরক্ষণ → নির্ধারিত রিফ্রেশ"
      },
      outcome: {
        en: "One dependable dataset that reports and dashboards can read directly.",
        ar: "مجموعة بيانات واحدة موثوقة تقرأ منها التقارير ولوحات المعلومات مباشرة.",
        bn: "একটি নির্ভরযোগ্য ডেটাসেট, যা থেকে রিপোর্ট ও ড্যাশবোর্ড সরাসরি পড়তে পারে।"
      },
      tech: ["Python", "PostgreSQL", "REST APIs", "Cron"],
      links: { github: "", demo: "", caseStudy: "" }
    },
    {
      status: "planned",
      image: "images/projects/document-processing-automation.svg", // generated diagram — replace with a real screenshot when you have one
      title: { en: "Document Processing Automation", ar: "أتمتة معالجة المستندات", bn: "ডকুমেন্ট প্রসেসিং অটোমেশন" },
      problem: {
        en: "Invoices, delivery notes and forms arrive as PDFs and images, and the values are keyed into the system by hand.",
        ar: "تصل الفواتير وإشعارات التسليم والنماذج كملفات PDF وصور، وتُدخل قيمها إلى النظام يدوياً.",
        bn: "ইনভয়েস, ডেলিভারি নোট ও ফর্ম পিডিএফ বা ছবি আকারে আসে এবং মানগুলো হাতে সিস্টেমে টাইপ করতে হয়।"
      },
      solution: {
        en: "Extraction of the required fields with validation rules, so only documents that fail the checks need human review.",
        ar: "استخراج الحقول المطلوبة مع قواعد تحقق، بحيث لا تحتاج للمراجعة البشرية سوى المستندات التي تفشل في الفحص.",
        bn: "প্রয়োজনীয় ফিল্ড এক্সট্র্যাকশন ও ভ্যালিডেশন রুল, যাতে শুধু যাচাইয়ে ব্যর্থ ডকুমেন্টগুলোই মানুষের রিভিউ লাগে।"
      },
      workflow: {
        en: "Upload → Text extraction → Field mapping → Validation → System entry → Exception queue",
        ar: "رفع ← استخراج النص ← مطابقة الحقول ← تحقق ← إدخال في النظام ← قائمة الاستثناءات",
        bn: "আপলোড → টেক্সট এক্সট্র্যাকশন → ফিল্ড ম্যাপিং → ভ্যালিডেশন → সিস্টেমে এন্ট্রি → ব্যতিক্রম তালিকা"
      },
      outcome: {
        en: "Manual data entry limited to genuine exceptions instead of every document.",
        ar: "حصر الإدخال اليدوي في الحالات الاستثنائية فقط بدلاً من كل مستند.",
        bn: "প্রতিটি ডকুমেন্টের বদলে শুধু প্রকৃত ব্যতিক্রমেই হাতে ডেটা এন্ট্রি সীমিত রাখা।"
      },
      tech: ["Python", "OCR", "OpenAI API", "PostgreSQL"],
      links: { github: "", demo: "", caseStudy: "" }
    },
    {
      status: "planned",
      image: "images/projects/ai-reporting-dashboard.svg", // generated diagram — replace with a real screenshot when you have one
      title: { en: "AI Reporting Dashboard", ar: "لوحة تقارير بالذكاء الاصطناعي", bn: "এআই রিপোর্টিং ড্যাশবোর্ড" },
      problem: {
        en: "Managers receive raw tables and still have to work out what changed and what needs attention.",
        ar: "يستلم المديرون جداول خام ويظل عليهم استنتاج ما تغيّر وما يحتاج إلى انتباه.",
        bn: "ম্যানেজাররা কাঁচা টেবিল পান, কিন্তু কী বদলেছে ও কোথায় নজর দিতে হবে তা তাঁদেরই বের করতে হয়।"
      },
      solution: {
        en: "A scheduled report that combines the numbers with a short AI-written summary of the changes, delivered to the channel the team already uses.",
        ar: "تقرير مجدول يجمع الأرقام مع ملخص قصير مكتوب بالذكاء الاصطناعي للتغيرات، يُسلَّم عبر القناة التي يستخدمها الفريق أصلاً.",
        bn: "একটি নির্ধারিত রিপোর্ট, যা সংখ্যার সঙ্গে পরিবর্তনের সংক্ষিপ্ত এআই-লিখিত সারাংশ যুক্ত করে টিমের ব্যবহৃত চ্যানেলেই পৌঁছে দেয়।"
      },
      workflow: {
        en: "Dataset → Metric calculation → AI summary → Format → Scheduled delivery",
        ar: "مجموعة البيانات ← حساب المؤشرات ← ملخص بالذكاء الاصطناعي ← تنسيق ← تسليم مجدول",
        bn: "ডেটাসেট → মেট্রিক গণনা → এআই সারাংশ → ফরম্যাট → নির্ধারিত সময়ে প্রেরণ"
      },
      outcome: {
        en: "A report that states what moved and why it matters, without a manual write-up.",
        ar: "تقرير يوضح ما تغيّر ولماذا يهم، دون كتابة يدوية.",
        bn: "এমন রিপোর্ট যা হাতে না লিখেই বলে দেয় কী বদলেছে এবং কেন তা গুরুত্বপূর্ণ।"
      },
      tech: ["Python", "SQL", "OpenAI API", "Google Sheets"],
      links: { github: "", demo: "", caseStudy: "" }
    }
  ],

  /* ------------------------------------------------------------------
     8. CURRENT FOCUS  (professional development — NOT employment history)
     phase MUST be one of: "current" | "building" | "next"
     When you have real employment, add it under `experience` below.
     ------------------------------------------------------------------ */
  focus: [
    {
      phase: "current",
      title: { en: "AI Automation Focus", ar: "التركيز على أتمتة الذكاء الاصطناعي", bn: "এআই অটোমেশন ফোকাস" },
      text: {
        en: "Workflow automation, AI agents, API integrations and business process improvement — deepening the toolset around n8n, Make.com, Python and the OpenAI API.",
        ar: "أتمتة سير العمل، ووكلاء الذكاء الاصطناعي، وتكامل واجهات البرمجة، وتحسين عمليات الأعمال — مع تعميق الأدوات حول n8n وMake.com وPython وواجهة OpenAI.",
        bn: "ওয়ার্কফ্লো অটোমেশন, এআই এজেন্ট, এপিআই ইন্টিগ্রেশন ও ব্যবসায়িক প্রক্রিয়া উন্নয়ন — n8n, Make.com, Python ও OpenAI API ঘিরে দক্ষতা গভীর করা।"
      }
    },
    {
      phase: "building",
      title: { en: "Portfolio Development", ar: "تطوير معرض الأعمال", bn: "পোর্টফোলিও ডেভেলপমেন্ট" },
      text: {
        en: "Building practical automation projects that can be demonstrated end to end, with a clear workflow diagram and a stated outcome for each one.",
        ar: "بناء مشاريع أتمتة عملية يمكن عرضها من البداية للنهاية، مع مخطط سير عمل واضح ونتيجة محددة لكل مشروع.",
        bn: "বাস্তবধর্মী অটোমেশন প্রজেক্ট তৈরি করা, যেগুলো শুরু থেকে শেষ পর্যন্ত দেখানো যায় — প্রতিটির জন্য স্পষ্ট ওয়ার্কফ্লো ডায়াগ্রাম ও নির্ধারিত ফলাফলসহ।"
      }
    },
    {
      phase: "next",
      title: { en: "Client-Ready Systems", ar: "أنظمة جاهزة للعملاء", bn: "ক্লায়েন্ট-রেডি সিস্টেম" },
      text: {
        en: "Turning validated workflows into maintainable solutions for real business use, with documentation, monitoring and a clear handover.",
        ar: "تحويل سير العمل الذي تم التحقق منه إلى حلول قابلة للصيانة للاستخدام التجاري الفعلي، مع التوثيق والمراقبة وتسليم واضح.",
        bn: "যাচাইকৃত ওয়ার্কফ্লোকে বাস্তব ব্যবসায়িক ব্যবহারের উপযোগী, রক্ষণাবেক্ষণযোগ্য সমাধানে রূপ দেওয়া — ডকুমেন্টেশন, মনিটরিং ও স্পষ্ট হ্যান্ডওভারসহ।"
      }
    }
  ],

  /* ------------------------------------------------------------------
     9. EXPERIENCE (real employment only)
     Leave empty [] until you have verifiable roles to list.
     While empty, the site shows the "Current Focus" timeline above.
     Format:
     { role:{en,ar,bn}, company:"", period:"2025 — Present",
       location:{en,ar,bn}, text:{en,ar,bn} }
     ------------------------------------------------------------------ */
  experience: [],

  /* ------------------------------------------------------------------
     10. EDUCATION
     Leave empty [] to hide the education block entirely.
     Format: { degree:{en,ar,bn}, institution:"", period:"", note:{en,ar,bn} }
     ------------------------------------------------------------------ */
  education: [],

  /* ------------------------------------------------------------------
     11. CERTIFICATIONS
     Leave empty [] — the site then shows one small honest note instead of
     fake certificate cards. Add entries ONLY when actually earned.
     Format: { name:"", issuer:"", year:"2026", url:"" }
     ------------------------------------------------------------------ */
  certifications: [],

  /* ------------------------------------------------------------------
     12. CONTACT FORM OPTIONS
     ------------------------------------------------------------------ */
  form: {
    /* No backend is configured by default, so the form opens the visitor's
       email app (mailto) with everything filled in. This is honest and works
       on static hosting. To use a real backend, set `endpoint` to your
       form service URL (e.g. a Cloudflare Worker or Formspree endpoint) —
       the form will POST to it instead. NEVER put API keys in this file. */
    endpoint: "",
    projectTypes: [
      { value: "workflow-automation", label: { en: "AI Workflow Automation", ar: "أتمتة سير العمل بالذكاء الاصطناعي", bn: "এআই ওয়ার্কফ্লো অটোমেশন" } },
      { value: "process-automation",  label: { en: "Business Process Automation", ar: "أتمتة عمليات الأعمال", bn: "বিজনেস প্রসেস অটোমেশন" } },
      { value: "ai-agent",            label: { en: "AI Agent / Chatbot", ar: "وكيل ذكاء اصطناعي / روبوت محادثة", bn: "এআই এজেন্ট / চ্যাটবট" } },
      { value: "api-integration",     label: { en: "API Integration", ar: "تكامل واجهات البرمجة", bn: "এপিআই ইন্টিগ্রেশন" } },
      { value: "data-automation",     label: { en: "Data & Spreadsheet Automation", ar: "أتمتة البيانات وجداول البيانات", bn: "ডেটা ও স্প্রেডশিট অটোমেশন" } },
      { value: "custom",              label: { en: "Custom / Not sure yet", ar: "مخصص / غير محدد بعد", bn: "কাস্টম / এখনও নিশ্চিত নয়" } }
    ],
    budgets: [
      { value: "under-500",   label: { en: "Under $500",        ar: "أقل من 500$",     bn: "$৫০০-এর কম" } },
      { value: "500-1500",    label: { en: "$500 – $1,500",     ar: "500$ – 1,500$",   bn: "$৫০০ – $১,৫০০" } },
      { value: "1500-5000",   label: { en: "$1,500 – $5,000",   ar: "1,500$ – 5,000$", bn: "$১,৫০০ – $৫,০০০" } },
      { value: "5000-plus",   label: { en: "$5,000+",           ar: "أكثر من 5,000$",  bn: "$৫,০০০+" } },
      { value: "discuss",     label: { en: "Prefer to discuss", ar: "أفضّل المناقشة",  bn: "আলোচনা করতে চাই" } }
    ]
  }
};
