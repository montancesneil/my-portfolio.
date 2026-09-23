// ==============================
// PORTFOLIO JAVASCRIPT
// ==============================

// Show a welcome message when the page loads
window.addEventListener("load", function () {
    console.log("Welcome to Neil Anthony's Student Portfolio!");
});


// ==============================
// NAVIGATION
// ==============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ==============================
// PROJECT CARD CLICK
// ==============================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const projectName = this.querySelector("h3").textContent;

        alert("You selected: " + projectName);

    });

});


// ==============================
// CURRENT YEAR
// ==============================

const footer = document.querySelector("footer p");

const currentYear = new Date().getFullYear();

footer.innerHTML =
    &copy; ${currentYear} Montances Neil Anthony D. | All Rights Reserved;
