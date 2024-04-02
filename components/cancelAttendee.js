import { getlogged } from "./logged";

export const cancelAttendee = async (id) => {
    const userAteendee = await getlogged();
  
    const objetoFinal = JSON.stringify({
      name: userAteendee.name,
      email: userAteendee.email,
      events: userAteendee.event,
    });
  
    const opciones = {
      method: "PUT",
      body: objetoFinal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
  
    const cancel = await fetch(
      `https://proyecto10-back-phi.vercel.app/api/attendees/cancel/${id}`,
      opciones
    );
    const canceled = await cancel.json();
    localStorage.removeItem('myEvents')
    localStorage.setItem('myEvents', JSON.stringify(canceled.events));
  };
  

  