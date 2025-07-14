  let is24Hour = true;

  function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = "";
    if (!is24Hour) {
      ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
    }

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`.trim();
    document.getElementById("time").innerText = timeString;
  }

  function updateDate() {
    let now = new Date();
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    document.getElementById("date").innerText = now.toLocaleDateString("en-US", options);
  }

  document.getElementById("formatToggle").addEventListener("click", function () {
    is24Hour = !is24Hour;
    this.innerText = is24Hour ? "Switch to 12-Hour" : "Switch to 24-Hour";
    updateTime();
  });

  document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

  setInterval(updateTime, 1000);
  updateTime();
  updateDate();
