// agregar a la lista
function newElement() {
  let li = document.createElement("li");
  let nactividad = document.getElementById("iactividad").value;
  let t = document.createTextNode(nactividad);
  li.appendChild(t);
  if (nactividad === '') {
    alert("!Debes escribir una actividad antes!");
  } else {
    document.getElementById("listaUL").appendChild(li);
  }
  document.getElementById("iactividad").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// para eliminar

let myNodelist = document.getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");

for ( let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// para marcar
let list = document.querySelector('ul');
list.addEventListener('click', function(check) {
  if (check.target.tagName === 'LI') {
    check.target.classList.toggle('checked');
  }
})
