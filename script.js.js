const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");
const currentYear = document.getElementById("currentYear");
const rentalDate = document.getElementById("rentalDate");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
});

currentYear.textContent = new Date().getFullYear();

const today = new Date();
const formattedDate = today.toISOString().split("T")[0];
rentalDate.setAttribute("min", formattedDate);

bookingForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    formMessage.textContent = "Submitting your rental request...";

    try {
        const response = await fetch(bookingForm.action, {
            method: bookingForm.method,
            body: new FormData(bookingForm),
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            window.location.href =
                "https://gulfsouthrentalsllc.com/waiver.html";
        } else {
            formMessage.textContent =
                "There was a problem submitting your request. Please try again.";
        }
    } catch (error) {
        formMessage.textContent =
            "There was a connection problem. Please try again.";
    }
});


