
import { Login } from "../Login/login";
import { Events } from "../Events/Events";
import { MyEvents } from "../myEvents/myEvents";
import { Register } from "../register/register";
import "./Header.css";
import { getAttendees } from "../attendees/attendees";
import { newEvent } from "../newEvents/newEvents";
import { headerA } from "../../components/headerA";


export const header = () => {
  const header = document.querySelector("header");
  header.innerHTML = "";

  const nav = document.createElement("nav");
  const lNav = document.createElement("div");
  const rNav = document.createElement("div");

  lNav.className = "L";
  rNav.className = "R";

  const eventos = headerA("Eventos", "");

  const myEvents = headerA("MyEvents", "none");

  const attendees = headerA("Attendees", "none");

  const newEvents = headerA("NewEvent", "none");

  const register = headerA("Register", "");

  const login = headerA("Login", "");
  

  eventos.addEventListener("click", () => {
    Events();
  });

  myEvents.addEventListener("click", () => {
    MyEvents();
  })

  attendees.addEventListener("click", () => {
    getAttendees();
  })

  newEvents.addEventListener("click", () => {
    newEvent();
})

  register.addEventListener("click", () => {
    Register();
  });

  login.addEventListener("click", () => {
    if (!localStorage.getItem("token") && login.textContent === "Login") {
      Login();
    }
    if (localStorage.getItem("token") && login.textContent === "Logout") {
      localStorage.clear();
      window.location.reload();
      register.className = "";
      header();
      Events();
    }
  });

  if (localStorage.getItem("token") && login.textContent === "Login") {
    login.textContent = "Logout";
    register.className = "none";
    myEvents.className = ""
    if (JSON.parse(localStorage.getItem("user")).rol === "admin") {
        attendees.className = "";
        newEvents.className = ""
    }
  }

  lNav.append(eventos, myEvents, attendees, newEvents);
  rNav.append(register, login);
  nav.append(lNav, rNav);
  header.append(nav);
};
