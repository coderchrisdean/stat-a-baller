
// fetch('https://www.balldontlie.io/api/v1/players/237')
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//     fetch('https://www.balldontlie.io/api/v1/season_averages?player_ids[1-500]')
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// document.querySelector("#demo_star_player_1").addEventListener("click", ()=>{
// 	document.querySelector("#display_player-1").classList.remove("is-hidden");
// });

// ----------- ⬇ mx: divider ⬇ -----------
// ----------- mx: home page - option player list variables -----------
const dropdownBtn = document.querySelector("#dropdown-btn");
const dropdownList = document.querySelector("#dropdown-list");
const gswTeam = document.querySelector("#gsw");
const lacTeam = document.querySelector("#lac");
const lalTeam = document.querySelector("#lal");
const skTeam = document.querySelector("#sk");
var teamArr = [gswTeam, lacTeam, lalTeam, skTeam];
// ----------- mx: home page - modal variables -----------
const modalDiv = document.querySelector("#modal-option-player-div");
const modalConfirmBtn = document.querySelector("#modal-confirm-btn");
const modalDeleteBtn = document.querySelector("#modal-delete-btn");
const modalLi1 = document.querySelector("#modal-li-1");
const modalLi2 = document.querySelector("#modal-li-2");
const modalLi3 = document.querySelector("#modal-li-3");
var modalLiArr = [modalLi1, modalLi2, modalLi3];

// ----------- mx: home page - option player list functions -----------
// dropdownBtn.addEventListener("click", (e) => {
//   e.stopPropagation();
//   dropdownList.classList.toggle("is-active");
// });

teamArr.forEach((team) => {
  team.addEventListener("click", (e) => {
    e.stopPropagation();
    modalDiv.classList.add("is-active");
  });
});

// ----------- mx: home page - modal functions -----------
modalDeleteBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  modalDiv.classList.remove("is-active");
});

modalLiArr.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.stopPropagation();
    window.location.href = "./option_player_page.html";
  });
});

// ----------- mx: search input & modal alert -----------
// var userInput = document.querySelector("#user-input");
function getUserInput() {
  return document.querySelector("#user-input").value.trim().toLowerCase();
}
var searchBtn = document.querySelector("#user-input-search-btn");
var modalAlert = document.querySelector("#modal-alert");
var modalAlertCloseBtn = document.querySelector("#modal-alert-close-btn");
var searchedPlayer = [];

// ----------- mx: search input functions -----------
searchBtn.addEventListener("click", (e) => {
  console.log("hello1 " + getUserInput()); // no user input value
  e.stopPropagation();
// ------ 待增加条件 -------
  if (getUserInput() === "") {
    // || userInput === null 待验证
    modalAlert.classList.add("is-active");
  } else {
    modalAlert.classList.remove("is-active");
    // ----------- mx: save searched result to local storage -----------
    searchedPlayer.push(getUserInput());
    localStorage.setItem("userSearchPlayer", JSON.stringify(searchedPlayer));
    console.log("this is" + searchedPlayer);
    searchPlayerID(getUserInput());
  }
  // return
});

// ----------- mx: fetch from api -----------
// 需要fetch两次
// 第一次fetch是为了获取球员的id，通过user input
// 第二次fetch是为了获取球员的详细信息，通过id
// 获取的信息display在option_player_page.html上
// from balldontlie api
function searchPlayerID(userInput) {
  // var testPlayer = "Stephen Curry";
  var queryURL = `https://www.balldontlie.io/api/v1/players?search=${userInput}`;
  //?seasons[]=2018&seasons[]=2015&player_ids[]=1&player_ids[]=2&postseason=true
  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      var playerID = data.data[0].id;
      console.log(playerID);
      searchPlayerStats(playerID);
    })
    .catch((error) => {
      console.error(error);
    });
}
// use player id fetch again to get player stats
function searchPlayerStats(playerID) {
  //console.log(98);
  var playerIDs = [playerID];
  var queryURL = ` https://www.balldontlie.io/api/v1/stats?player_ids[]=${playerIDs}`;
  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
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
      var fetchPlayerName2016 =
        data.data[0].player.first_name + " " + data.data[0].player.last_name;
      var fetchTeamName2016 = data.data[0].team.full_name;
      var fetchSeason2016 = data.data[0].game.date;
      var fetchPoints2016 = data.data[0].pts;
      var fetchRebounds2016 = data.data[0].reb;
      var fetchSteals2016 = data.data[0].stl;
      var fetchAssists2016 = data.data[0].ast;
      // console.log(
      //   "2016: " + fetchSeason2016,
      //   fetchPlayerName2016,
      //   fetchTeamName2016,
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

//----------------------------------------H.Than: StarPlayers Section Start---------------------------------//

var player_Giannis = document.querySelector("#btnGA");
var player_Nikola = document.querySelector("#btnNJ");
var player_Lebron = document.querySelector("#btnLJ");
var player_Steph = document.querySelector("#btnSC");

// var player_Giannis = document.querySelector("#btnGA");
// console.log(player_Giannis);

player_Giannis.addEventListener("click", function (e) {        
  localStorage.setItem("currentPlayer", "Giannis_ID");
  window.location.href = "starPlayerPge.html";  
});

player_Nikola.addEventListener("click", function (e) {        
  localStorage.setItem("currentPlayer", "Nikola_ID");
  window.location.href = "starPlayerPge.html";  
});

player_Lebron.addEventListener("click", function (e) {        
  localStorage.setItem("currentPlayer", "Lebron_ID");
  window.location.href = "starPlayerPge.html";  
});

player_Steph.addEventListener("click", function (e) {        
  localStorage.setItem("currentPlayer", "Steph_ID");
  window.location.href = "starPlayerPge.html";  
});
//----------------------------------------H.Than: StarPlayers Section End---------------------------------//
