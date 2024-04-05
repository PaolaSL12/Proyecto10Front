import { API } from "../services/API";
import { getlogged } from "../utils/logged";

export const cancelAttendee = async (id) => {
    const userAteendee = await getlogged();
  
    const objetoFinal = JSON.stringify({
      name: userAteendee.name,
      email: userAteendee.email,
      events: userAteendee.event,
    });

    const cancel = await API({
      method: "PUT",
      body: objetoFinal,
      endpoint: `/attendees/cancel/${id}`,
    });
  
    const canceled = await cancel.json();
    localStorage.removeItem('myEvents')
    localStorage.setItem('myEvents', JSON.stringify(canceled.events));
  };
  

  