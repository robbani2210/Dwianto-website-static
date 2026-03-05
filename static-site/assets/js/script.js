/* ===========================================
   DWIANTO CAPITAL ADVISORY — script.js
   =========================================== */

document.addEventListener('DOMContentLoaded', function () {
  initNavigation();
  initHeroCarousel();
  initScrollAnimations();
  initStatsCounter();
  initBlogFilter();
  initContactForm();
  initLangSwitcher();
  initI18n();
  markActiveNavLink();
});

/* ============================================
   1. NAVIGATION
   ============================================ */
function initNavigation() {
  var nav    = document.getElementById('site-header');
  var toggle = document.getElementById('nav-toggle');
  var mobile = document.getElementById('nav-mobile');

  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  if (toggle && mobile) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      mobile.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(mobile.classList.contains('open')));
    });
    mobile.querySelectorAll('a:not([data-lang])').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('open');
        mobile.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* ============================================
   2. MARK ACTIVE NAV LINK
   ============================================ */
function markActiveNavLink() {
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(function (a) {
    var href = a.getAttribute('href') || '';
    var base = href.split('/').pop();
    if (base === current || (current === '' && base === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* ============================================
   3. HERO CAROUSEL
   ============================================ */
function initHeroCarousel() {
  var slides = document.querySelectorAll('.hero-slide');
  var dots   = document.querySelectorAll('.hero-dot');
  var prev   = document.getElementById('hero-prev');
  var next   = document.getElementById('hero-next');

  if (!slides.length) return;

  var current = 0;
  var timer;

  function show(idx) {
    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
  }

  function start() { timer = setInterval(function () { show(current + 1); }, 7000); }
  function stop()  { clearInterval(timer); }

  show(0);
  start();

  if (prev) prev.addEventListener('click', function () { stop(); show(current - 1); start(); });
  if (next) next.addEventListener('click', function () { stop(); show(current + 1); start(); });

  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () { stop(); show(i); start(); });
  });

  var track = document.querySelector('.hero-track');
  if (track) {
    var startX = 0;
    track.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function (e) {
      var diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { stop(); show(diff > 0 ? current + 1 : current - 1); start(); }
    }, { passive: true });
  }
}

/* ============================================
   4. SCROLL REVEAL ANIMATIONS
   ============================================ */
function initScrollAnimations() {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  els.forEach(function (el) { io.observe(el); });
}

/* ============================================
   5. ANIMATED STATS COUNTER
   ============================================ */
function initStatsCounter() {
  var counters = document.querySelectorAll('.stat-cell__num[data-target]');
  if (!counters.length) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el       = entry.target;
      var target   = parseInt(el.getAttribute('data-target'), 10);
      var prefix   = el.getAttribute('data-prefix') || '';
      var suffix   = el.getAttribute('data-suffix') || '';
      var duration = 1800;
      var startTime = null;

      function step(ts) {
        if (!startTime) startTime = ts;
        var progress = Math.min((ts - startTime) / duration, 1);
        var ease     = 1 - Math.pow(1 - progress, 3);
        el.textContent = prefix + Math.floor(ease * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold: 0.4 });

  counters.forEach(function (c) { io.observe(c); });
}

/* ============================================
   6. BLOG FILTER
   ============================================ */
function initBlogFilter() {
  var catBtns = document.querySelectorAll('.filter-pill');
  var search  = document.getElementById('blog-search');
  var cards   = document.querySelectorAll('.blog-card');

  if (!catBtns.length && !search) return;

  var activeCategory = 'all';
  var searchTerm     = '';

  function filter() {
    var visible = 0;
    cards.forEach(function (card) {
      var cat      = (card.getAttribute('data-category') || '').toLowerCase();
      var title    = (card.querySelector('.blog-card__title') || {}).textContent || '';
      var excerpt  = (card.querySelector('.blog-card__excerpt') || {}).textContent || '';
      var inCat    = activeCategory === 'all' || cat === activeCategory.toLowerCase();
      var inSearch = !searchTerm ||
        title.toLowerCase().includes(searchTerm) ||
        excerpt.toLowerCase().includes(searchTerm);
      var show = inCat && inSearch;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    var noRes = document.getElementById('no-results');
    if (noRes) noRes.style.display = visible === 0 ? 'block' : 'none';
  }

  catBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      catBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category') || 'all';
      filter();
    });
  });

  if (search) {
    search.addEventListener('input', function () {
      searchTerm = this.value.trim().toLowerCase();
      filter();
    });
  }
}

/* ============================================
   7. CONTACT FORM (Formspree Integration)
   ============================================ */
