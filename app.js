const Hero = require('./src/models/Hero');
const Monster = require('./src/models/Monster');

let crazyCharacter = new Hero();
crazyCharacter.createCharacter('CrazyDev', 'Masculine', 'Knight');

let crazyMonster = new Monster();
crazyMonster.createCharacter('CrazyMonster', 'Masculine');



for(let i = 0; i<=10; i++){
    crazyCharacter.levelUp()
}



crazyCharacter.battle(crazyCharacter, crazyMonster);
