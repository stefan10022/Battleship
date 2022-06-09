import Ship from "./ship";

class Gameboard {
  constructor() {
    this.board = this.#createBoard();
  }
  #createBoard() {
    let arr = new Array(10);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(10);
    }
    return arr;
  }
  placeShip(x, y, shipLength) {
      let ship = new Ship(shipLength);
  }
}
const board1 = new Gameboard();
console.log(board1.board);
// export default Gameboard;
