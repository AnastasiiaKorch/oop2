export default class Character {
  constructor(name, type){
    if(name.length < 2 || name.length > 10){
      throw new Error("error")
    }
    const arr = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
      if(arr.indexOf(type) === -1) {
        throw new Error("error")
      }
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
  }

  levelUp(){
      if (this.health > 0) {
        this.health = 100;
        this.level += 1;
        this.attack += (this.attack * (20 / 100));
        this.defence += (this.defence * (20 / 100));
      }
      else {
        throw new Error("нельзя повысить level умершего")}
  }
  damage (points) {
    if (this.health > 0){
      this.health -= points * (1 - this.defence / 100)
    }
    else {
      throw new Error ("error");
    }
  }
}

export class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}

export class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

