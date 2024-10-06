import { API_AUTH_REGISTER } from "../constants";
import { headers } from "../headers";

/**
 * Registers a new user by sending their data to the registration API.
 * Sends a post request to the API to register a new user. If sccessful the user is redirected to the login page.
 * @param {Object} userData - The registration data of the new user.
 * @param {string} userData.name - The username.
 * @param {string} userData.email - The user's email.
 * @param {string} userData.password - The user's password.
 * @returns {Promise<void>} - A promise that resolves when the registration is complete.
 */

export async function register({ name, email, password }) {
  const body = {
    name: name,
    email: email,
    password: password,
  };

  try {
    const response = await fetch(API_AUTH_REGISTER, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(body),
    });
    if (response.ok) {
      alert("User registered");
      window.location.href = "/auth/login/";
    }
  } catch (error) {
    alert("Could not register user");
    console.error(error);
  }
}
