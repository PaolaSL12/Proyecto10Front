import { hideLoading, showLoading } from "../../components/Loading/Loading";
import { PrintEvents } from "../../components/PrintEvents";
import "./Events.css";

export const Events = async () => {
  const main = document.querySelector("main");

  main.innerHTML = "";

  showLoading(main);

  const res = await fetch("https://proyecto10-back-phi.vercel.app/api/events/");
  const events = await res.json();

  const text = "Confirmar asistencia";

  hideLoading();

  PrintEvents(events, main, text);
};

