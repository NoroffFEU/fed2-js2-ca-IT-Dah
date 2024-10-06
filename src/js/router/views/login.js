import { onLogin } from "../../ui/auth/login";

/**
 * Connects the `onLogin` event handler to the login form.
 * This allows the form to trigger the login process, when the submit button is clicked.
 */

const form = document.forms.login;

form.addEventListener("submit", onLogin);
