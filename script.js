/* =========================================================
   LOHRI INTERACTIVE WEBSITE - FINAL SCRIPT.JS
   ========================================================= */

/* ================= MUSIC CONTROL ================= */

const music = document.getElementById("lohriMusic");
const overlay = document.getElementById("overlay");
const muteBtn = document.querySelector(".mute");

let isMuted = false;

function startLohri() {
  if (music) {
    music.play().catch(() => {});
  }

  if (overlay) {
    overlay.style.animation = "fadeOut 1s forwards";
    setTimeout(() => {
      overlay.style.display = "none";
    }, 1000);
  }
}

function toggleMusic() {
  isMuted = !isMuted;
  if (music) music.muted = isMuted;
  if (muteBtn) muteBtn.innerText = isMuted ? "🔇" : "🔊";
}

/* ================= URL NAME (VIRAL LOOP) ================= */

const fromBox = document.getElementById("fromBox");
const params = new URLSearchParams(window.location.search);
const sender = params.get("from");

if (sender && fromBox) {
  fromBox.innerHTML = `
    🎉 <strong>${sender}</strong> ਵੱਲੋਂ  
    ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪੂਰੇ ਪਰਿਵਾਰ ਨੂੰ  
    ਲੋਹੜੀ ਦੀਆਂ ਲੱਖ ਲੱਖ ਵਧਾਈਆਂ 🙏🔥
  `;
}

/* ================= GENERATE SHARE LINK ================= */

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

/* ================= WHATSAPP SHARE ================= */

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
    "ਤੁਹਾਡੇ ਲਈ ਇੱਕ ਖਾਸ ਲੋਹੜੀ ਦਾ ਸੰਦੇਸ਼ 🎁\n" +
    "ਹੇਠਾਂ ਦਿੱਤਾ ਲਿੰਕ ਖੋਲ੍ਹੋ 👇\n\n" +
    link;

  window.open(
    "https://wa.me/?text=" + encodeURIComponent(message),
    "_blank"
  );
}

/* ================= FUN PREDICTION ================= */

const predictions = [
  "🔥 ਤੁਹਾਡੀ ਲੋਹੜੀ ਬਹੁਤ ਖੁਸ਼ੀਆਂ ਭਰੀ ਰਹੇਗੀ!",
  "💛 ਇਹ ਲੋਹੜੀ ਪਰਿਵਾਰ ਨਾਲ ਖਾਸ ਹੋਵੇਗੀ!",
  "🎉 ਦੋਸਤਾਂ ਨਾਲ ਧਮਾਕੇਦਾਰ ਲੋਹੜੀ ਮਨੇਗੀ!",
  "🙏 ਤੁਹਾਡੇ ਘਰ ਚ ਸੁਖ-ਸ਼ਾਂਤੀ ਆਵੇਗੀ!",
  "✨ ਨਵੀਂ ਸ਼ੁਰੂਆਤ ਅਤੇ ਚੰਗੀਆਂ ਖ਼ਬਰਾਂ ਮਿਲਣਗੀਆਂ!"
];

const predictBtn = document.querySelector(".secondary-btn");

if (predictBtn) {
  predictBtn.addEventListener("click", () => {
    const result =
      predictions[Math.floor(Math.random() * predictions.length)];
    alert(result);
  });
}

/* ================= LIVE MOMENT COUNTER ================= */

const countEl = document.getElementById("momentCount");

const COUNT_KEY = "lohriMomentCount";
const USER_DONE_KEY = "lohriUserSubmitted";

/* Starting believable number */
let baseCount = 12487;

/* Load saved count */
if (localStorage.getItem(COUNT_KEY)) {
  baseCount = parseInt(localStorage.getItem(COUNT_KEY), 10);
} else {
  localStorage.setItem(COUNT_KEY, baseCount);
}

/* Show count */
if (countEl) {
  countEl.innerText = baseCount.toLocaleString();
}

/* Increase count once per user */
function incrementMomentCount() {
  if (localStorage.getItem(USER_DONE_KEY)) return;

  baseCount += 1;
  localStorage.setItem(COUNT_KEY, baseCount);
  localStorage.setItem(USER_DONE_KEY, "yes");

  if (countEl) {
    countEl.innerText = baseCount.toLocaleString();

    countEl.classList.add("count-bump");
    setTimeout(() => {
      countEl.classList.remove("count-bump");
    }, 400);
  }
}

/* ================= GAME: LEAVE IT IN FIRE ================= */

function throwInFire() {
  const input = document.getElementById("fireThought");
  const result = document.getElementById("fireResult");

  if (!input || !result) return;

  const text = input.value.trim();

  if (!text) {
    alert("ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਗੱਲ ਲਿਖੋ ਜੋ ਤੁਸੀਂ ਛੱਡਣਾ ਚਾਹੁੰਦੇ ਹੋ 🙏");
    return;
  }

  /* Dissolve animation */
  input.classList.add("dissolve");

  const messages = [
    "🙏 ਅੱਜ ਤੁਸੀਂ ਦਿਲ ਹਲਕਾ ਕਰ ਲਿਆ — ਨਵੀਂ ਸ਼ੁਰੂਆਤ ਮੁਬਾਰਕ",
    "🔥 ਇਹ ਗੱਲ ਅੱਗ ਵਿੱਚ ਛੱਡ ਦਿੱਤੀ ਗਈ — ਸੁਖ ਤੇ ਸ਼ਾਂਤੀ ਆਵੇ",
    "✨ ਪੁਰਾਣੀ ਚਿੰਤਾ ਛੱਡ ਕੇ ਨਵੀਂ ਰੌਸ਼ਨੀ ਵੱਲ ਵਧੋ",
    "💛 ਲੋਹੜੀ ਦੀ ਅੱਗ ਨੇ ਤੁਹਾਡੀ ਗੱਲ ਸੰਭਾਲ ਲਈ",
    "🌙 ਮਨ ਹਲਕਾ ਹੋਇਆ — ਅੱਜ ਦੀ ਲੋਹੜੀ ਖਾਸ ਬਣ ਗਈ"
  ];

  const msg = messages[Math.floor(Math.random() * messages.length)];

  setTimeout(() => {
    input.value = "";
    input.classList.remove("dissolve");

    result.innerText = msg;
    result.classList.add("show");

    /* 🔥 COUNT THIS USER ACTION */
    incrementMomentCount();
  }, 1400);
}

/* ================= ONE-TIME SURPRISE ================= */

let surpriseShown = false;

function showSurprise() {
  if (surpriseShown) return;

  const box = document.getElementById("surpriseBox");
  if (!box) return;

  box.classList.add("show");
  surpriseShown = true;

  setTimeout(() => {
    box.classList.remove("show");
  }, 3000);
}

/* Trigger surprise on scroll */
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    showSurprise();
  }
});
