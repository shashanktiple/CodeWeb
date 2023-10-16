document.querySelector("#sports").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id") + " is active");

  if (e.target.matches("li")) {
    e.target.style.backgroundColor = "blue";
  }
});

document.getElementById("reset").addEventListener("click", () => {
  location.reload();
});
