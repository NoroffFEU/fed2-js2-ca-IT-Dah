import { register } from "../../api/auth/register.js";

/**
 * Handles the registration form submission. Extracts user data from the form
 * and sends it to the `register` function to complete the registration.
 *
 * @param {Event} event - The form submission event.
 * @returns {Promise<void>} - A promise that resolves when the registration process starts.
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
