// console.log(document);

// const ChessBoard = document.getElementById('chessboard');


// const WhiteBlock = document.createElement('div');
// WhiteBlock.classList.add('white');

// const BlackBlock = document.createElement('div');
// BlackBlock.classList.add('black');

// // console.log(ChessBoard);
// // console.log(WhiteBlock);

function ChessBoard() {
    const ChessBoard = document.getElementById('chessboard');
    let arr = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];

    for (i = 0; i < 10; i++) {

        for (j = 0; j < 10; j++) {
            let block = document.createElement('div');

            if ((i % 2 == 0) ^ (j % 2 == 0)) {
                block.className = 'block black';
            } else {
                block.className = 'block white';
            }
            if (j == 0 || j == 9) {
                block.insertAdjacentHTML('beforeend', '<p>' + arr[i] + '</p>');
                block.classList.add('default');
            } else if (i == 0 || i == 9) {
                block.insertAdjacentHTML('beforeend', '<p>' + j + '</p>');
                block.classList.add('default');
            }

            if (i == 2 && j != 0 && j != 9 || i == 7 && j != 0 && j != 9) {
                block.insertAdjacentHTML('beforeend', '<p> П</p>');
            }
            if (i == 1 || i == 8) {
                if (j == 1 || j == 8) {
                    block.insertAdjacentHTML('beforeend', '<p> C</p>');
                } else if (j == 2 || j == 7) {
                    block.insertAdjacentHTML('beforeend', '<p> К</p>');
                }
                else if (j == 3 || j == 6) {
                    block.insertAdjacentHTML('beforeend', '<p> Л</p>');
                } else if (j == 4) {
                    block.insertAdjacentHTML('beforeend', '<p> КК</p>');
                }
                else if (j == 5) {
                    block.insertAdjacentHTML('beforeend', '<p> Ф</p>');
                }
            }

            ChessBoard.appendChild(block);

        }
    }
}

ChessBoard();