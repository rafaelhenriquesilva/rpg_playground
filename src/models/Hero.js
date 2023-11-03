const Character = require('./Character');

class Hero extends Character {
    classType = ['Knight', 'Sorcerer', 'Druid', 'Paladin'];
    luck = 100;
    mana = 100;
    intelligence = 100;
    dexterity = 100;
    constructor() {
        super();
    }  

    putClassType(classType) {
        if (!this.classType.includes(classType)) {
            throw new Error('Invalid class type');
        }

        this.classType = classType;
    }
    

    showHeroInformation() {
        return `
                name = ${this.name},
                gender = ${this.gender},
                level = ${this.level},
                classType = ${this.classType},
                vitality = ${this.vitality},
                mana = ${this.mana},
                speed = ${this.speed},
                strength = ${this.strength},
                intelligence = ${this.intelligence},
                dexterity = ${this.dexterity},
                vitality = ${this.vitality},
                luck = ${this.luck},
                attack = ${this.attack}
        `
    }
    
    
    createCharacter (name, gender, classType) {
        if(!name || !gender || !classType) {
            throw new Error('Invalid character information');
        }

        this.name = name;
        this.putClassType(classType);
        this.putGenderType(gender);
    }
}

module.exports = Hero;