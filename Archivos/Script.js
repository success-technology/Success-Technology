// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth scrolling para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const successMsg = document.getElementById('success-message');
  const errorMsg = document.getElementById('error-message');

  successMsg.style.display = "none";
  errorMsg.style.display = "none";

  contactForm.addEventListener('submit', function() {
    const button = this.querySelector('button');
    button.textContent = "Enviando...";
  });
});


// Fade in animation para service cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Aplicar animación a las cards de servicio
document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach((card, index) => {
    // Añadir clase fade-in
    card.classList.add('fade-in');
    // Añadir delay escalonado
    card.style.transitionDelay = `${index * 0.2}s`;
    // Observar para animación
    observer.observe(card);
  });
  
  // También observar otros elementos con fade-in si existen
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
});

// Mejorar la experiencia del usuario con el favicon
document.addEventListener('DOMContentLoaded', function() {
  // Verificar si el favicon existe, si no, usar uno por defecto
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
    favicon.onerror = function() {
      // Si el favicon no se puede cargar, usar uno genérico
      this.href = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNCIgZmlsbD0iIzFBMzY1RCIvPgo8cGF0aCBkPSJNOCAxMkgyNEwxNiAyMEw4IDEyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+';
    };
  }
});

document.addEventListener("DOMContentLoaded", () => {

  /* ── Menú hamburguesa ── */
  const hamburger  = document.querySelector(".hamburger");
  const navmenu    = document.getElementById("nav-menu");
  const submenuBtn = document.getElementById("submenu-btn");
  const submenu    = document.getElementById("submenu");

  if (hamburger && navmenu) {
    hamburger.addEventListener("click", () => {
      navmenu.classList.toggle("active");
      const open = navmenu.classList.contains("active");
      hamburger.textContent = open ? "✕" : "☰";
      hamburger.setAttribute("aria-expanded", open);
    });
  }
  if (submenuBtn && submenu) {
    submenuBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      submenu.classList.toggle("show");
    });
  }
  document.querySelectorAll(".nav-menu a:not(.submenu-btn)").forEach(link => {
    link.addEventListener("click", () => {
      navmenu?.classList.remove("active");
      if (hamburger) hamburger.textContent = "☰";
    });
  });

/* ── Header sombra al scrollear ── */
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 50);
  }, { passive: true });


  /* ── Scroll reveal — IntersectionObserver ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  document.querySelectorAll(
    ".anim-up, .anim-down, .anim-left, .anim-right, .anim-pop, .anim-flip, .anim-reveal"
  ).forEach(el => revealObserver.observe(el));


  /* ── Parallax suave en el Hero ── */
  const hero = document.querySelector(".hero");
  const video = document.querySelector(".background-video");
  if (hero && video) {
    window.addEventListener("scroll", () => {
      const offset = window.scrollY;
      if (offset < window.innerHeight) {
        video.style.transform = `translate(-50%, calc(-50% + ${offset * 0.25}px))`;
      }
    }, { passive: true });
  }


  /* ── Efecto typing en el Hero h2 (opcional) ── */
  const heroTitle = document.querySelector(".hero h2");
  if (heroTitle) {
    heroTitle.style.borderRight = "3px solid var(--accent-color)";
    setTimeout(() => {
      heroTitle.style.borderRight = "none";
    }, 2200);
  }

  /* ── Animación ENTRADA y SALIDA de las tarjetas de servicios ── */
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('card-visible');
      entry.target.classList.remove('card-hidden');
    } else {
      /* Solo animar salida si ya fue visible una vez */
      if (entry.target.classList.contains('card-visible')) {
        entry.target.classList.add('card-hidden');
        entry.target.classList.remove('card-visible');
      }
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -60px 0px'
});

document.querySelectorAll('.service-card')
  .forEach(card => cardObserver.observe(card));

/* ── Metodología: entrada y salida ── */
const metoSection = document.querySelector('.Metodología');

if (metoSection) {
  const metoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        metoSection.classList.add('meto-visible');
        metoSection.classList.remove('meto-hidden');
      } else {
        if (metoSection.classList.contains('meto-visible')) {
          metoSection.classList.add('meto-hidden');
          metoSection.classList.remove('meto-visible');
        }
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -80px 0px'
  });

  metoObserver.observe(metoSection);
}

/* ── dev-process: sección completa entrada/salida ── */
const devProcess = document.querySelector('.dev-process');

if (devProcess) {
  const processObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        devProcess.classList.add('process-visible');
        devProcess.classList.remove('process-hidden');
      } else {
        if (devProcess.classList.contains('process-visible')) {
          devProcess.classList.add('process-hidden');
          devProcess.classList.remove('process-visible');
        }
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  processObserver.observe(devProcess);
}

/* ── Steps: entrada y salida escalonada ── */
const steps = document.querySelectorAll('.step');

if (steps.length) {
  const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('step-visible');
        entry.target.classList.remove('step-hidden');
      } else {
        if (entry.target.classList.contains('step-visible')) {
          entry.target.classList.add('step-hidden');
          entry.target.classList.remove('step-visible');
        }
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  steps.forEach((step, i) => {
    /* Delay escalonado en CSS vía JS para no hardcodear 6 reglas */
    step.style.transitionDelay = `${0.08 + i * 0.09}s`;
    stepObserver.observe(step);
  });
}

/* ── Innovación descripción: entrada y salida ── */
const innovBlocks = document.querySelectorAll('.innovacion');

if (innovBlocks.length) {
  const innovObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('innov-visible');
        entry.target.classList.remove('innov-hidden');
      } else {
        if (entry.target.classList.contains('innov-visible')) {
          entry.target.classList.add('innov-hidden');
          entry.target.classList.remove('innov-visible');
        }
      }
    });
  }, {
    threshold: 0.18,
    rootMargin: '0px 0px -60px 0px'
  });

  innovBlocks.forEach(block => innovObserver.observe(block));
}

/* ── Áreas de Innovación: entrada y salida ── */
const areasSection = document.querySelector('.innovacion-areas');

if (areasSection) {
  const areasObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        areasSection.classList.add('areas-visible');
        areasSection.classList.remove('areas-hidden');
      } else {
        if (areasSection.classList.contains('areas-visible')) {
          areasSection.classList.add('areas-hidden');
          areasSection.classList.remove('areas-visible');
        }
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
  });

  areasObserver.observe(areasSection);
}


/* ── Nosotros: entrada y salida ── */
const nosotrosSection = document.getElementById('nosotros');

if (nosotrosSection) {
  const nosotrosObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        nosotrosSection.classList.add('nosotros-visible');
        nosotrosSection.classList.remove('nosotros-hidden');
      } else {
        if (nosotrosSection.classList.contains('nosotros-visible')) {
          nosotrosSection.classList.add('nosotros-hidden');
          nosotrosSection.classList.remove('nosotros-visible');
        }
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  nosotrosObserver.observe(nosotrosSection);
}

/* ── Contacto: entrada y salida ── */
const contactSection = document.querySelector('.contact-section');

if (contactSection) {
  const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contactSection.classList.add('contact-visible');
        contactSection.classList.remove('contact-hidden');
      } else {
        if (contactSection.classList.contains('contact-visible')) {
          contactSection.classList.add('contact-hidden');
          contactSection.classList.remove('contact-visible');
        }
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
  });

  contactObserver.observe(contactSection);
}

});