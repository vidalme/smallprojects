export function diaMes() {
  const lugar = document.querySelector(".data-texto");

  // lugar.innerHTML = medaData();
  const medaData = () => {
    const diaMes = new Date();
    const meu = diaMes.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return meu;
  };

  lugar.innerHTML = medaData();
}
