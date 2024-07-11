

function typeWriter(elemento) {
  const textoarray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoarray.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
      if (i === textoarray.length - 1) {
        animacao1(); // Chame a função animacao1() quando o texto for totalmente escrito
      }
    }, 150 * i);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const titulo = document.getElementById("nome-titulo");
  if (titulo) {
    typeWriter(titulo);
  }
});

const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");

let contador = 0;

function slider() {
  contador++;
  if (contador > imagens.length - 1) {
    contador = 0;
  }
  box.style.transform = `translateX(${-contador * 120}px)`;
}

setInterval(slider, 2000);

const portfoliosbox = document.querySelector(".portfolios-box");
const jogosbox = document.querySelector(".jogos-box");
const servicosbox = document.querySelector(".servicos-box");
const instituicaobox = document.querySelector(".instituicao-box");

const porfoliosbtn = document.querySelector(".porfolios-btn");
const jogosbtn = document.querySelector(".jogos-btn");
const servicosbtn = document.querySelector(".servicos-btn");
const instituicaobtn = document.querySelector(".instituicao-btn");

porfoliosbtn.addEventListener("click", () => {
  removeActiveClass();
  portfoliosbox.classList.add("active");
});

jogosbtn.addEventListener("click", () => {
  removeActiveClass();
  jogosbox.classList.add("active");
});

servicosbtn.addEventListener("click", () => {
  removeActiveClass();
  servicosbox.classList.add("active");
});

instituicaobtn.addEventListener("click", () => {
  removeActiveClass();
  instituicaobox.classList.add("active");
});
function removeActiveClass() {
  [portfoliosbox, jogosbox, servicosbox, instituicaobox].forEach((box) => {
    box.classList.remove("active");
  });
};
