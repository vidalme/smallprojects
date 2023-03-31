//array com urls de fotos, deve retornar um elemento DIV com as fotos dentro
export function carregaPics(pics) {
  const picsContainer = document.createElement("div");
  picsContainer.style.display = "flex";

  pics.forEach((element) => {
    const pic = document.createElement("img");
    pic.style.width = "500px";
    pic.style.height = "500px";
    pic.src = element;
    picsContainer.appendChild(pic);
  });

  //

  // const te = pics.map((e) => {
  //   const pic = document.createElement("img");
  //   pic.style.width = "100px";
  //   pic.style.height = "100px";

  //   pic.src = e;
  //   picsContainer.appendChild(pic);

  //   return pic;
  // });

  return picsContainer;
}
