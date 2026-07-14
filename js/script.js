"use strict";

const documentElement = document.documentElement;
const body = document.body;
const header = document.getElementById("site-header");
const themeToggle = document.getElementById("theme-toggle");
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const currentYear = document.getElementById("current-year");
const contactEmailLink = document.getElementById("contact-email-link");
const contactEmailText = document.getElementById("contact-email-text");

// Contact email is stored obfuscated — each character code shifted by
// EMAIL_OFFSET — and reconstructed at runtime so the address never appears in
// plaintext in any served file. Static/regex email scrapers see nothing.
const EMAIL_OFFSET = 5;
const ENCODED_EMAIL = [115,110,104,116,113,102,120,69,102,121,116,116,114,110,104,51,116,119,108];

function decodeEmail(encoded, offset) {
  return encoded.map((code) => String.fromCharCode(code - offset)).join("");
}

const CONTACT_EMAIL = decodeEmail(ENCODED_EMAIL, EMAIL_OFFSET);

if (contactEmailLink && contactEmailText) {
  contactEmailLink.href = `mailto:${CONTACT_EMAIL}`;
  contactEmailText.textContent = CONTACT_EMAIL;
  contactEmailLink.setAttribute("aria-label", `Email Nicolas — ${CONTACT_EMAIL}`);
}

const allNavigationLinks = [
  ...document.querySelectorAll('a.nav-link[href^="#"]')
];

const sectionElements = [
  ...document.querySelectorAll("main section[id]")
];

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

function getStoredTheme() {
  try {
    return localStorage.getItem("atoomic-theme");
  } catch {
    return null;
  }
}

function storeTheme(theme) {
  try {
    localStorage.setItem("atoomic-theme", theme);
  } catch {
    // The interface still works when storage is unavailable.
  }
}

function getInitialTheme() {
  const storedTheme = getStoredTheme();

  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function getThemeIcon(theme) {
  if (theme === "dark") {
    return `
      <svg class="icon theme-icon" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M12 3a6 6 0 1 0 9 9 9 9 0 0 1-9-9Z" />
      </svg>
    `;
  }

  return `
    <svg class="icon theme-icon" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42
        M17.66 17.66l1.41 1.41M2 12h2M20 12h2
        M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
    </svg>
  `;
}

function applyTheme(theme) {
  documentElement.dataset.theme = theme;
  themeToggle.innerHTML = getThemeIcon(theme);

  const nextTheme = theme === "dark" ? "light" : "dark";
  themeToggle.setAttribute(
    "aria-label",
    `Switch to ${nextTheme} theme`
  );

  const themeColor = document.querySelector(
    'meta[name="theme-color"]'
  );

  if (themeColor) {
    themeColor.setAttribute(
      "content",
      theme === "dark" ? "#090b10" : "#f4f4ef"
    );
  }
}

applyTheme(getInitialTheme());

themeToggle.addEventListener("click", () => {
  const nextTheme =
    documentElement.dataset.theme === "dark" ? "light" : "dark";

  applyTheme(nextTheme);
  storeTheme(nextTheme);
});

function setMenuState(open) {
  mobileMenu.classList.toggle("open", open);
  body.classList.toggle("menu-open", open);

  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation"
  );

  mobileMenu.setAttribute("aria-hidden", String(!open));

  menuToggle.innerHTML = open
    ? `
      <svg class="icon" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M6 6l12 12M18 6 6 18" />
      </svg>
    `
    : `
      <svg class="icon" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M4 8h16M4 16h16" />
      </svg>
    `;
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setMenuState(!isOpen);
});

allNavigationLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuState(false);
  }
});

window.addEventListener(
  "scroll",
  () => {
    header.classList.toggle("scrolled", window.scrollY > 16);
  },
  { passive: true }
);

function updateActiveNavigation() {
  const scrollPosition =
    window.scrollY + window.innerHeight * 0.32;

  let activeSectionId = "home";

  sectionElements.forEach((section) => {
    if (section.offsetTop <= scrollPosition) {
      activeSectionId = section.id;
    }
  });

  allNavigationLinks.forEach((link) => {
    const isActive =
      link.getAttribute("href") === `#${activeSectionId}`;

    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

window.addEventListener("scroll", updateActiveNavigation, {
  passive: true
});

updateActiveNavigation();

const revealElements = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}

const filterButtons = document.querySelectorAll(".filter-button");
const timelineItems = document.querySelectorAll(".timeline-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((candidate) => {
      candidate.classList.toggle("active", candidate === button);
    });

    timelineItems.forEach((item) => {
      const categories = item.dataset.categories
        .split(" ")
        .filter(Boolean);

      const shouldDisplay =
        selectedFilter === "all" ||
        categories.includes(selectedFilter);

      item.hidden = !shouldDisplay;
    });
  });
});

