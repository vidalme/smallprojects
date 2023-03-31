import { carregaPics } from "/js/carregaPics.js";

export function createInterfacePraia(praia) {
  const praiaPai = document.querySelector(".praia-conteudo");
  // praiaPai.style.border = "1px solid tomato";
  praiaPai.style.boxShadow = "0px 0px 5px  rgba(0, 0, 0, 0.25)";
  praiaPai.style.marginBottom = "5%";

  if (praiaPai.hasChildNodes()) {
    praiaPai.removeChild(praiaPai.children[0]);
  }

  const discardablePraiaContainer = document.createElement("div");
  praiaPai.appendChild(discardablePraiaContainer);

  praia.container = document.createElement("div");
  discardablePraiaContainer.appendChild(praia.container);
  discardablePraiaContainer.style.display = "flex";
  discardablePraiaContainer.style.justifyContent = "space-between";
  //discardablePraiaContainer.style.border = "1px solid tomato";

  createHTMLCSS(praia, discardablePraiaContainer);
}

function createHTMLCSS(p, pp) {
  //descricao da praia
  const desc = document.createElement("div");
  desc.innerHTML += `<p>${p.descricao}</p>`;
  desc.style.fontFamily = "Merriweather";
  desc.style.paddingTop = "5%";
  desc.style.paddingRight = "5%";
  desc.style.paddingBottom = "5%";
  desc.style.paddingLeft = "5%";
  desc.style.lineHeight = "1.5rem";

  p.container.appendChild(desc);

  //cria divs para icones
  const mareDiv = document.createElement("div");
  mareDiv.style.display = "flex";
  mareDiv.style.alignItems = "center";
  mareDiv.style.paddingTop = "2%";
  mareDiv.style.paddingBottom = "2%";
  mareDiv.style.paddingRight = "2%";
  mareDiv.style.alignItems = "center";
  mareDiv.style.borderTop = "1px solid #CFCFCF";
  mareDiv.style.fontWeight = "700";
  mareDiv.style.color = "#444444";

  const ondaDiv = document.createElement("div");
  ondaDiv.style.display = "flex";
  ondaDiv.style.alignItems = "center";
  ondaDiv.style.paddingTop = "2%";
  ondaDiv.style.paddingBottom = "2%";
  ondaDiv.style.paddingRight = "2%";
  ondaDiv.style.alignItems = "center";
  ondaDiv.style.borderTop = "1px solid #CFCFCF";
  ondaDiv.style.fontWeight = "700";
  ondaDiv.style.color = "#444444";

  const ventDiv = document.createElement("div");
  ventDiv.style.display = "flex";
  ventDiv.style.alignItems = "center";
  ventDiv.style.paddingTop = "2%";
  ventDiv.style.paddingBottom = "2%";
  ventDiv.style.paddingRight = "2%";
  ventDiv.style.alignItems = "center";
  ventDiv.style.borderTop = "1px solid #CFCFCF";
  ventDiv.style.borderBottom = "1px solid #CFCFCF";
  ventDiv.style.fontWeight = "700";
  ventDiv.style.color = "#444444";

  // mareDiv.style.border = "2px solid tomato";
  // ondaDiv.style.border = "2px solid tomato";
  // ventDiv.style.border = "2px solid tomato";

  //cria icones
  p.mareIco = document.createElement("img");
  p.ondaIco = document.createElement("img");
  p.ventIco = document.createElement("img");

  p.mareIco.style.paddingLeft = "3%";
  p.mareIco.style.paddingRight = "3%";
  p.mareIco.style.paddingTop = "2%";
  p.mareIco.style.paddingBottom = "2%";

  p.ondaIco.style.paddingLeft = "3%";
  p.ondaIco.style.paddingRight = "3%";
  p.ondaIco.style.paddingTop = "2%";
  p.ondaIco.style.paddingBottom = "2%";

  p.ventIco.style.paddingLeft = "3%";
  p.ventIco.style.paddingRight = "3%";
  p.ventIco.style.paddingTop = "2%";
  p.ventIco.style.paddingBottom = "2%";

  p.mareIco.src = "/material/imgs/mare.svg";
  p.ondaIco.src = "/material/imgs/onda.svg";
  p.ventIco.src = "/material/imgs/vent.svg";

  mareDiv.appendChild(p.mareIco);
  p.container.appendChild(mareDiv);
  mareDiv.innerHTML += `<p>${p.mare}</p>`;

  ondaDiv.appendChild(p.ondaIco);
  p.container.appendChild(ondaDiv);
  ondaDiv.innerHTML += `<p>${p.ondulacao}</p>`;

  ventDiv.appendChild(p.ventIco);
  p.container.appendChild(ventDiv);
  ventDiv.innerHTML += `<p>${p.vento}</p>`;

  // p.container.appendChild(ventDiv.appendChild(p.ventIco));
  // ventDiv.innerHTML += `<p>${p.vento}</p>`;

  // p.mareIco.style.marginTop = "20px";
  // p.ondaIco.style.marginTop = "20px";
  // p.ventIco.style.marginTop = "20px";
  // p.mareIco.style.marginBottom = "5px";
  // p.ondaIco.style.marginBottom = "5px";
  // p.ventIco.style.marginBottom = "5px";

  const picsURLs = p.pics.urls.map((e) => p.pics.path + e);
  const picsCarregadas = carregaPics(picsURLs);

  pp.appendChild(picsCarregadas);
}
function createCSS() {}
