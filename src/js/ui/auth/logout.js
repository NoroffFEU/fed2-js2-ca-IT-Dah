/**
 * Logs the user out by clearing authentication data from local storage.
 * Afterward, the user is notified and redirected to the login page.
 */

export function onLogout() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("userData");
  localStorage.removeItem("postId");
  alert("Logged out");
  window.location.href = "/auth/login/";
}
