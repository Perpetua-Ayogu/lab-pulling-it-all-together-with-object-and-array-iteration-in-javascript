function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}


//get the points scored by a player
function numPointsScored(playerName) {
    const games = gameObject();

    //loop through home and away team
    for (const key in games) {
        const players = games[key].players;

        //check if player is in the team
        if (players[playerName]) {
            return players[playerName].points;
        }
    }
}


//get the shoe size of a player
function shoeSize(playerName) {
    const games = gameObject();

    //loop through home and away team
    for (const key in games) {
        const players = games[key].players;

        //check if player is in the team
        if (players[playerName]) {
            return players[playerName].shoe;
        }
    }
}


//get the colors of a team
function teamColors(teamName) {
    const games = gameObject();

    //loop through the teams
    for (const key in games) {

        //check if the team name matches
        if (games[key].teamName === teamName) {
            return games[key].colors;
        }
    }
}


//get both team names
function teamNames() {
    const games = gameObject();
    const names = [];

    //loop through the teams
    for (const key in games) {

        //add each team name to the array
        names.push(games[key].teamName);
    }

    return names;
}


//get all player jersey numbers for a team
function playerNumbers(teamName) {
    const games = gameObject();

    //loop through the teams
    for (const key in games) {

        //find the correct team
        if (games[key].teamName === teamName) {
            const players = games[key].players;
            const numbers = [];

            //loop through each player
            for (const playerName in players) {

                //add each player number to the array
                numbers.push(players[playerName].number);
            }

            return numbers;
        }
    }
}


//get all the stats for a player
function playerStats(playerName) {
    const games = gameObject();

    //loop through home and away team
    for (const key in games) {
        const players = games[key].players;

        //check if the player is in the team
        if (players[playerName]) {

            //return the whole player object
            return players[playerName];
        }
    }
}


//get the rebounds of the player with the biggest shoe size
function bigShoeRebounds() {
    const games = gameObject();

    let biggestShoe = 0;
    let rebounds = 0;

    //loop through home and away team
    for (const key in games) {
        const players = games[key].players;

        //loop through every player
        for (const playerName in players) {
            const player = players[playerName];

            //check if this shoe size is bigger
            if (player.shoe > biggestShoe) {
                biggestShoe = player.shoe;
                rebounds = player.rebounds;
            }
        }
    }

    return rebounds;
}

//get the player that scored the most points
function mostPointsScored() {
    const games = gameObject();

    let highestPoints = 0;
    let highestPlayer = "";

    //loop through both teams
    for (const key in games) {
        const players = games[key].players;

        //loop through every player
        for (const playerName in players) {

            //check if this player has more points
            if (players[playerName].points > highestPoints) {
                highestPoints = players[playerName].points;
                highestPlayer = playerName;
            }
        }
    }

    return highestPlayer;
}


//get the team with the most total points
function winningTeam() {
    const games = gameObject();

    let highestScore = 0;
    let winningTeamName = "";

    //loop through both teams
    for (const key in games) {
        const players = games[key].players;
        let totalPoints = 0;

        //add all player points for this team
        for (const playerName in players) {
            totalPoints += players[playerName].points;
        }

        //check if this team has the highest score
        if (totalPoints > highestScore) {
            highestScore = totalPoints;
            winningTeamName = games[key].teamName;
        }
    }

    return winningTeamName;
}


//get the player with the longest name
function playerWithLongestName() {
    const games = gameObject();

    let longestName = "";

    //loop through both teams
    for (const key in games) {
        const players = games[key].players;

        //loop through every player name
        for (const playerName in players) {

            //check if this name is longer
            if (playerName.length > longestName.length) {
                longestName = playerName;
            }
        }
    }

    return longestName;
}