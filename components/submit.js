import { Events } from "../pages/Events/Events";
import { header } from "../pages/Header/Header";
import { API } from "../services/API";
import { hideLoading } from "./Loading/Loading";

export const submit = async (name, password, form) => {
  try {
    const objetoFinal = JSON.stringify({
      name,
      password,
    });

    const res = await API({
      method: "POST",
      body: objetoFinal,
      endpoint: "/users/login",
    });

    if (res.status === 400) {
      const pError = document.createElement("p");
      pError.classList.add("error");
      pError.textContent = "Usuario o contraseña incorrectos";
      pError.style.color = "red";

      hideLoading();

      form.append(pError);
      return;
    }

    const response = await res.json();

    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));

    header();
    Events();
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
  }
};
