// Player Characteristics Stats // Seth
var weight = document.getElementById("WEIGHT");
var position = document.getElementById("POSITION");
var height = document.getElementById("HEIGHT");
var team = document.getElementById("TEAM");

var getPlayerId = function (playerName) {
    console.log(playerName);
    var playerStats = `https://www.balldontlie.io/api/v1/players?search=${playerName}`;
    fetch(playerStats)
        .then((response) => response.json())
            .then((data) => {
                var playerID = data.data[0].id;
                console.log(playerID);
                // sends id to get the actual players stats
                getPlayerStats(playerID);
            })
        .catch((error) => {
            if (error.name === "TypeError") {
                console.log('Unable to get player ID');
            }
        });
    }
var getPlayerStats = (id) => {
    let playerStats = `https://www.balldontlie.io/api/v1/players/${id}`;
    console.log(playerStats);
    // fetch player by id
    fetch(playerStats)
        .then((response) => response.json())
            .then((data) => {
                // set html to our data
                position.innerHTML = data.position;
                console.log(position);
                height.innerHTML = data.height_feet + "'" + data.height_inches;
                team.innerHTML = data.team.full_name;
                weight.innerHTML = data.weight_pounds;
            })
        .catch((error) => {
            if (error.name === "TypeError") {
                console.log('Unable to get stats');
            }
        });
}