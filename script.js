const music = document.getElementById("lohriMusic");
const overlay = document.getElementById("overlay");
const fromBox = document.getElementById("fromBox");

let isMuted = false;

/* START MUSIC */
function startLohri() {
  music.play();
  overlay.style.display = "none";
}

/* TOGGLE MUSIC */
function toggleMusic() {
  isMuted = !isMuted;
  music.muted = isMuted;
  document.querySelector(".mute").innerText = isMuted ? "🔇" : "🔊";
}

/* READ URL PARAM */
const params = new URLSearchParams(window.location.search);
const sender = params.get("from");

if (sender) {
  fromBox.innerText = `🎉 Happy Lohri from ${sender} 🎉`;
}

/* GENERATE LINK */
function generateLink() {
  const name = document.getElementById("nameInput").value.trim();
  if (!name) {
    alert("Naam likho pehla 🙂");
    return;
  }

  const link =
    window.location.origin +
    window.location.pathname +
    "?from=" +
    encodeURIComponent(name);

  navigator.clipboard.writeText(link);
  alert("Link copied! WhatsApp te share karo 🔥");
}

/* SHARE WHATSAPP */
function shareWhatsApp() {
  const name = document.getElementById("nameInput").value.trim();
  if (!name) {
    alert("Naam likho pehla 🙂");
    return;
  }

  const link =
    window.location.origin +
    window.location.pathname +
    "?from=" +
    encodeURIComponent(name);

  const message =
    "🔥 ਲੋਹੜੀ ਦੀਆਂ ਲੱਖ ਲੱਖ ਵਧਾਈਆਂ 🔥\n\n" +
    "ਤੁਹਾਡੇ ਲਈ ਇੱਕ ਖਾਸ ਲੋਹੜੀ ਸੰਦੇਸ਼ 🎉\n" +
    link;

  window.open(
    "https://wa.me/?text=" + encodeURIComponent(message),
    "_blank"
  );
}
