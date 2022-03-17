var counter = 0;
document.getElementById("button").addEventListener("click", function addone() {
  updateDisplay(++counter);
});
document.getElementById("reset").addEventListener("click", function reset() {
  counter = 0;
  updateDisplay(counter);
});
function updateDisplay(val) {
  document.getElementById("count").innerHTML = val;
}
