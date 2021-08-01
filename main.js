document.getElementById("btn").onclick = function () {
  main();
};

function main() {
  const sides = {};
  sides.a = parseInt(document.querySelector("#first-side").value);
  sides.b = parseInt(document.querySelector("#second-side").value);
  sides.c = parseInt(document.querySelector("#third-side").value);

  const low = parseInt(document.querySelector("#low").value);
  const upp = parseInt(document.querySelector("#upp").value);

  const header = document.querySelector("#app");
  const answerBlock = document.createElement("div");
  header.append(answerBlock);
  answerBlock.className = "title";

  isTriangle();

  function inRange() {
    for (let i in sides) {
      if (sides[i] > upp || sides[i] < low) {
        const text = document.createElement("p");
        text.innerHTML = `сторона ${i} = ${sides[i]}: не может быть использована т.к. должна быть в пределах от ${low} до ${upp} `;
        answerBlock.style.backgroundColor = "red";
        header.style.backgroundColor = "red";
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
    let answerText;
    let smile;
    if (a + b > c && a + c > b && b + c > a) {
      answerText = "можно";
      smile = ":)";
      answerBlock.style.backgroundColor = "rgb(115, 209, 100)";
      header.style.backgroundColor = "rgb(115, 209, 100)";
    } else {
      answerText = "нельзя";
      smile = ":(";
      answerBlock.style.backgroundColor = "red";
      header.style.backgroundColor = "red";
    }
    if (inRange()) {
      answerBlock.innerHTML = `На сторонах ${sides.a}, ${sides.b}, ${sides.c} в пределах от ${low} до ${upp}`;

      const answerTriangle = document.createElement("p");
      answerTriangle.innerHTML = `${answerText} построить треугольник ${smile}`;
      answerBlock.append(answerTriangle);
    }
  }
}

export { main };
