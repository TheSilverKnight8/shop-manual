const list = document.getElementById("toolList");

const sorted = tools.slice().sort(function (a, b) {
  return a.name.localeCompare(b.name);
});

sorted.forEach(function (t) {
  const li = document.createElement("li");
  const a = document.createElement("a");
    a.href = "tool.html?id=" + t.id;
    a.textContent = t.name;
    li.appendChild(a);
    list.appendChild(li);
});