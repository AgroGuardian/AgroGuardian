
const perguntasQuiz = [
    {
        pergunta: "Qual é a principal vantagem do uso de imagens de satélite na agricultura?",
        opcoes: [
            "A. Aumentar a quantidade de chuva na plantação.",
            "B. Monitorar grandes áreas agrícolas de forma rápida e eficiente.",
            "C. Substituir completamente os agricultores.",
            "D. Eliminar a necessidade de irrigação."
        ],
        correta: 1 // Índice da resposta certa (B)
    },
    {
        pergunta: "As imagens de satélite podem ajudar o produtor rural a:",
        opcoes: [
            "A. Controlar o preço dos produtos agrícolas.",
            "B. Alterar a composição do solo.",
            "C. Identificar áreas com problemas na lavoura.",
            "D. Aumentar automaticamente a produção."
        ],
        correta: 2 // C
    },
    {
        pergunta: "O monitoramento por satélite permite detectar:",
        opcoes: [
            "A. Somente a presença de máquinas agrícolas.",
            "B. Problemas de desenvolvimento das plantas e possíveis estresses.",
            "C. Apenas a quantidade de trabalhadores no campo.",
            "D. O valor de mercado da colheita."
        ],
        correta: 1 // B
    },
    {
        pergunta: "O uso de satélites na agricultura está diretamente relacionado ao conceito de:",
        opcoes: [
            "A. Agricultura de Precisão.",
            "B. Agricultura Manual.",
            "C. Agricultura Tradicional.",
            "D. Agricultura Familiar."
        ],
        correta: 0 // A
    },
    {
        pergunta: "Qual informação pode ser obtida por meio das imagens de satélite?",
        opcoes: [
            "A. Nome dos agricultores da propriedade.",
            "B. Estado de saúde da vegetação.",
            "C. Senha dos sistemas de irrigação.",
            "D. Quantidade exata de sementes plantadas."
        ],
        correta: 1 // B
    },
    {
        pergunta: "O monitoramento contínuo por satélite ajuda na tomada de decisões porque:",
        opcoes: [
            "A. Fornece dados atualizados sobre a lavoura.",
            "B. Elimina a necessidade de planejamento agrícola.",
            "C. Garante colheitas perfeitas em todas as situações.",
            "D. Impede completamente o surgimento de pragas."
        ],
        correta: 0 // A
    },
    {
        pergunta: "Uma das aplicações das imagens de satélite é:",
        opcoes: [
            "A. Produzir fertilizantes.",
            "B. Fabricar máquinas agrícolas.",
            "C. Detectar falhas no plantio.",
            "D. Realizar a colheita automaticamente."
        ],
        correta: 2 // C
    },
    {
        pergunta: "Como as imagens de satélite contribuem para a sustentabilidade agrícola?",
        opcoes: [
            "A. Incentivando o desperdício de água.",
            "B. Permitindo o uso mais eficiente dos recursos naturais.",
            "C. Eliminando todas as atividades humanas no campo.",
            "D. Aumentando o consumo de fertilizantes sem controle."
        ],
        correta: 1 // B
    },
    {
        pergunta: "O monitoramento por satélite pode auxiliar no controle da irrigação porque:",
        opcoes: [
            "A. Identifica áreas que necessitam de mais ou menos água.",
            "B. Cria novas fontes de água automaticamente.",
            "C. Faz chover nas áreas secas.",
            "D. Substitui os sistemas de irrigação."
        ],
        correta: 0 // A
    },
    {
        pergunta: "Uma das vantagens do uso de satélites em comparação à inspeção manual é:",
        opcoes: [
            "A. Menor cobertura de área.",
            "B. Maior tempo para coleta de dados.",
            "C. Capacidade de observar grandes extensões de terra rapidamente.",
            "D. Necessidade de mais trabalhadores."
        ],
        correta: 2 // C
    }
];


let perguntaAtual = 0;
let pontuacaoFinal = 0;


function carregarPergunta() {
    const card = document.getElementById("quiz-card");
    const dadosPergunta = perguntasQuiz[perguntaAtual];

    card.innerHTML = "";

    const tituloElemento = document.createElement("h2");
    tituloElemento.className = "quiz-pergunta";
    tituloElemento.innerText = dadosPergunta.pergunta;
    card.appendChild(tituloElemento);

 
    const opcoesContainer = document.createElement("div");
    opcoesContainer.className = "quiz-opcoes";

   
    dadosPergunta.opcoes.forEach((opcao, index) => {
        const botao = document.createElement("button");
        botao.className = "btn-opcao";
        botao.innerText = opcao;
        

        botao.onclick = () => checarResposta(index);
        
        opcoesContainer.appendChild(botao);
    });

    card.appendChild(opcoesContainer);
}


function checarResposta(indiceSelecionado) {
 
    if (indiceSelecionado === perguntasQuiz[perguntaAtual].correta) {
        pontuacaoFinal++;
    }

    perguntaAtual++; 


    if (perguntaAtual < perguntasQuiz.length) {
        carregarPergunta();
    } else {
        exibirResultados();
    }
}

function exibirResultados() {
    const card = document.getElementById("quiz-card");
    card.innerHTML = ""; 
   
    const resultadoDiv = document.createElement("div");
    resultadoDiv.className = "resultado-container";

    resultadoDiv.innerHTML = `
        <h2>Quiz Concluído!</h2>
        <p>Obrigado por responder o AgroQuiz. Veja o seu desempenho:</p>
        <div class="resultado-score">${pontuacaoFinal} / ${perguntasQuiz.length}</div>
        <p class="resultado-mensagem">${obterMensagemFeedback(pontuacaoFinal)}</p>
        <button class="btn-reiniciar" onclick="reiniciarQuiz()">Refazer Quiz</button>
    `;

    card.appendChild(resultadoDiv);
}


function obterMensagemFeedback(nota) {
    if (nota === 10) return "Incrível! Você dominou o monitoramento agrícola por satélites!";
    if (nota >= 7) return "Ótimo resultado! Você entende bem como a tecnologia pode ajudar a proteger e otimizar as lavouras.";
    if (nota >= 5) return "Bom desempenho! Você já conhece alguns conceitos importantes, mas ainda há espaço para expandir seus conhecimentos.";
    return "Sua lavoura de conhecimento ainda precisa de alguns cuidados! Explore mais o AgroGuardian e tente novamente.";
}


function reiniciarQuiz() {
    perguntaAtual = 0;
    pontuacaoFinal = 0;
    carregarPergunta();
}


document.addEventListener("DOMContentLoaded", carregarPergunta);