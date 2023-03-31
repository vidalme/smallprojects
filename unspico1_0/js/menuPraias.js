import { createInterfacePraia } from "/js/createInterfacePraia.js";

export function menuPraias(cidade) {
  const praiasUl = document.querySelector(".praias-ul");
  const setaDiv = document.querySelector(".seta-div");

  const seta = document.createElement("img");
  seta.src = "./material/imgs/seta.svg";
  setaDiv.appendChild(seta);

  const createMenuPraias = (praias) => {
    for (const praia of praias) createPraia(praia);

    praiasUl.addEventListener("click", (e) => {
      if (e.target.nodeName === "LI") {
        for (const p of praias) {
          if (p.li === e.target) {
            mudarPraia(p);
          } else {
            p.selecionado = false;
            p.li.style.color = "#888888";
          }
        }
      }
    });

    // por default quando entra na pagina de uma cidade
    // a primeira praia é selecionada para display
    mudarPraia(praias[0]);
  };

  //funcao chamada quando uma nova cidade é carregada, chamada para cada praia que a cidade tem
  //cria um elemento html, poe o conteudo dentro, seta o css e adiciona ao elemento pai no html
  //adiciona duas propriedades ao objeto praia
  // li = referencia ao seu elemento html <li>
  // selecionado = flag para habilitar ou desabilitar esse botao no menu
  const createPraia = (praia) => {
    const li = document.createElement("li");
    li.innerText = praia.nome;
    li.style.cursor = "pointer";
    li.style.position = "relative";
    praia.li = praiasUl.appendChild(li);
    praia.selecionado = false;
  };

  //muda a praia em display
  //checa se ja é a em display, se nao for chama a funcao que cria a nova
  //seta o botao pra selecionado e dar sua aparecia
  //move a seta indicadora do menu para a posicao desse botao
  const mudarPraia = (praia) => {
    if (!praia.selecionado) {
      // quando uma nova praia é selecionada
      // criamos a propriedade .interface para o objeto praia
      // a propriedade .interface instancia todo o
      // html e logica do conteudo textual e do
      // carrossel de fotos de cada praia
      praia.interface = createInterfacePraia(praia);
      praia.li.style.color = "#4e4e4e";
      praia.selecionado = true;
      moverSeta(praia);
    }
  };

  //funcao que move a seta em animacao
  //recebe um objeto com propriuedade <LI>
  //a seta é posicionada exatamente na metade do height dessa <LI>
  const moverSeta = (praia) => {
    //variaveis para fazer animar o movimento da seta
    const periodo = 5;
    const fps = 5;
    const duracao = 3;

    const posFinalSeta = praia.li.offsetTop + praia.li.offsetHeight / 5;

    const intervalo = setInterval(() => {
      let posAtualSeta = setaDiv.offsetTop;

      let distancia = posFinalSeta - posAtualSeta;
      if (distancia < 0) distancia *= -1;

      const scrollSpeed = Math.ceil(distancia / (fps * duracao));

      if (posFinalSeta > posAtualSeta + scrollSpeed) {
        posAtualSeta += scrollSpeed;
        setaDiv.style.top = posAtualSeta + "px";
      } else if (posFinalSeta < posAtualSeta - scrollSpeed) {
        posAtualSeta -= scrollSpeed;
        setaDiv.style.top = posAtualSeta + "px";
        if (posFinalSeta > posAtualSeta + scrollSpeed)
          setaDiv.style.top = posFinalSeta;
      } else {
        clearInterval(intervalo);
      }
    }, periodo);
  };

  createMenuPraias(cidade.praias);
}
