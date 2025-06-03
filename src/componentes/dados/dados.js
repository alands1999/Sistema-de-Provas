const perguntasOriginais = [
  {
    id: 1,
    pergunta: "Qual é a capital da França?",
    alternativas: [
      { texto: "Paris", correta: true },
      { texto: "Londres", correta: false },
      { texto: "Roma", correta: false },
      { texto: "Berlim", correta: false },
    ],
  },
  {
    id: 2,
    pergunta: "Qual elemento químico tem o símbolo 'O'?",
    alternativas: [
      { texto: "Oxigênio", correta: true },
      { texto: "Ouro", correta: false },
      { texto: "Cobre", correta: false },
      { texto: "Prata", correta: false },
    ],
  },
  {
    id: 3,
    pergunta: "Quem escreveu 'Dom Quixote'?",
    alternativas: [
      { texto: "Miguel de Cervantes", correta: true },
      { texto: "William Shakespeare", correta: false },
      { texto: "Machado de Assis", correta: false },
      { texto: "Fernando Pessoa", correta: false },
    ],
  },
  {
    id: 4,
    pergunta: "Em que continente está localizado o Egito?",
    alternativas: [
      { texto: "África", correta: true },
      { texto: "Europa", correta: false },
      { texto: "Ásia", correta: false },
      { texto: "América", correta: false },
    ],
  },
  {
    id: 5,
    pergunta: "Qual é o maior planeta do Sistema Solar?",
    alternativas: [
      { texto: "Júpiter", correta: true },
      { texto: "Terra", correta: false },
      { texto: "Marte", correta: false },
      { texto: "Saturno", correta: false },
    ],
  },
  {
    id: 6,
    pergunta: "Quantos lados tem um hexágono?",
    alternativas: [
      { texto: "6", correta: true },
      { texto: "5", correta: false },
      { texto: "8", correta: false },
      { texto: "7", correta: false },
    ],
  },
  {
    id: 7,
    pergunta: "Qual é o idioma oficial da Argentina?",
    alternativas: [
      { texto: "Espanhol", correta: true },
      { texto: "Português", correta: false },
      { texto: "Italiano", correta: false },
      { texto: "Francês", correta: false },
    ],
  },
  {
    id: 8,
    pergunta: "Quantos segundos há em uma hora?",
    alternativas: [
      { texto: "3600", correta: true },
      { texto: "6000", correta: false },
      { texto: "1800", correta: false },
      { texto: "3000", correta: false },
    ],
  },
  {
    id: 9,
    pergunta: "Quem pintou a Mona Lisa?",
    alternativas: [
      { texto: "Leonardo da Vinci", correta: true },
      { texto: "Pablo Picasso", correta: false },
      { texto: "Vincent van Gogh", correta: false },
      { texto: "Michelangelo", correta: false },
    ],
  },
  {
    id: 10,
    pergunta: "Qual é a moeda oficial do Japão?",
    alternativas: [
      { texto: "Iene", correta: true },
      { texto: "Yuan", correta: false },
      { texto: "Won", correta: false },
      { texto: "Rúpia", correta: false },
    ],
  },
  {
  id: 11,
  pergunta: "Qual é o maior oceano do mundo?",
  alternativas: [
    { texto: "Atlântico", correta: false },
    { texto: "Índico", correta: false },
    { texto: "Ártico", correta: false },
    { texto: "Pacífico", correta: true }
  ]
},
{
  id: 12,
  pergunta: "Qual é o principal gás responsável pelo efeito estufa?",
  alternativas: [
    { texto: "Oxigênio", correta: false },
    { texto: "Hidrogênio", correta: false },
    { texto: "Dióxido de carbono", correta: true },
    { texto: "Nitrogênio", correta: false }
  ]
},
{
  id: 13,
  pergunta: "Em que país as pirâmides de Gizé estão localizadas?",
  alternativas: [
    { texto: "Grécia", correta: false },
    { texto: "México", correta: false },
    { texto: "Egito", correta: true },
    { texto: "Índia", correta: false }
  ]
},
{
  id: 14,
  pergunta: "Qual é o maior animal terrestre?",
  alternativas: [
    { texto: "Rinoceronte", correta: false },
    { texto: "Elefante-africano", correta: true },
    { texto: "Hipopótamo", correta: false },
    { texto: "Girafa", correta: false }
  ]
},
{
  id: 15,
  pergunta: "Quem pintou 'A Última Ceia'?",
  alternativas: [
    { texto: "Leonardo da Vinci", correta: true },
    { texto: "Michelangelo", correta: false },
    { texto: "Van Gogh", correta: false },
    { texto: "Rafael", correta: false }
  ]
},
{
  id: 16,
  pergunta: "Qual país é conhecido como a terra do sol nascente?",
  alternativas: [
    { texto: "China", correta: false },
    { texto: "Japão", correta: true },
    { texto: "Coreia do Sul", correta: false },
    { texto: "Tailândia", correta: false }
  ]
},
{
  id: 17,
  pergunta: "Qual o nome do processo de conversão de gás em líquido?",
  alternativas: [
    { texto: "Evaporação", correta: false },
    { texto: "Condensação", correta: true },
    { texto: "Sublimação", correta: false },
    { texto: "Fusão", correta: false }
  ]
},
{
  id: 18,
  pergunta: "Quantos segundos há em uma hora?",
  alternativas: [
    { texto: "3.200", correta: false },
    { texto: "3.600", correta: true },
    { texto: "6.000", correta: false },
    { texto: "3.000", correta: false }
  ]
},
{
  id: 19,
  pergunta: "Qual é o maior órgão do corpo humano?",
  alternativas: [
    { texto: "Coração", correta: false },
    { texto: "Pulmão", correta: false },
    { texto: "Pele", correta: true },
    { texto: "Fígado", correta: false }
  ]
},
{
  id: 20,
  pergunta: "Em que estado brasileiro fica o Pantanal?",
  alternativas: [
    { texto: "Paraná", correta: false },
    { texto: "Mato Grosso do Sul", correta: true },
    { texto: "Bahia", correta: false },
    { texto: "Amazonas", correta: false }
  ]
},
{
  id: 21,
  pergunta: "Qual o nome do cientista que desenvolveu a teoria da relatividade?",
  alternativas: [
    { texto: "Isaac Newton", correta: false },
    { texto: "Nikola Tesla", correta: false },
    { texto: "Albert Einstein", correta: true },
    { texto: "Galileu Galilei", correta: false }
  ]
},
{
  id: 22,
  pergunta: "Qual é o nome da capital da Austrália?",
  alternativas: [
    { texto: "Sydney", correta: false },
    { texto: "Melbourne", correta: false },
    { texto: "Canberra", correta: true },
    { texto: "Brisbane", correta: false }
  ]
},
{
  id: 23,
  pergunta: "Qual é o resultado da raiz quadrada de 144?",
  alternativas: [
    { texto: "10", correta: false },
    { texto: "12", correta: true },
    { texto: "14", correta: false },
    { texto: "16", correta: false }
  ]
},
{
  id: 24,
  pergunta: "Quem escreveu a peça 'Romeu e Julieta'?",
  alternativas: [
    { texto: "William Shakespeare", correta: true },
    { texto: "George Orwell", correta: false },
    { texto: "Jane Austen", correta: false },
    { texto: "Charles Dickens", correta: false }
  ]
},
{
  id: 25,
  pergunta: "Qual a fórmula da água?",
  alternativas: [
    { texto: "H2O", correta: true },
    { texto: "CO2", correta: false },
    { texto: "NaCl", correta: false },
    { texto: "O2", correta: false }
  ]
},
{
  id: 26,
  pergunta: "Qual o nome da linha imaginária que divide a Terra em hemisférios norte e sul?",
  alternativas: [
    { texto: "Trópico de Capricórnio", correta: false },
    { texto: "Equador", correta: true },
    { texto: "Meridiano de Greenwich", correta: false },
    { texto: "Trópico de Câncer", correta: false }
  ]
},
{
  id: 27,
  pergunta: "Qual a capital do estado de Minas Gerais?",
  alternativas: [
    { texto: "Vitória", correta: false },
    { texto: "Belo Horizonte", correta: true },
    { texto: "Goiânia", correta: false },
    { texto: "Curitiba", correta: false }
  ]
},
{
  id: 28,
  pergunta: "Quem foi o líder pacifista indiano conhecido por sua luta sem violência?",
  alternativas: [
    { texto: "Nelson Mandela", correta: false },
    { texto: "Dalai Lama", correta: false },
    { texto: "Mahatma Gandhi", correta: true },
    { texto: "Martin Luther King", correta: false }
  ]
},
{
  id: 29,
  pergunta: "O que é a fotossíntese?",
  alternativas: [
    { texto: "Processo de digestão nas plantas", correta: false },
    { texto: "Respiração dos vegetais", correta: false },
    { texto: "Processo em que as plantas produzem alimento usando luz", correta: true },
    { texto: "Crescimento de raízes", correta: false }
  ]
},
  {
    id: 31,
    pergunta: "Qual é o símbolo químico do ouro?",
    alternativas: [
      { texto: "Ag", correta: false },
      { texto: "Au", correta: true },
      { texto: "Pb", correta: false },
      { texto: "Fe", correta: false }
    ]
  },
  {
    id: 32,
    pergunta: "Qual foi o primeiro presidente do Brasil?",
    alternativas: [
      { texto: "Getúlio Vargas", correta: false },
      { texto: "Marechal Deodoro da Fonseca", correta: true },
      { texto: "Juscelino Kubitschek", correta: false },
      { texto: "Dom Pedro II", correta: false }
    ]
  },
  {
    id: 33,
    pergunta: "Qual o menor osso do corpo humano?",
    alternativas: [
      { texto: "Fêmur", correta: false },
      { texto: "Martelo", correta: false },
      { texto: "Estribo", correta: true },
      { texto: "Tíbia", correta: false }
    ]
  },
  {
    id: 34,
    pergunta: "Em que continente está localizado o deserto do Saara?",
    alternativas: [
      { texto: "Ásia", correta: false },
      { texto: "África", correta: true },
      { texto: "América", correta: false },
      { texto: "Oceania", correta: false }
    ]
  },
  {
    id: 35,
    pergunta: "Quem escreveu 'O Pequeno Príncipe'?",
    alternativas: [
      { texto: "Antoine de Saint-Exupéry", correta: true },
      { texto: "Victor Hugo", correta: false },
      { texto: "Franz Kafka", correta: false },
      { texto: "Machado de Assis", correta: false }
    ]
  },
  {
    id: 36,
    pergunta: "Qual o planeta mais próximo do Sol?",
    alternativas: [
      { texto: "Vênus", correta: false },
      { texto: "Marte", correta: false },
      { texto: "Terra", correta: false },
      { texto: "Mercúrio", correta: true }
    ]
  },
  {
    id: 37,
    pergunta: "Qual a montanha mais alta do mundo?",
    alternativas: [
      { texto: "Monte Everest", correta: true },
      { texto: "Monte Kilimanjaro", correta: false },
      { texto: "Monte Elbrus", correta: false },
      { texto: "Mont Blanc", correta: false }
    ]
  },
  {
    id: 38,
    pergunta: "Quem pintou o teto da Capela Sistina?",
    alternativas: [
      { texto: "Leonardo da Vinci", correta: false },
      { texto: "Michelangelo", correta: true },
      { texto: "Rafael", correta: false },
      { texto: "Donatello", correta: false }
    ]
  },
  {
    id: 39,
    pergunta: "Qual é a moeda do Japão?",
    alternativas: [
      { texto: "Yuan", correta: false },
      { texto: "Iene", correta: true },
      { texto: "Won", correta: false },
      { texto: "Dólar", correta: false }
    ]
  },
  {
    id: 40,
    pergunta: "Quem é conhecido como o pai da psicanálise?",
    alternativas: [
      { texto: "Sigmund Freud", correta: true },
      { texto: "Carl Jung", correta: false },
      { texto: "Jean Piaget", correta: false },
      { texto: "B.F. Skinner", correta: false }
    ]
  },
  {
    id: 41,
    pergunta: "Qual é o oceano mais profundo?",
    alternativas: [
      { texto: "Atlântico", correta: false },
      { texto: "Índico", correta: false },
      { texto: "Ártico", correta: false },
      { texto: "Pacífico", correta: true }
    ]
  },
  {
    id: 42,
    pergunta: "Qual é o país com o maior número de falantes nativos de espanhol?",
    alternativas: [
      { texto: "Espanha", correta: false },
      { texto: "México", correta: true },
      { texto: "Argentina", correta: false },
      { texto: "Colômbia", correta: false }
    ]
  },
  {
    id: 43,
    pergunta: "Quem foi o criador do Facebook?",
    alternativas: [
      { texto: "Elon Musk", correta: false },
      { texto: "Steve Jobs", correta: false },
      { texto: "Mark Zuckerberg", correta: true },
      { texto: "Jeff Bezos", correta: false }
    ]
  },
  {
    id: 44,
    pergunta: "Em qual país se originou o tango?",
    alternativas: [
      { texto: "Brasil", correta: false },
      { texto: "Uruguai", correta: false },
      { texto: "Espanha", correta: false },
      { texto: "Argentina", correta: true }
    ]
  },
  {
    id: 45,
    pergunta: "Qual a capital do Canadá?",
    alternativas: [
      { texto: "Toronto", correta: false },
      { texto: "Ottawa", correta: true },
      { texto: "Vancouver", correta: false },
      { texto: "Montreal", correta: false }
    ]
  },
  {
    id: 46,
    pergunta: "Em que ano o homem pisou na Lua pela primeira vez?",
    alternativas: [
      { texto: "1965", correta: false },
      { texto: "1969", correta: true },
      { texto: "1972", correta: false },
      { texto: "1959", correta: false }
    ]
  },
  {
    id: 47,
    pergunta: "Qual o maior planeta do sistema solar?",
    alternativas: [
      { texto: "Saturno", correta: false },
      { texto: "Netuno", correta: false },
      { texto: "Júpiter", correta: true },
      { texto: "Urano", correta: false }
    ]
  },
  {
    id: 48,
    pergunta: "Quem escreveu 'Dom Casmurro'?",
    alternativas: [
      { texto: "Machado de Assis", correta: true },
      { texto: "José de Alencar", correta: false },
      { texto: "Carlos Drummond", correta: false },
      { texto: "Manuel Bandeira", correta: false }
    ]
  },
  {
    id: 49,
    pergunta: "Qual é o número de lados de um hexágono?",
    alternativas: [
      { texto: "5", correta: false },
      { texto: "6", correta: true },
      { texto: "7", correta: false },
      { texto: "8", correta: false }
    ]
  },
  {
    id: 50,
    pergunta: "Em que país nasceu o pintor Pablo Picasso?",
    alternativas: [
      { texto: "França", correta: false },
      { texto: "Itália", correta: false },
      { texto: "Espanha", correta: true },
      { texto: "Portugal", correta: false }
    ]
  }
];


function sortearPerguntas (perguntas) {
let novaLista = [];
perguntas.sort(() => Math.random() - 0.5);

   for(let i= 0; i < 20; i++){
    novaLista.push(perguntas[i])
   }
   return novaLista;
}


export {sortearPerguntas, perguntasOriginais} ;
