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
dropdownBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownList.classList.toggle("is-active");
});

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
  // console.log("hello1 " + getUserInput());
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
    // console.log("this is" + searchedPlayer);
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
  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      var playerID = data.data[0].id;
      console.log(playerID);
      // pass playerID to searchPlayerStats function
      searchPlayerStats2019(playerID);
      searchPlayerStats2018(playerID);
      searchPlayerStats2017(playerID);
      searchPlayerStats2016(playerID);
    })
    .catch((error) => {
      console.error(error);
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
      console.log(data);
      if (data.data.length === 0) {
        // ⚠️待修改，需添加有些球员没有当年的数据的情况但有其他年份的数据的时候
        modalAlert.classList.add("is-active");
      }
      // get data for: player name, team, points, rebounds, steals,assists
      var fetchPlayerName2019 =
        data.data[0].player.first_name + " " + data.data[0].player.last_name;
      var fetchTeamName2019 = data.data[0].team.full_name;
      var fetchPoints2019 = data.data[0].pts;
      var fetchRebounds2019 = data.data[1].reb;
      var fetchSteals2019 = data.data[1].stl;
      var fetchAssists2019 = data.data[1].ast;
      console.log(
        "2019: " + fetchPlayerName2019,
        fetchTeamName2019,
        fetchPoints2019,
        fetchRebounds2019,
        fetchSteals2019,
        fetchAssists2019
      );
    })
    .catch((error) => {
      console.error(error);
    });
}

// for 2018 season
function searchPlayerStats2018(playerID) {
  var playerIDs = [playerID];
  var queryURL = ` https://www.balldontlie.io/api/v1/stats?seasons[]=2018&player_ids[]=${playerIDs}`;
  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.data.length === 0) {
        // ⚠️待修改，需添加有些球员没有当年的数据的情况但有其他年份的数据的时候
        modalAlert.classList.add("is-active");
      }
      // get data for: player name, team, points, rebounds, steals,assists
      var fetchPlayerName2018 =
        data.data[0].player.first_name + " " + data.data[0].player.last_name;
      var fetchTeamName2018 = data.data[0].team.full_name;
      var fetchPoints2018 = data.data[0].pts;
      var fetchRebounds2018 = data.data[1].reb;
      var fetchSteals2018 = data.data[1].stl;
      var fetchAssists2018 = data.data[1].ast;
      console.log(
        "2018: " + fetchPlayerName2018,
        fetchTeamName2018,
        fetchPoints2018,
        fetchRebounds2018,
        fetchSteals2018,
        fetchAssists2018
      );
    })
    .catch((error) => {
      console.error(error);
    });
}

// for 2017 season
function searchPlayerStats2017(playerID) {
  var playerIDs = [playerID];
  var queryURL = ` https://www.balldontlie.io/api/v1/stats?seasons[]=2017&player_ids[]=${playerIDs}`;
  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.data.length === 0) {
        // ⚠️待修改，需添加有些球员没有当年的数据的情况但有其他年份的数据的时候
        modalAlert.classList.add("is-active");
      }
      // get data for: player name, team, points, rebounds, steals,assists
      var fetchPlayerName2017 =
        data.data[0].player.first_name + " " + data.data[0].player.last_name;
      var fetchTeamName2017 = data.data[0].team.full_name;
      var fetchPoints2017 = data.data[0].pts;
      var fetchRebounds2017 = data.data[1].reb;
      var fetchSteals2017 = data.data[1].stl;
      var fetchAssists2017 = data.data[1].ast;
      console.log(
        "2017: " + fetchPlayerName2017,
        fetchTeamName2017,
        fetchPoints2017,
        fetchRebounds2017,
        fetchSteals2017,
        fetchAssists2017
      );
    })
    .catch((error) => {
      console.error(error);
    });
}

// for 2016 season
function searchPlayerStats2016(playerID) {
  var playerIDs = [playerID];
  var queryURL = ` https://www.balldontlie.io/api/v1/stats?seasons[]=2016&player_ids[]=${playerIDs}`;
  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.data.length === 0) {
        // ⚠️待修改，需添加有些球员没有当年的数据的情况但有其他年份的数据的时候
        modalAlert.classList.add("is-active");
      }
      // get data for: player name, team, points, rebounds, steals,assists
      var fetchPlayerName2016 =
        data.data[0].player.first_name + " " + data.data[0].player.last_name;
      var fetchTeamName2016 = data.data[0].team.full_name;
      var fetchPoints2016 = data.data[0].pts;
      var fetchRebounds2016 = data.data[0].reb;
      var fetchSteals2016 = data.data[0].stl;
      var fetchAssists2016 = data.data[0].ast;
      console.log(
        "2016: " + fetchPlayerName2016,
        fetchTeamName2016,
        fetchPoints2016,
        fetchRebounds2016,
        fetchSteals2016,
        fetchAssists2016
      );
    })
    .catch((error) => {
      console.error(error);
    });
}

modalAlertCloseBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  modalAlert.classList.remove("is-active");
});

// ----------- ⬆ mx: divider ⬆ -----------
