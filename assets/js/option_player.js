// ----------- ⬇ mx: divider ⬇ -----------
// player info
var playerName = document.getElementById("option-player-name");
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
// get stats and display on option_player_page.html



// ----------- ⬆ mx: divider ⬆ -----------