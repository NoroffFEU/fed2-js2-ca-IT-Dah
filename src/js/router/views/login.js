import { onLogin } from "../../ui/auth/login";

/**
 * Attaches the `onLogin` event handler to the login form.
 * This triggers the login process when the form is submitted.
 */

const form = document.forms.login;

form.addEventListener("submit", onLogin);
