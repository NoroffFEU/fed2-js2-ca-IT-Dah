import { API_AUTH_LOGIN } from "../constants";
import { headers } from "../headers";

/**
 * Logs in a user by sending their email and password to the API.
 * If successful, the access token and user info are saved in localStorage, and the user is redirected to the homepage.
 *
 * @param {Object} credentials - The user's login details.
 * @param {string} credentials.email - The user's email.
 * @param {string} credentials.password - The user's password.
 * @returns {Promise<void>} - A promise that finishes when the login is done.
 */

export async function login({ email, password }) {
  const body = JSON.stringify({
    email: email,
    password: password,
  });

  try {
    const response = await fetch(API_AUTH_LOGIN, {
      method: "POST",
      headers: headers(),
      body,
    });

    const data = await response.json();
    const accessToken = data.data.accessToken;
    if (response.ok) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userData", JSON.stringify(data.data));
      window.location.href = "/";
    }
  } catch (error) {
    alert("Could not log in");
    console.log(error);
  }
}
