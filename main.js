// Numbers for Area Calculation
const PI = Math.PI;
const radius = 5;
// Area of circle
const area = PI * radius * radius;
// Space per plant
const plantPerArea = .8;
// Initial count of plants
const numOfPlants = 20;
// Max Cap of space for garden
const maxCap = Math.floor(area / plantPerArea);

// const doublingPlantPerWeek = Math.pow(2, weeks);
// The reason you would put it inside is becasue when you cll the funtion you would want to catch the variable

function growthOfPlants(weeks) {
   // Plants doubling per week
    let doublingPlantPerWeek = Math.pow(2, weeks) * numOfPlants;

   // Area plants can take up per week
    let totalAreaOfPlants = doublingPlantPerWeek * plantPerArea;

   // Pruned - if it is more than 80% -- refer to lab
    if (totalAreaOfPlants > (maxCap * .8)) {

        return (`Plants should be pruned!\nPlant Area Amount: ${totalAreaOfPlants}\nMaxCap: ${(maxCap * .8)}`)

   // Monitored - between 50% and %80 - because we already have a condition on whether it goes above %80
     } else if (totalAreaOfPlants >= (maxCap * .5) /**&& totalAreaOfPlants < (maxCap * .8)*/) {

      return (`Plants should be Monitored!\nPlant Area Amount: ${totalAreaOfPlants}\nMaxCap: ${(maxCap)}`)

   // Planted - should be less than %50 so %50 area has to be more than totalarea of plants
     } else if (totalAreaOfPlants < (maxCap * .5)) {

      return (`More plants should be planted!\nPlant Area Amount: ${totalAreaOfPlants}\nMaxCap: ${(maxCap * .5)}`)

     }

 }


console.log(growthOfPlants(1))
console.log(growthOfPlants(2))
console.log(growthOfPlants(3))
console.log(maxCap * .5)





// Pruned 
// console.log(numOfPlants * plantArea) // 16
// console.log(area) // 78.53...

// if ((((numOfPlants * 2)*2) * plantArea) < (area * .8)) {
//     console.log(`Space for plants in week 3 is ${((numOfPlants*2)*2) * plantArea} and 80% of the garden is ${area * .8}, meaning it is time to prune.`)

// } else if (((numOfPlants * plantArea)*2) < (area * .5) && (numOfPlants * plantArea) < (area * .8)) {
//     console.log(`Plants should be monitored.`)

// } else if ((numOfPlants * plantArea) < (area * .5)) {
//     console.log(`Plants should be planted`)
// }


