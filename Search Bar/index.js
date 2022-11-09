const datauserTemplate = document.querySelector("[data-user-template]");
const userContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

let users = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  console.log(users);

  users.forEach((user) => {
    const isVisible = user.name.includes(value) || user.email.includes(value);
    user.element.classList.toogle("hide", !isVisible);
  });
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const card = datauserTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = user.name;
      body.textContent = user.email;
      userContainer.append(card);

      return { name: user.name, email: user.email, element: card };
    });
  });
