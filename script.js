// =========================================
// CHEF GABRIEL MUIA
// WEBSITE INTERACTIONS
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------------------
    // MOBILE MENU
    // -----------------------------------------

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        // Close mobile menu after clicking a link
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }


    // -----------------------------------------
    // CURRENT YEAR
    // -----------------------------------------

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // -----------------------------------------
    // SCROLL REVEAL ANIMATION
    // -----------------------------------------

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    // -----------------------------------------
    // SMOOTH NAVIGATION
    // -----------------------------------------

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // -----------------------------------------
    // HEADER BACKGROUND ON SCROLL
    // -----------------------------------------

    const header = document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {
                header.style.background = "rgba(8, 8, 8, 0.96)";
            } else {
                header.style.background = "rgba(8, 8, 8, 0.88)";
            }

        });

    }


    // -----------------------------------------
    // WHATSAPP BUTTON TRACKING
    // -----------------------------------------

    const whatsappLinks = document.querySelectorAll(
        'a[href*="wa.me"]'
    );

    whatsappLinks.forEach(link => {

        link.addEventListener("click", () => {
            console.log("WhatsApp enquiry button clicked.");
        });

    });

});