"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const userForm = document.querySelector("#userForm");
    const card = document.querySelector(".card");
    if (userForm && card) {
        userForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(userForm);
            const firstName = formData.get("firstName");
            const lastName = formData.get("lastName");
            const age = formData.get("age");
            const from = formData.get("from");
            const job = formData.get("job");
            const isMarried = formData.get("ismarried");
            card.innerHTML = `
        <h2>User Information</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>From:</strong> ${from}</p>
        <p><strong>Job:</strong> ${job}</p>
        <p><strong>Is Married:</strong> ${isMarried}</p>
      `;
        });
    }
    else {
        console.error("Form or card element not found");
    }
});
