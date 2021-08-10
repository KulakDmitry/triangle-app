import { isTriangle } from "./render-triangle.js";
import { renderForm } from "./render-form.js";

const sides = {};

function getTriangleValue(value) {
  return parseInt(document.querySelector(value).value);
}

function event() {
  sides.a = getTriangleValue("#first-side");
  sides.b = getTriangleValue("#second-side");
  sides.c = getTriangleValue("#third-side");

  low = getTriangleValue("#low");
  upp = getTriangleValue("#upp");

  isTriangle(sides);
}

function render(root) {
  root.innerHTML = "";
  renderForm(root);

  const checkButton = document.getElementById("btn");
  checkButton.addEventListener("click", event);
}

function main() {
  const appDiv = document.querySelector("#app");

  if (appDiv !== null) {
    render(appDiv);
  } else {
    console.log("appDiv not found");
  }
}

export { main };
