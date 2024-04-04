import { Register } from "../pages/register/register";
import { showLoading } from "./Loading/Loading";
import { submitR } from "./submitR";
import { validateInputs } from "./validateInputs";

export const doRegister = async (contenedor) => {
    const form = document.createElement("form");
  
    const inputUser = document.createElement("input");
    const inputEmail = document.createElement("input");
    const inputPass = document.createElement("input");
    const button = document.createElement("button");
  
    inputPass.type = "password";
    inputUser.placeholder = "User Name";
    inputEmail.placeholder = "email@email.com";
    inputPass.placeholder = "*******";
    button.textContent = "Register";
  
    form.append(inputUser);
    form.append(inputEmail);
    form.append(inputPass);
    form.append(button);
    contenedor.append(form);
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = inputUser.value.trim();
      const email = inputEmail.value.trim();
      const password = inputPass.value.trim();
  
      if (validateInputs(name, email, password)) {
          showLoading(form)
        submitR(name, email, password, form);
      } else {
        Register();
        alert("Por favor, completa correctamente todos los campos. El nombre de usuario debe tener un mínimo de 3 caracteres. Proporciona un correo electrónico válido de al menos 7 caracteres y asegúrate de que cumpla con el formato estándar de correo electrónico. La contraseña debe tener entre 5 y 20 caracteres. ¡Gracias!");
      }
    });
  };