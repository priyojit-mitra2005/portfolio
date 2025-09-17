document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (name && email && message) {
            // Retrieve existing contacts or create new array
            let contacts = JSON.parse(localStorage.getItem("contactMessages")) || [];
            // Add new contact
            contacts.push({ name, email, message, date: new Date().toISOString() });
            // Save back to localStorage
            localStorage.setItem("contactMessages", JSON.stringify(contacts));

            form.reset();
            alert("Thank you for contacting me! Your message has been saved.");
        } else {
            alert("Please fill in all fields.");
        }
    });
});