import { hideLoading, showLoading } from "../../components/Loading/Loading";
import { PrintEvents } from "../../components/PrintEvents";
import { API } from "../../services/API";
import "./Events.css";

export const Events = async () => {
  const main = document.querySelector("main");

  main.innerHTML = "";

  showLoading(main);

  const res = await API({ endpoint: "/events/" })
  const events = await res.json();

  const text = "Confirmar asistencia";

  hideLoading();

  PrintEvents(events, main, text);
};

