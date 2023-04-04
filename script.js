table = document.querySelector('.game-table');
let cells = [[], [], [],];
let startGame = false;
let tempMove;
let labelResult = document.querySelector('.text');
const fPlayer = 'X'
const sPlayer = 'O'
let winnerExist = false;
let player1Winner = false;
let player2Winner = false;
let progress = 0;

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        cells[i][j] = {
            name: table.rows[i].className + table.rows[i].cells[j].className,
            value: "",
        };
        console.log(cells[i].name);
    }
}

function setPlayer(value) {
    tempMove = value;
    document.querySelector('.button-X').disabled = true;
    document.querySelector('.button-Y').disabled = true;
    labelResult.innerHTML = 'Game started'
    startGame = true;
}

function move(name) {
    if (startGame) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (cells[i][j].name === name) {
                    if (cells[i][j].value === '') {
                        progress++;
                        cells[i][j].value = tempMove;
                        table.rows[i].cells[j].innerText = tempMove;
                        tempMove === fPlayer ? tempMove = sPlayer : tempMove = fPlayer;
                        break;
                    }
                }
            }
        }
        rule()
        if (player1Winner) {
            labelResult.innerHTML = 'First player won'
            startGame = false;
        } else if (player2Winner) {
            labelResult.innerHTML = 'Second player won'
            startGame = false;
        } else if (winnerExist) {
            labelResult.innerHTML = 'Draw'
            startGame = false;
        }
    }

}

function rule() {
    let symbols = ['X', 'O'];
    for (let i = 0; i < 2; i++) {
        for (let row = 0; row < 3; row++) {
            if ((cells[row][0].value === symbols[i]) &&
                (cells[row][1].value === symbols[i]) &&
                (cells[row][2].value === symbols[i])) {
                (i === 0) ? player1Winner = true : player2Winner = true;
            }
        }
        for (let col = 0; col < 3; col++) {
            if ((cells[0][col].value === symbols[i]) &&
                (cells[1][col].value === symbols[i]) &&
                (cells[2][col].value === symbols[i])) {
                (i === 0) ? player1Winner = true : player2Winner = true;
            }
        }
        if ((cells[0][0].value === symbols[i]) &&
            (cells[1][1].value === symbols[i]) &&
            (cells[2][2].value === symbols[i])) {
            (i === 0) ? player1Winner = true : player2Winner = true;
        }
        if ((cells[0][2].value === symbols[i]) &&
            (cells[1][1].value === symbols[i]) &&
            (cells[2][0].value === symbols[i])) {
            (i === 0) ? player1Winner = true : player2Winner = true;
        }
        if (progress === 9) {
            winnerExist = true;
        }
    }
}

function restart(){

}