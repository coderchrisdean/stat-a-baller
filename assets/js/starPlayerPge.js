
//----------------------------- HT: starPlayer design START------------------------------//
var player_Giannis = document.querySelector("#Giannis");
var player_Nikola = document.querySelector("#Nikola");
var player_Lebron = document.querySelector("#Lebron");
var player_Steph = document.querySelector("#Steph");

var img_Giannis = document.getElementById("Giannis_ID");
var img_Nikola = document.getElementById("Nikola_ID");
var img_Lebron = document.getElementById("Lebron_ID");
var img_Steph = document.getElementById("Steph_ID");

// pasting the stats
var weight = document.getElementById("weight");
var position = document.getElementById("position");
var height = document.getElementById("height");
var team = document.getElementById("team");
// var assists2019 = document.getElementById("2019-assists");

var imgArray = [img_Giannis, img_Nikola, img_Lebron, img_Steph];

function showImg(img) {
    for (i = 0; i < imgArray.length; i++) {
        imgArray[i].style.display = "none";
    }
    img.style.display = "block";
}

player_Giannis.addEventListener("click", function (e) {
    showImg(img_Giannis);
    getPlayerId("Giannis Antetokounmpo")
    // window.location=document.getElementById('Giannis_ID').href;
});
player_Nikola.addEventListener("click", function (e) {
    showImg(img_Nikola);
    getPlayerId("Nikola Jokic")
});
player_Lebron.addEventListener("click", function (e) {
    showImg(img_Lebron);
    getPlayerId("Lebron James")
});
player_Steph.addEventListener("click", function (e) {
    showImg(img_Steph);
    getPlayerId("Stephen Curry")
});

// addEventListener('click', (event) => {});
// onclick = (event) => { };

// this.slider.container.addEventListener(
//     "touchstart",
//     this.onStartDrag
//   ),

//----------------------------- HT: starPlayer design END-----------------------------//

// Player Characteristics Stats 

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