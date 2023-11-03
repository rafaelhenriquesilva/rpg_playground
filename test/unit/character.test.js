const Hero = require('../../src/models/Hero');
const Monster = require('../../src/models/Monster')

let monster;
let hero;

describe('Character', () => {
    it('Create a Hero', () => {
        let testHero = new Hero();
        testHero.createCharacter('CrazyDev', 'Masculine', 'Knight');

        hero = testHero;

        expect(hero.name).toBe('CrazyDev');
    });

     it('Create a Monster', () => {
        let testMonster = new Monster();
        testMonster.createCharacter('CrazyMonster', 'Masculine');

        monster = testMonster;

        expect(monster.name).toBe('CrazyMonster');

    })
    it('Hero should win', () => {
        for(let i = 0; i < 5; i++){
            hero.levelUp()
        }

        let newBattle = hero.battle(monster);

        expect(newBattle.win).toBe(hero.name)
        expect(newBattle.dead).toBe(monster.name)
        

    });
    it('Monster should win', () => {
        for(let i = 0; i < 50; i++){
            monster.levelUp()
        }

        let newBattle = monster.battle(hero);

        expect(newBattle.win).toBe(monster.name)
        expect(newBattle.dead).toBe(hero.name)
    });

})