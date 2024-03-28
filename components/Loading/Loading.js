import "./Loading.css"

const showLoading = (container) => {
    const divLoading = document.createElement("div");
    divLoading.className = "loader";
    const loadingText = document.createElement("p");
    loadingText.className = "loadingText";
    loadingText.textContent = "Cargando..."
   
    divLoading.append(loadingText)
    container.append(divLoading)
}

const hideLoading = () => {
    const divLoading = document.querySelector(".loader");
    divLoading.remove() 
}



export { showLoading, hideLoading };