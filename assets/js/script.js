// ----------- ⬇ mx: divider ⬇ -----------
var searchedPlayer = {
  playerName: "",
  team: "",
  // 2019
  season2019: "",
  points2019: "",
  rebounds2019: "",
  steals2019: "",
  assists2019: "",
  // 2018
  season2018: "",
  points2018: "",
  rebounds2018: "",
  steals2018: "",
  assists2018: "",
  // 2017
  season2017: "",
  points2017: "",
  rebounds2017: "",
  steals2017: "",
  assists2017: "",
  // 2016
  season2016: "",
  points2016: "",
  rebounds2016: "",
  steals2016: "",
  assists2016: "",
};

// ----------- mx: search input & modal alert -----------
function getUserInput() {
  return document.querySelector("#user-input").value.trim().toLowerCase();
}
var searchBtn = document.querySelector("#user-input-search-btn");
var modalAlert = document.querySelector("#modal-alert");
var modalAlertCloseBtn = document.querySelector("#modal-alert-close-btn");

// ----------- mx: search input functions -----------
searchBtn.addEventListener("click", (e) => {
  // console.log("hello1 " + getUserInput());
  e.stopPropagation();
  if (getUserInput() === "") {
    modalAlert.classList.add("is-active");
  } else {
    modalAlert.classList.remove("is-active");
    searchPlayerID(getUserInput());
  }
});

// ----------- mx: fetch from api -----------
// first fetch is to get player id by user input
function searchPlayerID(userInput) {
  // var testPlayer = "Stephen Curry";
  var queryURL = `https://www.balldontlie.io/api/v1/players?search=${userInput}`;
  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      var playerID = data.data[0].id;
      console.log(playerID);
      // pass playerID to searchPlayerStats function
      searchPlayerStats2019(playerID);
    })
    .catch((error) => {
      // console.error(error);
      if (error.name === "TypeError") {
        console.log("72 " + error);
        modalAlert.classList.add("is-active");
      }
    });
}
// use player id fetch again to get player stats
// for 2019 season
function searchPlayerStats2019(playerID) {
  var playerIDs = [playerID];
  var queryURL = ` https://www.balldontlie.io/api/v1/stats?seasons[]=2019&player_ids[]=${playerIDs}`;
  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      if (data.data.length === 0) {
        modalAlert.classList.add("is-active");
      }
      // get data for: player name, team, points, rebounds, steals,assists
      var fetchPlayerName2019 =
        data.data[0].player.first_name + " " + data.data[0].player.last_name;
      var fetchTeamName2019 = data.data[0].team.full_name;
      var fetchSeason2019 = data.data[0].game.date;
      var fetchPoints2019 = data.data[1].pts;
      var fetchRebounds2019 = data.data[1].reb;
      var fetchSteals2019 = data.data[1].stl;
      var fetchAssists2019 = data.data[1].ast;
      // console.log(
      //   "2019: " + fetchSeason2019,
      //   fetchPoints2019,
      //   fetchRebounds2019,
      //   fetchSteals2019,
      //   fetchAssists2019
      // );
      // save data to searchedPlayer object
      searchedPlayer.playerName = fetchPlayerName2019;
      searchedPlayer.team = fetchTeamName2019;
      searchedPlayer.season2019 = fetchSeason2019;
      searchedPlayer.points2019 = fetchPoints2019;
      searchedPlayer.rebounds2019 = fetchRebounds2019;
      searchedPlayer.steals2019 = fetchSteals2019;
      searchedPlayer.assists2019 = fetchAssists2019;

      // check the value
      console.log("line 1" + JSON.stringify(searchedPlayer));
      searchPlayerStats2018(playerID);
    })
    .catch((error) => {
      console.error(error);
      if (error.name === "TypeError") {
        modalAlert.classList.add("is-active");
      }
    });
}

// for 2018 season
function searchPlayerStats2018(playerID) {
  var playerIDs = [playerID];
  var queryURL = ` https://www.balldontlie.io/api/v1/stats?seasons[]=2018&player_ids[]=${playerIDs}`;
  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
      //  console.log(data);
      if (data.data.length === 0) {
        modalAlert.classList.add("is-active");
      }
      // get data for: player name, team, points, rebounds, steals,assists
      //var fetchPlayerName2018 =
      data.data[0].player.first_name + " " + data.data[0].player.last_name;
      var fetchSeason2018 = data.data[18].game.date;
      var fetchPoints2018 = data.data[18].pts;
      var fetchRebounds2018 = data.data[18].reb;
      var fetchSteals2018 = data.data[18].stl;
      var fetchAssists2018 = data.data[18].ast;
      // console.log(
      //   "2018: " + fetchSeason2018,
      //   fetchPoints2018,
      //   fetchRebounds2018,
      //   fetchSteals2018,
      //   fetchAssists2018
      // );
      // save data to searchedPlayer object
      searchedPlayer.season2018 = fetchSeason2018;
      searchedPlayer.points2018 = fetchPoints2018;
      searchedPlayer.rebounds2018 = fetchRebounds2018;
      searchedPlayer.steals2018 = fetchSteals2018;
      searchedPlayer.assists2018 = fetchAssists2018;
      // check the value
      console.log("line 2" + JSON.stringify(searchedPlayer));
      searchPlayerStats2017(playerID);
    })
    .catch((error) => {
      console.error(error);
      if (error.name === "TypeError") {
        modalAlert.classList.add("is-active");
      }
    });
}

