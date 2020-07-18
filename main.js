function setms(m, s) {
	m = (typeof m === "number") ? Math.trunc(m) : m;
	s = (typeof s === "number") ? Math.trunc(s) : s;
	document.getElementById("m").textContent = `${m} min`;
	document.getElementById("s").textContent = `${s} s`;
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
	//DEBUG
	//alert(`tara:${tara}\nbruto:${bruto}\ncarga:${carga}\nliquido:${liquido}\ntotal_segundos:${total_segundos}\nMinutos: ${minutos}\nSegundos: ${segundos}`);
	
}