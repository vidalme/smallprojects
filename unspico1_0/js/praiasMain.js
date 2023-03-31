import { menuCidades } from "/js/menuCidades.js";
import { menuPraias } from "/js/menuPraias.js";

function carregaDados() {
  const conteudoURL = "/JSON/conteudo.json";
  const dados = fetch(conteudoURL).then((e) =>
    e.json().then((dados) => {
      carregaMenus(dados);
    })
  );
}
function carregaMenus(cidades) {
  menuCidades();
  cidades.forEach((cidade) => {
    if (cidade.url === window.location.pathname) {
      menuPraias(cidade);
    }
  });
}

carregaDados();
