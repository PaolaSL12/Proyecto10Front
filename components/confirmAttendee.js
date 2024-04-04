import { getlogged } from "./logged";

export const confirmAttendee = async (id) => {
    const logged = JSON.parse(localStorage.getItem("user"));
  
    const userAteendee = await getlogged();
  
    if (userAteendee === undefined) {
      try {
        
      const objetoFinal = JSON.stringify({
        name: logged.name,
        email: logged.email,
        events: [],
      });
  
      const opciones = {
        method: "POST",
        body: objetoFinal,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await fetch(`https://proyecto10-back-phi.vercel.app/api/attendees`, opciones);
      const response = await res.json();
      confirmAttendee(id);
      } catch (error) {
        console.log(error)
      }
  
    } else {

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
    
      const confirm = await fetch(
        `https://proyecto10-back-phi.vercel.app/api/attendees/${id}`,
        opciones
      );
      const confirmed = await confirm.json();
      localStorage.setItem('myEvents', JSON.stringify(confirmed.events));
    }
  };
  