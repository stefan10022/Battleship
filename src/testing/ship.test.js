import Ship from "../factories/ship";

test("Array with parts is created", () => {
  const ship = new Ship(2);
  expect(ship.parts).toEqual([1, 1]);
});

test("Hit is registered", () => {
  const ship = new Ship(2);
  ship.hit(1);
  expect(ship.parts).toEqual([1, -1]);
});

test("Ship is sunk", () => {
  const ship = new Ship(2);
  ship.hit(0);
  ship.hit(1);
  expect(ship.isSunk()).toBe(true);
});
