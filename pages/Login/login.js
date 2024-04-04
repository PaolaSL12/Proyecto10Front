import './login.css'
import { hideLoading, showLoading } from '../../components/Loading/Loading.js';
import { doLogin } from '../../components/doLogin.js';

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


