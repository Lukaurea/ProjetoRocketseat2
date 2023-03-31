/*function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
}*/

function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");
  }
  
  const toggleModeBtn = document.getElementById("toggle-mode-btn");
  toggleModeBtn.addEventListener("click", toggleMode);
  