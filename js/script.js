let pontos = parseInt(localStorage.getItem("pontos")) || 0;

function atualizarProgresso() {
  const barra = document.getElementById("barraProgresso");
  if (!barra) return;

  const progresso = Math.min((pontos / 100) * 100, 100);
  barra.style.width = `${progresso}%`;
  barra.innerText = `${Math.floor(progresso)}%`;
}

function adicionarPontos(valor) {
  pontos += valor;
  if (pontos > 100) pontos = 100;
  localStorage.setItem("pontos", pontos);
  atualizarProgresso();
  mostrarMedalhas();
}

function resetarProgresso() {
  if (confirm("Tem certeza que deseja reiniciar sua jornada digital?")) {
    pontos = 0;
    localStorage.setItem("pontos", pontos);
    atualizarProgresso();
    mostrarMedalhas();
    alert("Seu progresso foi reiniciado. Boa sorte, Explorador!");
  }
}

// Questionario pagina Cidadania Digital
document.addEventListener("DOMContentLoaded", function () {
  atualizarProgresso();
  mostrarMedalhas();

  const perguntas = [
    {
      pergunta: "Você deve compartilhar sua senha com amigos?",
      opcoes: ["Sim, se confiar neles", "Não, senhas são pessoais", "Apenas com familiares"],
      respostaCorreta: 1
    },
    {
      pergunta: "Recebeu um link desconhecido, o que fazer?",
      opcoes: ["Clicar para ver", "Apagar ou avisar um adulto", "Compartilhar com amigos"],
      respostaCorreta: 1
    },
    {
      pergunta: "O que são fake news?",
      opcoes: ["Informações falsas", "Memes engraçados", "Notícias antigas"],
      respostaCorreta: 0
    },
    {
      pergunta: "Por que verificar a fonte da notícia?",
      opcoes: ["Para saber se é confiável", "Para copiar o texto", "Para compartilhar rápido"],
      respostaCorreta: 0
    }
  ];

  const quizContainer = document.getElementById("quiz-container");
  if (quizContainer) {
    const btnFinalizar = document.getElementById("finalizar-quiz");
    const resultado = document.getElementById("resultado");

    perguntas.forEach((q, i) => {
      const card = document.createElement("div");
      card.className = "card mb-4 p-3";
      card.innerHTML = `
        <h5>${i + 1}. ${q.pergunta}</h5>
        ${q.opcoes.map((op, index) => `
          <div class="form-check">
            <input class="form-check-input" type="radio" name="pergunta${i}" id="p${i}_${index}" value="${index}">
            <label class="form-check-label" for="p${i}_${index}">${op}</label>
          </div>
        `).join("")}
      `;
      quizContainer.appendChild(card);
    });

    btnFinalizar.addEventListener("click", () => {
      let acertos = 0;
      perguntas.forEach((q, i) => {
        const selecionada = document.querySelector(`input[name="pergunta${i}"]:checked`);
        if (selecionada && parseInt(selecionada.value) === q.respostaCorreta) {
          acertos++;
        }
      });

      let mensagem = "";
      if (acertos === perguntas.length) {
        mensagem = "🎉 Parabéns! Você é um Guardião Digital completo!";
        adicionarPontos(30);
      } else if (acertos >= 2) {
        mensagem = "👍 Muito bem! Você está se tornando um verdadeiro Explorador Digital!";
        adicionarPontos(15);
      } else {
        mensagem = "⚠️ Atenção! Vamos revisar para melhorar sua segurança online.";
        adicionarPontos(5);
      }

      resultado.innerHTML = `<div class="alert alert-info text-center">${mensagem}<br>Você acertou ${acertos} de ${perguntas.length} perguntas.</div>`;
    });
  }
});

