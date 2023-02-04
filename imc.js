let submitButton = document.querySelector(".cal-imc-js"); // Create var
//submitButton.addEventListener("click", calculateIMC);

function calculateIMC(event) {
  event.preventDefault();
  let weight = document.querySelector(".weight-input-js").value;
  let height = document.querySelector(".height-input-js").value;
  let imc = weight / height ** 2;
  let imcResult = document.querySelector(".imc-result-js");
  imcResult.innerHTML = imc;
  if (imc < 21) {
    imcResult.setAttribute("class", "imc-result-js imc-green");
  } else if (imc >= 21 && imc < 26) {
    imcResult.setAttribute("class", "imc-result-js imc-yellow");
  } else {
    imcResult.setAttribute("class", "imc-result-js imc-red");
  }
}
