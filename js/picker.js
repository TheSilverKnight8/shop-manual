function findTools(choices) {
  return tools.filter(function (b) {
    return b.materials.includes(choices.material) &&
           b.objectives.includes(choices.objective) &&
           b.precision >= choices.minPrecision &&
           b.maxThickness >= choices.thickness &&
           b.maxLong >= choices.long &&
           b.maxWide >= choices.wide;
  });
}

const matSelect = document.getElementById("material");
const objSelect = document.getElementById("objective");
const precSelect = document.getElementById("precision");
const thickInput = document.getElementById("thickness");
const lengthInput = document.getElementById("long");
const widthInput = document.getElementById("wide");
const goButton = document.getElementById("go");
const message = document.getElementById("message");
const resultsList = document.getElementById("results");

function fillOptions(select, values) {
    select.innerHTML = "";
    const blank = document.createElement("option");
    blank.value = "";
    blank.textContent = "Choose…";
    select.appendChild(blank);  
    const unique = Array.from(new Set(values)).sort();
    unique.forEach(function (v) {
    const option = document.createElement("option");
    option.value = v;
    option.textContent = v;
    select.appendChild(option);
  });
}

function refreshSizes() {
  const previous = objSelect.value;

  let pool = tools;
  if (matSelect.value !== "") {
    pool = tools.filter(function (b) {
      return b.materials.includes(matSelect.value);
    });
  }

    fillOptions(objSelect, pool.flatMap(function (b) { return b.objectives; }));
    objSelect.value = previous;
}

fillOptions(matSelect, tools.flatMap(function (b) { return b.materials; }));
refreshSizes();
matSelect.addEventListener("change", refreshSizes);

function readPositive(input) {
  const n = Number(input.value);
  if (input.value === "" || isNaN(n) || n <= 0) {
    return null;
  }
  return n;
}

goButton.addEventListener("click", function () {
  message.textContent = "";
  resultsList.innerHTML = "";

  if (matSelect.value === "" || objSelect.value === "" ||
      precSelect.value === "") {
    message.textContent = "Choose a material, objective, and precision.";
    return;
  }

  const thick = readPositive(thickInput);
  const len = readPositive(lengthInput);
  const wid = readPositive(widthInput);

  if (thick === null || len === null || wid === null) {
    message.textContent = "Enter a number greater than 0 in every size box.";
    return;
  }

  const found = findTools({
    material: matSelect.value,
    objective: objSelect.value,
    minPrecision: Number(precSelect.value),
    thickness: thick,
    long: Math.max(len, wid),
    wide: Math.min(len, wid)
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