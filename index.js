//selecionado a imagem
const imagemVisualizacao = document.getElementById("imagem-visualizacao");
// selecionado compos radio para usar no addeventlistner
const radios = document.getElementsByName("radios");

let imagemselecionada = 1;

function trocarImagem() {
  // seleciona o campo expecifico que esta lenda clicado
  const idopcao = document.querySelector('[name="radios"]:checked').id;
  imagemselecionada = idopcao.charAt(0);
  imagemVisualizacao.src = `imagem/imagem-${imagemselecionada}.jpeg`;
}

radios.forEach((radio) => {
  radio.addEventListener("change", trocarImagem);
});
