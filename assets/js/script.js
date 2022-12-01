

fetch('https://www.balldontlie.io/api/v1/players/237')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    fetch('https://www.balldontlie.io/api/v1/season_averages?player_ids[1-500]')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    