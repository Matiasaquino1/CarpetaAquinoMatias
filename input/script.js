function CambiarTexto() {
    var texto = document.querySelector("#texto");
    texto.classList.remove("Esconder");
    var Go = document.querySelector("#Go");
    Go.classList.remove("Esconder");
  
    Go.addEventListener("click", function () {
      var text = document.querySelector("h1");
      text.textContent = text.value;
      texto.classList.add("Esconder");
      Go.classList.add("Esconder");
    });
  }
  
  var cambiar = document.getElementById("cambiar");
  cambiar.addEventListener("click", CambiarTexto);