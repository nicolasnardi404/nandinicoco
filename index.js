const link = document.getElementById("link");

let pages = [
  "./pages/human.html",
  "./pages/error.html",
  "./pages/poetry.html",
  "./pages/cyborg.html",
  "./pages/reality.html",
  "./pages/poetry/pt/mae.html",
];

function callLink() {
  let randomNumber = Math.floor(Math.random() * pages.length);
  let pageLink = pages[randomNumber];
  link.href = pageLink;
  console.log("hello world");
}

link.addEventListener("click", function () {
  callLink();
});
