function findTools(choices) {
  // unchanged: keep exactly what you have
}

const matSelect = document.getElementById("material");
const objSelect = document.getElementById("objective");
const precSelect = document.getElementById("precision");
const thicSelect = document.getElementById("maxThickness");
const sizeSelect = document.getElementById("maxSize");
const goButton = document.getElementById("go");
const message = document.getElementById("message");
const resultsList = document.getElementById("results");

// The block you wrote twice, written once.
function fillOptions(select, values) {
  const unique = Array.from(new Set(values)).sort();
  unique.forEach(function (v) {
    const option = document.createElement("option");
    option.value = v;
    option.textContent = v;
    select.appendChild(option);
  });
}

fillOptions(matSelect, tools.flatMap(function (b) { return b.materials; }));
fillOptions(objSelect, tools.flatMap(function (b) { return b.objectives; }));

goButton.addEventListener("click", function () {
  message.textContent = "";
  resultsList.innerHTML = "";

  if (matSelect.value === "" || objSelect.value === "" ||
      precSelect.value === "" || thicSelect.value === "" ||
      sizeSelect.value === "") {
    message.textContent = "Choose an option in every box.";
    return;                                   // stop here
  }

  const found = findTools({
    material: matSelect.value,
    objective: objSelect.value,
    minPrecision: Number(precSelect.value),
    minThickness: Number(thicSelect.value),
    minSize: Number(sizeSelect.value)
  });

  if (found.length === 0) {
    message.textContent = "No tool fits these choices.";
    return;
  }

  found.forEach(function (b) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "tool.html?id=" + b.id;
    a.textContent = b.name;
    li.appendChild(a);
    resultsList.appendChild(li);
  });
});