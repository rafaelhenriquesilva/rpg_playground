class Character {
    
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

    
    showBasicInformation() {
        return `
                name = ${this.name},
                gender = ${this.gender},
                level = ${this.level},
                vitality = ${this.vitality},
                speed = ${this.speed},
                strength = ${this.strength},
        `
    }

    levelUp() {
        this.level += 1;
        this.speed  = parseFloat(this.speed) + (parseFloat(this.speed) * 0.1)
        this.strength  = parseFloat(this.strength) + (parseFloat(this.strength) * 0.1)
        this.vitality  = parseFloat(this.vitality) + (parseFloat(this.vitality) * 0.1)
        this.attack  = parseFloat(this.attack) + (parseFloat(this.attack) * 0.1)
    }

    levelDown() {
        this.level -= 1;
        this.speed = this.speed - (this.speed * 0.1)
        this.strength = this.strength - (this.strength * 0.1)
        this.vitality = this.vitality - (this.vitality * 0.1)
        this.attack = this.attack - (this.attack * 0.1)
    }

    changeName(newName) {
        this.name = newName;
    }

    verifyIsDead(character) {
        if(character.vitality <= 0) {
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

    battle = (secondCharacter) => {
        while(true) {
            this.doAttack(secondCharacter, this.attack);
            secondCharacter.doAttack(this, secondCharacter.attack);
    
           
    
            if(this.verifyIsDead(secondCharacter)) {
                return {
                    win: this.name,
                    dead: secondCharacter.name
                }
            }

            if(this.verifyIsDead(this)) {
                return {
                    win: secondCharacter.name,
                    dead: this.name
                }
            }
        }
    }

}

module.exports = Character;
