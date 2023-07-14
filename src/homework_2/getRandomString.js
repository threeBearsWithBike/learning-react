export default function getRandomString() {
    let str= '';
    for (let i = 0; i < 9; i++) {
        let rnd = Math.round(Math.random() * 2);
        str += rnd === 0 ? ' ' : rnd === 1 ? 'X' : 'O';
    }
    return str;
}