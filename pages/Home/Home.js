import "./Home.css";

export const Home = () => {
  const main = document.querySelector("main");

  main.innerHTML = "";

  const divHome = document.createElement("div");
  divHome.className = "divHome";

  const descDiv = document.createElement("div");
  descDiv.className = "descDiv";
  const title = document.createElement("h1");
  const desc = document.createElement("p");

  title.textContent = "Bienvenidos a ATTENDEENVENTS.COM";
  desc.textContent =
    "En nuestra página podras ver todos los eventos disponibles para ti! Registrate para ser parte de la familia attendeEvents y confirma tu asistencia";

  descDiv.append(title, desc);
  divHome.append(descDiv);
  main.append(divHome);
};