function initContactForm() {
  var form = document.getElementById('contact-form');
  if (!form) return;

  var submitBtn = form.querySelector('.btn-submit');
  var errorBox  = document.getElementById('form-error');
  var successEl = document.getElementById('form-success');
  var originalBtnText = submitBtn ? submitBtn.innerHTML : 'Submit Inquiry';

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    
    var name  = form.querySelector('[name="name"]');
    var email = form.querySelector('[name="email"]');
    var msg   = form.querySelector('[name="message"]');

    // Client-side validation
    if (!name.value.trim() || !email.value.trim() || !msg.value.trim()) {
      if (errorBox) { 
        errorBox.textContent = 'Please fill in all required fields.'; 
        errorBox.style.display = 'block'; 
      }
      return;
    }
    
    // Email format validation
    if (!email.value.includes('@') || !email.value.includes('.')) {
      if (errorBox) { 
        errorBox.textContent = 'Please enter a valid email address.'; 
        errorBox.style.display = 'block'; 
      }
      return;
    }

    if (errorBox) errorBox.style.display = 'none';
    if (submitBtn) { 
      submitBtn.disabled = true; 
      submitBtn.innerHTML = 'Submitting\u2026 <i class="fas fa-spinner fa-spin"></i>'; 
    }

    try {
      var formData = new FormData(form);
      var response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.style.display = 'none';
        if (successEl) successEl.style.display = 'block';
        form.reset();
      } else {
        var data = await response.json();
        throw new Error(data.error || 'Form submission failed');
      }
    } catch (error) {
      console.error('Form error:', error);
      if (errorBox) {
        errorBox.textContent = 'There was an error sending your message. Please try again or contact us directly via WhatsApp.';
        errorBox.style.display = 'block';
      }
    } finally {
      if (submitBtn) { 
        submitBtn.disabled = false; 
        submitBtn.innerHTML = originalBtnText; 
      }
    }
  });

  var resetBtn = document.getElementById('form-reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      form.reset();
      form.style.display = '';
      if (successEl) successEl.style.display = 'none';
      if (errorBox)  errorBox.style.display  = 'none';
    });
  }
}

/* ============================================
   8. LANGUAGE SWITCHER (Dropdown)
   ============================================ */
function initLangSwitcher() {
  var trigger  = document.querySelector('.nav-lang-btn');
  var dropdown = document.querySelector('.nav-lang-drop');
  if (!trigger || !dropdown) return;

  trigger.addEventListener('click', function (e) {
    e.stopPropagation();
    dropdown.classList.toggle('open');
    trigger.setAttribute('aria-expanded', String(dropdown.classList.contains('open')));
  });
  document.addEventListener('click', function () {
    dropdown.classList.remove('open');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
  });
}

/* ============================================
   9. INTERNATIONALIZATION (i18n)
   ============================================ */
var i18nData = {};
var currentLang = localStorage.getItem('dcaLang') || 'en';

function initI18n() {
  // Load the current language JSON
  loadLanguage(currentLang);
  
  // Set up language switcher click handlers
  document.querySelectorAll('[data-lang]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      var lang = this.getAttribute('data-lang');
      if (lang && lang !== currentLang) {
        setLanguage(lang);
      }
      // Close dropdown after selection
      var dropdown = document.querySelector('.nav-lang-drop');
      if (dropdown) dropdown.classList.remove('open');
    });
  });
  
  // Update the active state for language selectors
  updateLangButtons();
}

function loadLanguage(lang) {
  // Determine the correct path based on page location
  var basePath = window.location.pathname.includes('/insights/') ? '../assets/i18n/' : 'assets/i18n/';
  var url = basePath + lang + '.json';
  
  fetch(url)
    .then(function (response) {
      if (!response.ok) throw new Error('Language file not found');
      return response.json();
    })
    .then(function (data) {
      i18nData = data;
      applyTranslations();
    })
    .catch(function (err) {
      console.warn('Could not load language file:', err);
      // Fall back to English if file not found
      if (lang !== 'en') {
        loadLanguage('en');
      }
    });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('dcaLang', lang);
  loadLanguage(lang);
  updateLangButtons();
  
  // Update document direction for RTL languages
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
}

function updateLangButtons() {
  // Update desktop dropdown button text
  var langBtn = document.querySelector('.nav-lang-btn');
  if (langBtn) {
    var langCode = currentLang.toUpperCase();
    langBtn.innerHTML = langCode + ' <i class="fas fa-chevron-down fa-xs"></i>';
  }
  
  // Update active state in desktop dropdown
  document.querySelectorAll('.nav-lang-drop [data-lang]').forEach(function (a) {
    a.classList.toggle('active', a.getAttribute('data-lang') === currentLang);
  });
  
  // Update active state in mobile language buttons
  document.querySelectorAll('.nav-mobile-langs [data-lang]').forEach(function (a) {
    a.classList.toggle('active', a.getAttribute('data-lang') === currentLang);
  });
}

function applyTranslations() {
  // Apply translations to elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (i18nData[key]) {
      el.innerHTML = i18nData[key];
    }
  });
  
  // Apply translations to placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (i18nData[key]) {
      el.placeholder = i18nData[key];
    }
  });
  
  // Apply translations to title attributes
  document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-title');
    if (i18nData[key]) {
      el.title = i18nData[key];
    }
  });
}
