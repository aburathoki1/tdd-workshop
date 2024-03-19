

class Chance {

   constructor( possibleOutcomes, winningOutcomes)
    {
        this.possibleOutcomes = possibleOutcomes;
        this.winningOutcomes = winningOutcomes;
    }
    
    equals(chance){
        // if (chance.possibleOutcomes === 1 & chance.winningOutcomes === 0){
        //     throw new Error("error");
        // }
        return this.winningOutcomes/this.possibleOutcomes === chance.winningOutcomes/chance.possibleOutcomes;    
    }

    not(){
        return new Chance(this.possibleOutcomes, this.possibleOutcomes - this.winningOutcomes);
    }

    and(chance){
        return new Chance(this.possibleOutcomes * chance.possibleOutcomes, this.winningOutcomes * chance.winningOutcomes);
    }
    
}

module.exports = Chance;