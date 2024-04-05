import { API } from "../services/API";
import { getlogged } from "../utils/logged";

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
      
      const res = await API({
        method: "POST",
        body: objetoFinal,
        endpoint: `/attendees`,
      });

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

      const confirm = await API({
        method: "PUT",
        body: objetoFinal,
        endpoint: `/attendees/${id}`,
      });
    
      const confirmed = await confirm.json();
      localStorage.setItem('myEvents', JSON.stringify(confirmed.events));
    }
  };
  