// for 2017 season
function searchPlayerStats2017(playerID) {
  var playerIDs = [playerID];
  var queryURL = ` https://www.balldontlie.io/api/v1/stats?seasons[]=2017&player_ids[]=${playerIDs}`;
  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
      //  console.log(data);
      if (data.data.length === 0) {
        modalAlert.classList.add("is-active");
      }
      // get data for: player name, team, points, rebounds, steals,assists
      var fetchSeason2017 = data.data[0].game.date;
      var fetchPoints2017 = data.data[0].pts;
      var fetchRebounds2017 = data.data[0].reb;
      var fetchSteals2017 = data.data[0].stl;
      var fetchAssists2017 = data.data[0].ast;
      // console.log(
      //   "2017: " + fetchSeason2017,
      //   fetchPoints2017,
      //   fetchRebounds2017,
      //   fetchSteals2017,
      //   fetchAssists2017
      // );
      // save data to searchedPlayer object
      searchedPlayer.season2017 = fetchSeason2017;
      searchedPlayer.points2017 = fetchPoints2017;
      searchedPlayer.rebounds2017 = fetchRebounds2017;
      searchedPlayer.steals2017 = fetchSteals2017;
      searchedPlayer.assists2017 = fetchAssists2017;
      // check the value
      console.log("line 3" + JSON.stringify(searchedPlayer));
      searchPlayerStats2016(playerID);
    })
    .catch((error) => {
      console.error(error);
      if (error.name === "TypeError") {
        modalAlert.classList.add("is-active");
      }
    });
}

// for 2016 season
function searchPlayerStats2016(playerID) {
  var playerIDs = [playerID];
  var queryURL = ` https://www.balldontlie.io/api/v1/stats?seasons[]=2016&player_ids[]=${playerIDs}`;
  fetch(queryURL) //use a return will create a promise, blocking
    .then((response) => response.json())
    .then((data) => {
      //  console.log(data);
      if (data.data.length === 0) {
        modalAlert.classList.add("is-active");
      }
      // get data for: player name, team, points, rebounds, steals,assists
      var fetchSeason2016 = data.data[0].game.date;
      var fetchPoints2016 = data.data[0].pts;
      var fetchRebounds2016 = data.data[0].reb;
      var fetchSteals2016 = data.data[0].stl;
      var fetchAssists2016 = data.data[0].ast;
      // console.log(
      //   "2016: " + fetchSeason2016,
      //   fetchPoints2016,
      //   fetchRebounds2016,
      //   fetchSteals2016,
      //   fetchAssists2016
      // );
      // save data to searchedPlayer object
      searchedPlayer.season2016 = fetchSeason2016;
      searchedPlayer.points2016 = fetchPoints2016;
      searchedPlayer.rebounds2016 = fetchRebounds2016;
      searchedPlayer.steals2016 = fetchSteals2016;
      searchedPlayer.assists2016 = fetchAssists2016;
      // check the value
      console.log("line 4" + JSON.stringify(searchedPlayer));
      saveSearchedPlayer();
    })
    .catch((error) => {
      console.error(error);
      if (error.name === "TypeError") {
        modalAlert.classList.add("is-active");
      }
    });
}

modalAlertCloseBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  modalAlert.classList.remove("is-active");
});

// ----------- mx: save searched result to local storage -----------
function saveSearchedPlayer() {
  // console.log("this is " + JSON.stringify(searchedPlayer));
  localStorage.setItem("userSearchPlayer", JSON.stringify(searchedPlayer));
  window.location.href = "option_player_page.html";
}
// ----------- ⬆ mx: divider ⬆ -----------

var player_Giannis = document.querySelector("#btnGA");
var player_Nikola = document.querySelector("#btnNJ");
var player_Lebron = document.querySelector("#btnLJ");
var player_Steph = document.querySelector("#btnSC");
var playerBtnsArr = [player_Giannis, player_Lebron, player_Nikola, player_Steph];

// ----------- mx: save static homepage player to local storage so we can grab image on other page-----------
function saveStaticImagePlayerClickToLocalStorage(inputPlayer) {
  localStorage.setItem("userSearchPlayer", JSON.stringify(inputPlayer));
}

// function that handles sending user to starPlayerPage
playerBtnsArr.forEach(button => {
  button.addEventListener('click', e => { 
    // get each button's value
    var playerName = button.textContent;

    // set name to local storage so image can be grabbed from local storage
    saveStaticImagePlayerClickToLocalStorage(playerName);

    // go to starPage
    window.location.href = "starPlayerPge.html";
   });
});