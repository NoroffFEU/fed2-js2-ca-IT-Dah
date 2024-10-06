import { login } from "../../api/auth/login.js";

/**
 * Handles the form submission for user login. Extracts user credentials from the form
 * and passes them to the `login` function to authenticate the user.
 *
 * @param {Event} event - The form submit event.
 * @returns {Promise<void>} - A promise that resolves when the signing in.
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
