const music = document.getElementById("lohriMusic");
const overlay = document.getElementById("overlay");
const fromBox = document.getElementById("fromBox");

let isMuted = false;

/* 🔥 START LOHRI (MUSIC) */
function startLohri() {
  music.play().catch(() => {});
  overlay.style.display = "none";
}

/* 🔊 TOGGLE MUSIC */
function toggleMusic() {
  isMuted = !isMuted;
  music.muted = isMuted;
  document.querySelector(".mute").innerText = isMuted ? "🔇" : "🔊";
}

/* 🔗 READ URL PARAM (SENDER NAME) */
const params = new URLSearchParams(window.location.search);
const sender = params.get("from");

/* 🎉 SHOW SENDER MESSAGE */
if (sender) {
  fromBox.innerHTML = `
    🎉  
    <strong>${decodeURIComponent(sender)}</strong> ਵੱਲੋਂ  
    ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪੂਰੇ ਪਰਿਵਾਰ ਨੂੰ  
    ਲੋਹੜੀ ਦੀਆਂ ਲੱਖ ਲੱਖ ਵਧਾਈਆਂ 🙏🔥  
    <br><br>
    ਹੇਠਾਂ ਆਪਣਾ ਨਾਮ ਲਿਖੋ  
    ਅਤੇ ਇਹ ਖੁਸ਼ੀ ਅੱਗੇ ਸਾਂਝੀ ਕਰੋ 💛  
    🎉
  `;
}

/* 🔗 GENERATE LINK */
function generateLink() {
  const name = document.getElementById("nameInput").value.trim();

  if (!name) {
    alert("ਕਿਰਪਾ ਕਰਕੇ ਪਹਿਲਾਂ ਆਪਣਾ ਨਾਮ ਲਿਖੋ 🙂");
    return;
  }

  const link =
    window.location.origin +
    window.location.pathname +
    "?from=" +
    encodeURIComponent(name);

  navigator.clipboard.writeText(link);

  alert("ਲਿੰਕ ਕਾਪੀ ਹੋ ਗਿਆ 🔥 ਹੁਣ WhatsApp ‘ਤੇ ਸਾਂਝਾ ਕਰੋ");
}

/* 📲 SHARE ON WHATSAPP */
function shareWhatsApp() {
  const name = document.getElementById("nameInput").value.trim();

  if (!name) {
    alert("ਕਿਰਪਾ ਕਰਕੇ ਪਹਿਲਾਂ ਆਪਣਾ ਨਾਮ ਲਿਖੋ 🙂");
    return;
  }

  const link =
    window.location.origin +
    window.location.pathname +
    "?from=" +
    encodeURIComponent(name);

  const message =
    "🔥 ਲੋਹੜੀ ਦੀਆਂ ਲੱਖ ਲੱਖ ਵਧਾਈਆਂ 🔥\n\n" +
    "ਮੈਂ ਤੁਹਾਡੇ ਲਈ ਇੱਕ ਖਾਸ ਲੋਹੜੀ ਸੰਦੇਸ਼ ਤਿਆਰ ਕੀਤਾ ਹੈ 🎉\n" +
    "ਹੇਠਾਂ ਦਿੱਤਾ ਲਿੰਕ ਖੋਲ੍ਹੋ 👇\n\n" +
    link;

  window.open(
    "https://wa.me/?text=" + encodeURIComponent(message),
    "_blank"
  );
}
