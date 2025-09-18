// VISUAL
const cajaNombres = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");

let amigos = [];

function agregarAmigo() {
  const amigo = cajaNombres.value;

  if (amigo === "") {
    alert("Debes escribir un nombre para continuar.");
  } else {
    amigos.push(amigo);
  }
  vaciarCaja();
  mostrarAmigos();
  //console.log(amigos);
}

function vaciarCaja() {
  cajaNombres.value = "";
}

function mostrarAmigos() {
  listaAmigos.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    //console.log(amigos[i]);
    const li = document.createElement("li");
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length <= 0) {
    alert("No hay amigos disponibles. Escribe un nombre para jugar.");
  } else {
    const numeroAmigo = Math.floor(Math.random() * amigos.length);
    document.getElementById("resultado").innerHTML = amigos[numeroAmigo];
    //console.log(amigos[numeroAmigo]);
  }
}
