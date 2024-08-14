function calculateBMI() {
  const height = document.getElementById("height").value / 100; // Convert cm to meters
  const weight = document.getElementById("weight").value;

  if (height > 0 && weight > 0) {
    const bmi = weight / (height * height);
    const result = document.getElementById("result");
    result.textContent = `Seu Índice é: ${bmi.toFixed(2)}`;
    result.style.display = "block";

    let interpretation;
    if (bmi < 18.5) interpretation = "Abaixo do Peso";
    else if (bmi < 25) interpretation = "Peso Normal";
    else if (bmi < 30) interpretation = "Sobrepeso";
    else interpretation = "Obeso";

    result.textContent += `\n\n Resultado: ${interpretation}`;
  } else {
    alert("Insira altura e peso válidos (somente números positivos)");
  }
}
