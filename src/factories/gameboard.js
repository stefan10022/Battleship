import Ship from "./ship";

class Gameboard {
  constructor() {
    this.board = this.#createBoard();
    this.ships = [];
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
    this.ships.push(ship);
    this.board[x-1][y-1] = ship.parts[0]
  }
}

