/* ===========================================
   DWIANTO CAPITAL ADVISORY — script.js
   All interactivity for the static website
   =========================================== */

document.addEventListener('DOMContentLoaded', function () {
  initNavigation();
  initHeroCarousel();
  initScrollAnimations();
  initBlogFilter();
  initContactForm();
  initLangSwitcher();
  markActiveNavLink();
});

/* ============================================
   1. NAVIGATION — scroll shadow + mobile menu
   ============================================ */
function initNavigation() {
  var header = document.getElementById('site-header');
  var toggle = document.getElementById('mob-toggle');
  var mobMenu = document.getElementById('mob-menu');

  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  if (toggle && mobMenu) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      mobMenu.classList.toggle('open');
    });
    // Close when a link inside is clicked
    mobMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('open');
        mobMenu.classList.remove('open');
      });
    });
  }
}

/* ============================================
   2. MARK ACTIVE NAV LINK
   ============================================ */
function markActiveNavLink() {
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mob-menu a').forEach(function (a) {
    var href = a.getAttribute('href') || '';
    if (href === current || (current === '' && href === 'index.html')) {
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

  if (prev) {
    prev.addEventListener('click', function () { stop(); show(current - 1); start(); });
  }
  if (next) {
    next.addEventListener('click', function () { stop(); show(current + 1); start(); });
  }
  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () { stop(); show(i); start(); });
  });

  // Touch / swipe support
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
   4. SCROLL ANIMATIONS (IntersectionObserver)
   ============================================ */
function initScrollAnimations() {
  var els = document.querySelectorAll('.anim');
  if (!els.length) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(function (el) { io.observe(el); });
}

/* ============================================
   5. BLOG FILTER — insights page
   ============================================ */
function initBlogFilter() {
  var catBtns = document.querySelectorAll('.cat-btn');
  var search  = document.getElementById('blog-search');
  var cards   = document.querySelectorAll('.blog-card');

  if (!catBtns.length && !search) return;

  var activeCategory = 'all';
  var searchTerm     = '';

  function filter() {
    var visible = 0;
    cards.forEach(function (card) {
      var cat     = (card.getAttribute('data-category') || '').toLowerCase();
      var title   = (card.querySelector('.blog-title')   || {}).textContent || '';
      var excerpt = (card.querySelector('.blog-excerpt') || {}).textContent || '';
      var inCat   = activeCategory === 'all' || cat === activeCategory.toLowerCase();
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
   6. CONTACT FORM
   ============================================ */
function initContactForm() {
  var form    = document.getElementById('contact-form');
  if (!form) return;

  var submitBtn = form.querySelector('.btn-submit');
  var errorBox  = document.getElementById('form-error');
  var successEl = document.getElementById('form-success');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic validation
    var name  = form.querySelector('[name="name"]');
    var email = form.querySelector('[name="email"]');
    var msg   = form.querySelector('[name="message"]');

    if (!name.value.trim() || !email.value.trim() || !msg.value.trim()) {
      if (errorBox) {
        errorBox.textContent = 'Please fill in all required fields.';
        errorBox.style.display = 'block';
      }
      return;
    }

    if (errorBox) errorBox.style.display = 'none';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting…';
    }

    /* -----------------------------------------------
       WordPress integration: replace this timeout
       with a fetch/AJAX call to your WP REST endpoint
       or Contact Form 7 / Gravity Forms action.
    ----------------------------------------------- */
    setTimeout(function () {
      form.style.display = 'none';
      if (successEl) successEl.style.display = 'block';
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Inquiry';
      }
    }, 1200);
  });

  // Reset
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
   7. LANGUAGE SWITCHER DROPDOWN
   ============================================ */
function initLangSwitcher() {
  var trigger  = document.querySelector('.lang-btn');
  var dropdown = document.querySelector('.lang-dropdown');
  if (!trigger || !dropdown) return;

  trigger.addEventListener('click', function (e) {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });
  document.addEventListener('click', function () {
    dropdown.classList.remove('open');
  });
}
