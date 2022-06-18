class Ship {
  constructor(length) {
    this.length = length;
    this.parts = this.#constructShipParts();
  }
  #constructShipParts() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      arr[i] = 1;
    }
    return arr;
  }
  hit(position) {
    this.parts[position] = -1;
  }
  isSunk() {
    if (this.parts.every((element) => element === -1)) return true;
    else return false;
  }
}

export default Ship;
