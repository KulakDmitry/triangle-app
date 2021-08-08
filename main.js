const sides = {};

let answerText;
let smile;
let answerBlock;

function triangleSides(sides) {}

function renderAnswerBlock() {
  const header = document.querySelector("#app");
  answerBlock = document.createElement("div");
  header.append(answerBlock);
  answerBlock.className = "title";
}

function trueTriangle() {
  answerText = "можно";
  smile = ":)";
  answerBlock.style.backgroundColor = "rgb(115, 209, 100)";
}

function falseTriangle() {
  answerText = "нельзя";
  smile = ":(";
  answerBlock.style.backgroundColor = "red";
}

function renderAnswer() {
  answerBlock.innerHTML = `На сторонах ${sides.a}, ${sides.b}, ${sides.c} в пределах от ${low} до ${upp}`;
  const answerTriangle = document.createElement("p");
  answerTriangle.innerHTML = `${answerText} построить треугольник ${smile}`;
  answerBlock.append(answerTriangle);
}

function inRange() {
  for (let i in sides) {
    if (sides[i] > upp || sides[i] < low) {
      const text = document.createElement("p");
      text.innerHTML = `сторона ${i} = ${sides[i]}: не может быть использована т.к. должна быть в пределах от ${low} до ${upp} `;
      answerBlock.style.backgroundColor = "yellow";
      answerBlock.append(text);

      return false;
    }
  }
  return true;
}

function isTriangle() {
  const a = sides.a;
  const b = sides.b;
  const c = sides.c;

  a + b > c && a + c > b && b + c > a ? trueTriangle() : falseTriangle();

  if (inRange()) {
    renderAnswer();
  }
}

function getTriangleValue(value) {
  return parseInt(document.querySelector(value).value);
}

function event() {
  sides.a = getTriangleValue("#first-side");
  sides.b = getTriangleValue("#second-side");
  sides.c = getTriangleValue("#third-side");

  low = getTriangleValue("#low");
  upp = getTriangleValue("#upp");

  renderAnswerBlock();

  isTriangle();
}

function main() {
  const checkButton = document.getElementById("btn");
  checkButton.addEventListener("click", event);
}

export { main };
