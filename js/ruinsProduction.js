var piles = {
    standard:[],
    premium:[]
};

const pileSpecs = {
    standard:[
        [
            {minTier:0,maxTier:3,productType:"standard",numberOfEach:4}
        ],
        [
            {minTier:0,maxTier:3,productType:"standard",numberOfEach:3},
            {minTier:4,maxTier:6,productType:"standard",numberOfEach:2}
        ],
        [
            {minTier:0,maxTier:3,productType:"standard",numberOfEach:2},
            {minTier:4,maxTier:6,productType:"standard",numberOfEach:3},
            {minTier:7,maxTier:8,productType:"standard",numberOfEach:2}
        ],
        [
            {minTier:0,maxTier:3,productType:"standard",numberOfEach:2},
            {minTier:4,maxTier:6,productType:"standard",numberOfEach:2},
            {minTier:7,maxTier:8,productType:"standard",numberOfEach:3},
            {minTier:9,maxTier:10,productType:"standard",numberOfEach:2}
        ]
    ],
    premium:[
        [
            {minTier:0,maxTier:3,productType:"premium",numberOfEach:4}
        ],
        [
            {minTier:0,maxTier:3,productType:"premium",numberOfEach:3},
            {minTier:4,maxTier:6,productType:"premium",numberOfEach:2}
        ],
        [
            {minTier:0,maxTier:3,productType:"premium",numberOfEach:2},
            {minTier:4,maxTier:6,productType:"premium",numberOfEach:3},
            {minTier:7,maxTier:8,productType:"premium",numberOfEach:2}
        ],
        [
            {minTier:0,maxTier:3,productType:"premium",numberOfEach:2},
            {minTier:4,maxTier:6,productType:"premium",numberOfEach:2},
            {minTier:7,maxTier:8,productType:"premium",numberOfEach:2},
            {minTier:9,maxTier:10,productType:"premium",numberOfEach:2}
        ]
    ]
}

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
    // productType = "standard" || "premium"
    return card.productType == this.productType && this.minTier <= card.unlockedAt && card.unlockedAt <= this.maxTier;
}

//okay, so since each pile has a different number of conditions to meet,
//we are going to go with a FOR loop. try and follow along :P

//this is the basic shufflePile function that is going to be used for initial shuffles and reshuffles
function shufflePile(pileType, pileNumber) {
    console.log(pileNumber +'before');
    pileNumber--; //subtract one from pileNumber (Array zero index)
    console.log(pileNumber +' after');
    //first up, define the array that is going to hold the reshuffled cards
    var unshuffledArray = [];
    var shuffledArray = [];
    var newContents;

    for(var i=0; i < pileSpecs[pileType][pileNumber].length; i++) {
        //ok, do you see what I did here? since each pile has a different number
        //of conditions that need to be met, we have to get the number of conditions
        //from the pileSpecs object. 
        newContents = resourceCards.filter(pileFilter, pileSpecs[pileType][pileNumber][i]);
        console.log(newContents);
        //the above operation takes the current specs and filters them thru resourceCards
        
        //the next step is to look at how many of each card should be in the array
        //for that, I made this function:
        
        newContents = copyArrayContents(newContents, pileSpecs[pileType][pileNumber][i].numberOfEach - 1);
        console.log(newContents);

        unshuffledArray.push(...newContents);
        console.log(unshuffledArray);
        //the above operation takes the resulting array values and pushes those values to shuffledArray
        //we use spread syntax (...) b/c we don't want to push the whole array, just its values

        
        //we will repeat the loop for each pileSpecs.
    }

    //okay, the shuffledArray variable has all the cards in order of tier. now we need to actually shuffle it
    console.log(unshuffledArray);
    //console.log(shuffledArray.map(card => card.name).sort(function(a, b){
    //    if(a < b) { return -1; }
    //    if(a > b) { return 1; }
    //    return 0;
    //}));
    //the above commented function shows me that the correct number of each card is present

    //now we need to update the piles variable with the new cards that have been shuffled
    piles[pileType][pileNumber] = unshuffledArray;

    //end
    //so what's interesting is that my copyArrayContents function is actually shuffling 
    //the array for me. It's really odd, but I guess if it isn't broke, there's no need
    //to fix it lol. Perhaps I can study this when I'm more experienced?
}

function copyArrayContents(a, timesToBeCopied) {
    //little array copier I made from scratch
    var b = [];
    console.log(...a);
    for(var i=0; i <= timesToBeCopied; i++) {
        // we use <= so that the base array is included
        b.push(...a);
        console.log(b);
    }
    return b;
}

//okay, the final thing is to create a function that actually
//draws the cards.