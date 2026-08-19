/* =====================================================================
   app.js — renders the site from js/data.js + js/i18n.js
   No framework, no dependencies. ~1 file, runs on any static host.
   You should not need to edit this file to update your content.
   ===================================================================== */
(function () {
  "use strict";

  var D    = window.PORTFOLIO_DATA || {};
  var I18N = window.PORTFOLIO_I18N || {};
  var META = window.PORTFOLIO_META || {};
  var root = document.documentElement;
  var LANGS = ["en", "ar", "bn"];
  var lang = "en";

  /* ---------------- helpers ---------------- */
  function t(key) {
    var dict = I18N[lang] || I18N.en || {};
    return dict[key] !== undefined ? dict[key] : (I18N.en && I18N.en[key]) || key;
  }
  /* translate a { en, ar, bn } object (falls back to English, then to a raw string) */
  function tx(value) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    return value[lang] || value.en || "";
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function el(sel, ctx) { return (ctx || document).querySelector(sel); }
  function all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function slot(name) { return el('[data-render="' + name + '"]'); }
  function icon(id, cls) {
    return '<svg class="icon' + (cls ? " " + cls : "") + '" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-' + id + '"></use></svg>';
  }
  function isSet(v) { return typeof v === "string" && v.trim() !== ""; }

  /* ---------------- derived contact channels ---------------- */
  var C = D.contact || {};
  var SITE = D.site || {};
  var P = D.personal || {};

  function waNumber() { return isSet(C.whatsapp) ? C.whatsapp.replace(/[^0-9]/g, "") : ""; }
  function waLink(text) {
    var n = waNumber();
    if (!n) return "";
    return "https://wa.me/" + n + (text ? "?text=" + encodeURIComponent(text) : "");
  }
  /* Show the WhatsApp number the way the phone number is written whenever
     they are the same number; otherwise fall back to the raw digits. */
  function waDisplay() {
    var digits = waNumber();
    if (!digits) return "";
    if (isSet(C.phone) && C.phone.replace(/[^0-9]/g, "") === digits) return C.phone;
    return "+" + digits;
  }

  function mailLink(subject, body) {
    if (!isSet(C.email)) return "";
    var q = [];
    if (subject) q.push("subject=" + encodeURIComponent(subject));
    if (body) q.push("body=" + encodeURIComponent(body));
    return "mailto:" + C.email + (q.length ? "?" + q.join("&") : "");
  }

  /* channels used by hero / contact / footer — empty values are skipped */
  function channels() {
    var list = [];
    if (isSet(C.whatsapp)) list.push({ key: "whatsapp", icon: "whatsapp", label: t("c_whatsapp"), value: waDisplay(), href: waLink(C.inquirySubject), ext: true });
    if (isSet(C.linkedin)) list.push({ key: "linkedin", icon: "linkedin", label: t("c_linkedin"), value: C.linkedin.replace(/^https?:\/\/(www\.)?/, ""), href: C.linkedin, ext: true });
    if (isSet(C.github))   list.push({ key: "github",   icon: "github",   label: t("c_github"),   value: C.github.replace(/^https?:\/\/(www\.)?/, ""), href: C.github, ext: true });
    if (isSet(C.email))    list.push({ key: "email",    icon: "mail",     label: t("c_email"),    value: C.email, href: mailLink(C.inquirySubject) });
    if (isSet(C.phone))    list.push({ key: "phone",    icon: "phone",    label: t("c_phone"),    value: C.phone, href: "tel:" + C.phone.replace(/[^0-9+]/g, "") });
    return list;
  }

  /* ---------------- static text (data-i18n) ---------------- */
  function applyText() {
    all("[data-i18n]").forEach(function (n) { n.textContent = t(n.getAttribute("data-i18n")); });
    all("[data-i18n-ph]").forEach(function (n) { n.placeholder = t(n.getAttribute("data-i18n-ph")); });
    all("[data-i18n-aria]").forEach(function (n) { n.setAttribute("aria-label", t(n.getAttribute("data-i18n-aria"))); });

    /* data bindings straight from PORTFOLIO_DATA */
    all("[data-bind]").forEach(function (n) {
      var k = n.getAttribute("data-bind");
      if (k === "name")             n.textContent = P.shortName || P.name || "";
      else if (k === "title")       n.textContent = tx(P.title);
      else if (k === "title-upper") n.textContent = lang === "en" ? tx(P.title).toUpperCase() : tx(P.title);
      else if (k === "tagline")     n.textContent = tx(P.tagline);
      else if (k === "intro")       n.textContent = tx(P.intro);
      else if (k === "location")    n.textContent = tx(P.location);
      else if (k === "availability")n.textContent = tx(P.availability);
      else if (k === "year")        n.textContent = String(Math.max(new Date().getFullYear(), SITE.copyrightStartYear || 0));
      else if (k === "photo") { n.setAttribute("alt", tx(P.photoAlt) || P.name || ""); }
    });

    var burger = el("#burger");
    if (burger) burger.setAttribute("aria-label", burger.getAttribute("aria-expanded") === "true" ? t("menu_close") : t("menu_open"));
  }

  /* ---------------- renderers ---------------- */
  function renderSocial() {
    var list = channels();
    ["social-hero", "social-footer"].forEach(function (name) {
      var box = slot(name);
      if (!box) return;
      box.innerHTML = list.map(function (c) {
        return '<li><a href="' + esc(c.href) + '" aria-label="' + esc(c.label) + '" title="' + esc(c.label) + '"' +
               (c.ext ? ' target="_blank" rel="noopener noreferrer"' : "") + ">" + icon(c.icon) + "</a></li>";
      }).join("");
    });
  }

  function renderHighlights() {
    var items = (D.about && D.about.highlights) || [];
    var html = items.map(function (h) {
      return "<li>" + icon("check") + "<span>" + esc(tx(h)) + "</span></li>";
    }).join("");
    ["highlights", "highlights-panel"].forEach(function (n) { var b = slot(n); if (b) b.innerHTML = html; });

    var strip = slot("strip");
    if (strip) {
      var langs = (P.spokenLanguages || []).map(function (l) { return tx(l.name); }).join(" · ");
      strip.innerHTML = items.slice(0, 4).map(function (h) { return "<li>" + esc(tx(h)) + "</li>"; }).join("") +
                        (langs ? "<li>" + esc(langs) + "</li>" : "");
    }
  }

  /* The portrait <img> is only created when a photo path is configured,
     so an unconfigured site makes zero failing image requests. */
  function renderPortrait() {
    var box = slot("portrait");
    if (!box) return;
    var hero = el(".hero");
    var img = el("img", box);
    if (hero) hero.classList.toggle("hero--nophoto", !isSet(P.photo));
    if (!isSet(P.photo)) {
      if (img) img.remove();
      box.classList.add("is-missing");
      return;
    }
    if (!img) {
      img = document.createElement("img");
      img.width = 600; img.height = 750;
      img.decoding = "async";
      box.insertBefore(img, box.firstChild);
    }
    img.src = P.photo;
    img.alt = tx(P.photoAlt) || P.name || "";
  }

  function renderSpokenLanguages() {
    var langs = P.spokenLanguages || [];
    var box = slot("spoken-languages");
    if (box) {
      box.innerHTML = langs.map(function (l) {
        return '<p class="row"><b>' + esc(tx(l.name)) + "</b><span>" + esc(tx(l.note)) + "</span></p>";
      }).join("");
    }
    /* the About panel and the strip read the same list, so adding a language
       in js/data.js updates every place it appears */
    var inline = slot("spoken-inline");
    if (inline) inline.textContent = langs.map(function (l) { return tx(l.name); }).join(" · ");
  }

  function renderAbout() {
    var box = slot("about-blocks");
    if (!box) return;
    box.innerHTML = ((D.about && D.about.blocks) || []).map(function (b) {
      return '<article class="about-block">' +
               '<span class="card__icon">' + icon(b.icon || "user") + "</span>" +
               "<div><h3>" + esc(tx(b.title)) + "</h3><p>" + esc(tx(b.text)) + "</p></div>" +
             "</article>";
    }).join("");
  }

  function renderServices() {
    var box = slot("services");
    if (box) {
      box.innerHTML = (D.services || []).map(function (s) {
        return '<article class="card service">' +
                 '<span class="card__icon">' + icon(s.icon || "workflow") + "</span>" +
                 "<h3>" + esc(tx(s.name)) + "</h3>" +
                 "<p>" + esc(tx(s.desc)) + "</p>" +
                 '<div class="service__tools">' +
                   '<p class="service__tools-label">' + esc(t("sv_tools")) + "</p>" +
                   '<div class="tags">' + (s.tools || []).map(function (x) { return '<span class="tag">' + esc(x) + "</span>"; }).join("") + "</div>" +
                 "</div>" +
                 '<a class="link-arrow" href="#contact">' + esc(t("sv_cta")) + icon("arrow") + "</a>" +
               "</article>";
      }).join("");
    }
    var foot = slot("footer-services");
    if (foot) {
      foot.innerHTML = (D.services || []).slice(0, 6).map(function (s) {
        return '<li><a href="#services">' + esc(tx(s.name)) + "</a></li>";
      }).join("");
    }
  }

  function renderSkills() {
    var levelLabel = { core: t("lvl_core"), working: t("lvl_working"), learning: t("lvl_learning") };
    [["skills-core", "core"], ["skills-tools", "tools"]].forEach(function (pair) {
      var box = slot(pair[0]);
      if (!box) return;
      var items = (D.skills && D.skills[pair[1]]) || [];
      box.innerHTML = items.map(function (s) {
        var lv = levelLabel[s.level] ? s.level : "working";
        return '<li class="skill"><span class="skill__name">' + esc(s.name) + "</span>" +
               '<span class="level level--' + lv + '">' + esc(levelLabel[lv]) + "</span></li>";
      }).join("");
    });
  }

  function renderTimeline() {
    var box = slot("timeline");
    if (!box) return;
    var hasJobs = (D.experience || []).length > 0;
    var heading = el("#experience-title");
    var note = el("[data-focus-note]");

    if (hasJobs) {
      if (heading) heading.textContent = t("experience_real_title");
      if (note) note.hidden = true;
      box.innerHTML = D.experience.map(function (e) {
        return '<li class="tl-item">' +
                 '<span class="tl-item__phase">' + esc(e.period || "") + "</span>" +
                 "<h3>" + esc(tx(e.role)) + "</h3>" +
                 '<p class="tl-item__meta">' + esc([e.company, tx(e.location)].filter(isSet).join(" · ")) + "</p>" +
                 "<p>" + esc(tx(e.text)) + "</p>" +
               "</li>";
      }).join("");
    } else {
      if (heading) heading.textContent = t("experience_title");
      if (note) note.hidden = false;
      box.innerHTML = (D.focus || []).map(function (f) {
        return '<li class="tl-item">' +
                 '<span class="tl-item__phase">' + esc(t("phase_" + (f.phase || "current"))) + "</span>" +
                 "<h3>" + esc(tx(f.title)) + "</h3>" +
                 "<p>" + esc(tx(f.text)) + "</p>" +
               "</li>";
      }).join("");
    }
  }

  /* Certifications + education. No fake cards: when nothing is earned yet,
     one short honest note is shown instead. */
  function renderCredentials() {
    var box = slot("credentials");
    if (!box) return;
    var certs = D.certifications || [];
    var edu = D.education || [];
    var html = "";

    html += '<div class="cert-card">' +
              "<h3>" + icon("award") + "<span>" + esc(t("cert_title")) + "</span></h3>";
    if (certs.length) {
      html += '<ul class="cert-list">' + certs.map(function (c) {
        var name = "<b>" + esc(c.name) + "</b>";
        var meta = '<span>' + esc([c.issuer, c.year].filter(isSet).join(" · ")) + "</span>";
        var inner = name + meta;
        return "<li>" + (isSet(c.url)
          ? '<a href="' + esc(c.url) + '" target="_blank" rel="noopener noreferrer">' + inner + "</a>"
          : inner) + "</li>";
      }).join("") + "</ul>";
    } else {
      html += "<p>" + esc(t("cert_none")) + "</p>";
    }
    html += "</div>";

    if (edu.length) {
      html += '<div class="cert-card" style="margin-top:16px">' +
                "<h3>" + icon("doc") + "<span>" + esc(t("education_title")) + "</span></h3>" +
                '<ul class="cert-list">' + edu.map(function (e) {
                  return "<li><b>" + esc(tx(e.degree)) + "</b><span>" +
                         esc([e.institution, e.period].filter(isSet).join(" · ")) + "</span>" +
                         (e.note ? "<span>" + esc(tx(e.note)) + "</span>" : "") + "</li>";
                }).join("") + "</ul></div>";
    }
    box.innerHTML = html;
  }

  function renderProjects() {
    var box = slot("projects");
    if (!box) return;
    var projects = D.projects || [];

    box.innerHTML = projects.map(function (p) {
      var status = ["planned", "development", "live"].indexOf(p.status) >= 0 ? p.status : "planned";
      var links = p.links || {};
      var linkHtml = "";
      if (isSet(links.github))    linkHtml += '<a class="btn btn--outline btn--sm" href="' + esc(links.github) + '" target="_blank" rel="noopener noreferrer">' + icon("code") + esc(t("p_github")) + "</a>";
      if (isSet(links.demo))      linkHtml += '<a class="btn btn--outline btn--sm" href="' + esc(links.demo) + '" target="_blank" rel="noopener noreferrer">' + icon("external") + esc(t("p_demo")) + "</a>";
      if (isSet(links.caseStudy)) linkHtml += '<a class="btn btn--outline btn--sm" href="' + esc(links.caseStudy) + '" target="_blank" rel="noopener noreferrer">' + icon("doc") + esc(t("p_case")) + "</a>";

      var flow = tx(p.workflow).split(/\s*(?:→|->|←)\s*/).filter(Boolean);
      var flowHtml = flow.map(function (step, i) {
        return (i ? '<i aria-hidden="true">→</i>' : "") + "<span>" + esc(step) + "</span>";
      }).join("");

      var media = isSet(p.image)
        ? '<img src="' + esc(p.image) + '" alt="' + esc(t("project_image_alt") + " " + tx(p.title)) + '" loading="lazy" decoding="async" width="640" height="400">'
        : "";

      return '<article class="project">' +
        '<div class="project__media" data-media>' +
          '<span class="status status--' + status + '">' + esc(t("st_" + status)) + "</span>" +
          media +
          '<span class="portrait__fallback">' + icon("image") + "</span>" +
        "</div>" +
        '<div class="project__body">' +
          "<h3>" + esc(tx(p.title)) + "</h3>" +
          '<div class="project__row"><b>' + esc(t("p_problem")) + "</b><p>" + esc(tx(p.problem)) + "</p></div>" +
          '<div class="project__row"><b>' + esc(t("p_solution")) + "</b><p>" + esc(tx(p.solution)) + "</p></div>" +
          (flowHtml ? '<div class="project__row"><b>' + esc(t("p_workflow")) + '</b><div class="flow">' + flowHtml + "</div></div>" : "") +
          '<div class="project__row"><b>' + esc(t("p_tech")) + '</b><div class="tags">' +
            (p.tech || []).map(function (x) { return '<span class="tag tag--line">' + esc(x) + "</span>"; }).join("") +
          "</div></div>" +
          (p.outcome ? '<p class="project__outcome"><b style="color:var(--blue-600)">' +
              esc(status === "live" ? t("p_outcome_live") : t("p_outcome")) + ":</b> " + esc(tx(p.outcome)) + "</p>" : "") +
          (linkHtml ? '<div class="project__links">' + linkHtml + "</div>" : "") +
        "</div></article>";
    }).join("");

    /* the "these are concepts" note only makes sense while nothing is live */
    var note = el("[data-projects-note]");
    if (note) note.hidden = projects.every(function (p) { return p.status === "live"; });

    watchMedia();
  }

  function renderContact() {
    var box = slot("contact-list");
    if (box) {
      var rows = channels().map(function (c) {
        return '<a class="contact-item" href="' + esc(c.href) + '"' + (c.ext ? ' target="_blank" rel="noopener noreferrer"' : "") + ">" +
                 '<span class="contact-item__icon">' + icon(c.icon) + "</span>" +
                 "<span><b>" + esc(c.label) + "</b><span>" + esc(c.value) + "</span></span></a>";
      });
      /* channels that are not published yet are shown as honest "not published" rows */
      [["whatsapp", "whatsapp", "c_whatsapp"], ["phone", "phone", "c_phone"], ["linkedin", "linkedin", "c_linkedin"]].forEach(function (k) {
        if (!isSet(C[k[0]])) {
          rows.push('<div class="contact-item contact-item--pending">' +
                      '<span class="contact-item__icon">' + icon(k[1]) + "</span>" +
                      "<span><b>" + esc(t(k[2])) + "</b><span>" + esc(t("c_pending")) + "</span></span></div>");
        }
      });
      rows.push('<div class="contact-item">' +
                  '<span class="contact-item__icon">' + icon("pin") + "</span>" +
                  "<span><b>" + esc(t("c_location")) + "</b><span>" + esc(tx(P.location)) + "</span></span></div>");
      box.innerHTML = rows.join("");
    }

    var foot = slot("footer-contact");
    if (foot) {
      foot.innerHTML = channels().map(function (c) {
        return '<li><a class="contact-line" href="' + esc(c.href) + '"' + (c.ext ? ' target="_blank" rel="noopener noreferrer"' : "") + ">" + esc(c.value) + "</a></li>";
      }).join("") + '<li class="contact-line">' + esc(tx(P.location)) + "</li>";
    }
  }

  function renderFormOptions() {
    var F = D.form || {};
    [["project-types", F.projectTypes], ["budgets", F.budgets]].forEach(function (pair) {
      var sel = slot(pair[0]);
      if (!sel) return;
      var current = sel.value;
      sel.innerHTML = '<option value="">' + esc(t("f_select")) + "</option>" +
        (pair[1] || []).map(function (o) {
          return '<option value="' + esc(o.value) + '">' + esc(tx(o.label)) + "</option>";
        }).join("");
      if (current) sel.value = current;
    });

    var waBtn = el("#wa-send");
    if (waBtn) waBtn.hidden = !waNumber();
    var note = el("[data-form-note]");
    if (note) note.textContent = isSet(F.endpoint) ? t("f_note_api") : t("f_note");
    var label = el("[data-submit-label]");
    if (label) label.textContent = isSet(F.endpoint) ? t("f_send_api") : t("f_send");
  }

  /* ---------------- images: graceful fallback ---------------- */
  function watchMedia() {
    all("[data-media]").forEach(function (box) {
      var img = el("img", box);
      if (!img) { box.classList.add("is-missing"); return; }
      var fail = function () { box.classList.add("is-missing"); };
      var ok = function () { box.classList.remove("is-missing"); };
      if (img.complete) { (img.naturalWidth === 0 ? fail : ok)(); }
      img.addEventListener("error", fail);
      img.addEventListener("load", ok);
    });
  }

  /* ---------------- CV link ---------------- */
  function applyCvLink() {
    var path = isSet(SITE.cvFile) ? SITE.cvFile : "cv/MD-Easin-Bhuyian-CV.pdf";
    all("[data-cv-link]").forEach(function (a) { a.setAttribute("href", path); });

    /* If the PDF has not been uploaded, flag it instead of serving a broken
       download. Only an explicit 404/410 counts as missing — a network error
       (offline, blocked request) must never disable a working link. */
    if (location.protocol === "http:" || location.protocol === "https:") {
      fetch(path, { method: "HEAD", cache: "no-store" }).then(function (r) {
        if (r.status !== 404 && r.status !== 410) return;
        all("[data-cv-link]").forEach(function (a) {
          a.setAttribute("title", t("cv_missing"));
          a.setAttribute("aria-disabled", "true");
          a.style.opacity = ".6";
        });
        console.warn("[portfolio] CV file not found at " + path + " — upload it before publishing.");
      }).catch(function () { /* network error: leave the link untouched */ });
    }
  }

  /* ---------------- language ---------------- */
  function setLang(next, save) {
    lang = LANGS.indexOf(next) >= 0 ? next : "en";
    root.setAttribute("lang", lang);
    root.setAttribute("data-lang", lang);
    root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    if (save !== false) { try { localStorage.setItem("portfolio_lang", lang); } catch (e) {} }

    var meta = META[lang] || META.en;
    if (meta) {
      document.title = meta.title;
      var md = el('meta[name="description"]');
      if (md) md.setAttribute("content", meta.desc);
    }

    all("[data-lang-set]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang-set") === lang));
    });

    applyText();
    renderAll();
  }

  function renderAll() {
    renderSocial();
    renderPortrait();
    renderHighlights();
    renderSpokenLanguages();
    renderAbout();
    renderServices();
    renderSkills();
    renderTimeline();
    renderCredentials();
    renderProjects();
    renderContact();
    renderFormOptions();
    watchMedia();
  }

  /* ---------------- mobile drawer ---------------- */
  function initDrawer() {
    var burger = el("#burger"), drawer = el("#drawer"), backdrop = el("#backdrop");
    if (!burger || !drawer) return;

    function setOpen(open) {
      drawer.setAttribute("data-open", String(open));
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? t("menu_close") : t("menu_open"));
      if (backdrop) { backdrop.hidden = !open; backdrop.setAttribute("data-open", String(open)); }
      document.body.style.overflow = open ? "hidden" : "";
      if (open) {
        /* wait for the open transition — a visibility:hidden element cannot take focus */
        window.setTimeout(function () {
          var first = el("a", drawer);
          if (first && drawer.getAttribute("data-open") === "true") first.focus({ preventScroll: true });
        }, 230);
      }
    }
    burger.addEventListener("click", function () {
      setOpen(drawer.getAttribute("data-open") !== "true");
    });
    all("a, button", drawer).forEach(function (n) {
      n.addEventListener("click", function () { setOpen(false); });
    });
    if (backdrop) backdrop.addEventListener("click", function () { setOpen(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer.getAttribute("data-open") === "true") {
        setOpen(false);
        burger.focus();
      }
    });
    /* if the viewport grows to desktop while open, reset cleanly */
    var mq = window.matchMedia("(min-width:1024px)");
    var onChange = function () { if (mq.matches) setOpen(false); };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  /* ---------------- reveal + scrollspy ---------------- */
  function initMotion() {
    if (!("IntersectionObserver" in window)) {
      all(".reveal").forEach(function (n) { n.classList.add("is-visible"); });
      return;
    }
    var reveal = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); reveal.unobserve(e.target); }
      });
    }, { threshold: 0.06, rootMargin: "0px 0px -40px 0px" });
    all(".reveal").forEach(function (n) { reveal.observe(n); });

    var links = all(".nav-desktop a");
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var id = "#" + e.target.id;
        links.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    all("section[id]").forEach(function (s) { spy.observe(s); });
  }

  /* ---------------- contact form ---------------- */
  function initForm() {
    var form = el("#inquiry-form");
    if (!form) return;
    var status = el("#form-status");
    var F = D.form || {};

    function say(msg, kind) {
      if (!status) return;
      status.hidden = false;
      status.textContent = msg;
      status.setAttribute("data-kind", kind);
    }
    function read() {
      var fd = new FormData(form);
      var typeSel = el("#f-type"), budgetSel = el("#f-budget");
      return {
        name: (fd.get("name") || "").trim(),
        email: (fd.get("email") || "").trim(),
        company: (fd.get("company") || "").trim(),
        projectType: typeSel && typeSel.selectedIndex > 0 ? typeSel.options[typeSel.selectedIndex].text : "",
        budget: budgetSel && budgetSel.selectedIndex > 0 ? budgetSel.options[budgetSel.selectedIndex].text : "",
        message: (fd.get("message") || "").trim()
      };
    }
    function validate(v) {
      if (!v.name) { say(t("f_err_name"), "error"); el("#f-name").focus(); return false; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) { say(t("f_err_email"), "error"); el("#f-email").focus(); return false; }
      if (!v.message) { say(t("f_err_message"), "error"); el("#f-message").focus(); return false; }
      return true;
    }
    function body(v) {
      return [
        t("f_name") + ": " + v.name,
        t("f_email") + ": " + v.email,
        v.company ? t("f_company").replace(/\s*\(.*\)\s*$/, "") + ": " + v.company : "",
        v.projectType ? t("f_type") + ": " + v.projectType : "",
        v.budget ? t("f_budget") + ": " + v.budget : "",
        "",
        t("f_message") + ":",
        v.message
      ].filter(function (l) { return l !== ""; }).join("\n");
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = read();
      if (!validate(v)) return;

      /* A real backend is used only if one is configured in js/data.js. */
      if (isSet(F.endpoint)) {
        fetch(F.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(v)
        }).then(function (r) {
          if (!r.ok) throw new Error("bad response");
          form.reset();
          say(t("f_posted"), "ok");
        }).catch(function () { say(t("f_failed"), "error"); });
        return;
      }

      /* No backend: hand the message to the visitor's own email client. */
      var href = mailLink((C.inquirySubject || "Project inquiry") + " — " + v.name, body(v));
      if (!href) { say(t("f_failed"), "error"); return; }
      window.location.href = href;
      say(t("f_sent"), "ok");
    });

    var wa = el("#wa-send");
    if (wa) {
      wa.addEventListener("click", function () {
        var v = read();
        if (!validate(v)) return;
        var href = waLink(body(v));
        if (!href) { say(t("f_wa_missing"), "error"); return; }
        window.open(href, "_blank", "noopener");
      });
    }
  }

  /* ---------------- boot ---------------- */
  function boot() {
    all("[data-lang-set]").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang-set")); });
    });

    var saved = null;
    try { saved = localStorage.getItem("portfolio_lang"); } catch (e) {}
    setLang(saved || "en", !!saved);

    applyCvLink();
    initDrawer();
    initForm();
    initMotion();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
