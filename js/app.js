

window.addEventListener("load", function() {
	var boton = document.getElementById("cri");
	var contador = 1;
	boton.addEventListener("click", function() {
		if(contador == 1) {
			document.getElementById("nom-color").value = "rojo";
			document.getElementById("rojo").classList.add("borde-rojo");
			document.getElementById("verde").classList.remove("borde-verde");
		}
		if(contador == 2) {
			document.getElementById("nom-color").value = "azul";
			document.getElementById("azul").classList.add("borde-azul");
			document.getElementById("rojo").classList.remove("borde-rojo");
		}
		if(contador == 3) {
			document.getElementById("nom-color").value = "verde";
			document.getElementById("verde").classList.add("borde-verde");
			document.getElementById("azul").classList.remove("borde-azul");
			contador = 0;
		}
		contador++;
	});
	
});

window.addEventListener("load", function() {
	var boton_sc = document.getElementById("superCri");
	boton_sc.addEventListener("click", function() {
		var nombre_color=document.getElementById("nom-color").value;
		if(nombre_color=="rojo") {
			document.getElementById("rojo").classList.add("borde-rojo");
			document.getElementById("verde").classList.remove("borde-verde");
			document.getElementById("azul").classList.remove("borde-azul");
		}
		if(nombre_color== "azul") {
			document.getElementById("azul").classList.add("borde-azul");
			document.getElementById("rojo").classList.remove("borde-rojo");
			document.getElementById("verde").classList.remove("borde-verde");
		}
		if(nombre_color== "verde") {
			document.getElementById("verde").classList.add("borde-verde");
			document.getElementById("azul").classList.remove("borde-azul");
			document.getElementById("rojo").classList.remove("borde-rojo");
			
		}
		
	});
	
});