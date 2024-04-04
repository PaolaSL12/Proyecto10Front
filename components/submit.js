import { Events } from "../pages/Events/Events";
import { header } from "../pages/Header/Header";
import { hideLoading } from "./Loading/Loading";
import { optionsPost } from "./optionsPost";

export const submit = async (name, password, form) => {

    try {
    const objetoFinal = JSON.stringify({
        name,
        password
    });
    
    const opciones =  optionsPost(objetoFinal)
    
    const res = await fetch("https://proyecto10-back-phi.vercel.app/api/users/login", opciones);


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
    localStorage.setItem("user", JSON.stringify(response.user))


    header()
    Events()
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
    }

}