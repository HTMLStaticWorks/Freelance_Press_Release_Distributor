document.addEventListener('DOMContentLoaded', () => {
    // Check if GSAP is loaded
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Fade Up Reveal
        gsap.utils.toArray('.reveal-up').forEach((elem) => {
            gsap.fromTo(elem, 
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        // Staggered Cards
        const staggerContainers = gsap.utils.toArray('.stagger-container');
        staggerContainers.forEach((container) => {
            gsap.fromTo(container.querySelectorAll('.stagger-item'),
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 80%"
                    }
                }
            );
        });

        // Hero Content Reveal
        gsap.fromTo('.hero-content', 
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
        );
        
        gsap.fromTo('.hero-image', 
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.5 }
        );
    }
});
