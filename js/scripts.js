document.getElementById("current-year").textContent =
    new Date().getFullYear();

const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});



if (window.gsap && window.ScrollTrigger && window.SplitText) {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const motion = gsap.matchMedia();
    motion.add("(prefers-reduced-motion: no-preference)", () => {
        const aboutTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });

        aboutTl
            .from("#about .section-kicker", {
                opacity: 0,
                y: 14,
                duration: 0.65,
                ease: "power2.out"
            })
            .from("#about .design-text", {
                x: -110,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.2")
            .from("#about .developer-text", {
                x: 110,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "<");
        aboutTl
            .from("#projects .section-kicker", {
                opacity: 0,
                y: 14,
                duration: 0.65,
                ease: "power2.out"
            })
            .from("#projects .design-text", {
                x: -110,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.2")
            .from("#projects .developer-text", {
                x: 110,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "<");

        const paragraphSplits = Array.from(document.querySelectorAll(".scroll-opacity-text"))
            .map((paragraph) => SplitText.create(paragraph, {
                type: "words",
                wordsClass: "reveal-word",
                aria: "auto",
                autoSplit: true,
                onSplit: (split) => gsap.fromTo(split.words,
                    { opacity: 0.24 },
                    {
                        opacity: 1,
                        ease: "none",
                        stagger: { each: 0.035 },
                        scrollTrigger: {
                            trigger: paragraph,
                            start: "top 86%",
                            end: "clamp(bottom 42%)",
                            scrub: 0.35,
                            invalidateOnRefresh: true
                        }
                    }
                )
            }));

        return () => paragraphSplits.forEach((split) => split.revert());
    });
}
