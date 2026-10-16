const links = [
  { href: "index.html", text: "Home" },
  { href: "picker.html", text: "Picker" },
  { href: "directory.html", text: "Directory" }
];

const nav = document.createElement("nav");

links.forEach(function (l) {
  const a = document.createElement("a");
  a.href = l.href;
  a.textContent = l.text;
  nav.appendChild(a);
});

document.body.prepend(nav);