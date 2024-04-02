import { hideLoading, showLoading } from "../../components/Loading/Loading";
import { Events } from "../Events/Events";
import "./newEvents.css";

export const newEvent = async () => {
  const main = document.querySelector("main");

  main.innerHTML = "";

  showLoading(main);

  const divNewEvent = document.createElement("div");
  divNewEvent.className = "divNewEvent";

  hideLoading();

  createEvent(divNewEvent);

  main.append(divNewEvent);
};

const createEvent = (contenedor) => {
  const form = document.createElement("form");
  form.className = "newEvent";

  const title = document.createElement("input");
  const date = document.createElement("input");
  const location = document.createElement("input");
  const description = document.createElement("textarea");
  const img = document.createElement("input");
  const button = document.createElement("button");

  const fileNameDiv = document.createElement("div"); 
  fileNameDiv.className = "fileName"
  fileNameDiv.textContent = "Archivo seleccionado: ";

  description.className = "desc";
  img.className = "img";

  title.placeholder = "Titulo";
  date.type = "date"
  location.placeholder = "Ubicacion";
  description.placeholder = "Descripcion del evento";
  img.type = "file";
  button.textContent = "Enviar";

  img.addEventListener("change", (event) => {
    const fileName = event.target.files[0].name; 
    fileNameDiv.textContent = `Archivo seleccionado: ${fileName}`;
  });

  form.append(title, date, location, description, img, fileNameDiv, button);
  contenedor.append(form);

  form.addEventListener("submit", () => {
    showLoading(form);
    submitEvent(
      title.value,
      date.value,
      location.value,
      description.value,
      img.files
    )}
  );
};

const submitEvent = async (title, date, location, description, img) => {
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
