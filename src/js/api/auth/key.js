import { API_AUTH_KEY } from "../constants";
import { headers } from "../headers";

/**
 * Fetches an API key from the server and stores it in local storage.
 *
 * The function sends a request to the API to retrieve an API key, and upon success,
 * it stores the key in the browser's `localStorage` for future use.
 *
 * @returns {Promise<void>} - A promise that resolves when the API key is successfully fetched and stored.
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
