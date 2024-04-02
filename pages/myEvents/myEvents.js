
import "./myEvents.css";
import { hideLoading, showLoading } from '../../components/Loading/Loading';
import { getUserAttendee } from '../../components/userAttendee';
import { getlogged } from '../../components/logged';
import { PrintMyEvents } from '../../components/PrintMyEvents';


export const MyEvents = async () => {
    const main = document.querySelector("main");

    main.innerHTML = "";

    try {
    showLoading(main)

    const userAteendee = await getlogged();

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
      const myEvents = await getUserAttendee(userAteendee); 

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
    }
}

