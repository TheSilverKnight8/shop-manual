function findTools(choices) {
  return tools.filter(function (b) {
    return b.materials.includes(choices.material) &&
           b.objectives.includes(choices.objective) &&
           b.precision >= choices.minPrecision &&
           b.maxThickness >= choices.minThickness &&
           b.maxSize >= choices.minSize;
  });
}

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

const matSelect = document.getElementById("material");
const goButton = document.getElementById("go");
const resultsList = document.getElementById("results");

goButton.addEventListener("click", function () {
  const picked = matSelect.value;           // always a string
  const found = tools.filter(function (b) { return b.materials.includes(picked); });

  resultsList.innerHTML = "";                 // clear old results
  found.forEach(function (b) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "tool.html?id=" + b.id;          // link to the entry page
    a.textContent = b.title;
    li.appendChild(a);
    resultsList.appendChild(li);
  });
});