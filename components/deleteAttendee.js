import { API } from "../services/API";

export const deleteAttendee = async (id) => {
         
      const deleteAttendee = await API({
        method: "DELETE",
        endpoint: `/attendees/${id}`,
      });

      const canceled = await deleteAttendee.json();
}