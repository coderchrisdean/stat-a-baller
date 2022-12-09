
var statSet = document.querySelector("#star-stats");
var lebronStar= document.querySelector("#demo_star_player_1")
var giannisStar= document.querySelector("#demo_star_player_2")
var stephStar= document.querySelector("#demo_star_player_3")
var nikolaStar= document.querySelector("#demo_star_player_4")

// Lebron James Stats
var getLebron= function(){
    getPlayerId("Lebron James")
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


var getPlayerStats = (id) => {
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


// getPlayerId
lebronStar.addEventListener('click', getLebron);

// ----------- home page: hide card -----------
document.querySelector("#lebron-james").style.display = "none";



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


// getPlayerId
stephStar.addEventListener('click', getSteph);

// ----------- home page: hide card -----------
document.querySelector("#steph-curry").style.display = "none";


// Giannis Stats
var getGiannis= function(){
    getPlayerId("Giannis Antetokounmpo")
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


// getPlayerId
nikolaStar.addEventListener('click', getNikola);

// ----------- home page: hide card -----------


// Nikola Stats
var getNikola= function(){
    getPlayerId("Nikola Jokic")
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


// getPlayerId
nikolaStar.addEventListener('click', getNikola);

// ----------- home page: hide card -----------