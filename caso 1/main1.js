document.getElementById("n1").addEventListener("click",()=>{
    let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n1").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
});


document.getElementById("n2").addEventListener("click",()=> {
    let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n2").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
});

document.getElementById("n3").addEventListener("click",()=>{
    let actual = document.getElementById('resultado').innerHTML;
    let sumado = document.getElementById("n3").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado
});


document.getElementById("n4").addEventListener("click",()=>{
    let actual = document.getElementById('resultado').innerHTML;
    let sumado = document.getElementById("n4").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado
});


document.getElementById("n5").addEventListener("click",()=>{
    let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n5").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
});


document.getElementById("n6").addEventListener("click",()=>{
    let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n6").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
});


document.getElementById("n7").addEventListener("click",()=>{
    let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n7").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
});


document.getElementById("n8").addEventListener("click",()=>{
    let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n8").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
});


document.getElementById("n9").addEventListener("click",()=>{
    let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n9").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
});


document.getElementById("n0").addEventListener("click",()=>{
    let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n0").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
});


document.getElementById("s").addEventListener("click",()=>{
    let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("s").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
});


document.getElementById("r").addEventListener("click",()=>{
    let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("r").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
});


document.getElementById("d").addEventListener("click",()=>{
    let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("d").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
});


document.getElementById("m").addEventListener("click",()=>{
    let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("m").innerHTML;
	document.getElementById('resultado').innerHTML = actual +  sumado
});


document.getElementById("igual").addEventListener("click",showResult);


function showResult() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumar = actual.indexOf("+");
	let restar = actual.indexOf("-");
	let dividir = actual.indexOf("÷");
	let multiplicar = actual.indexOf("x");
	if (sumar !== -1) {
		arr = actual.split("+",2);
		res = parseInt(arr[0]) + parseInt(arr[1]);
		document.getElementById("resultado").innerHTML = res;
	} else if (restar !== -1) {
		arr = actual.split("-",2);
		res = arr[0] - arr[1];
		document.getElementById("resultado").innerHTML = res;
		
	} else if (dividir !== -1) {
		arr = actual.split("÷",2);
		res = arr[0] / arr[1];
		document.getElementById("resultado").innerHTML = res;
		
	} else if (multiplicar !== -1) {
		arr = actual.split("x",2);
		res = arr[0] * arr[1];
		document.getElementById("resultado").innerHTML = res;
		
	}
}


document.getElementById("limpiar").addEventListener("click", () =>{
    document.getElementById('resultado').innerHTML = ""
});