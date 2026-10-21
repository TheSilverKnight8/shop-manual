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

const header = document.createElement("header");

const logo = document.createElement("img");
logo.src = "images/logo.png";
logo.alt = "Croswell Industries: Making Your Life Easier";   // describes the image for screen readers

header.appendChild(logo);
header.appendChild(nav);
document.body.prepend(header);