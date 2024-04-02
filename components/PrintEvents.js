import { Events } from "../pages/Events/Events";
import { MyEvents } from "../pages/myEvents/myEvents";
import { cancelAttendee } from "./cancelAttendee";
import { confirmAttendee } from "./confirmAttendee";
import { deleteEvent } from "./deleteEvent";

export const PrintEvents = async (events, contenedor, text) => {

    const myEvents = JSON.parse(localStorage.getItem('myEvents')) || [];
  
    const divEvents = document.createElement("div");
    divEvents.className = "divEvents";
  
    for (const event of events) {
      const divEvent = document.createElement("div");
      const divimg = document.createElement("div");
      const img = document.createElement("img");
      const title = document.createElement("h3");
      const location = document.createElement("p");
      const date = document.createElement("p");
      const description = document.createElement("p");
  
      const idEv = document.createElement("span");
      idEv.textContent = event._id;
      idEv.className = "none";
  
      const attendeeButton = document.createElement("button");
      attendeeButton.id = "attendeeButton";
      attendeeButton.textContent = text;
      attendeeButton.className = "none";
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌"
      deleteButton.id = "delete"
      deleteButton.className = "none";
  
      const eventId = idEv.textContent;
  
      attendeeButton.addEventListener("click", async (e) => {
  
        if (attendeeButton.textContent === "Confirmar asistencia") {
          confirmAttendee(eventId);
          attendeeButton.classList = "none";
        } else if (attendeeButton.textContent === "Cancelar Asistencia") {
          cancelAttendee(eventId);
          setTimeout(() => {
            MyEvents();
          }, 500);
          
        }
      });
  
      deleteButton.addEventListener("click", () => {
        const eventId = idEv.textContent;
        deleteEvent(eventId);
        setTimeout(() => {
          Events();
        }, 500);
      })
  
      divimg.className = "divImg";
      date.className = "date";
      location.className = "location";
  
      divEvent.className = "eventCard";
      img.src = event.img;
      title.textContent = event.title;
      location.textContent = event.location;
      date.textContent = event.date;
      description.textContent = event.description;
  
      if (localStorage.getItem("token")) {
        attendeeButton.className = "";
        if (JSON.parse(localStorage.getItem("user")).rol === "admin") {
          deleteButton.className = ""
      }
      }
      
      if (myEvents.includes(eventId)) {
        attendeeButton.classList.add("none");
      }
  
      divimg.append(img);
      divEvent.append(
        deleteButton,
        divimg,
        title,
        location,
        date,
        description,
        attendeeButton,
        idEv
      );
      divEvents.append(divEvent);
    }
  
    contenedor.append(divEvents);
  };
  