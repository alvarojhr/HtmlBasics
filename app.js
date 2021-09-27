function cambiarTexto() {
  document.getElementById("textoACambiar").innerHTML =
    "Este texto se ha cambiado con javascript";

  cambiarColor();
}

function cambiarColor() {
  document.getElementById("textoACambiar").classList.add("text-blue");
  document.getElementById("textoACambiar").classList.remove("text-red");
}
