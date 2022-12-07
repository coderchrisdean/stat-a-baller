// finds the searchForPlayer section
var searchForPlayerEl = document.getElementById("searchForPlayer");
var btnGetStarted = document.getElementById("btnGetStarted");

var showSearch = btnGetStarted.addEventListener("click", show);

function show() {
  searchForPlayerEl.classList.remove("section is-hidden");
  searchForPlayerEl.classList.add("section");
  console.log("success");
}


