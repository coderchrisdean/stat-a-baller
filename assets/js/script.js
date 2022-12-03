
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

// ----------- home page: option player/modal -----------
const dropdownBtn = document.querySelector("#dropdown-btn");
const dropdownList = document.querySelector("#dropdown-list");

dropdownBtn.addEventListener("click", (e) => {
	e.stopPropagation();
	dropdownList.classList.toggle("is-active");
});
