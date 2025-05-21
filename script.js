setInterval(() => {
  const now = new Date();
  const h = now.getHours().toString().padStart(2, "0");
  const m = now.getMinutes().toString().padStart(2, "0");
  const time = `${h}:${m}`;

  document.getElementById("clock").textContent = time;
}, 1000);
