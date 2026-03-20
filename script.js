const startDate = new Date("2025-12-21T00:00:00");

function updateTimer() {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let tempDate = new Date(startDate);

  tempDate.setFullYear(startDate.getFullYear() + years);

  if (tempDate > now) {
    years--;
    tempDate.setFullYear(startDate.getFullYear() + years);
  }

  let diff = now - tempDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);

  const seconds = Math.floor(diff / 1000);

  document.getElementById("years").textContent = String(years).padStart(2, '0');

  // ✅ FIXED: no padStart for days
  document.getElementById("days").textContent = days;

  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

setInterval(updateTimer, 1000);
updateTimer();
