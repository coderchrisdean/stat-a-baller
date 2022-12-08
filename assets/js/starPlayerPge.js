
//----------------------------- HT: starPlayer design START------------------------------//
var player_Giannis = document.querySelector("#Giannis");
var player_Nikola = document.querySelector("#Nikola");
var player_Lebron = document.querySelector("#Lebron");
var player_Steph = document.querySelector("#Steph");

var img_Giannis = document.getElementById("Giannis_ID");
var img_Nikola = document.getElementById("Nikola_ID");
var img_Lebron = document.getElementById("Lebron_ID");
var img_Steph = document.getElementById("Steph_ID");

var imgArray = [img_Giannis, img_Nikola, img_Lebron, img_Steph];

function showImg(img) {
    for (i = 0; i < imgArray.length; i++) {
        imgArray[i].style.display = "none";
    }
    img.style.display = "block";
}

player_Giannis.addEventListener("click", function (e) {
    showImg(img_Giannis);
    // window.location=document.getElementById('Giannis_ID').href;
});
player_Nikola.addEventListener("click", function (e) {
    showImg(img_Nikola);
});
player_Lebron.addEventListener("click", function (e) {
    showImg(img_Lebron);
});
player_Steph.addEventListener("click", function (e) {
    showImg(img_Steph);
});

// addEventListener('click', (event) => {});
// onclick = (event) => { };

// this.slider.container.addEventListener(
//     "touchstart",
//     this.onStartDrag
//   ),

//----------------------------- HT: starPlayer design END-----------------------------//

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