const soldier = {
  name: "Ivan",
  hp: 2,
  weapon: {
    name: "ak-47",
    amm: 1,
  },
  supplies: 3,
  fire: function () {
    if (this.weapon.amm > 0) {
      this.weapon.amm--;
      console.log("bax-bax");
    } else {
      return console.log("Обойма пуста");
    }
  },
  rechange: function () {
    this.weapon.amm = 30;
    this.supplies--;
    if (this.supplies === 0) {
      return console.log("не осталось припасов");
    } else {
      return console.log("перезарядка");
    }
  },
  getHurt: function () {
    if (this.hp === 0) {
      return console.log("game over");
    } else {
      this.hp--;
    }
  },
};

// console.log(soldier.fire())
// console.log(soldier.fire())
// console.log(soldier.fire())

soldier.getHurt();
console.log(soldier.hp);

soldier.getHurt();
console.log(soldier.hp);

soldier.getHurt();
console.log(soldier.hp);
