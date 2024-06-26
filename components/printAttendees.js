import { getAttendees } from "../pages/attendees/attendees";
import { deleteAttendee } from "./deleteAttendee";

export const printAttendees = async (attendees, contenedor) => {
    const divAttendees = document.createElement("div");
    divAttendees.className = "divAttendees"

    for (const attendee of attendees) {
        const cardAttendee = document.createElement("div");
        cardAttendee.className = "cardAttendee";

        const name = document.createElement("h4");
        const email = document.createElement("h5");
        const events = document.createElement("h5");
        const divEvents = document.createElement("div");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌"
        deleteButton.className = "delete";

        const idEv = document.createElement("span");
        idEv.textContent = attendee._id;
        idEv.className = "none";
        const eventId = idEv.textContent;

        deleteButton.addEventListener("click", (e) => {
            deleteAttendee(eventId)
            setTimeout(() => {
                getAttendees();
              }, 500);
        })

        divEvents.className = "divEvent"

        name.textContent = attendee.name;
        email.textContent = attendee.email;
        events.textContent = "Eventos Confirmados"

        if (attendee.events.length < 1 ) {
            deleteAttendee(eventId)
            setTimeout(() => {
                getAttendees();
              }, 400);
        }

        for (const events of attendee.events) {

            const event = document.createElement("div")
            event.className = "event";

            const eventTitle = document.createElement("p");
            const eventlocation = document.createElement("p");
            const eventDate = document.createElement("p");

            eventTitle.className = "eTitle"

            eventTitle.textContent = events.title;
            eventlocation.textContent = events.location;
            eventDate.textContent = events.date

            event.append(eventTitle, eventlocation, eventDate)
            divEvents.append(event)
        }
        
        cardAttendee.append(deleteButton, name, email, events, divEvents)
        divAttendees.append(cardAttendee);
    }

    contenedor.append(divAttendees)
}
