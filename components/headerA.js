export const headerA = ( textContent, className, funct) => {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = textContent;
    link.className = className;
    link.addEventListener("click", funct)
    return link
}

