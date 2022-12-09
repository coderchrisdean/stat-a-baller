// ----------- ⬇ mx: divider ⬇ -----------
function getSeasonDate (season){
    const dateArr = season.split("T");
    const date = dateArr[0];
    return date
  }
// ----------- mx: get searched result from local storage -----------
// player info
var playerName = document.getElementById("option-player-name");
console.log(playerName);
var playerTeam = document.getElementById("option-player-team");
// 2019 stats
var season2019 = document.getElementById("2019-season");
var points2019 = document.getElementById("2019-points");
var rebounds2019 = document.getElementById("2019-rebounds");
var steals2019 = document.getElementById("2019-steals");
var assists2019 = document.getElementById("2019-assists");
// 2018 stats
var season2018 = document.getElementById("2018-season");
var points2018 = document.getElementById("2018-points");
var rebounds2018 = document.getElementById("2018-rebounds");
var steals2018 = document.getElementById("2018-steals");
var assists2018 = document.getElementById("2018-assists");
// 2017 stats
var season2017 = document.getElementById("2017-season");
var points2017 = document.getElementById("2017-points");
var rebounds2017 = document.getElementById("2017-rebounds");
var steals2017 = document.getElementById("2017-steals");
var assists2017 = document.getElementById("2017-assists");
// 2016 stats
var season2016 = document.getElementById("2016-season");
var points2016 = document.getElementById("2016-points");
var rebounds2016 = document.getElementById("2016-rebounds");
var steals2016 = document.getElementById("2016-steals");
var assists2016 = document.getElementById("2016-assists");


// ----------- mx: get user searched player from local storage -----------
var userSearchPlayer = JSON.parse(localStorage.getItem("userSearchPlayer"));

window.addEventListener("load", displaySearchedPlayer);

// get stats and display on option_player_page.html
function displaySearchedPlayer(searchedPlayer) {
// console.log("display page " + JSON.stringify(searchedPlayer));
// console.log(userSearchPlayer.playerName);
playerName.innerHTML =  userSearchPlayer.playerName;
playerTeam.innerHTML =  userSearchPlayer.team;
// 2019
season2019.innerHTML =  getSeasonDate(userSearchPlayer.season2019);
points2019.innerHTML =  userSearchPlayer.points2019;
rebounds2019.innerHTML =  userSearchPlayer.rebounds2019;
steals2019.innerHTML =  userSearchPlayer.steals2019;
assists2019.innerHTML =  userSearchPlayer.assists2019;
// 2018
season2018.innerHTML =  getSeasonDate(userSearchPlayer.season2018);
points2018.innerHTML =  userSearchPlayer.points2018;
rebounds2018.innerHTML =  userSearchPlayer.rebounds2018;
steals2018.innerHTML =  userSearchPlayer.steals2018;
assists2018.innerHTML =  userSearchPlayer.assists2018;
// 2017
season2017.innerHTML =  getSeasonDate(userSearchPlayer.season2017);
points2017.innerHTML =  userSearchPlayer.points2017;
rebounds2017.innerHTML =  userSearchPlayer.rebounds2017;
steals2017.innerHTML =  userSearchPlayer.steals2017;
assists2017.innerHTML =  userSearchPlayer.assists2017;
// 2016
season2016.innerHTML =  getSeasonDate(userSearchPlayer.season2016);
points2016.innerHTML =  userSearchPlayer.points2016;
rebounds2016.innerHTML =  userSearchPlayer.rebounds2016;
steals2016.innerHTML =  userSearchPlayer.steals2016;
assists2016.innerHTML =  userSearchPlayer.assists2016;
}

// ----------- ⬆ mx: divider ⬆ -----------
