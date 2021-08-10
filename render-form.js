function renderBlock(sideValue, sideName, form) {
  const label = document.createElement("label");
  label.for = sideValue;
  label.innerHTML = sideName;
  form.append(label);
  const input = document.createElement("input");
  input.type = "text";
  input.name = sideValue;
  input.id = sideValue;
  form.append(input);
}

function renderForm(root) {
  const header = document.createElement("h1");
  header.className = "title";
  header.innerHTML = "Проверка треугольника";
  root.prepend(header);

  const form = document.createElement("form");
  form.id = "form";
  form.className = "inputForm";

  renderBlock("first-side", "a", form);
  renderBlock("second-side", "b", form);
  renderBlock("third-side", "c", form);

  renderBlock("low", "от", form);
  renderBlock("upp", "до", form);

  const button = document.createElement("input");
  button.type = "button";
  button.value = "Проверить";
  button.id = "btn";

  form.append(button);

  root.append(form);
}

export { renderForm };
