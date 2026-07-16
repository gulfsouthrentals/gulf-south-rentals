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

bookingForm.addEventListener("submit", function (event) {
    

    const name = document.getElementById("name").value;

    formMessage.textContent =
        "Thanks, " +
        name +
        "! Your request has been recorded. We will contact you to confirm.";

    bookingForm.reset();
});
