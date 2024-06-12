document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.querySelector("#userForm") as HTMLFormElement | null;
  const card = document.querySelector(".card") as HTMLDivElement | null;

  if (userForm && card) {
    userForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(userForm);

      const firstName = formData.get("firstName") as string;
      const lastName = formData.get("lastName") as string;
      const age = formData.get("age") as string;
      const from = formData.get("from") as string;
      const job = formData.get("job") as string;
      const isMarried = formData.get("ismarried") as string;

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
  } else {
    console.error("Form or card element not found");
  }
});
