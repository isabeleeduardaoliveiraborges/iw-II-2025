// Seleciona os elementos
const lampada = document.getElementById("lampada");
const btnLigar = document.getElementById("ligar");
const btnDesligar = document.getElementById("desligar");
const estado = document.getElementById("estado");

function ligarLampada()
 {
  lampada.src = "img/images.jpeg";
  lampada.alt = "Lâmpada Ligada";
  estado.innerText = "vc acendeu a luz";
}

function desligarLampada() {
  lampada.src = "img/download.jpeg"; // imagem da lâmpada desligada
  lampada.alt = "Lâmpada Desligada";
  estado.innerText = "vc apagou a luz ";
}

// Adiciona os eventos aos botões
btnLigar.addEventListener("click", ligarLampada);
btnDesligar.addEventListener("click", desligarLampada);
