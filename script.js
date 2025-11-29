function atualizar() {
  const agora = new Date();
  const destino = new Date("2025-12-13T00:00:00");

  const diff = destino - agora;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("dias").textContent =
    dias > 0
      ? `${dias} dia(s) para a viagem!`
      : dias === 0
      ? "A viagem é hoje! ✈️"
      : `A viagem já passou há ${Math.abs(dias)} dia(s).`;

  document.getElementById("d").textContent = dias >= 0 ? dias : 0;
  document.getElementById("h").textContent = horas >= 0 ? horas : 0;
  document.getElementById("m").textContent = minutos >= 0 ? minutos : 0;
  document.getElementById("s").textContent = segundos >= 0 ? segundos : 0;
}

atualizar();
setInterval(atualizar, 1000);
