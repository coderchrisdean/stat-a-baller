
// fetch('https://www.balldontlie.io/api/v1/players/237')
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//     fetch('https://www.balldontlie.io/api/v1/season_averages?player_ids[1-500]')
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
var statSet = document.querySelector("#star-stats");
var lebronStar= document.querySelector("#demo_star_player_1")
var giannisStar= document.querySelector("#demo_star_player_2")
var stephStar= document.querySelector("#demo_star_player_3")
var nikolaStar= document.querySelector("#demo_star_player_4")
var getLebron= function(){
    console.log("clicked");
    getPlayerId("Lebron James")
    console.log("clicked2");
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
                alert('Unable to connect to GitHub');
            });

}


// getPlayerId("lebron")
lebronStar.addEventListener('click', getLebron);

// ----------- home page: hide card -----------
document.querySelector("#lebron-james").style.display = "none";
