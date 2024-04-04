import { Events } from "../pages/Events/Events";
import { hideLoading } from "./Loading/Loading";

export const submitEvent = async (title, date, location, description, img) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("location", location);
    formData.append("description", description);
    formData.append("img", img[0]);
  
    const opciones = {
      method: "POST",
      body: formData
    };
  
    const res = await fetch("https://proyecto10-back-phi.vercel.app/api/events/post", opciones);
    const response = await res.json();
  
    if (res.status === 400) {
      alert("Error al crear el evento, todos los campos son obligatorios")
      hideLoading();
      return
    }
  
    if (res.status === 201) {
      hideLoading();
      alert("Evento creado exitosamente 🎉")
      Events()
  }
  };
  