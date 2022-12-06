
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

// ----------- home page: hide card -----------
// chris -- may need to debug ⬇ ⬇ ⬇ ⬇ error in console ----
document.querySelector("#lebron-james").style.display = " is-hidden";

modalLiArr.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.stopPropagation();
    window.location.href = "./option_player_page.html";
  });
});


// ----------- ⬆ mx: divider ⬆ -----------




// ----------- mx: fetch from api -----------
var allPlayersURL = "https://www.balldontlie.io/api/v1/players?search=lebron" 
fetch (allPlayersURL)
  .then((response) => response.json())
  .then((data) => {
	console.log(data);
	  });
	  // returns 25 arrays of players in "data" object by default


// ----------- ⬆ mx: divider ⬆ -----------


modalAlertCloseBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  modalAlert.classList.remove("is-active");
});

// ----------- ⬆ mx: divider ⬆ -----------


