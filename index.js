function computerChoice() {
    let x = 0;
    let rand = Math.random()
    if (rand > 0.66) {
        x = 1;
    }
    else if (rand < 0.33) {
        x = 2;
    }
    else {
        x = 3;
    }
    return x
}

function humanChoice() {
    var c = prompt("Choose either rock, paper or scissors!").toLowerCase();
    if (c === 'paper') {
        c = 1;
    }
    else if (c === 'rock') {
        c = 2;
    }
    else if (c === 'scissors') {
        c = 3;
    }
    else {
        humanChoice()
    }
    return c;   
}

function check(hum = 0, com = 0) {
    let y = humanChoice();
    let compu = computerChoice();
    if ([1/2, 2/3, 3].includes(y / compu)) {
        console.log("Hurray, you've won this round!");
        hum++;
    }
    else if ([1/3, 1.5, 2].includes(y / compu)) {
        console.log("Oops, you lost this one.");
        com++;
    }
    else {
        console.log("It's a tie!")
    }
    return [hum, com]
}

function playRound() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        [humanScore, computerScore] = check(humanScore, computerScore);
    }
    if (computerScore < humanScore) {
        console.log(`You've won this game. Congratulations! Your score: ${humanScore}, computer score: ${computerScore}`)
    }
    else if (computerScore === humanScore) {
        console.log(`It's a tie. Your score: ${humanScore}, computer score: ${computerScore}`)
    }
    else {
        console.log(`You've lost this game. Your score: ${humanScore}, computer score: ${computerScore}`)
    }
}
playRound()