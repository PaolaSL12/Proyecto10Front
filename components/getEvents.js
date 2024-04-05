import { API } from "../services/API";
import { PrintMyEvents } from "./PrintMyEvents";

export const getEvents = async (contenedor, userAteendee) => {

    try {

      const res = await API({ endpoint: `/attendees/${userAteendee._id}` })
      const events = await res.json();
      const myEvents = events.events

       if (myEvents.length === 0) {
        const pMyEvents = document.createElement("p");
        pMyEvents.className = "myEvents"

        pMyEvents.textContent = "No tiene eventos confirmados";
        pMyEvents.style = "color: #152673";
        contenedor.append(pMyEvents)
       }

       const text = "Cancelar Asistencia"
    
      PrintMyEvents(myEvents, contenedor, text);
    } catch (error) {
        const message = document.createElement("p");
        message.className = "message"

        message.textContent = "Todavia no tiene ningun evento confirmado";
        message.style = "color: #152673";
        contenedor.append(message)
        console.log("aqui");
    }
}

