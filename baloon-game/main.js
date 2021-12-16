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

//setTimeout(balloonAttack, 600000);