
function calcular() {
	let v_t = document.getElementById('tara').value;
	let v_pb = document.getElementById('pesobruto').value;
	let v_c = document.getElementById('carga').value;
	let v_colocar = v_pb - v_t;
        let vmp = v_colocar / v_c / 60;
	let v_minutos = Math.trunc(v_colocar / v_c / 60);
	let v_segundos = Math.trunc((vmp - Math.floor(vmp))*60);
	alert(`${v_minutos}min${v_segundos}s`);
        alert(vmp);
        alert((vmp - Math.floor(vmp))*60);
}
