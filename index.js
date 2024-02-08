const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de marcação para criar estrutura em páginas web.",
      "Uma linguagem de programação usada para criar interatividade em páginas web.",
      "Um estilo de folha de estilos para estilizar páginas web."
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: [
      "var myVar = 10;",
      "variable myVar = 10;",
      "int myVar = 10;"
    ],
    correta: 0
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Um tipo de dado em JavaScript para armazenar informações do documento.",
      "Um modelo para criar interfaces gráficas em JavaScript.",
      "Uma representação em memória da estrutura de um documento HTML que o script pode interagir."
    ],
    correta: 2
  },
  {
    pergunta: "O que é uma função em JavaScript?",
    respostas: [
      "Um bloco de código que executa uma ação específica quando chamado.",
      "Uma variável que armazena valores em JavaScript.",
      "Um operador que compara dois valores em JavaScript."
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
    respostas: [
      "para (i = 0; i < 5; i++) {...}",
      "for (i = 0; i < 5; i++) {...}",
      "for i = 0; i < 5; i++) {...}"
    ],
    correta: 1
  },
  {
    pergunta: "O que é uma string em JavaScript?",
    respostas: [
      "Um tipo de dado que representa um número inteiro.",
      "Um tipo de dado que representa texto.",
      "Um tipo de dado que representa um valor lógico."
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
    respostas: [
      "==",
      "===",
      "="
    ],
    correta: 1
  },
  {
    pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
    respostas: [
      "pop()",
      "shift()",
      "splice()"
    ],
    correta: 0
  },
  {
    pergunta: "O que é uma variável global em JavaScript?",
    respostas: [
      "Uma variável que pode ser acessada apenas dentro de uma função.",
      "Uma variável que pode ser acessada de qualquer lugar em um programa.",
      "Uma variável que pode ser acessada apenas dentro de um bloco de código."
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
    respostas: [
      "Para verificar se duas variáveis são do mesmo tipo.",
      "Para retornar o tipo de dados de uma variável.",
      "Para comparar o valor de duas variáveis."
    ],
    correta: 1
  }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const TotalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + TotalDePerguntas

// loop ou laço de repetição
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode (true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + TotalDePerguntas
    }
    
    
    
    quizItem.querySelector('dl').appendChild(dt)
  }

  
  quizItem.querySelector('dl dt').remove()


  //coloca a pergunta na tela
  quiz.appendChild(quizItem)  
}