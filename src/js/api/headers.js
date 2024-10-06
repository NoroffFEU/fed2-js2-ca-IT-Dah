import { API_KEY } from "./constants";

/**
 * Creates the headers for API requests.
 *
 * @returns {Headers} - The Headers object with the required headers for API calls.
 */

const accessToken = localStorage.getItem("accessToken");
export function headers() {
  const headers = new Headers({});

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  if (accessToken) {
    headers.append("Authorization", `Bearer ${accessToken}`);
  }

  headers.append("content-type", "application/json");

  return headers;
}
