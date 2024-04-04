export const headerA = ( textContent, className) => {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = textContent;
    link.className = className 

    return link
}

