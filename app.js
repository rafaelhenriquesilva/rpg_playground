class Character {
    classType = ['Knight', 'Sorcerer', 'Druid', 'Paladin'];
    genderType = ['Masculine', 'Feminine'];
    speed = 100;
    strength = 100;
    vitality = 100;
    level = 1;
    attack = 10;

    constructor() {}
    
    putGenderType(gender){
        if(!this.genderType.includes(gender)){
            throw new Error('Invalid gender type')
        }

        this.gender = gender;

    }

    get attack() {
        return this.attack;
    }

    putClassType(classType) {
        if (!this.classType.includes(classType)) {
            throw new Error('Invalid class type');
        }

        this.classType = classType;
    }
    
    showBasicInformation() {
        return `
                name = ${this.name},
                gender = ${this.gender},
                level = ${this.level},
                vitality = ${this.vitality},
                speed = ${this.speed},
                strength = ${this.strength},
                vitality = ${this.vitality},
        `
    }

    levelUp() {
        this.level += 1;
    }

    levelDown() {
        this.level -= 1;
    }

    changeName(newName) {
        this.name = newName;
    }

    verifyIsDead() {
        if (this.vitality <= 0) {
            throw new Error(this.name +' is dead');
        }

        return false;
    }

    doAttack(character, attackValue = 10) {
        character.vitality -= attackValue;
    }

    recipeAtack(attackValue = 10) {
        this.vitality -= attackValue;
    }

}

class Monster extends Character {
    constructor() {
        super();
    }  
    
    
     createCharacter (name, gender) {
        if(!name || !gender) {
            throw new Error('Invalid character information');
        }

        this.name = name;
        this.putGenderType(gender);
    }
    
}

class Hero extends Character {
    luck = 100;
    mana = 100;
    intelligence = 100;
    dexterity = 100;
    constructor() {
        super();
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
                luck = ${this.luck}
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

let crazyCharacter = new Hero();
crazyCharacter.createCharacter('CrazyDev', 'Masculine', 'Knight');

let crazyMonster = new Monster();
crazyMonster.createCharacter('CrazyMonster', 'Masculine');

for(let i = 0; i < 9; i++) {
    crazyCharacter.verifyIsDead();
    crazyCharacter.recipeAtack(crazyMonster.attack);
    crazyCharacter.doAttack(crazyMonster, crazyCharacter.attack);
    crazyMonster.verifyIsDead();
}

console.log(crazyCharacter.showHeroInformation());
console.log(crazyMonster.showBasicInformation());

