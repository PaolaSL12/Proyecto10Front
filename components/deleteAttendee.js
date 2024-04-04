export const deleteAttendee = async (id) => {
    const opciones = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };
    
      const deleteAttendee = await fetch(
        `https://proyecto10-back-phi.vercel.app/api/attendees/${id}`,
        opciones
      );
      const canceled = await deleteAttendee.json();
}