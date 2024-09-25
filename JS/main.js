console.log(citasCelebres);
const btnCita = document.getElementById("btnCambiarCita");
console.log(btnCita);
const citaCelebre = document.getElementById("cita");
const autorCelebre = document.getElementById("autor");


function citaAleatoria(min, max) {
  let numeroAleatorio = Math.floor(Math.random() * (max - min) + min);
  return numeroAleatorio;


}
console.log(citaAleatoria(0, citasCelebres.length));
function cambiarCita() {
  console.log("cambiar cita");
  let Ncita = citaAleatoria(0, citasCelebres.length);
  citaCelebre.textContent = `"${citasCelebres[Ncita].cita}"`;
  autorCelebre.textContent = citasCelebres[Ncita].autor;
}
cambiarCita();
btnCita.addEventListener("click", cambiarCita);