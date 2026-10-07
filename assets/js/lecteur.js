/* Lecteur vidéo personnalisé */
(function () {
  "use strict";
  const player = document.getElementById("player");
  if (!player) return;

  const video = player.querySelector("video");
  const bar = player.querySelector(".player__bar");
  const juice = player.querySelector(".player__juice");
  const time = player.querySelector(".player__time");
  const playBtn = player.querySelector('[data-action="play"]');
  const playImg = playBtn.querySelector("img");
  const muteBtn = player.querySelector('[data-action="mute"]');
  const volume = player.querySelector('[data-action="volume"]');
  const fsBtn = player.querySelector('[data-action="fullscreen"]');

  const fmt = (s) => {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    return m + ":" + String(Math.floor(s % 60)).padStart(2, "0");
  };

  function syncPlayState() {
    const paused = video.paused;
    player.classList.toggle("is-paused", paused);
    playImg.src = paused ? "assets/img/play.svg" : "assets/img/pause.svg";
    playBtn.setAttribute("aria-label", paused ? "Lecture" : "Pause");
  }
  function togglePlay() { video.paused ? video.play() : video.pause(); }

  playBtn.addEventListener("click", togglePlay);
  video.addEventListener("click", togglePlay);
  video.addEventListener("play", syncPlayState);
  video.addEventListener("pause", syncPlayState);
  video.addEventListener("ended", syncPlayState);
  syncPlayState();

  function updateProgress() {
    const ratio = video.duration ? video.currentTime / video.duration : 0;
    juice.style.width = ratio * 100 + "%";
    bar.setAttribute("aria-valuenow", Math.round(ratio * 100));
    time.textContent = fmt(video.currentTime) + " / " + fmt(video.duration);
  }
  video.addEventListener("timeupdate", updateProgress);
  video.addEventListener("loadedmetadata", updateProgress);

  // Clic sur la barre : la taille est relue à chaque clic (redimensionnement pris en compte)
  bar.addEventListener("click", (e) => {
    const rect = bar.getBoundingClientRect();
    if (video.duration) video.currentTime = video.duration * ((e.clientX - rect.left) / rect.width);
  });
  // Clavier : flèches gauche / droite = ±5 s
  bar.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") video.currentTime = Math.min(video.duration || 0, video.currentTime + 5);
    if (e.key === "ArrowLeft") video.currentTime = Math.max(0, video.currentTime - 5);
  });

  video.volume = volume.value / 100;
  volume.addEventListener("input", () => {
    video.volume = volume.value / 100;
    if (video.muted && video.volume > 0) { video.muted = false; muteBtn.textContent = "Couper le son"; }
  });
  muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? "Rétablir le son" : "Couper le son";
  });

  function fullscreen() {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (player.requestFullscreen) player.requestFullscreen();
    else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen(); // iPhone
  }
  fsBtn.addEventListener("click", fullscreen);
  video.addEventListener("dblclick", fullscreen);
})();
