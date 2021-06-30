const user = { username: "new_user", password: "123456789" };

const username = document.getElementById("username");
const password = document.getElementById("password");
const message = document.getElementById("message");
const form = document.getElementById("form");
const checkUsername = document.getElementsByClassName("check-username");
const failedUsername = document.getElementsByClassName("failed-username");
const checkPassword = document.getElementsByClassName("check-password");
const failedPassword = document.getElementsByClassName("failed-password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let messages = [];

  if (username.value === "") {
    messages.push("*please, enter username");
    checkUsername[0].classList.remove("show-check-username");
    failedUsername[0].classList.add("show-failed-username");
    username.classList.remove("success");
    username.classList.add("error");
  }
  if (username.value !== user.username && username.value !== "") {
    messages.push("*please, enter valid username");
    checkUsername[0].classList.remove("show-check-username");
    failedUsername[0].classList.add("show-failed-username");
    username.classList.remove("success");
    username.classList.add("error");
  }

  if (password.value === "") {
    messages.push("*please, enter password");
    checkPassword[0].classList.remove("show-check-password");
    failedPassword[0].classList.add("show-failed-password");
    password.classList.remove("success");
    password.classList.add("error");
  }
  if (password.value !== user.password && password.value !== "") {
    messages.push("*please, enter valid password");
    checkPassword[0].classList.remove("show-check-password");
    failedPassword[0].classList.add("show-failed-password");
    password.classList.remove("success");
    password.classList.add("error");
  }

  if (username.value === user.username) {
    failedUsername[0].classList.remove("show-failed-username");
    checkUsername[0].classList.add("show-check-username");
    username.classList.remove("error");
    username.classList.add("success");
  }

  if (password.value === user.password) {
    failedPassword[0].classList.remove("show-failed-password");
    checkPassword[0].classList.add("show-check-password");
    password.classList.remove("error");
    password.classList.add("success");
  }

  if (messages.length > 0) {
    message.innerText = messages.join("\n");
  }
  if (messages.length === 0) {
    message.innerText = "Successful login!";
  }
});
