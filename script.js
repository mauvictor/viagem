function atualizar() {
  const agora = new Date();
  const destino = new Date("2025-12-13T00:00:00");

  // Zera hora de hoje para comparar apenas datas completas
  const hojeZerado = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());

  // Diferença APENAS EM DIAS (com dias inteiros completos)
  const diffDias = Math.floor((destino - hojeZerado) / (1000 * 60 * 60 * 24));

  // Lógica final corrigida
  let mensagem;

  if (diffDias > 0) {
    mensagem = `${diffDias} dia(s) para a viagem!`;

  } else if (diffDias === 0 && agora >= destino) {
    // Chegou dia 13/12/2025 e já passou da meia-noite
    mensagem = "A viagem é hoje! ✈️";

  } else if (diffDias === 0 && agora < destino) {
    // Estamos no dia 12 ainda, mas diffDias já virou 0 pela lógica de data — corrigimos aqui
    mensagem = "Algumas horas para a viagem!";

  } else {
    // Depois do dia 13
    mensagem = `A viagem já passou há ${Math.abs(diffDias)} dia(s).`;
  }

  document.getElementById("dias").textContent = mensagem;

  // Contagem detalhada real
  const diffMs = destino - agora;
  const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diffMs / (1000 * 60)) % 60);
  const segundos = Math.floor((diffMs / 1000) % 60);

  document.getElementById("d").textContent = dias >= 0 ? dias : 0;
  document.getElementById("h").textContent = horas >= 0 ? horas : 0;
  document.getElementById("m").textContent = minutos >= 0 ? minutos : 0;
  document.getElementById("s").textContent = segundos >= 0 ? segundos : 0;
}

atualizar();
setInterval(atualizar, 1000);
