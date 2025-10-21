
function celsiusParaFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}


function fahrenheitParaCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function menu() {
  const opcao = prompt(
    "Escolha uma opção:\n1 - Celsius para Fahrenheit\n2 - Fahrenheit para Celsius"
  );

  if (opcao === "1") {
    const celsius = parseFloat(prompt("Digite a temperatura em °C:"));
    const resultado = celsiusParaFahrenheit(celsius);
    alert(`${celsius}°C equivalem a ${resultado.toFixed(2)}°F`);
  } else if (opcao === "2") {
    const fahrenheit = parseFloat(prompt("Digite a temperatura em °F:"));
    const resultado = fahrenheitParaCelsius(fahrenheit);
    alert(`${fahrenheit}°F equivalem a ${resultado.toFixed(2)}°C`);
  } else {
    alert("Opção inválida! Tente novamente.");
  }
}

menu();