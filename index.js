document.addEventListener('DOMContentLoaded', function() {
    function computerChoice() {
        let x = 0;
        let rand = Math.random()
        if (rand > 0.66) {
            x = 'paper';
        }
        else if (rand < 0.33) {
            x = 'rock';
        }
        else {
            x = 'scissors';
        }
        return x
    }
    
    function humanChoice(c) {
        if (c === 'paper' || c === 'rock' || c === 'scissors') {
            return c;
        }
        else {
            humanChoice()
        }
    }
    
    function check(choice) {
        document.querySelectorAll('div').forEach(element => {
            element.style.display = 'none';
        });
        let c = humanChoice(choice);
        let x = computerChoice();
        if (x === 'paper' && c === 'scissors' || x === 'rock' && c === 'paper' || x === 'scissors' && c === 'rock') {
            document.querySelector('#win').style.display = 'block';
            let newScore = parseInt(document.getElementById('human').innerHTML) + 1;
            document.getElementById('human').innerHTML = newScore;
            if (newScore === 5) {
                alert('Hoorray!! You won')
            }
        }
        else if (c === 'paper' && x === 'scissors' || c === 'rock' && x === 'paper' || c === 'scissors' && x === 'rock') {
            let compuScore = parseInt(document.getElementById('computer').innerHTML) + 1;
            document.getElementById('computer').innerHTML = compuScore;
            document.querySelector('#loss').style.display = 'block';
            if(compuScore === 5) {
                alert('Oops You lost')
            }
        }
        else {
            document.querySelector('#draw').style.display = 'block';
        }
        return [choice]
    }

    document.querySelector('#reset').addEventListener('click', () => {
        document.querySelectorAll('div').forEach(element => {
            element.style.display = 'none';
        })
        document.getElementById('human').innerHTML = 0;
        document.getElementById('computer').innerHTML = 0;
    })
    
    const rock = document.getElementById('rock')
    const paper = document.getElementById('paper')
    const scissors = document.getElementById('scissors')
    
    // function playRound() {
    //     let humanScore = 0;
    //     let computerScore = 0;
    //     [humanScore, computerScore] = check(humanScore, computerScore);
    //     if (computerScore < humanScore) {
    //         console.log(`You've won this game. Congratulations! Your score: ${humanScore}, computer score: ${computerScore}`)
    //     }
    //     else if (computerScore === humanScore) {
    //         console.log(`It's a tie. Your score: ${humanScore}, computer score: ${computerScore}`)
    //     }
    //     else {
    //         console.log(`You've lost this game. Your score: ${humanScore}, computer score: ${computerScore}`)
    //     }
    // }
    
    rock.addEventListener('click', () => check('rock'))
    paper.addEventListener('click', () => check('paper'))
    scissors.addEventListener('click', () => check('scissors'))
    
})