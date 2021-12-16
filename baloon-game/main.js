class Player {
    constructor(name, hitsPerMinute) {
        this.name = name;
        this.hitsPerMinute = hitsPerMinute;
        this.balloonCount = 100;
    }

    status() {
        console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`)
    }
}

const p1 = new Player('p1', 5);
const p2 = new Player('p2', 2);


// Write function below
let pOneBLeft = 100 - p2.hitsPerMinute * 10;

let pTwoBLeft = 100 - p1.hitsPerMinute * 10;


const balloonAttack = () => {


    if (pOneBLeft < pTwoBLeft) {
        console.log('Player 2 wins!!!')
    } else if (pTwoBLeft < pOneBLeft) {
        console.log('Player 1 wins!!!')
    } else {
        console.log('Tie')

    }

}

balloonAttack()

// actual solution 

const balloonAttack = (player1, player2) => {
    for (let i = 1; i <= 10; i++) {
        player2.balloonCount -= player1.hitsPerMinute
        player1.balloonCount -= player2.hitsPerMinute
        player1.status();
        player2.status();
    }
    if (player1.balloonCount > player2.balloonCount) {
        return player1.name;
    } else if (player2.balloonCount > player1.balloonCount)
        return player2.name

    return 'Tie'
}