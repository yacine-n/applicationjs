
function conversion() {
  var  celsius = document.getElementById("celsius");
  var fahrenheit = document.getElementById("fahrenheit");
  var reponse = document.querySelector("div.reponse");

  if (celsius.value) {
    fahrenheit.value = celsius.value*9/5 + 32;
    reponse.innerHTML = celsius.value+" °C => "+fahrenheit.value+" °F";
  }
setTimeout(conversion, 1000);
}

conversion();
