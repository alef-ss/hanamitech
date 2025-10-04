// ===============================
// NAVBAR SCROLL EFFECT + ACTIVE LINK
// ===============================
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  // Efeito de scroll na navbar
  if (scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Ativar link da seção atual
  const sections = document.querySelectorAll("section[id]");
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active"));
      if (navLink) navLink.classList.add("active");
    }
  });
});

// ===============================
// MOBILE MENU TOGGLE
// ===============================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Fecha o menu ao clicar em um link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}

// ===============================
// SMOOTH SCROLL
// ===============================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ===============================
// FADE-IN ANIMATIONS
// ===============================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Elementos animados
const animateElements = document.querySelectorAll(
  ".project-card, .feature-item, .contact-item, .about-text, .about-image"
);
animateElements.forEach((el) => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// ===============================
// FORM SUBMISSION
// ===============================
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Aqui você poderia enviar os dados via fetch se quiser
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    contactForm.reset();
  });
}

// ===============================
// PARALLAX EFFECT (HERO)
// ===============================
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// ===============================
// PROJECT CARD HOVER ANIMATION
// ===============================
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });
  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// ===============================
// TYPING EFFECT (HERO SUBTITLE)
// ===============================
const subtitle = document.querySelector(".hero-subtitle");
if (subtitle) {
  const text = subtitle.textContent.trim();
  subtitle.textContent = "";
  let i = 0;

  const typeWriter = () => {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  };

  window.addEventListener("load", () => {
    setTimeout(typeWriter, 500);
  });
}
