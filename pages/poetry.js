const languageID = document.getElementById("language");
var content = document.getElementById("content");

function updateContent(element) {
  var language = element.value;

  if (language === "pt") {
    content.innerHTML = `<ul>
    <li> 
        <a href="./poetry/pt/mae.html">mae</a> 
    </li>
    <li> 
        <a class="small-font" href="./poetry/pt/amor-erro.html">o amor eh um erro</a> 
    </li>
    <li> 
        <a href="./poetry/pt/copia.html">copia</a> 
    </li>
    <li> 
        <a class="small-font" href="./poetry/pt/falar-de-amor.html">pra falar de amor</a> 
    </li>
    <li> 
      <a href="./poetry/pt/cogumelos.html">cogumelos</a> 
    </li>
    <li> 
    <a class="small-font" href="./poetry/pt/o-que.html">o que que eu sou</a> 
    </li>
    <li> 
        <a href="./poetry/pt/agrotoxico.html">agrotoxico</a> 
    </li>
    <li> 
        <a class="small-font" href="./poetry/pt/morre-humano.html">morre o ser humano</a> 
    </li>
    <li> 
      <a href="./poetry/pt/presidente.html">presidente</a> 
    </li>
    <li> 
        <a class="small-font" href="./poetry/pt/viver-uma-ideia.html">viver eh uma ideia</a> 
    </li>
    <li> 
        <a href="./poetry/pt/poeta.html">poeta</a> 
    </li>
    <li> 
        <a class="small-font" href="./poetry/pt/jesus.html">e se jesus voltasse</a> 
    </li>`;
  } else if (language === "en") {
    content.innerHTML = `<ul>
    <li> 
        <a class = "small-font" href="./poetry/en/art-flesh.html">art flesh market</a> 
    </li>
    <li> 
        <a href="./poetry/en/jesus.html">jesus</a> 
    </li>
    <li> 
        <a class = "small-font" href="./poetry/en/life-perfomance.html">life is a perfomance</a> 
    </li>
    <li> 
        <a href="./poetry/en/mom.html">mom</a> 
    </li>
    <li> 
        <a class = "small-font" href="./poetry/en/talk-about-love.html">to talk about love</a> 
    </li>
    <li> 
        <a href="./poetry/en/mushrooms.html">mushrooms</a> 
    </li>
    <li> 
        <a class = "small-font" href="./poetry/en/forget-the-heart.html">forget the heart outside the fridge</a> 
    </li>
    <li> 
        <a href="./poetry/en/poetry.html">poetry</a> 
    </li>
    <li> 
        <a class = "small-font" href="./poetry/en/notes.html">notes about artist funeral</a> 
    </li>
    <li> 
        <a href="./poetry/en/war.html">war is phallic</a> 
    </li>
    <li> 
        <a class = "small-font" href="./poetry/en/talk-about-love.html">to talk about love</a> 
    </li>
    <li> 
        <a href="./poetry/en/machine.html">machine</a> 
    </li>`;
  }
}

languageID.addEventListener("change", function () {
  updateContent(this);
});

updateContent(languageID);
