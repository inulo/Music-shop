const context = {
  title: 'Bem-vindo ao Musicon',
  body: 'Musicon é uma loja musical em desenvolvimento com a missão de compartilhar a alegria da música. Essas magníficas ferramentas auditivas são projetadas com criadores musicais, como você, em mente. Hobbyists, iniciantes e especialistas podem apreciar os sons resplandecentes fornecidos por cada um dos instrumentos que carregamos. Junte-se a nós para entregar as vibrações eufóricas da melodia aos cidadãos do mundo!',
  instruments: [
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/electronic-keyboard.png',
      name: 'Teclado Eletrônico',
      description: 'Um piano de boas-vindas ao século XXI. Os pianistas celebram o formato compacto e a diversidade de ritmos sintetizados, tudo em uma máquina musical magistral.',
      price: '€1,999.00',
      sale: '€1,699.89'
    },
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/electric-guitar.png',
      name: 'Guitarra elétrica',
      description: 'Junte-se às lendas dos anos 50 e 60 quando o casamento do violão e da eletricidade criou o instrumento mais influente de uma geração. Nota: picaretas venderam separadamente.',
      price: '€599.99'
    },
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/bass-guitar.png',
      name: 'Bass guitar',
      description: 'Experimente a personificação de frequências funkadelic que é o baixo. Deixe as notas graves profundas do baixo ressoar com os batimentos cardíacos em todos os lugares.',
      price: '€624.99'
    },
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/drum-kit.png',
      name: 'Kit de bateria',
      description: 'Já pensou, "um instrumento não é suficiente?" Encontre uma resposta no kit de bateria. Coordene uma coleção de tambores e pratos para ditar o ritmo da obra-prima musical.',
      price: '€649.00',
      sale: '€349.00'
    }
  ]
};

const templateElement = document.getElementById("templateHB");
const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById('information').innerHTML = compiledHtml;


