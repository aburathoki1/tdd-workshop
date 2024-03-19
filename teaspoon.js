class Teaspoon{
    constructor(quanity){
        this.quanity = quanity;
    }

    equals(unit){
        return unit.quanity === this.quanity;
    }

}

module.exports = Teaspoon;
