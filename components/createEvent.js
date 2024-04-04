import { showLoading } from "./Loading/Loading";
import { submitEvent } from "./submitEvent";

export const createEvent = (contenedor) => {
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