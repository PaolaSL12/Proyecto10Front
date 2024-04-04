import { hideLoading, showLoading } from "../../components/Loading/Loading";
import { createEvent } from "../../components/createEvent";
import "./newEvents.css";

export const newEvent = async () => {
  const main = document.querySelector("main");

  main.innerHTML = "";

  showLoading(main);

  const divNewEvent = document.createElement("div");
  divNewEvent.className = "divNewEvent";

  hideLoading();

  createEvent(divNewEvent);

  main.append(divNewEvent);
};
