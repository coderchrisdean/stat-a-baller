// finds the searchForPlayer section
var searchForPlayerEl = document.getElementById("searchForPlayer");
var btnGetStarted = document.getElementById("btnGetStarted");

var showSearch = btnGetStarted.addEventListener("click", show);

function show() {
  searchForPlayerEl.classList.remove("section is-hidden");
  searchForPlayerEl.classList.add("section");
  console.log("success");
}


// const show = document.getElementById("element-id").classList.add("is-hidden");

// {

// hideSearchButton ()
// {
//     var searchButton = document.getElementById("searchBtn");
//     searchButton.classList.add("is-hidden");
// }

//   showSearchButton ()
//   {
//     var searchForPlayerElement = document.getElementById("searchForPlayer");
//     searchForPlayerElement.classList.remove(" is-hidden");
//   }
// }
