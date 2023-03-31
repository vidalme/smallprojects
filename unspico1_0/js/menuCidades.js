export function menuCidades() {
  //captura os elementos da DOM
  // a div com o menu completo
  const menu = document.querySelector(".navegacao-topo");

  //lista de <li> para referenciar dentro da array de objetos
  const lis = document.getElementsByTagName("li");

  //pagina atual
  const aqui = location.pathname;

  //aqui sao as cidades que estao no menu, deveriam ser criadas dinamicamente
  // no html mas ficou fora do escopo do app
  //ficou baguncado aqui porque acabei adicionando propriedades dinamicamente nos
  //objetos dessa array
  const cidades = [
    { nome: "FORTALEZA", id: "1", url: "/fortaleza.html", aberto: "false" },
    { nome: "AQUIRAZ", id: "2", url: "/aquiraz.html", aberto: "false" },
    { nome: "CAUCAIA", id: "3", url: "/caucaia.html", aberto: "false" },
    { nome: "UBATUBA", id: "4", url: "/Ubatuba.html", aberto: "false" },
    // { nome: "NATAL", id: "5", url: "/Natal.html", aberto: "false" },
    // { nome: "ARACAJU", id: "6", url: "/Aracaju.html", aberto: "false" },
  ];

  // recebe qual botao e qual evento
  // seleciona o efeito do evento e aplica
  const ef = (ele, type) => {
    const b = ele.botao;
    if (type === "mouseover") {
      b.style.color = "rgba(10, 10, 10, 1)";
      b.style.backgroundPosition = "0% 50%";
      b.style.transition = "all , 0.25s";
      ele.aberto = true;
    } else if (type === "mouseout") {
      b.style.color = "rgba(255,255, 255, 1)";
      b.style.backgroundPosition = "0% -50%";
      ele.aberto = false;
    }
  };

  // adiciona novos poderes ao menu
  // cria um background pra ser animado dentro de cada botao
  // checa se tem estamos dentro de uma area que deveria ter o botao ativo
  for (let i = 0; i < cidades.length; i++) {
    //cria o a propriedade botao com referencia ao elemento botao da DOM
    cidades[i].botao = lis[i].children[0];
    //flag para saber se o botao deve estar fechado ou aberto
    cidades[i].aberto = cidades[i].url === aqui ? true : false;

    //adiciona as condicoes iniciais da animacao
    const bs = cidades[i].botao.style;
    bs.backgroundColor = "transparent";
    bs.backgroundSize = "300px 150px";
    bs.backgroundPosition = "0% -50%";
    bs.backgroundRepeat = "no-repeat";
    bs.backgroundImage = "url(../material/imgs/efeitoBotos.svg)";

    //se nao estiversmos na homepage, algum botao deve ficar ativo pois
    // o menu funciona tamebem como titulo da area
    if (cidades[i].aberto) ef(cidades[i], "mouseover");
  }

  // os eventso sao do menu inteiro, mas ja fazemos um filtro
  //so ha resposta se for algum evento dos botoes
  menu.addEventListener("mouseover", (e) => {
    cidades.forEach((ele) => {
      if (e.target === ele.botao && !ele.aberto && aqui !== ele.url)
        ef(ele, "mouseover");
    });
  });

  menu.addEventListener("mouseout", (e) => {
    cidades.forEach((ele) => {
      if (e.target === ele.botao && ele.aberto && aqui !== ele.url)
        ef(ele, "mouseout");
    });
  });

  menu.addEventListener("click", (e) => novaPagina(e));

  //navegacao
  const novaPagina = (e) => {
    for (const obj of cidades) {
      if (e.target.innerText === obj.nome && obj.url !== aqui) {
        window.open(`${obj.url}`, "_self");
      }
    }
  };
}
