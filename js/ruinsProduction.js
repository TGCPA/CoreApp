var piles = {
    standard:[],
    premium:[]
};

/*
function outline:
get objects from resourceCards array
filter specific objects with the target unlockedAt property and the target type (standard/premium)
combine those objects into a new array
randomize that array with Array.sort() 
repeat this 8 times for 8 piles
*/

function pileFilter(card) {
    // params:
    // minTier = Number
    // maxTier = Number
    // type = "standard" || "premium"
    return (card.type == this.type) && (this.minTier <= card.unlockedAt <= this.maxTier);
}

function compareADS(param1) {
    console.log(param1);
    console.log(this);
    return param1 == this[1];
}

piles.standard[0] = resourceCards.filter(pileFilter, {minTier:0, maxTier:3, type:"standard"});