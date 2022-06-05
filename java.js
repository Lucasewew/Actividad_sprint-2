const dinero = [];
const personas = [];
const lista = document.getElementById("list-group");
const resultado = document.getElementById("total");
const aporte = document.getElementById("aporte-individual");
const usuario = document.getElementById("nombre");
const pago = document.getElementById("pago");

function repartir() {
  agregarEnLaLista();
  ultimoEnPantalla();
  mostrarTotal();
  mostrarPagosIndividuales();
}

function agregarEnLaLista() {
  personas.push(usuario.value);
  dinero.push(pago.value);
}

function ultimoEnPantalla() {
  const li = document.createElement("li");
  const text = document.createTextNode(usuario.value + " gastó $" + pago.value);
  li.classList.add("list-group-item");

  li.appendChild(text);
  lista.appendChild(li);
}

function sumarValores(dinero) {
  let suma = 0;
  for (let pago of dinero) {
    suma += Number(pago);
  }
  return suma;
}

function mostrarTotal() {
  const total = sumarValores(dinero);
  resultado.innerText = "$" + total.toFixed(2);
}

function mostrarPagosIndividuales() {
  const total = sumarValores(dinero);
  const aporteIndividual = total / personas.length;
  aporte.innerText = "$" + aporteIndividual.toFixed(2);
}
