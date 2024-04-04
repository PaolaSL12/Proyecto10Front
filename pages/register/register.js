import { doRegister } from "../../components/doRegister";
import "./register.css";

export const Register = () => {
  const main = document.querySelector("main");

  main.innerHTML = "";

  const divRegister = document.createElement("div");
  divRegister.className = "divRegister";

  doRegister(divRegister);

  main.append(divRegister);
};