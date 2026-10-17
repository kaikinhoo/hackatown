const perguntas = [
    {
        pergunta: "Qual é o nome do arqui-inimigo Mario que está sempre sequestrando a Princesa Peach?",
        respostas: [
            { texto: "Bowser", correto: true },
            { texto: "Luigi", correto: false },
            { texto: "Toad", correto: false },
            { texto: "Wario", correto: false }
        ]
    },
    {
        pergunta: "Qual é o nome dos protagonistas que atravessa os Estados Unidos atacados por um apocalipse?",
        respostas: [
            { texto: "Nathan Drake e Elena", correto: false },
            { texto: "Kratos e Atreus", correto: false },
            { texto: "Leon e Claire", correto: false },
            { texto: "Joel e Ellie", correto: true }
        ]
    },
    {
        pergunta: "No lendário GTA: San Andreas, qual é o apelido do protagonista que você controla?",
        respostas: [
            { texto: "Tommy Vercetti", correto: false },
            { texto: "CJ ", correto: true },
            { texto: "Niko Bellic", correto: false },
            { texto: "Franklin Clinton", correto: false }
        ]
    },
    {
        pergunta: "Qual jogo de Hideo Kojima ficou famoso na internet por ser um simulador de entregador dos Correios ?",
        respostas: [
            { texto: "Metal Gear Solid V", correto: false },
            { texto: "Cyberpunk 2077", correto: false },
            { texto: "Death Stranding", correto: true },
            { texto: "Alan Wake 2", correto: false }
        ]
    },
    {
        pergunta: "No jogos de luta Street Fighter, qual é o nome do icônico golpe especial que dispara uma rajada de energia pelas mãos juntas?",
        respostas: [
            { texto: "Fatality", correto: false },
            { texto: "Hadoken", correto: true },
            { texto: "Spin Dash", correto: false },
            { texto: "Kamehameha", correto: false }
        ]
    },

    {
        pergunta: "Embora o nome do jogo leve o nome da princesa, qual é o nome do herói de túnica verde que o jogador controla?",
        respostas: [
            { texto: "Zelda", correto: false },
            { texto: "Ganon", correto: false },
            { texto: "Link", correto: true },
            { texto: "Sheik", correto: false }
        ]
    },
    {
        pergunta: "Em Resident Evil 4, qual é o nome do agente enviado a uma vila rural na Espanha para resgatar a filha do presidente?",
        respostas: [
            { texto: "Chris Redfield", correto: false },
            { texto: "Leon S. Kennedy", correto: true },
            { texto: "Jill Valentine", correto: false },
            { texto: "Albert Wesker", correto: false }
        ]
    },
    {
        pergunta: "Na clássica região de Kanto, qual é o nome do laboratório localizado na cidade de Pallet onde o Professor Carvalho entrega o primeiro Pokémon ao jogador?",
        respostas: [
            { texto: "Laboratório Pokémon de Pallet Town", correto: true },
            { texto: "Laboratório Pokémon de Saffron", correto: false },
            { texto: "Laboratório Pokémon de Cerulean", correto: false },
            { texto: "Laboratório Silph Co.", correto: false }
        ]
    },
    {
        pergunta: "No clássico Resident Evil 4, qual é o nome do misterioso mercenário mascarado de capuz que vende e melhora armas para o protagonista Leon ao longo da jornada?",
        respostas: [
            { texto: "O Coveiro da Vila", correto: false },
            { texto: "O Mercador", correto: true },
            { texto: "HUNK", correto: false },
            { texto: "O Chefe de Polícia Irons", correto: false }
        ]
    },
    {
        pergunta: "Em Stardew Valley, qual é o nome da pacata fazenda e vila que o protagonista herda de seu avô no início do jogo?",
        respostas: [
            { texto: "Oakhaven", correto: false },
            { texto: "Maple Valley", correto: false },
            { texto: "Pelican Town", correto: true },
            { texto: "Starfall Village", correto: false }
        ]
    },

    {
        pergunta: "Em Half-Life 2, qual é o nome da opressora força militar alienígena/humana governada pelo misterioso Combine que domina e policiam implacavelmente a Terra e a Cidade 17?",
        respostas: [
            { texto: "O Império Vortaunt", correto: false },
            { texto: "O Sindicato Universal", correto: true },
            { texto: "A Aliança Xeniana", correto: false },
            { texto: "Os Caçadores de Cabeças", correto: false }
        ]
    },
    {
        pergunta: "Qual é o nome da utópica, porém colapsada, cidade submarina construída por Andrew Ryan no fundo do Oceano Atlântico onde se passa o primeiro BioShock?",
        respostas: [
            { texto: "Columbia", correto: false },
            { texto: "Atlantis", correto: false },
            { texto: "Rapture", correto: true },
            { texto: "Dunwall", correto: false }
        ]
    },
    {
        pergunta: "Qual é a sigla do vírus desenvolvido pela Umbrella Corporation que causou o surto de zumbis em Raccoon City?",
        respostas: [
            { texto: "G-Virus", correto: false },
            { texto: "T-Virus (Tyrant Virus)", correto: true },
            { texto: "C-Virus", correto: false },
            { texto: "Uroboros", correto: false }
        ]
    },
    {
        pergunta: "sobre zelda ocarina of time qual é o nome exato da espada lendária que o Link saca no Templo do Tempo para viajar entre o passado e o futuro?",
        respostas: [
            { texto: "Master Sword", correto: true },
            { texto: "Master Biggoron", correto: false },
            { texto: "Master of Guardain", correto: false },
            { texto: "Master Kokiri ", correto: false }
        ]
    },
    {
        pergunta: "Qual é o nome da fada parceira que acompanha o Link durante sua jornada para guiá-lo e dar dicas sobre os inimigos em Ocarina of Time?",
        respostas: [
            { texto: "Ciela", correto: false },
            { texto: "Tael", correto: false },
            { texto: "Tatl", correto: false },
            { texto: "Navi", correto: true }
        ]
    }
];

