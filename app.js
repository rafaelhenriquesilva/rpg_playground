const Hero = require('./src/models/Hero');
const Monster = require('./src/models/Monster');

let crazyCharacter = new Hero();
crazyCharacter.createCharacter('CrazyDev', 'Masculine', 'Knight');

let crazyMonster = new Monster();
crazyMonster.createCharacter('CrazyMonster', 'Masculine');

let battle = (chracterOne, monster) => {
    while(true) {
        chracterOne.doAttack(monster, chracterOne.attack);
        monster.doAttack(chracterOne, monster.attack);

        if(chracterOne.verifyIsDead()) {
            console.log('Monster win');
            break;
        }

        if(monster.verifyIsDead()) {
            console.log('Character win');
            break;
        }
    }
}

for(let i = 0; i<=10; i++){
    crazyCharacter.levelUp()
}

console.info(crazyCharacter.showHeroInformation())

battle(crazyCharacter, crazyMonster);