let randomVideo = document.getElementById("random-video");
let videoArt = document.getElementById("video-art");

let videoDB = [
  "https://www.youtube.com/embed/42cfKE3OCfA",
  "https://www.youtube.com/embed/StcsY3ZD380",
];

function chooseVideo() {
  let randomNumber = Math.floor(Math.random() * videoDB.length);
  let videoScreening = videoDB[randomNumber];
  videoArt.innerHTML = `<iframe width="560" height="315" src="${videoScreening}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}

randomVideo.addEventListener("click", function () {
  chooseVideo();
});

chooseVideo();
