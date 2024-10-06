import { login } from "../../api/auth/login.js";

/**
 * Handles the login form submission. Extracts the user's credentials from the form
 * and sends them to the `login` function for authentication.
 *
 * @param {Event} event - The form submission event.
 * @returns {Promise<void>} - A promise that resolves when the login process starts.
 */

export async function onLogin(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const loginData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  login(loginData);
}
