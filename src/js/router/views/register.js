import { onRegister } from "../../ui/auth/register";

/**
 * Adds an event listener for the register form submission.
 * @returns {void}
 */

const form = document.forms.register;

form.addEventListener("submit", onRegister);
