// Player Characteristics Stats // Seth
var weight = document.getElementById("WEIGHT");
var position = document.getElementById("POSITION");
var height = document.getElementById("HEIGHT");
var team = document.getElementById("TEAM");
let btnGA = document.getElementById("btnGA");
let firstName = document.getElementById("playerFirstName");
let lastName = document.getElementById("playerLastName");

// Grab player name from local storage
const getStoragePlayer = () => {
    // get player from storage 
    let storagePlayer = window.localStorage.getItem('userSearchPlayer');

    // player comes from storage as "name" this changes it to just name
    let noQuotations = storagePlayer.replace(/"([^"]+(?="))"/g, '$1')
    getPlayerId(noQuotations);
}

// get player name by clicking on the button of players in the index.html
var getPlayerId = function (playerName) {
    
    var playerStats = `https://www.balldontlie.io/api/v1/players?search=${playerName}`;

    fetch(playerStats)
        .then((response) => response.json())
            .then((data) => {
                var playerID = data.data[0].id;
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
                height.innerHTML = data.height_feet + " ft " + data.height_inches  + " in";
                team.innerHTML = data.team.full_name;
                weight.innerHTML = data.weight_pounds;
                playerFirstName.innerHTML = data.first_name;
                playerLastName.innerHTML = data.last_name;
            })
        .catch((error) => {
            if (error.name === "TypeError") {
                console.log('Unable to get stats');
            }
        });
}

getStoragePlayer()