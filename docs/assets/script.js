// scripts for Long Horizon Hierarchy project page
// Merged and conflict-free: combines theme toggle, responsive nav, and active-section highlighting.

const root = document.body;

// --- NAV ELEMENTS (support both data-js and legacy class selectors) ---
const nav =
  document.querySelector('[data-js="site-nav"]') ||
  document.querySelector('.site-nav');

const navLinks = nav
  ? Array.from(nav.querySelectorAll('a[href^="#"]'))
  : Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));

// Menu toggle button (hamburger)
const menuToggle =
  document.querySelector('[data-js="menu-toggle"]') ||
  document.querySelector('.menu-toggle');

// Theme toggle button (optional)
const themeToggle =
  document.querySelector('[data-js="theme-toggle"]') ||
  document.querySelector('.theme-toggle');

const themeToggleIcon = themeToggle
  ? themeToggle.querySelector('.theme-toggle__icon')
  : null;

const themeToggleText = themeToggle
  ? themeToggle.querySelector('.theme-toggle__text')
  : null;

// --- THEME HANDLING ---
const THEME_STORAGE_KEY = 'lhh-color-theme';
const prefersDark =
  typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;

const getStoredTheme = () => {
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
};

const storeTheme = (theme) => {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore storage errors (e.g., private browsing)
  }
};

const updateThemeToggle = (currentTheme) => {
  if (!themeToggle) return;

  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  const label = `Switch to ${nextTheme} theme`;

  themeToggle.setAttribute('aria-label', label);
  themeToggle.setAttribute('title', label);

  if (themeToggleIcon) {
    themeToggleIcon.textContent = nextTheme === 'dark' ? '🌙' : '☀️';
  }
  if (themeToggleText) {
    themeToggleText.textContent =
      `${nextTheme.charAt(0).toUpperCase()}${nextTheme.slice(1)} Mode`;
  }
};

const applyTheme = (theme, { persist = true } = {}) => {
  if (!root) return;
  root.setAttribute('data-theme', theme);
  if (persist) storeTheme(theme);
  updateThemeToggle(theme);
};

const storedTheme = getStoredTheme();
const systemPrefersDark = prefersDark ? prefersDark.matches : true;
const initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
applyTheme(initialTheme, { persist: false });

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const activeTheme =
      root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    applyTheme(activeTheme === 'dark' ? 'light' : 'dark');
  });
}

if (prefersDark) {
  const handleSystemThemeChange = (event) => {
    // Respect explicit user choice in localStorage
    if (getStoredTheme()) return;
    applyTheme(event.matches ? 'dark' : 'light', { persist: false });
  };

  if (typeof prefersDark.addEventListener === 'function') {
    prefersDark.addEventListener('change', handleSystemThemeChange);
  } else if (typeof prefersDark.addListener === 'function') {
    // Safari < 14
    prefersDark.addListener(handleSystemThemeChange);
  }
}

// --- RESPONSIVE NAV / MENU ---
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    nav.classList.toggle('is-open');
  });

  // Close nav when clicking outside
  document.addEventListener('click', (event) => {
    if (!nav.classList.contains('is-open')) return;
    const target = event.target;
    if (target === nav || nav.contains(target) || menuToggle.contains(target)) {
      return;
    }
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });

  // Close with Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.focus();
    }
  });

  // Close on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 960 && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Close the nav after clicking a link (mobile)
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (!nav) return;
    if (window.innerWidth <= 960 && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// --- ACTIVE SECTION HIGHLIGHTING ---
/**
 * Prefer sections that nav links point to.
 * Fallback: any <main> section with an id.
 */
let sections = navLinks
  .map((link) => {
    const targetId = link.getAttribute('href');
    if (!targetId || !targetId.startsWith('#')) return null;
    return document.querySelector(targetId);
  })
  .filter(Boolean);

// Fallback if no sections resolvable from navLinks
if (!sections.length) {
  sections = Array.from(document.querySelectorAll('main section[id]'));
}

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('is-active');
          } else {
            link.classList.remove('is-active');
          }
        });
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((section) => observer.observe(section));
} else if (navLinks.length) {
  // Basic fallback: mark the first link active
  navLinks[0].classList.add('is-active');
}
