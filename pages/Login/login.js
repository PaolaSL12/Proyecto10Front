
import { header } from '../Header/Header';
import { Events } from '../Events/Events.js';


import './login.css'
import { hideLoading, showLoading } from '../../components/Loading/Loading.js';

export const Login = () => {
    const main = document.querySelector("main");

    main.innerHTML = "";

    showLoading(main);

    const divLogin = document.createElement("div");
    divLogin.className = "divLogin"


    hideLoading()
    doLogin(divLogin)

    main.append(divLogin)
}

const doLogin = (contenedor) => {
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

const submit = async (name, password, form) => {

    try {
        
    const objetoFinal = JSON.stringify({
        name,
        password
    });
    
    const opciones =  {
        method: "POST",
        body: objetoFinal,
        headers: {
            "Content-Type": "application/json"
        }
    }

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