// CANTOR SET
// A dibuja palante
// B saltito palante
// A -> ABA
// B -> BBB
// Axioma = A


console.log('yay 🦄');

const colorpink = '#ff3e80';
const colorpurple = '#8759f280'; // Purple with 50% transparency

function setup() {
  let height = 500;
  let width = 500
  createCanvas(width, height)
  background(colorpurple)
}

function draw() {
  x = 50;
  y = 50;

  w = width - 100;
  cantor(x, y, w);
}


function cantor(x, y, w) {

  let h = 50;

  if (w >= 1) {
    fill(colorpink)
    noStroke();
    rect(x, y, w, h / 2)

    y += h;
    cantor(x, y, w * 1/3, h/2)
    cantor(x + w * 2/3, y, w * 1/3, h/2)
  }
}
