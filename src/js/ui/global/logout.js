import { onLogout } from "../auth/logout.js";

/**
 * Adds a click event listener to the logout button to start the logout process.
 * When clicked, the `onLogout` function is called to log the user out.
 */

export function setLogoutListener() {
  const logoutButton = document.getElementById("logoutButton");
  logoutButton.addEventListener("click", () => {
    onLogout();
  });
}
