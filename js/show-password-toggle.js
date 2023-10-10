/*!
 * Bootstrap Show Password Toggle v1.0.0
 * Copyright 2023 Ihor Chyshkala
 * Licensed under MIT (https://github.com/coliff/bootstrap-show-password-toggle/blob/main/LICENSE)
 */
const showPasswordToggle = document.querySelectorAll("[type='password']");
const togglePasswordButtons = document.querySelectorAll(".toggle-password");

showPasswordToggle.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.add("input-password");
    togglePasswordButtons.forEach((button) => {
      // Use 'button' instead of 'item'
      button.classList.remove("d-none");
    });
  });
});

const passwordInputs = document.querySelectorAll("[type='password']");
togglePasswordButtons.forEach((button) => {
  button.addEventListener("click", () => {
    togglePassword(passwordInputs, button);
  });
});

const togglePassword = (passwordInputs, togglePasswordButton) => {
  passwordInputs.forEach((passwordInput) => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePasswordButton.setAttribute("aria-label", "Hide password.");
    } else {
      passwordInput.type = "password";
      togglePasswordButton.setAttribute(
        "aria-label",
        "Show password as plain text. " +
          "Warning: this will display your password on the screen."
      );
    }
  });
};
