const landBaseSpawnRate = 65; //65% for ANY animals to spawn when a hex is first being settled
//this decreases by 15 for each animal population on an adjacent hex
const seaBaseSpawnRate = 75; //same rules as landBaseSpawnRate

function determineSpawns() {
    //information I'll need:
    /*
    current hex / animal type
    current spawn chance
    
    */
    let determiner = Math.floor(Math.random()  * 100) + 1; //random number between 1 and 100


}