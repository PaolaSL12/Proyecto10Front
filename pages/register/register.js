import { hideLoading, showLoading } from "../../components/Loading/Loading";
import { header } from "../Header/Header";
import "./register.css";

export const Register = () => {
  const main = document.querySelector("main");

  main.innerHTML = "";

  const divRegister = document.createElement("div");
  divRegister.className = "divRegister";

  doRegister(divRegister);

  main.append(divRegister);
};

const doRegister = async (contenedor) => {
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
      submit(name, email, password, form);
    } else {
      Register();
      alert("Por favor, completa correctamente todos los campos. El nombre de usuario debe tener un mínimo de 3 caracteres. Proporciona un correo electrónico válido de al menos 7 caracteres y asegúrate de que cumpla con el formato estándar de correo electrónico. La contraseña debe tener entre 5 y 20 caracteres. ¡Gracias!");
    }
  });
};

const submit = async (name, email, password, form) => {
    try {
        const objetoFinal = JSON.stringify({
            name,
            email,
            password,
          });
        
          const opciones = {
            method: "POST",
            body: objetoFinal,
            headers: {
              "Content-Type": "application/json",
            },
          };
        
          const res = await fetch(
            "https://proyecto10-back-phi.vercel.app/api/users/register",
            opciones
          );
        
          if (res.status === 420) {
            const pError = document.createElement("p");
        
            pError.classList.add("error");
            pError.textContent = "Usuario ya existente";
            pError.style = "color: red";

            hideLoading();
        
            form.append(pError);
            return;
          } 
        
          const pError = document.querySelector(".error");
          if (pError) {
            pError.remove();
          }
        
          const response = await res.json();
        
          localStorage.setItem("token", response.token);
          localStorage.setItem("user", JSON.stringify(response.user));
        
          hideLoading();
        
          const main = document.querySelector("main");
          main.innerHTML =""
          const pMessage = document.createElement("p");
          pMessage.className = "pMessage";
          pMessage.textContent = "¡Se ha registrado exitosamente! 🎉";
          pMessage.style.color = "#152673";
          main.append(pMessage);
        
          header();
          return
    } catch (error) {
        console.error("Error en el registro:", error);
        alert("Hubo un error en el registro. Por favor, inténte de nuevo.");
    }

 
};

const validateInputs = (name, email, password) => {
  const isUsernameValid = name.length >= 3;

  const isEmailValid = email.includes("@") && email.length >= 7;

  const isPasswordValid = password.length >= 5 && password.length <= 20;

  return isUsernameValid && isEmailValid && isPasswordValid;
};
