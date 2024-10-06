import { onRegister } from "../../ui/auth/register";

/**
 * Sets up the event listener for the register form submission.
 * @returns {void}
 */

const form = document.forms.register;

form.addEventListener("submit", onRegister);
