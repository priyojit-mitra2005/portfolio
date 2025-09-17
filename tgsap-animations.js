// Exciting GSAP animations for portfolio sections

gsap.from("header", {
    y: -80,
    opacity: 0,
    duration: 1,
    ease: "bounce.out"
});

gsap.from(".firstsection", {
    opacity: 0,
    scale: 0.85,
    duration: 1.2,
    delay: 0.2,
    ease: "power3.out"
});
gsap.from(".firstsection .leftsection, .firstsection .rightsection", {
    x: -60,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    stagger: 0.2,
    ease: "power2.out"
});

gsap.from(".about-section", {
    opacity: 0,
    rotateY: 90,
    duration: 1.2,
    delay: 0.6,
    ease: "back.out(1.7)"
});
gsap.to(".about-section", {
    boxShadow: "0 0 32px #ffd16688",
    duration: 1,
    delay: 1.2,
    repeat: 1,
    yoyo: true
});

gsap.from(".secondSection .vertical", {
    y: 60,
    opacity: 0,
    scale: 0.7,
    duration: 0.8,
    delay: 0.8,
    stagger: 0.2,
    ease: "elastic.out(1, 0.7)"
});

gsap.from(".contact-section", {
    opacity: 0,
    scale: 0.7,
    duration: 1.2,
    delay: 1.2,
    ease: "power2.out"
});
gsap.to(".contact-section", {
    boxShadow: "0 0 24px #4b2aad88",
    duration: 1,
    delay: 2,
    repeat: 2,
    yoyo: true
});

gsap.from("footer", {
    y: 80,
    opacity: 0,
    duration: 1,
    delay: 1.5,
    ease: "power2.out"
});

// Animate nav links on hover with color, scale, and underline
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, { color: "#ffd166", scale: 1.15, textShadow: "0 0 8px #ffd166", duration: 0.3 });
        link.style.textDecoration = "underline";
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(link, { color: "#fff", scale: 1, textShadow: "none", duration: 0.3 });
        link.style.textDecoration = "none";
    });
});

// Sliding animation for navigation clicks
const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            const targetY = target.getBoundingClientRect().top + window.scrollY;
            gsap.to(window, {
                scrollTo: { y: targetY, autoKill: false },
                duration: 1,
                ease: "power2.inOut"
            });
        }
    });
});