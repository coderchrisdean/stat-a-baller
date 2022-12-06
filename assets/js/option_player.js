// ----------- ⬇ mx: divider ⬇ -----------
// player info
var playerName = document.getElementById("option-player-name");
var playerTeam = document.getElementById("option-player-team");
// 2018 stats
var points2018 = document.getElementById("2018-points");
var rebounds2018 = document.getElementById("2018-rebounds");
var steals2018 = document.getElementById("2018-steals");
var assists2018 = document.getElementById("2018-assists");
// 2017 stats
var points2017 = document.getElementById("2017-points");
var rebounds2017 = document.getElementById("2017-rebounds");
var steals2017 = document.getElementById("2017-steals");
var assists2017 = document.getElementById("2017-assists");
// 2016 stats
var points2016 = document.getElementById("2016-points");
var rebounds2016 = document.getElementById("2016-rebounds");
var steals2016 = document.getElementById("2016-steals");
var assists2016 = document.getElementById("2016-assists");
// 2015 stats
var points2015 = document.getElementById("2015-points");
var rebounds2015 = document.getElementById("2015-rebounds");
var steals2015 = document.getElementById("2015-steals");
var assists2015 = document.getElementById("2015-assists");

// ----------- mx: get user searched player from local storage -----------
var userSearchPlayer = JSON.parse(localStorage.getItem("userSearchPlayer"));
// get stats and display on option_player_page.html



// ----------- ⬆ mx: divider ⬆ -----------