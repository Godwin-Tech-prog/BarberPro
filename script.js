/* =========================
   BARBERPRO JAVASCRIPT
========================= */


/* =========================
   MOBILE HAMBURGER MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/* =========================
   BOOKING FORM
========================= */

const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener("submit", (event) => {

    event.preventDefault();

    /* Get form values */

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const message = document.getElementById("message").value.trim();


    /* =========================
       VALIDATION
    ========================= */

    if (name === "") {
        alert("Please enter your full name.");
        return;
    }

    if (phone === "") {
        alert("Please enter your phone number.");
        return;
    }

    if (service === "") {
        alert("Please select a service.");
        return;
    }

    if (date === "") {
        alert("Please select your preferred date.");
        return;
    }


    /* =========================
       PHONE VALIDATION
    ========================= */

    const phonePattern = /^[0-9+\-\s()]{7,20}$/;

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number.");
        return;
    }


    /* =========================
       SERVICE NAMES
    ========================= */

    const serviceNames = {
        classic: "Classic Haircut",
        "haircut-beard": "Haircut & Beard",
        kids: "Kids Haircut",
        premium: "Premium Grooming"
    };

    const selectedService = serviceNames[service];

    /* =========================
       FORMAT DATE
    ========================= */

    const selectedDate = new Date(date + "T00:00:00");

    const formattedDate = selectedDate.toLocaleDateString("en-NG", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });


    /* =========================
       CREATE WHATSAPP MESSAGE
    ========================= */

    const whatsappMessage =
        `Hello BarberPro! 👋

I would like to book an appointment.

Customer Details
Name: ${name}
Phone: ${phone}

Appointment Details
Service: ${selectedService}
Preferred Date: ${formattedDate}

Additional Message:
${message || "None"}

Thank you.`;


    /* =========================
       WHATSAPP NUMBER
    ========================= */

    const barberWhatsApp = "2348012345678";


    /* =========================
       CREATE WHATSAPP LINK
    ========================= */

    const whatsappURL =
        `https://wa.me/${barberWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`;


    /* =========================
       OPEN WHATSAPP
    ========================= */

    'window.open(whatsappURL, "_blank")';


    /* =========================
       RESET FORM
    ========================= */

    bookingForm.reset();
});


/* =========================
   PREVENT PAST DATES
========================= */

const dateInput = document.getElementById("date");

const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

const currentDate = '${year}-${month}-${day}';

dateInput.setAttribute("min", currentDate);


/* =========================
   WHATSAPP CONTACT BUTTON
========================= */

const whatsappButton = document.querySelector(".whatsapp-btn");

whatsappButton.addEventListener("click", () => {

    const message = encodeURIComponent(
        "Hello BarberPro, I would like to make an appointment."
    );

    whatsappButton.href =
        'https://wa.me/+2348012345678?text=${message}';
});


/* =========================
   CURRENT YEAR
========================= */

const copyright = document.querySelector(".copyright");

copyright.innerHTML =
    '&copy; ${new Date().getFullYear()} BarberPro. All Rights Reserved.';