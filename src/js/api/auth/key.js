import { API_AUTH_KEY } from "../constants";
import { headers } from "../headers";

/**
 * Gets an API key from the server and saves it in local storage.
 *
 * This function sends a request to get an API key from the server.
 * If successful, it saves the key in the browser's `localStorage` for later use.
 *
 * @returns {Promise<void>} - A promise that finishes when the key is fetched and saved.
 */

export async function getKey() {
  const body = {
    name: "ApiKey",
  };

  try {
    const response = await fetch(API_AUTH_KEY, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const apiKey = await response.json();
      localStorage.setItem("API-KEY", JSON.stringify(apiKey));
    }
  } catch (error) {
    console.log(error);
    alert("Could not fetch API key.");
  }
}
