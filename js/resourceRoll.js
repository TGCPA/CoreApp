var previousRollsArray = []; //this will be updated each time rollResourceDie is called
var resourceDieObj;
var rerolledThisCycle = false;

function rollResourceDice(previousRolls) {
    //first things first, check the paramater passed:
    //hehe, I'll work on this later...
    //I will probably add another check to make sure that the array has 3 values
    
    //purpose: roll 3 sets of 2 6-sided die; 

    //so, we call rollDie(6) 6 times, then check the results of each
    //if a result returns unacceptable, we reroll it until it meets an acceptable condition

    var rerollcounter = 0; //this is used for logging purposes
    
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
        totalSums:function(){ //this should never be called except for logging purposes
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

function updateDiceDisplay({A, B, C}) { //purpose of function: visualize the results of rollResourceDice
    //define the variables of the elements
    var redDiceImgElement, yellowDiceImgElement, blueDiceImgElement, greenDiceImgElement;
    //assign the element objects to the variables
    redDiceImgElement = document.getElementsByClassName('red')[0]; 
    yellowDiceImgElement = document.getElementsByClassName('yellow')[0];
    //red & yellow are each a specific element
    //blue & green are going to be an array b/c I don't want to define 2 different variables
    blueDiceImgElement = document.getElementsByClassName('blue');
    greenDiceImgElement = document.getElementsByClassName('green');

    //now that the HTML variables are assigned, we can declare & assign the JS vars using resourceDieObj
    var redDiceRes, yellowDiceRes, blueDiceRes, greenDiceRes;
    redDiceRes = A.die1;
    yellowDiceRes = A.die2;
    blueDiceRes = [B.die1, B.die2]; //again, following array format (consistency)
    greenDiceRes = [C.die1, C.die2];

    //alright, next step is to get the dice images and send them to the HTML doc
    var diceImg = {
        red:`img/dice-face/red/${redDiceRes}.jpg`,
        yellow:`img/dice-face/yellow/${yellowDiceRes}.jpg`,
        blue:[
            `img/dice-face/blue/${blueDiceRes[0]}.jpg`,
            `img/dice-face/blue/${blueDiceRes[1]}.jpg`,
        ],
        green:[
            `img/dice-face/green/${greenDiceRes[0]}.jpg`,
            `img/dice-face/green/${greenDiceRes[1]}.jpg`,
        ]
    }; //an object is just like a collection of variables

    //we have the images for each dice res, now time to send them to the HTML
    redDiceImgElement.src = diceImg.red;
    yellowDiceImgElement.src = diceImg.yellow;
    blueDiceImgElement[0].src = diceImg.blue[0];
    blueDiceImgElement[1].src = diceImg.blue[1];
    greenDiceImgElement[0].src = diceImg.green[0];
    greenDiceImgElement[1].src = diceImg.green[1];
    //okay, the images are in the HTML. next we have to update the results 
    document.getElementById('sum1').innerText = A.sum();
    document.getElementById('sum2').innerText = B.sum();
    document.getElementById('sum3').innerText = C.sum();
    //end
    //logging:
    console.log(diceImg);
}


function rollDie(sides) {
    if(sides == NaN) return console.log(sides +'is not a number');
    return (Math.floor(Math.random() * sides)) + 1;
}