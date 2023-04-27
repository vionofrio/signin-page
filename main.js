const password = document.querySelector("#password");

document.querySelector("#password + button").addEventListener("click", () => {
  password.setAttribute(
    "type",
    password.getAttribute("type") === "password" ? "text" : "password"
  );
});
