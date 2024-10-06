import { register } from "../../api/auth/register.js";

/**
 * Handles the form submission for registrating a new user. Extracts user data from the form
 * and sends it to the `register` function to complete registration.
 *
 * @param {Event} event - The form submit event.
 * @returns {Promise<void>} - A promise that resolves when registrating a new user.
 */

export async function onRegister(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const registerData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  register(registerData);
}
