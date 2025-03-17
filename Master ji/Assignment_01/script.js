document.addEventListener("DOMContentLoaded", () => {
  // dark and light mode
  const darkmode = document.getElementById("switch-Thems");
  const body = document.body;
  darkmode.addEventListener("click", () => {
    body.classList.toggle("darkMode");
  });
});
