class Character {
    classType = ['Knight', 'Sorcerer', 'Druid', 'Paladin'];
    genderType = ['Masculine', 'Feminine'];
    speed = 100;
    strength = 100;
    vitality = 100;
    level = 1;
    attack = 10;
    isDead = false

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

    set attack(attack) {
        this.attack = attack;
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
        if(this.vitality <= 0) {
            this.isDead = true;
            return true;
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

module.exports = Character;
