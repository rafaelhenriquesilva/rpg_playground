const Character = require('./Character');

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

module.exports = Monster;