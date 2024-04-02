export const deleteEvent = async (id) => {
    const opciones = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const deleteEvent = await fetch(
      `https://proyecto10-back-phi.vercel.app/api/events/${id}`,
      opciones
    );
    const canceled = await deleteEvent.json();
  }