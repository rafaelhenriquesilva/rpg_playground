const Monster = require('../../src/models/Monster');

let monster;
describe('Monster', () => {
    it('Create a Monster', () => {
        let testMonster = new Monster();
        testMonster.createCharacter('CrazyMonster', 'Masculine');

        monster = testMonster;

        expect(monster.name).toBe('CrazyMonster');

    })
});