// Numbers for Area Calculation
const PI = Math.PI;
const radius = 5;
// Area of circle
const area = PI * radius * radius;
// Space per plant
const plantPerArea = .8;
// Initial count of plants
const initialAmountPlant = 20;
// Max Cap of space for garden
const maxCap = Math.floor(area / plantPerArea); //98 meters for plant

// The reason you would put it inside is becasue when you call the funtion you would want to catch the variable

// Part 1

function growthOfPlants(weeks) {
   // Variable - Plants doubling per week
    let doublingPlantPerWeek = Math.pow(weeks, 2) * initialAmountPlant;

   // Variable - Area plants can take up per week
    let totalAreaOfPlants = doublingPlantPerWeek * plantPerArea;

   // Pruned - if it is more than 80% -- refer to lab
    if (totalAreaOfPlants > (maxCap * .8)) {
      // Ouput statement
        return (`Plants should be pruned!\nPlant Area Amount: ${totalAreaOfPlants}\nMaxCap: ${(maxCap * .8)}`)

   // Monitored - between 50% and %80 - because we already have a condition on whether it goes above %80
     } else if (totalAreaOfPlants >= (maxCap * .5)) {
      // Ouput statement
      return (`Plants should be Monitored!\nPlant Area Amount: ${totalAreaOfPlants}\nMaxCap: ${(maxCap)}`)

   // Planted - should be less than %50 so %50 area has to be more than totalarea of plants
     } else if (totalAreaOfPlants < (maxCap * .5)) {
      // Ouput statement
      return (`More plants should be planted!\nPlant Area Amount: ${totalAreaOfPlants}\nMaxCap: ${(maxCap * .5)}`)

     }
 }



console.log(growthOfPlants(1))
console.log(growthOfPlants(2))
console.log(growthOfPlants(3))


let tenWeeksNoPruning = Math.pow(2, 10) * 100 // 102400


let newAreaTenWeeks = tenWeeksNoPruning * plantPerArea

// Part two

const newInitialPlantAmount = 100;

function newArea(weeks){
    // This is would be the area of initial 100 plants, no pruning and the amount of space each plant needs 
    let noPruning = Math.pow(2, weeks) * newInitialPlantAmount;

    //81920 for total plant area using .8 per plant as metric
    let newPlantArea = noPruning * plantPerArea;

    if (noPruning > maxCap) {
      console.log(`The expanded garden would have to be ${newPlantArea} meters if not pruned for ${weeks} weeks.`) 
    } else {
      console.log(`The garden is large enough!`)
    }
}

newArea(10)
