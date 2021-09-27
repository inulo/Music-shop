const context = {
  title: 'Welcome to Musicon',
  body: 'Musicon é uma loja musical em desenvolvimento com a missão de compartilhar a alegria da música. Essas magníficas ferramentas auditivas são projetadas com criadores musicais, como você, em mente. Hobbyists, iniciantes e especialistas podem apreciar os sons resplandecentes fornecidos por cada um dos instrumentos que carregamos. Junte-se a nós para entregar as vibrações eufóricas da melodia aos cidadãos do mundo!',
  instruments: [
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/electronic-keyboard.png',
      name: 'Electronic Keyboard',
      description: 'A piano welcomed to the 21th century. Pianists celebrate the compact form factor and the diversity of synthesized rhythms all in one masterful musical machine.',
      price: '$1,999.00',
      sale: '$1,699.89'
    },
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/electric-guitar.png',
      name: 'Electric Guitar',
      description: 'Join the legends of the \'50s and \'60s when the marriage of guitar and electricity created the most influential instrument of a generation. Note: picks sold separately.',
      price: '$599.99'
    },
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/bass-guitar.png',
      name: 'Bass Guitar',
      description: 'Experience the embodiment of funkadelic frequencies that is the bass guitar. Let the deep low notes of the bass guitar resonate with heartbeats everywhere.',
      price: '$624.99'
    },
    {
      image: 'https://content.codecademy.com/courses/learn-handlebars/musicon/drum-kit.png',
      name: 'Drum Kit',
      description: 'Ever thought, "one instrument isn\'t enough?" Find an answer in the drum kit. Coordinate a collections of drums and cymbals to dictate the rhythm of musical masterpiece.',
      price: '$649.00',
      sale: '$349.00'
    }
  ]
};

const templateElement = document.getElementById("templateHB");
const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById('information').innerHTML = compiledHtml;


