function converterHora(hora24) {
  let [hora, minuto] = hora24.split(":").map(Number);
  let periodo = hora >= 12 ? "P.M." : "A.M.";

  if (hora === 0) hora = 12;
  else if (hora > 12) hora -= 12;

  return `${hora}:${String(minuto).padStart(2, "0")} ${periodo}`;
}


console.log(converterHora("00:15")); 
console.log(converterHora("14:25")); 
console.log(converterHora("12:00"));