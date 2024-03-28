
import { PrintEvents } from '/pages/Events/Events.js'
import "./myEvents.css";
import { hideLoading, showLoading } from '../../components/Loading/Loading';


export const MyEvents = async () => {
    const main = document.querySelector("main");

    main.innerHTML = "";

    try {
    showLoading(main)
    const logged = JSON.parse(localStorage.getItem("user")).name

    const res = await fetch(`https://proyecto10-back-phi.vercel.app/api/attendees/name/${logged}`);
    const response = await res.json();

    const userAteendee = response[0]

    const divMyEvents = document.createElement("div");
    divMyEvents.className = "divMyEvents"

    hideLoading();
    main.append(divMyEvents)

    getEvents(divMyEvents, userAteendee);

    return userAteendee
    } catch (error) {
        console.error("Error MyEvents:", error);
    }    
}


const getEvents = async (contenedor, userAteendee) => {

    try {
        const res = await fetch(`https://proyecto10-back-phi.vercel.app/api/attendees/${userAteendee._id}`);
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
    
      PrintEvents(myEvents, contenedor, text);
    } catch (error) {
        const message = document.createElement("p");
        message.className = "message"

        message.textContent = "Todavia no tiene ningun evento confirmado";
        message.style = "color: #152673";
        contenedor.append(message)
    }

       
}