// QUIZ FINAL — Exploradores da Internet
document.addEventListener("DOMContentLoaded", function () {
  const quizFinalContainer = document.getElementById("quizFinal-container");
  if (!quizFinalContainer) return; 

  const perguntasFinais = [
    { pergunta: "A Cultura Digital está presente em nosso dia a dia. O que significa participar dela de forma consciente?",
      opcoes: ["Usar a internet apenas para assistir vídeos e jogar.",
               "Utilizar as tecnologias para aprender, criar e compartilhar com responsabilidade.",
               "Passar o dia inteiro nas redes sociais.",
               "Copiar conteúdos prontos da internet sem pensar."],
      respostaCorreta: 1 },
    { pergunta: "Quando falamos em 'protagonismo digital', queremos dizer que o aluno deve:",
      opcoes: ["Aguardar que outras pessoas criem conteúdos para ele consumir.",
               "Evitar expressar opiniões na internet.",
               "Ser criador de ideias, projetos e soluções usando ferramentas digitais.",
               "Rejeitar o uso da tecnologia."],
      respostaCorreta: 2 },
    { pergunta: "Ser um cidadão digital significa:",
      opcoes: ["Ter muitas redes sociais.",
               "Usar a internet com ética, respeito e segurança.",
               "Postar o que quiser sem pensar nas consequências.",
               "Compartilhar dados pessoais com amigos."],
      respostaCorreta: 1 },
    { pergunta: "Qual das atitudes abaixo é um exemplo de comportamento ético nas redes?",
      opcoes: ["Corrigir um colega com ofensas em público.",
               "Compartilhar informações pessoais de outras pessoas.",
               "Pensar antes de postar e respeitar opiniões diferentes.",
               "Espalhar notícias sem verificar se são verdadeiras."],
      respostaCorreta: 2 },
    { pergunta: "O que é importante verificar antes de acreditar em uma notícia da internet?",
      opcoes: ["Se o título é chamativo.",
               "Se o site é conhecido e a fonte é confiável.",
               "Se foi publicada por um amigo.",
               "Se tem muitas curtidas."],
      respostaCorreta: 1 },
    { pergunta: "Qual dessas ações ajuda a manter sua segurança online?",
      opcoes: ["Compartilhar senhas com colegas de turma.",
               "Clicar em links de promoções desconhecidas.",
               "Evitar publicar dados pessoais e usar senhas fortes.",
               "Usar o mesmo login para todos os sites."],
      respostaCorreta: 2 },
    { pergunta: "Quando você vê um comentário ofensivo na internet, o que deve fazer?",
      opcoes: ["Responder com mais ofensas.",
               "Ignorar e deixar que o problema aumente.",
               "Denunciar a postagem e avisar um adulto.",
               "Compartilhar para mostrar aos amigos."],
      respostaCorreta: 2 },
    { pergunta: "Por que é importante pensar antes de postar algo na internet?",
      opcoes: ["Porque tudo o que postamos pode ficar registrado e afetar outras pessoas.",
               "Porque as postagens desaparecem sozinhas.",
               "Porque assim teremos mais curtidas.",
               "Porque é proibido postar qualquer coisa."],
      respostaCorreta: 0 },
    { pergunta: "Escolha a alternativa que melhor representa o uso criativo da tecnologia:",
      opcoes: ["Criar um jogo ou um vídeo educativo.",
               "Passar o dia todo assistindo vídeos.",
               "Copiar o trabalho de outra pessoa.",
               "Usar aplicativos apenas para diversão."],
      respostaCorreta: 0 },
    { pergunta: "Uma atitude que ajuda a construir um ambiente digital positivo é:",
      opcoes: ["Criticar sem respeito e espalhar fofocas.",
               "Ajudar colegas, compartilhar boas ideias e usar empatia nas redes.",
               "Postar apenas memes e piadas.",
               "Fingir ser outra pessoa online."],
      respostaCorreta: 1 }
  ];

  const btnFinalizar = document.getElementById("finalizar-quizFinal");
  const resultado = document.getElementById("resultadoFinal");

  perguntasFinais.forEach((q, i) => {
    const card = document.createElement("div");
    card.className = "card mb-4 p-3";
    card.innerHTML = `
      <h5>${i + 1}. ${q.pergunta}</h5>
      ${q.opcoes.map((op, index) => `
        <div class="form-check">
          <input class="form-check-input" type="radio" name="finalPergunta${i}" id="fp${i}_${index}" value="${index}">
          <label class="form-check-label" for="fp${i}_${index}">${op}</label>
        </div>
      `).join("")}
    `;
    quizFinalContainer.appendChild(card);
  });

  btnFinalizar.addEventListener("click", () => {
    let acertos = 0;
    perguntasFinais.forEach((q, i) => {
      const selecionada = document.querySelector(`input[name="finalPergunta${i}"]:checked`);
      if (selecionada && parseInt(selecionada.value) === q.respostaCorreta) acertos++;
    });

    let mensagem = "";
    if (acertos >= 9) {
      mensagem = "🏆 Incrível! Você dominou a Cultura Digital e é um verdadeiro Explorador da Internet!";
      adicionarPontos(30);
    } else if (acertos >= 6) {
      mensagem = "🎯 Muito bem! Você está no caminho certo para ser um Cidadão Digital exemplar!";
      adicionarPontos(20);
    } else if (acertos >= 3) {
      mensagem = "💪 Bom esforço! Revise os módulos e continue explorando o mundo digital!";
      adicionarPontos(10);
    } else {
      mensagem = "💡 Que tal revisar os conteúdos e tentar novamente?";
      adicionarPontos(5);
    }

    resultado.innerHTML = `<div class="alert alert-info text-center">${mensagem}<br>Você acertou ${acertos} de ${perguntasFinais.length} perguntas.</div>`;
  });
});

// ATIVIDADE 2: DESAFIO "MINHA ATITUDE DIGITAL"
function avaliarDesafio() {
  const resposta = document.getElementById("respostaDesafio").value.trim();
  const feedback = document.getElementById("feedbackDesafio");

  if (resposta.length < 30) {
    feedback.innerHTML = `<div class="alert alert-warning text-center">✍️ Escreva uma reflexão com pelo menos 30 caracteres para completar a atividade.</div>`;
    return;
  }

  feedback.innerHTML = `<div class="alert alert-success text-center">🌟 Excelente! Você demonstrou consciência digital e responsabilidade online.</div>`;
  adicionarPontos(20);
}

// MEDALHAS E PAINEL DE CONQUISTAS
function mostrarMedalhas() {
  const container = document.getElementById("medalhas");
  if (!container) return;

  let medalhasHTML = "";
  let mensagem = "";

  if (pontos >= 80) {
    medalhasHTML = `<span class="badge-medalha medalha-ouro">🥇 Medalha de Ouro</span>`;
    mensagem = "Você dominou o mundo digital com ética e responsabilidade!";
  } else if (pontos >= 50) {
    medalhasHTML = `<span class="badge-medalha medalha-prata">🥈 Medalha de Prata</span>`;
    mensagem = "Você está no caminho certo para se tornar um Cidadão Digital exemplar!";
  } else if (pontos >= 20) {
    medalhasHTML = `<span class="badge-medalha medalha-bronze">🥉 Medalha de Bronze</span>`;
    mensagem = "Continue aprendendo e explorando com curiosidade e segurança!";
  } else {
    medalhasHTML = `<p class="text-muted">🕵️ Complete atividades para conquistar medalhas digitais!</p>`;
    mensagem = "";
  }

  container.innerHTML = `
    ${medalhasHTML}
    <p class="mt-3">${mensagem}</p>
    <button class="btn btn-outline-danger mt-2" onclick="resetarProgresso()">🔄 Reiniciar Jornada</button>
  `;
}
