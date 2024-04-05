import { Events } from "../pages/Events/Events";
import { BASE_URL } from "../utils/variables/Variable";
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
  
    const res = await fetch(`${BASE_URL}/events/post`, opciones);
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
  