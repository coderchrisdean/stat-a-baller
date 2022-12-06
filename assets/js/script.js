
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


// ----------- mx: fetch from api -----------
var allPlayersURL = "https://www.balldontlie.io/api/v1/players?search=lebron" 
fetch (allPlayersURL)
  .then((response) => response.json())
  .then((data) => {
	console.log(data);
	  });
	  // returns 25 arrays of players in "data" object by default

// ----------- ⬆ mx: divider ⬆ -----------



// Steph Curry Stats
var getSteph= function(){
    getPlayerId("Steph Curry")
}
var getPlayerId = function (playerName) {
    var playerId = "https://balldontlie.io/api/v1/players?search=" + playerName;

    // run search to fetch
    fetch(playerId)
        .then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {
                        // sends id to get the actual players stats
                        getPlayerStats(data.id)
                    });
                } else {
                    alert('Error: ' + response.statusText);
                }
            })
            .catch(function (error) {
                console.log('Unable to get stats');
            });
    }


const getPlayerStats = (id) => {
    let playerStats = "https://www.balldontlie.io/api/v1/season_averages?player_ids[]=" + id

    // fetch all of the players stats
    fetch(playerStats)
        .then(function (response) {
                if (response.ok) {
                    response.json().then(function (data) {

                });
                } else {
                    alert('Error: ' + response.statusText);
                }
            })
            .catch(function (error) {
                alert('Unable to get stats');
            });

}


// getPlayerId("lebron")
lebronStar.addEventListener('click', getSteph);

// ----------- home page: hide card -----------
document.querySelector("#steph-curry").style.display = "none";