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

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.style.display =
            navMenu.style.display === "flex" ? "none" : "flex";
    });

