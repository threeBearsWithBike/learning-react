export default function getWinner(value) {

    const arrIdx = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let crossWon = 0;
    let zeroWon = 0;
    let empty = false;

    for (let item of arrIdx) {
        let arrSign = [];
        for (let subItem of item) {
            arrSign.push(value[subItem]);
        }
        if (arrSign.every(sign => sign === 'X')) {
            crossWon += 1;
        }
        if (arrSign.every(sign => sign === 'O')) {
            zeroWon += 1;
        }
        if (arrSign.includes(' ')) {
            empty = true;
        }
    }

        if (crossWon > zeroWon) {
            return `Cross won- ${crossWon} / Zero lost- ${zeroWon}`;
        } else if (crossWon < zeroWon) {
            return `Cross lost- ${crossWon} / Zero won- ${zeroWon}`;
        }

        if (crossWon === zeroWon && empty) {
            return 'Undefined';
        } else {
            return 'Draw';
        }

    }
