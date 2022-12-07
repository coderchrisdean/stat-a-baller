const hide = function () {
    document.getElementById("element-id").classList.remove("is-hidden");
}

const show = document.getElementById("element-id").classList.add("is-hidden");


{

hideSearchButton () 
{
    var searchButton = document.getElementById("searchBtn");
    searchButton.classList.add("is-hidden");
}
 
  
  showSearchButton () 
  {
    var searchForPlayerElement = document.getElementById("searchForPlayer");
    searchForPlayerElement.classList.remove(" is-hidden");
  }
}
addEventListener();
  