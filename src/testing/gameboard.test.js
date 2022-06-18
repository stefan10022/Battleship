import Gameboard from "../factories/gameboard";
import Ship from "../factories/ship";

test("Ship is placed correctly", () => {
    const board1 = new Gameboard;
    board1.placeShip(3, 4, 3);
    expect(board1.board[2][3]).toBe(1);
    expect(board1.board[2][4]).toBe(1);
    expect(board1.board[2][5]).toBe(1);
});