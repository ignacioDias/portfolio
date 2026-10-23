import { DEFAULT_LANG, translations } from "../i18n/translations.js";

const LANG_KEY = "portfolio-lang";

function detectStoredLang() {
  try {
    const stored = localStorage.getItem(LANG_KEY);
    return stored === "en" || stored === "es" ? stored : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

let currentLang = detectStoredLang();

const listeners = new Set();

export function getLang() {
  return currentLang;
}

export function t(key) {
  return (
    translations[currentLang]?.[key] ??
    translations[DEFAULT_LANG][key] ??
    key
  );
}

export function onLanguageChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function setLanguage(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    /* ignore */
  }
  applyLanguage();
  listeners.forEach((fn) => fn(lang));
}

function translateStatic() {
  const dict = translations[currentLang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = dict[key] ?? "";
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    el.innerHTML = dict[key] ?? "";
  });

  ["aria-label", "alt", "title", "placeholder"].forEach((attr) => {
    document
      .querySelectorAll(`[data-i18n-${attr}]`)
      .forEach((el) => {
        const key = el.getAttribute(`data-i18n-${attr}`);
        const value = dict[key];
        if (value != null) el.setAttribute(attr, value);
      });
  });
}

function translateProjects() {
  const isEn = currentLang === "en";

  document.querySelectorAll("[data-project-title]").forEach((el) => {
    const title = isEn ? el.dataset.titleEn : el.dataset.titleEs;
    if (!title) return;
    el.textContent = title;

    const card = el.closest(".project-card");
    const image = card?.querySelector(".project-image");
    if (image) image.setAttribute("alt", title);
  });

  document.querySelectorAll("[data-project-description]").forEach((el) => {
    const description = isEn
      ? el.dataset.descriptionEn
      : el.dataset.descriptionEs;
    if (description) el.textContent = description;
  });
}

function translateMeta() {
  const dict = translations[currentLang];
  document.documentElement.lang = dict.lang_attr;
  document.title = dict.meta_title;

  const setMeta = (selector, attr, value) => {
    const el = document.querySelector(selector);
    if (el && value != null) el.setAttribute(attr, value);
  };

  setMeta('meta[name="description"]', "content", dict.meta_description);
  setMeta('meta[property="og:title"]', "content", dict.og_title);
  setMeta('meta[property="og:description"]', "content", dict.meta_description);
  setMeta('meta[property="og:locale"]', "content", dict.og_locale);
  setMeta('meta[name="twitter:title"]', "content", dict.og_title);
  setMeta(
    'meta[name="twitter:description"]',
    "content",
    dict.meta_description,
  );

  const ld = document.querySelector('script[type="application/ld+json"]');
  if (ld) {
    try {
      const data = JSON.parse(ld.textContent);
      if (data.jobTitle) data.jobTitle = dict.jsonld_job_title;
      ld.textContent = JSON.stringify(data);
    } catch {
      /* ignore */
    }
  }
}

function updateToggle() {
  const toggle = document.getElementById("lang-toggle");
  if (!toggle) return;
  const isEn = currentLang === "en";
  toggle.classList.toggle("is-en", isEn);
  toggle.setAttribute("aria-pressed", isEn ? "true" : "false");
  toggle.setAttribute(
    "aria-label",
    translations[currentLang].lang_switch_label,
  );
}

export function applyLanguage() {
  translateStatic();
  translateProjects();
  translateMeta();
  updateToggle();
}

export function initLanguage() {
  applyLanguage();
}
