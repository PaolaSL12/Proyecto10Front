import { showLoading } from "./Loading/Loading";
import { submit } from "./submit";

export const doLogin = (contenedor) => {
    const form = document.createElement("form");

    const inputUser = document.createElement("input");
    const inputPass = document.createElement("input");
    const button = document.createElement("button");

    inputPass.type = "password";
    inputUser.placeholder = "User Name";
    inputPass.placeholder = "*******";
    button.textContent = "Login"

    form.append(inputUser);
    form.append(inputPass);
    form.append(button);
    contenedor.append(form)

    form.addEventListener("submit", () => {
        const existingErrors = form.querySelectorAll(".error");
        existingErrors.forEach(error => error.remove());
        showLoading(form)
        submit(inputUser.value, inputPass.value, form)})
}