const desculpas = [
    "Não posso, tenho que dar banho no meu peixe.",
    "Hoje não posso sair, minha avó vai dar grau de moto e preciso filmar",
    "Eu até iria, mas hoje é o dia internacional de não fazer nada. Estou respeitando.",
    "Minha planta tá carente, precisa de companhia.",
    "Estou tentando ensinar meu aspirador a dançar. É mais difícil do que parece..",
    "Bah, hoje tenho que ensinar meu gato a falar."
];

function gerarDesculpa() {
  const index = Math.floor(Math.random() * desculpas.length);
  const frase = desculpas[index];
  const box = document.getElementById("desculpa");

  box.style.opacity = 0;
  setTimeout(() => {
    box.innerText = frase;
    box.style.opacity = 1;
  }, 200);

  // Esconde a mensagem de "copiado"
  document.getElementById("mensagemCopiado").style.display = "none";
}

function copiarDesculpa() {
  const texto = document.getElementById("desculpa").innerText;

  const input = document.createElement("textarea");
  input.value = texto;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);

  // Mostrar a mensagem
  const msg = document.getElementById("mensagemCopiado");
  msg.style.display = "inline";

  setTimeout(() => {
    msg.style.display = "none";
  }, 2000);
}

