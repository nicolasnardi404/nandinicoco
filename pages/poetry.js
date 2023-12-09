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
    </li>`;
  } else if (language === "en") {
    content.innerHTML = `<ul>
    <li> 
        <a class = "small-font" href="./poetry/en/art-flesh.html">art flesh market</a> 
    </li>
    <li> 
        <a href="./poetry/en/jesus.html">jesus</a> 
    </li>`;
  }
}

languageID.addEventListener("change", function () {
  updateContent(this);
});

updateContent(languageID);
