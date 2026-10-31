document.getElementById("current-year").textContent =
    new Date().getFullYear();



let box1 = document.querySelector("#box1");
box1.addEventListener("mouseenter", function (dets) {
    box1.style.transform = 'scale(1.05)';
})
box1.addEventListener("mouseleave", function (dets) {
    box1.style.transform = 'scale(1)';
})

///box2
let box2 = document.querySelector("#box2");
box2.addEventListener("mouseenter", function (dets) {
    box2.style.transform = 'scale(1.05)';
})
box2.addEventListener("mouseleave", function (dets) {
    box2.style.transform = 'scale(1)';
})

//box3
let box3 = document.querySelector("#box3");
box3.addEventListener("mouseenter", function (dets) {
    box3.style.transform = 'scale(1.05)';
})
box3.addEventListener("mouseleave", function (dets) {
    box3.style.transform = 'scale(1)';
})
///box4
let box4 = document.querySelector("#box4");
box4.addEventListener("mouseenter", function (dets) {
    box4.style.transform = 'scale(1.05)';
})
box4.addEventListener("mouseleave", function (dets) {
    box4.style.transform = 'scale(1)';
})

gsap.registerPlugin(ScrollTrigger);

const aboutTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#about",
        start: "top 75%",
        toggleActions: "play none none reverse"
    }
});

// A LITTLE ABOUT - Fade In
aboutTl.from(".section-kicker", {
    opacity: 0,
    y: 25,
    duration: 0.8,
    ease: "power2.out"
})

    // DESIGN-MINDED - Left to Right
    .from(".design-text", {
        x: -200,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    }, "-=0.3")

    // DEVELOPER - Right to Left
    .from(".developer-text", {
        x: 200,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    }, "<");