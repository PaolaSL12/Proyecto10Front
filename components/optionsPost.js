export const optionsPost = (objetoFinal) => {
    const opciones = {
        method: "POST",
        body: objetoFinal,
        headers: {
          "Content-Type": "application/json",
        },
      };

      return opciones
}