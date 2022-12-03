// Styling Done Via Javascript -- Chris
// *********************************************
// <body id= "body">
var bodyEl = document.getElementById('body');
    // <nav id= "navMenu">
var navEl = document.getElementById('navMenu');
    // create new div
var newDiv = document.createElement('div');
    // add/remove class to div
var addClass = classList.add //('class', 'class2', 'class3')
var removeClass = classList.removeClass // ('class')
    // <a> (links)
    // var aEl = document.getElementsByTagName('a');
// **********************************************
    bodyEl.classList.add('has-background-dark');
    bodyEl.classList.add('has-text-white');
    navEl.classList.add('has-background-dark');
    navEl.classList.add('has-text-white');
// *********************************************
// Carousel Feature
// <section id="carousel">
var carousel = document.getElementById("carousel");

bulmaCarousel.attach('#player-carousel', {
    slidesToScroll: 1,
    slidesToShow: 4
});
var carouselSection = document.getElementById('carousel');






// fetch('https://www.balldontlie.io/api/v1/players/237')
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//   fetch('https://www.balldontlie.io/api/v1/season_averages?player_ids[1-500]')
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


// ----------- home page: hide card -----------

// var displayPlayer1 = document.getElementById('display_player-1');
// var displayLebronJames = document.getElementById('lebron-james');
// var 
// displayLebronJames.classList.add('is-hidden');
// displayPlayer1.classList.add('is-hidden');

// function showLebronJames ();{
//     displayLebronJames.classList.add('is-hidden');

// }

// displayPlayer1.addEventListener('click', showLebronJames)

