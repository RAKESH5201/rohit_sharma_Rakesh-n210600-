gsap.registerPlugin(ScrollTrigger);

// Smooth Scrolling and Active Nav Highlight
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    
    // Remove active class from all links
    document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
    // Add active class to clicked link
    link.classList.add('active');
    
    // Smooth scroll to section
    gsap.to(window, {
      scrollTo: targetId,
      duration: 2,
      ease: 'power4.inOut'
    });
  });
});

// Update active nav link based on scroll position
ScrollTrigger.create({
  trigger: "body",
  start: "top top",
  end: "bottom bottom",
  onUpdate: (self) => {
    const sections = ['hero', 'journey', 'about', 'achievements', 'gallery', 'stats', 'contact'];
    const scrollPos = self.scroll();
    
    sections.forEach(section => {
      const elem = document.querySelector(`#${section}`);
      const top = elem.offsetTop;
      const height = elem.offsetHeight;
      
      if (scrollPos >= top - 100 && scrollPos < top + height - 100) {
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
        document.querySelector(`.nav-link[href="#${section}"]`).classList.add('active');
      }
    });
  }
});

// Hero Section Animations
gsap.from(".animated-text", {
  opacity: 0,
  y: 400,
  duration: 2.5,
  ease: "expo.out",
  delay: 0.5
});

gsap.from(".hero-subtext", {
  opacity: 0,
  scale: 0.8,
  duration: 2,
  ease: "power4.out",
  delay: 1.2
});

gsap.to("#triangle1", {
  x: -200,
  y: 300,
  rotation: 180,
  duration: 10,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to("#circle1", {
  x: 250,
  y: -200,
  scale: 1.2,
  duration: 8,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// Parallax Section
gsap.to(".parallax-layer1", {
  scrollTrigger: {
    trigger: ".parallax-section",
    start: "top bottom",
    end: "bottom top",
    scrub: 1.8
  },
  y: 800,
  ease: "none"
});

gsap.to(".parallax-layer2", {
  scrollTrigger: {
    trigger: ".parallax-section",
    start: "top bottom",
    end: "bottom top",
    scrub: 1.2
  },
  y: 500,
  ease: "none"
});

gsap.from(".scroll-text", {
  scrollTrigger: {
    trigger: ".parallax-section",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  x: -200,
  duration: 2,
  ease: "power4.out"
});

gsap.from(".scroll-subtext", {
  scrollTrigger: {
    trigger: ".parallax-section",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  x: 200,
  duration: 2,
  ease: "power4.out",
  delay: 0.5
});

gsap.to("#hexagon1", {
  rotation: 360,
  scale: 1.1,
  duration: 12,
  repeat: -1,
  ease: "linear"
});

// About Section
gsap.from(".section-title, .about-text, .about-img", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 150,
  duration: 2,
  ease: "power4.out",
  stagger: 0.4
});

// Achievements Section
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".achievements-section",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  scale: 0.8,
  duration: 1.8,
  ease: "back.out(1.7)",
  stagger: 0.3
});

// Gallery Section
gsap.from(".carousel-item", {
  scrollTrigger: {
    trigger: ".gallery-section",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  x: -150,
  duration: 2,
  ease: "power4.out",
  stagger: 0.4
});

// Stats Section
gsap.from(".table", {
  scrollTrigger: {
    trigger: ".stats-section",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 200,
  duration: 2,
  ease: "power4.out"
});

// Contact Section
gsap.from(".form-control, .btn-primary", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 100,
  duration: 1.8,
  ease: "power4.out",
  stagger: 0.3
});