let perguntaAtualIndex = 0;
let pontuacao = 0;

// Puxa os elementos do HTML
const elementoPergunta = document.getElementById('pergunta');
const elementoBotoes = document.getElementById('botoes-resposta');
const blocoQuiz = document.getElementById('quiz');
const blocoResultado = document.getElementById('resultado');
const textoResultado = document.getElementById('texto-resultado');


function iniciarQuiz() {
    perguntaAtualIndex = 0;
    pontuacao = 0;
    blocoResultado.style.display = 'none';
    blocoQuiz.style.display = 'block';
    mostrarProximaPergunta();
}

function mostrarProximaPergunta() {
    resetarEstado();
    
    let perguntaAtual = perguntas[perguntaAtualIndex];
    elementoPergunta.innerText = `${perguntaAtualIndex + 1}. ${perguntaAtual.pergunta}`;

    perguntaAtual.respostas.forEach(resposta => {
        const botao = document.createElement('button');
        botao.innerText = resposta.texto;
        botao.classList.add('botao-opcao');
        
        if (resposta.correto) {
            botao.dataset.correto = resposta.correto;
        }
        
        botao.addEventListener('click', selecionarResposta);
        elementoBotoes.appendChild(botao);
    });
}


function resetarEstado() {
    while (elementoBotoes.firstChild) {
        elementoBotoes.removeChild(elementoBotoes.firstChild);
    }
}


function selecionarResposta(e) {
    const botaoSelecionado = e.target;
    const ehCorreto = botaoSelecionado.dataset.correto === 'true';

    if (ehCorreto) {
        pontuacao++;
        botaoSelecionado.style.backgroundColor = '#238636'; // Verde se acertar
        botaoSelecionado.style.color = 'white';
        botaoSelecionado.style.borderColor = '#238636';
    } else {
        botaoSelecionado.style.backgroundColor = '#da3633'; // Vermelho se errar
        botaoSelecionado.style.color = 'white';
        botaoSelecionado.style.borderColor = '#da3633';
    }

  
    Array.from(elementoBotoes.children).forEach(botao => {
        if (botao.dataset.correto === 'true') {
            botao.style.backgroundColor = '#238636';
            botao.style.color = 'white';
            botao.style.borderColor = '#238636';
        }
        botao.disabled = true;
    });

    // Espera 1 segundo e avança
    setTimeout(() => {
        perguntaAtualIndex++;
        if (perguntaAtualIndex < perguntas.length) {
            mostrarProximaPergunta();
        } else {
            mostrarResultado();
        }
    }, 1000);
}

function mostrarResultado() {
    blocoQuiz.style.display = 'none';
    blocoResultado.style.display = 'block';
    textoResultado.innerText = `Você acertou ${pontuacao} de ${perguntas.length} perguntas! 🎮`;
}


function reiniciarQuiz() {
    iniciarQuiz();
}

iniciarQuiz();