function fillList(listId, items) {
  const ul = document.getElementById(listId);
  items.forEach(function (text) {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  });
}

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const tool = tools.find(function (t) { return t.id === id; });

if (!tool) {
  const error = document.getElementById("error");
  error.textContent = "This page does not exist. Going back.";
  error.hidden = false;
  document.getElementById("entry").hidden = true;

  setTimeout(function () {
    if (document.referrer) {
      history.back();
    } else {
      window.location.href = "index.html";
    }
  }, 3000);
} else {
  document.title = tool.name + " – Shop Manual";
  document.getElementById("name").textContent = tool.name;
  document.getElementById("summary").textContent = tool.summary;
  fillList("designedFor", tool.designedFor);
  fillList("notDesignedFor", tool.notDesignedFor);
  fillList("safety", tool.safety);
  fillList("operation", tool.operation);
}