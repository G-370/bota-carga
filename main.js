var min = document.getElementById("m");
var sec = document.getElementById("s");

function setms(m, s) {
   m = (typeof m === "number") ? Math.trunc(m) : m;
   s = (typeof s === "number") ? Math.trunc(s) : s;
   min.textContent = `${m} min`;
   sec.textContent = `${s} s`;
}

function calcular() {
   let tara = document.getElementById('tara').value;
   let bruto = document.getElementById('pesobruto').value;
   let carga = document.getElementById('carga').value;
   let liquido = bruto - tara;
   let total_segundos = liquido / carga
   let minutos = total_segundos / 60;
   let segundos = (minutos - Math.trunc(minutos)) * 60;
   setms(minutos, segundos);
   piscatempo();
   //DEBUG
   //alert(`tara:${tara}\nbruto:${bruto}\ncarga:${carga}\nliquido:${liquido}\ntotal_segundos:${total_segundos}\nMinutos: ${minutos}\nSegundos: ${segundos}`);

}

function piscatempo(){
   min.style.color = "#77FF00";
   sec.style.color = "#77FF00";
   setTimeout(
     () => {
       min.style.color = "white";
       sec.style.color = "white"
     }, 900
     );
}