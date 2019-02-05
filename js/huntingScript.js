const landBaseSpawnRate = 65; //65% for ANY animals to spawn when a hex is first being settled
//this decreases by 15 for each animal population on an adjacent hex
const seaBaseSpawnRate = 75; //same rules as landBaseSpawnRate

//information I'll need:
    /*
    - find the base chance by figuring out how many
    adjacent hexes have an animal population

    - find the individual animal chance as well as the 
    number of iterations by determining the current animal
    */

function rollSpawns(adjacentNum, animal) {
    /*
    adjacentNum = the number of animal populations on an adjacent hex
    animal = the id of the animal that is being spawned
    */
    
    let baseDeterminer = generateNumber(100); //random number between 1 and 100

    var baseSpawnDecrease = adjacentNum * 15; 
    var currentBaseSpawnRate = landBaseSpawnRate - baseSpawnDecrease;
    if(currentBaseSpawnRate <= 0) return console.log('no animals spawned!');
    //pretty simple script ^
    console.log(`is ${baseDeterminer} greater than ${currentBaseSpawnRate}`);
    if(baseDeterminer > currentBaseSpawnRate) return console.log('no animals spawned!');
    //if the determiner is greater than the currentSpawnRate, no animals spawn

    //we've made it to the point where at least ONE animal
    //is guarunteed to spawn. now, we need to determine the 
    //specific animal's spawn chance and number of iterations

    //we can do that by accessing animals.js, by looking at
    //the object for the animal based off its id
    var currentAnimal = animals.filter(animalObj => animalObj.id == animal)[0];

    //define a variable that will be updated in the for loop
    //each time an animal is supposed to spawn
    var numberOfAnimalsSpawned = 0;

    //setting up a for loop to keep track of iterations:
    for(var i=0; i < currentAnimal.spawnRate.iterations; i++) {
        var currentIterationDeterminer = generateNumber(100);
        console.log(`is ${currentIterationDeterminer} less than or equal to ${currentAnimal.spawnRate.initialChance}`);

        if(currentIterationDeterminer <= currentAnimal.spawnRate.initialChance) numberOfAnimalsSpawned++;
        //take the generated number and if it is equal to or 
        //less than the spawn chance, one animal has spawned

        //repeat this until the iterations for the current animal
        //have been finished 
    }

    console.log(numberOfAnimalsSpawned);
}

function generateNumber(max) {
    //simple function to generate a random number between
    //0 and the max number specificed

    return Math.floor(Math.random()  * max) + 1;
}