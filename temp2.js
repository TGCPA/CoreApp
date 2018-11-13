var resourceDieObj;
var previousRollsSample = [
    2,
    3,
    4
];

function rollResourceDice(previousRolls) {
    //first things first, check the paramater passed:
    //hehe, I'll work on this later...
    //I will probably add another check to make sure that the array has 3 values
    
    //purpose: roll 3 sets of 2 6-sided die; 

    //so, we call rollDie(6) 6 times, then check the results of each
    //if a result returns unacceptable, we reroll it until it meets an acceptable condition

    //call rollDie and update the object
    var rerollcounter = 0;
    resourceDieObj = {
        A:{
            die1:rollDie(6),
            die2:rollDie(6),
            sum:function() {
                return this.die1 + this.die2;
            },
            reroll:function(){
                this.die1 = rollDie(6);
                this.die2 = rollDie(6);
            }
        },
        B:{
            die1:rollDie(6),
            die2:rollDie(6),
            sum:function(){
                return this.die1 + this.die2;
            },
            reroll:function(){
                this.die1 = rollDie(6);
                this.die2 = rollDie(6);
            }
        },
        C:{
            die1:rollDie(6),
            die2:rollDie(6),
            sum:function(){
                return this.die1 + this.die2;
            },
            reroll:function(){
                this.die1 = rollDie(6);
                this.die2 = rollDie(6);
            }
        },
        rerolledThisCycle:false,
        totalSums:function(){
            return `${this.A.sum}, ${this.B.sum}, ${this.C.sum}`;
        }
    };

    //now, time to check the results
    /* first, we're going to see if any of the rolls are equal to the previousRolls. then, we check to see if 
    any of the rolls equal each other. if either of these conditions are met, we reroll. after we reroll a die, 
    we need to check both conditions AGAIN. we repeat the process until neither of the conditions are met.
    */

    //declare the functions
    function filterPreviousRolls({A, B, C, rerolledThisCycle}) {
        //loop thru the previousRolls
        for(var i=0; i < previousRolls.length; i++) {
            if(A.sum == previousRolls[i]) {
                A.reroll();
                rerolledThisCycle = true;
                continue;
            }
            if(B.sum == previousRolls[i]) {
                B.reroll();
                rerolledThisCycle = true;
                continue;
            }
            if(C.sum == previousRolls[i]) {
                C.reroll();
                rerolledThisCycle = true;
                continue;
            }
        }
    }
    function filterEqualRolls({A, B, C, rerolledThisCycle}) {
        if(A.sum == B.sum) { //check 1st condition
            A.reroll();
            rerolledThisCycle = true;
        } else
        if(B.sum == C.sum) { //check 2nd condition
            B.reroll();
            rerolledThisCycle = true;
        } else
        if(A.sum == C.sum) { //finish the last condition
            C.reroll(); 
            rerolledThisCycle = true;
        } else rerolledThisCycle = false;
    }

    //call the functions
    filterPreviousRolls(resourceDieObj);
    filterEqualRolls(resourceDieObj);

    //now, we need to check if any rerolls occured
    do {
        rerollcounter++;
        filterPreviousRolls(resourceDieObj); //call the functions again
        filterEqualRolls(resourceDieObj);
    } while(resourceDieObj.rerolledThisCycle == true) //if a reroll occured

    console.log(rerollcounter);
    var asd = resourceDieObj.totalSums();
    console.log(asd);
}

function rollDie(sides) {
    if(sides == NaN) return console.log(sides +'is not a number');
    return (Math.floor(Math.random() * sides)) + 1;
}