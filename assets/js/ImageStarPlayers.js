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

