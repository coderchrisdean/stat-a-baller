// finds the searchForPlayer section
var searchForPlayerEl = document.getElementById("searchForPlayer");
var btnGetStarted = document.getElementById("btnGetStarted");
var showSearch = btnGetStarted.addEventListener("click", show);

function show() {
  searchForPlayerEl.classList.remove("section is-hidden");
  searchForPlayerEl.classList.add("section");
  console.log("success");
}





// When click on player image on home page, dynamically manipulate DOM to 
// ** refer to star player page for each player ** --> go to starplayer page 
// with selected player and profile information.
// Profile Stats to include:
// Height, Weight, 