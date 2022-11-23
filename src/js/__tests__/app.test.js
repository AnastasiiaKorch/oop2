import Character, {
  Bowman, Swordsman, Magician, Daemon, Undead, Zombie,
 } from '../app';

 test('levelUp', () => {
   const result = new Bowman('мечник1', 'Bowman');
   result.levelUp();
   expect(result).toEqual({
     name: 'мечник1', type: 'Bowman', health: 100, level: 2, attack: 30, defence: 30,
   });
 });

 test('levelUp Error', () => {
   function checkError() {
     const result = new Bowman('мечник1', 'Bowman');
     result.health = 0;
     result.levelUp();
   }
   expect(checkError).toThrow();
 });

 test('damage', () => {
   const result = new Bowman('мечник1', 'Bowman');
   result.damage(10);
   expect(result).toEqual({
     name: 'мечник1', type: 'Bowman', health: 92.5, level: 1, attack: 25, defence: 25,
   });
 });

 test('damage Error', () => {
   function checkError() {
     const result = new Bowman('мечник1', 'Bowman');
     result.health = -10;
     result.damage(10);
   }
   expect(checkError).toThrow();
 });

 test ("Character", () => {
   const result = new Character ("мечник1", "Bowman");
   expect(result.name).toBe("мечник1");
   expect(result.type).toBe("Bowman");
   expect(result.health).toBe(100);
   expect(result.level).toBe(1);
 });

 test("checkName", () => {
   function checkName (){
     return new Character ("м", "Bowman")
   }
   expect(checkName).toThrow()
 });

 test("checkType", () => {
   function checkType (){
     return new Character ("мечник1","Dead")
   }
   expect(checkType).toThrow()
 });

test("Bowman", () => {
  const result = new Bowman("мечник1", "Bowman");
  expect(result).toEqual({name:"мечник1", type:"Bowman", health: 100, level:1, attack:25, defence:25,
  });
});

test("Swordsman", () => {
  const result = new Swordsman("мечник1", "Swordsman");
  expect(result).toEqual({name: "мечник1", type:"Swordsman", health: 100, level:1, attack: 40, defence: 10,
  });
});

test("Magician", () => {
  const result = new Magician("мечник1", "Magician");
  expect(result).toEqual({name: "мечник1", type:"Magician", health: 100, level:1, attack: 10, defence: 40,
  });
})

test("Undead", () => {
  const result = new Undead("мечник1", "Undead");
  expect(result).toEqual({name: "мечник1", type:"Undead", health: 100, level:1, attack: 25, defence: 25,
  });
})

test("Zombie", () => {
  const result = new Zombie("Zombie", "Zombie");
  expect(result).toEqual({name: "Zombie", type:"Zombie", health: 100, level:1, attack: 40, defence: 10,
  });
})

test("Daemon", () => {
  const result = new Daemon("Daemon", "Daemon");
  expect(result).toEqual({name: "Daemon", type:"Daemon", health: 100, level:1, attack: 10, defence: 40,
  });
})