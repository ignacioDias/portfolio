import {
  getLang,
  initLanguage,
  onLanguageChange,
  setLanguage,
  t,
} from "./i18n.js";

const THEME_KEY = "portfolio-theme";

function getTheme() {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

function applyTheme(theme) {
  const isLight = theme === "light";
  document.documentElement.setAttribute(
    "data-theme",
    isLight ? "light" : "dark",
  );

  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    const labelKey = isLight ? "theme_switch_dark" : "theme_switch_light";
    const label = t(labelKey);
    toggle.setAttribute("aria-pressed", isLight ? "true" : "false");
    toggle.setAttribute("aria-label", label);
    toggle.setAttribute("title", label);
  }

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", isLight ? "#ffffff" : "#0e0e0e");
}

function initTheme() {
  try {
    applyTheme(localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark");
  } catch {
    applyTheme("dark");
  }

  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const next = getTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* ignore */
    }
  });

  onLanguageChange(() => applyTheme(getTheme()));
}

function initMailButtons() {
  const mailBtns = document.getElementsByClassName("mail-btn");
  const toast = document.getElementById("toast-mail");
  const email = "ignaciodiasgundin@gmail.com";

  Array.from(mailBtns).forEach((mailBtn) => {
    mailBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(email);

      if (!toast) return;
      toast.style.display = "flex";
      toast.textContent = t("toast_copied");
      setTimeout(() => {
        toast.style.display = "none";
      }, 1800);
    });
  });
}

function initLanguageToggle() {
  const langToggle = document.getElementById("lang-toggle");
  if (!langToggle) return;

  langToggle.addEventListener("click", () => {
    setLanguage(getLang() === "es" ? "en" : "es");
  });
}

function initTechnologyFilter() {
  const buttons = document.querySelectorAll(".technologies button[data-tech]");
  let currentTechnology = null;

  function showAllProjects() {
    document.querySelectorAll(".project-card").forEach((card) => {
      card.style.display = "";
    });
  }

  function setActiveTech(activeButton) {
    currentTechnology = activeButton
      ? activeButton.getAttribute("data-tech")
      : null;
    buttons.forEach((b) => {
      const active = b === activeButton;
      b.classList.toggle("active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function filterProjectsByTech(tech) {
    document.querySelectorAll(".project-card").forEach((card) => {
      const tagEls = card.querySelectorAll(".tag-badge[data-tech]");
      const techNames = Array.from(tagEls).map(
        (tag) => (tag.dataset.tech && tag.dataset.tech.trim().toLowerCase()) || "",
      );
      const target = (tech && tech.trim().toLowerCase()) || "";

      const matches = techNames.some((tn) => {
        if (!tn || !target) return false;
        if (tn === target) return true;

        if (target === "java" && tn === "spring") return true;

        const splitTokens = (s) => s.split(/[^a-z0-9]+/).filter(Boolean);
        const tnTokens = splitTokens(tn);
        const targetTokens = splitTokens(target);

        return (
          tnTokens.some((token) => targetTokens.includes(token)) ||
          targetTokens.some((token) => tnTokens.includes(token))
        );
      });

      card.style.display = matches ? "" : "none";
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const tech = button.getAttribute("data-tech");

      if (currentTechnology === tech) {
        setActiveTech(null);
        showAllProjects();
        return;
      }

      setActiveTech(button);
      filterProjectsByTech(currentTechnology);
    });
  });

  const preActive = document.querySelector(
    ".technologies button.active[data-tech]",
  );
  if (preActive) {
    currentTechnology = preActive.dataset.tech;
    preActive.setAttribute("aria-pressed", "true");
    filterProjectsByTech(currentTechnology);
  }
}

function boot() {
  initLanguage();
  initTheme();
  initMailButtons();
  initLanguageToggle();
  initTechnologyFilter();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
