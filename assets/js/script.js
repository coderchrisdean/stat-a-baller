
// fetch('https://www.balldontlie.io/api/v1/players/237')
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//     fetch('https://www.balldontlie.io/api/v1/season_averages?player_ids[1-500]')
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


// ----------- home page: hide card -----------
// document.querySelector("#lebron-james").style.display = "none";

var displayPlayer1 = document.getElementById('display_player-1');
var displayLebronJames = document.getElementById('lebron-james');
var 
displayLebronJames.classList.add('is-hidden');
displayPlayer1.classList.add('is-hidden');

function showLebronJames ();{
    displayLebronJames.classList.add('is-hidden');

}

displayPlayer1.addEventListener('click', showLebronJames)

