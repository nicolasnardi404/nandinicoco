const br = document.getElementById("brasil");
const en = document.getElementById("english");
const brPoem = document.getElementById("brasil-poem");
const enPoem = document.getElementById("english-poem");

br.addEventListener("click", function () {
  brPoem.style.display = "flex";
  enPoem.style.display = "none";
  br.classList.add("button-selected");
  en.classList.remove("button-selected");
});

en.addEventListener("click", function () {
  brPoem.style.display = "none";
  enPoem.style.display = "flex";
  en.classList.add("button-selected");
  br.classList.remove("button-selected");
});
