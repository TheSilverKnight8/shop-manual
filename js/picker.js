function findTools(choices) {
  return tools.filter(function (b) {
    return b.materials.includes(choices.material) &&
           b.objectives.includes(choices.objective) &&
           b.precision >= choices.minPrecision &&
           b.maxThickness >= choices.minThickness &&
           b.maxSize >= choices.minSize;
  });
}

const matSelect = document.getElementById("material");
const objSelect = document.getElementById("objective");
const precSelect = document.getElementById("precision");
const goButton = document.getElementById("go");
const message = document.getElementById("message");
const resultsList = document.getElementById("results");

fillOptions(matSelect, tools.flatMap(function (b) { return b.materials; }));
fillOptions(objSelect, tools.flatMap(function (b) { return b.objectives; }));

function readPositive(input) {
  const n = Number(input.value);          // "" becomes 0, text becomes NaN
  if (input.value === "" || isNaN(n) || n <= 0) {
    return null;                          // "this box is invalid"
  }
  return n;                               // otherwise, hand back the number
}

const w = readPositive(weightInput);
const h = readPositive(heightInput);
const t = readPositive(thicknessInput);

if (w === null || h === null || t === null) {
  message.textContent = "Enter a number greater than 0 in every box.";
  return;
}

const long = Math.max(w, h);
const wide = Math.min(w, h);

function fillOptions(select, values) {
  const unique = Array.from(new Set(values)).sort();
  unique.forEach(function (v) {
    const option = document.createElement("option");
    option.value = v;
    option.textContent = v;
    select.appendChild(option);
  });
}

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