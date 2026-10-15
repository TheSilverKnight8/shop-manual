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
const goButton = document.getElementById("go");
const resultsList = document.getElementById("results");

const allMats = tools.flatMap(function (b) { return b.materials; });
// ["wood", "acrylic"]  (with duplicates if several tools share one)

const uniqueMats = Array.from(new Set(allMats)).sort();
// removes duplicates, then sorts alphabetically

uniqueMats.forEach(function (m) {
  const option = document.createElement("option");
  option.value = m;
  option.textContent = m;
  matSelect.appendChild(option);
});

goButton.addEventListener("click", function () {
  const picked = matSelect.value;           // always a string
  const found = tools.filter(function (b) { return b.materials.includes(picked); });

  resultsList.innerHTML = "";                 // clear old results
  found.forEach(function (b) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "tool.html?id=" + b.id;          // link to the entry page
    a.textContent = b.name;
    li.appendChild(a);
    resultsList.appendChild(li);
  });
});

const objSelect = document.getElementById("objective");
const goButton2 = document.getElementById("go");
const resultsList2 = document.getElementById("results");

const allObjs = tools.flatMap(function (b) { return b.objectives; });

const uniqueObjs = Array.from(new Set(allObjs)).sort();
// removes duplicates, then sorts alphabetically

uniqueObjs.forEach(function (m) {
  const option = document.createElement("option");
  option.value = m;
  option.textContent = m;
  objSelect.appendChild(option);
});

goButton2.addEventListener("click", function () {
  const picked = objSelect.value;           // always a string
  const found = tools.filter(function (b) { return b.objectives.includes(picked); });

  resultsList2.innerHTML = "";                 // clear old results
  found.forEach(function (b) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "tool.html?id=" + b.id;          // link to the entry page
    a.textContent = b.name;
    li.appendChild(a);
    resultsList2.appendChild(li);
  });
});

const precSelect = document.getElementById("precision");
const goButton3 = document.getElementById("go");
const resultsList3 = document.getElementById("results");

const allPrecs = tools.flatMap(function (b) { return b.precision; });

const uniquePrecs = Array.from(new Set(allPrecs)).sort();
// removes duplicates, then sorts alphabetically

uniquePrecs.forEach(function (m) {
  const option = document.createElement("option");
  option.value = m;
  option.textContent = m;
  precSelect.appendChild(option);
});

goButton3.addEventListener("click", function () {
  const picked = precSelect.value;           // always a string
  const found = tools.filter(function (b) { return b.precisions.includes(picked); });

  resultsList3.innerHTML = "";                 // clear old results
  found.forEach(function (b) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "tool.html?id=" + b.id;          // link to the entry page
    a.textContent = b.name;
    li.appendChild(a);
    resultsList3.appendChild(li);
  });
});

const thicSelect = document.getElementById("maxThickness");
const goButton4 = document.getElementById("go");
const resultsList4 = document.getElementById("results");

const allThics = tools.flatMap(function (b) { return b.maxThickness; });
// ["wood", "acrylic"]  (with duplicates if several tools share one)

const uniqueThics = Array.from(new Set(allThics)).sort();
// removes duplicates, then sorts alphabetically

uniqueThics.forEach(function (m) {
  const option = document.createElement("option");
  option.value = m;
  option.textContent = m;
  thicSelect.appendChild(option);
});

goButton4.addEventListener("click", function () {
  const picked = thicSelect.value;           // always a string
  const found = tools.filter(function (b) { return b.maxThickness.includes(picked); });

  resultsList4.innerHTML = "";                 // clear old results
  found.forEach(function (b) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "tool.html?id=" + b.id;          // link to the entry page
    a.textContent = b.name;
    li.appendChild(a);
    resultsList4.appendChild(li);
  });
});

const sizeSelect = document.getElementById("maxSize");
const goButton5 = document.getElementById("go");
const resultsList5 = document.getElementById("results");

const allSizes = tools.flatMap(function (b) { return b.maxSize; });
// ["wood", "acrylic"]  (with duplicates if several tools share one)

const uniqueSizes = Array.from(new Set(allSizes)).sort();
// removes duplicates, then sorts alphabetically

uniqueSizes.forEach(function (m) {
  const option = document.createElement("option");
  option.value = m;
  option.textContent = m;
  sizeSelect.appendChild(option);
});

goButton5.addEventListener("click", function () {
  const picked = sizeSelect.value;           // always a string
  const found = tools.filter(function (b) { return b.maxSize.includes(picked); });

  resultsList5.innerHTML = "";                 // clear old results
  found.forEach(function (b) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "tool.html?id=" + b.id;          // link to the entry page
    a.textContent = b.name;
    li.appendChild(a);
    resultsList5.appendChild(li);
  });
});