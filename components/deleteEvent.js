import { API } from "../services/API";
export const deleteEvent = async (id) => {

    const deleteEvent = await API({
      method: "DELETE",
      endpoint: `/events/${id}`,
    });
  
    const canceled = await deleteEvent.json();
  }