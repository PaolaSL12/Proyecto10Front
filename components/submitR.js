import { header } from "../pages/Header/Header";
import { API } from "../services/API";
import { hideLoading } from "./Loading/Loading";


export const submitR = async (name, email, password, form) => {
  try {
    const objetoFinal = JSON.stringify({
      name,
      email,
      password,
    });

    const res = await API({
      method: "POST",
      body: objetoFinal,
      endpoint: "/users/register",
    });

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
    main.innerHTML = "";
    const pMessage = document.createElement("p");
    pMessage.className = "pMessage";
    pMessage.textContent = "¡Se ha registrado exitosamente! 🎉";
    pMessage.style.color = "#152673";
    main.append(pMessage);

    header();
    return;
  } catch (error) {
    console.error("Error en el registro:", error);
    alert("Hubo un error en el registro. Por favor, inténte de nuevo.");
  }
};