const skillGroups = document.querySelectorAll(".skill-group");
const defaultGroup = skillGroups[0]; // first panel = resting state
const HOVER_CLOSE_DELAY = 400; // ms — delay before closing to avoid flicker
const supportsHover =
  window.matchMedia &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// Single source of truth: open exactly one group (or none when group === null).
function setOpen(group) {
  skillGroups.forEach((candidateGroup) => {
    const isOpen = candidateGroup === group;

    candidateGroup.classList.toggle("open", isOpen);

    candidateGroup
      .querySelector(".skill-group-button")
      .setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

let closeTimer = null;

function cancelClose() {
  if (closeTimer) {
    clearTimeout(closeTimer);
    closeTimer = null;
  }
}

function scheduleClose() {
  cancelClose();
  closeTimer = setTimeout(() => setOpen(defaultGroup), HOVER_CLOSE_DELAY);
}

skillGroups.forEach((group) => {
  const button = group.querySelector(".skill-group-button");

  // Touch / non-hover devices: keep the original click accordion.
  button.addEventListener("click", () => {
    if (supportsHover) return; // hover drives the open state on pointer devices

    const willOpen = !group.classList.contains("open");

    setOpen(willOpen ? group : null);
  });

  if (!supportsHover) return;

  // Pointer devices: hover opens (accordion), with a delayed return to the
  // default panel. Entering any panel cancels a pending close, so moving
  // across the gaps between panels doesn't flicker.
  group.addEventListener("mouseenter", () => {
    cancelClose();
    setOpen(group);
  });
  group.addEventListener("mouseleave", scheduleClose);

  // Keyboard parity: focusing a header opens it; leaving schedules the return.
  button.addEventListener("focus", () => {
    cancelClose();
    setOpen(group);
  });
  button.addEventListener("blur", scheduleClose);
});

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const subject = String(formData.get("subject") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !subject || !message) {
    formStatus.textContent =
      "Please complete every field before continuing.";
    return;
  }

  if (!isValidEmail(email)) {
    formStatus.textContent =
      "Please enter a valid email address.";
    return;
  }

  const emailSubject = encodeURIComponent(subject);
  const emailBody = encodeURIComponent(
    [
      `Hello Nicolas,`,
      "",
      message,
      "",
      `From: ${name}`,
      `Email: ${email}`
    ].join("\n")
  );

  formStatus.textContent =
    "Opening your email application…";

  window.location.href =
    `mailto:${CONTACT_EMAIL}?subject=${emailSubject}&body=${emailBody}`;
});

currentYear.textContent = String(new Date().getFullYear());

// ── Delight ──────────────────────────────────────────────────────────────
// Two low-key, on-brand touches for the curious visitor and the technical peer
// who opens devtools. None of it touches the default hiring-manager scan.

// 1) Console hello — rewards source inspection, reinforces "engineered, not
//    costumed." Text-only, so it is unaffected by prefers-reduced-motion.
(function consoleHello() {
  if (typeof console === "undefined" || typeof console.log !== "function") {
    return;
  }

  console.log(
    "%c☢ atoomic.org",
    "color:#f5c518;font-weight:800;font-size:15px;line-height:1.7;"
  );
  console.log(
    "%cHigh-voltage portfolio of Nicolas R. — agentic orchestration & systems engineering.\nInspecting the source? Good instincts. → atoomic.org/#contact",
    "color:#a9b0bc;font-size:12px;line-height:1.5;"
  );
})();

// 2) Konami code → the ☢ reactor "goes critical": a one-shot gold flare on the
//    brand mark, plus a themed console line. Hidden reward; never affects the
//    default experience. The flare is a CSS animation, so prefers-reduced-motion
//    collapses it to a single frame automatically.
(function konamiCritical() {
  const sequence = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a"
  ];
  const brandMark = document.querySelector(".brand-mark");

  if (!brandMark) {
    return;
  }

  let progress = 0;

  document.addEventListener("keydown", (event) => {
    const expected = sequence[progress];
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;

    if (key === expected) {
      progress += 1;

      if (progress === sequence.length) {
        progress = 0;
        goCritical();
      }
    } else {
      // Wrong key — restart, unless this key is itself the start of the sequence.
      progress = key === sequence[0] ? 1 : 0;
    }
  });

  function goCritical() {
    brandMark.classList.remove("critical");
    // Force a reflow so the flare animation restarts on repeated triggers.
    void brandMark.offsetWidth;
    brandMark.classList.add("critical");

    if (typeof console !== "undefined" && typeof console.log === "function") {
      console.log(
        "%c☢ Reactor critical — welcome, fellow curious mind.",
        "color:#f5c518;font-weight:800;font-size:13px;"
      );
    }
  }
})();
