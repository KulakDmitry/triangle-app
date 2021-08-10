let answerText;
let smile;
let answerBlock;

function isTriangle(sides) {
  const a = sides.a;
  const b = sides.b;
  const c = sides.c;

  renderAnswerBlock();

  a + b > c && a + c > b && b + c > a
    ? trueTriangle("можно", ":)", "rgb(115, 209, 100)")
    : falseTriangle("нельзя", ":(", "red");

  if (inRange(sides, upp, low)) {
    renderAnswer(sides, answerText, smile, upp, low);
  }
}

function renderAnswerBlock() {
  const answer = document.querySelector("#app");
  answerBlock = document.createElement("div");
  answer.append(answerBlock);
  answerBlock.className = "title";
}

function trueTriangle(text, goodSmile, bgColor) {
  answerText = text;
  smile = goodSmile;
  answerBlock.style.backgroundColor = bgColor;
}

function falseTriangle(text, badSmile, bgColor) {
  answerText = text;
  smile = badSmile;
  answerBlock.style.backgroundColor = bgColor;
}

function renderAnswer(sides, answerText, smile, upp, low) {
  answerBlock.innerHTML = `На сторонах ${sides.a}, ${sides.b}, ${sides.c} в пределах от ${low} до ${upp}`;
  const answerTriangle = document.createElement("p");
  answerTriangle.innerHTML = `${answerText} построить треугольник ${smile}`;
  answerBlock.append(answerTriangle);
}

function inRange(sides, upp, low) {
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

export { isTriangle };
