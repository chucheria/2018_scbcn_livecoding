// GOSPER
// A pasito palante
// B pasito palante
// - Giro 60 grados hacia la derecha
// + Giro de 60 grados hacia la izquierda

// A -> A-B--B+A++AA+B-
// B -> +A-BB--B-A++A+B

console.log('yay 🦄');

const skynight = '#2f1954';
const light = '#ddebf8';

// Posicion actual
var x, y;
// Angulo actual
var currentangle = 0;
// Longitud del pasito
var lenpasito = 30;
// Angulo
var angle = 60;

// Computo completo
comp = 5;
// Reglas
therules = [];
// Axioma
string = 'A';
// Regla 0
therules[0] = ['A', 'A-B--B+A++AA+B-']
// Regla 1
therules[1] = ['B', '+A-BB--B-A++A+B']

var dondeestoy = 0;

function setup() {
  let height = 500;
  let width = 500;
  createCanvas(width, height);
  background(skynight);
  stroke(light);

  x = width / 2;
  y = height;

  for (var i = 0; i < comp; i++) {
    string = gosper(string);
  }
}

function draw() {
  useRules(string[dondeestoy]);
  dondeestoy++;

}

function useRules(k) {
  if (k == 'B' || k == 'A') {
    x1 = x + lenpasito*cos(radians(currentangle));
    y1 = y + lenpasito*sin(radians(currentangle));

    line(x, y, x1, y1)

    x = x1;
    y = y1;
  } else if (k == '+') {
    currentangle += angle; // Giro a la izquierda
  } else if (k == '-') {
    currentangle -= angle; // Giro a la derecha
  } else {
    console.log('🤷‍♀️');
  }
}

function gosper(s) {
  var outputstring = '';

  // Itera por las reglas para añadir las que coinciden
  for (var i = 0; i < s.length; i++) {
    var ismatch = 0; // No coincide ninguna por defecto
    for (var j = 0; j < therules.length; j++) {
      if (s[i] == therules[j][0])  {
        outputstring += therules[j][1];
        ismatch = 1;
        break;
      }
    }
    // Si no hay nada que se sustituya ( + o - ) poner directamente + o -
    if (ismatch == 0) outputstring+= s[i];
  }

  return outputstring;
}
