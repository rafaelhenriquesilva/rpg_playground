const Hero = require('../../src/models/Hero');

let hero;
describe('Hero', () => {
    it('Create a Hero', () => {
        let testHero = new Hero();
        testHero.createCharacter('CrazyDev', 'Masculine', 'Knight');

        hero = testHero;

        expect(hero.name).toBe('CrazyDev');

    })
});