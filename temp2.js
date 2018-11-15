

var previousRollsArray = []; //this will be updated each time rollResourceDie is called

var rerolledThisCycle = false;

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
        totalSums:function(){
            return [this.A.sum(), this.B.sum(), this.C.sum()];
        }
    }; 

    //now, time to check the results
    /* first, we're going to see if any of the rolls are equal to the previousRolls. then, we check to see if 
    any of the rolls equal each other. if either of these conditions are met, we reroll. after we reroll a die, 
    we need to check both conditions AGAIN. we repeat the process until neither of the conditions are met.
    */

    //declare the functions
    function filterPreviousRolls(previousRolls, {A, B, C}) {
        if(rerolledThisCycle) rerolledThisCycle = false;
        console.log('previousRoll before\n' +rerolledThisCycle);

        //loop thru the previousRolls
        for(var i=0; i < previousRolls.length; i++) {
            if(A.sum() == previousRolls[i]) {
                console.log(A.sum() +' is equal to ' +previousRolls[i]);
                A.reroll();
                rerolledThisCycle = true;
                continue;
            } 
            if(B.sum() == previousRolls[i]) {
                console.log(B.sum() +' is equal to ' +previousRolls[i]);
                B.reroll();
                rerolledThisCycle = true;
                continue;
            } 
            if(C.sum() == previousRolls[i]) {
                console.log(C.sum() +' is equal to ' +previousRolls[i]);
                C.reroll();
                rerolledThisCycle = true;
                continue;
            } 
            
            //no need to use else, otherwise if one statement returns true it will skip the others. 
            //because we defined rerolledThisCycle to be false, it will remain false if no conditions were met.
            
            console.log('previousRoll after\n' +rerolledThisCycle);
        }
    
        console.log(rerolledThisCycle);
    }
    
    function filterEqualRolls({A, B, C}) {
        if(rerolledThisCycle) rerolledThisCycle = false;
        console.log('equalRoll before\n' +rerolledThisCycle);

        if(A.sum() == B.sum()) { //check 1st condition
            console.log(A.sum() +' is equal to ' +B.sum());
            A.reroll();
            rerolledThisCycle = true;
        } 
        if(B.sum() == C.sum()) { //check 2nd condition
            console.log(B.sum() +' is equal to ' +C.sum());
            B.reroll();
            rerolledThisCycle = true;
        } 
        if(A.sum() == C.sum()) { //finish the last condition
            console.log(A.sum() +' is equal to ' +C.sum());
            C.reroll(); 
            rerolledThisCycle = true;
        }
        //no need to use else, otherwise if one statement returns true it will skip the others. 
        //because we defined rerolledThisCycle to be false, it will remain false if no conditions were met.

        console.log('equalRoll after\n' +rerolledThisCycle);
    }

    //call the functions
    filterPreviousRolls(previousRolls, resourceDieObj);
    filterEqualRolls(resourceDieObj);
    console.log(rerolledThisCycle);
    
    //now, we need to check if any rerolls occured
    do {
        rerollcounter++;
        console.log(`Calling filterpreviousrolls ${rerollcounter}`);
        filterPreviousRolls(previousRolls, resourceDieObj);    //call the functions again
    } while(rerolledThisCycle);

    do {
        rerollcounter++;
        console.log(`Calling filterEqualRolls ${rerollcounter}`);
        filterEqualRolls(resourceDieObj);       //call the functions again
    } while(rerolledThisCycle);

    console.log(rerollcounter);
    var asd = resourceDieObj.totalSums();
    console.log(asd);

    //lastly, time to update the previousRollsArray
    previousRollsArray = resourceDieObj.totalSums();
}


function rollDie(sides) {
    if(sides == NaN) return console.log(sides +'is not a number');
    return (Math.floor(Math.random() * sides)) + 1;
}