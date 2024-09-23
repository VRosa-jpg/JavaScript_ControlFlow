// Numbers for Area Calculation
const PI = Math.PI;
const radius = 5;
// Area of circle
const area = PI * radius * radius;
// Space per plant
const plantArea = .8;
// Initial count of plants
const numOfPlants = 20;
// Max Cap of space for garden
const maxCap = area / plantArea;

// const doublingPlantPerWeek = Math.pow(2, weeks);
// The reason you would put it inside is becasue when you cll the funtion you would want to catch the variable

function growthOfPlants(weeks) {
  // Plants doubling per week
    let doublingPlantPerWeek = Math.pow(2, weeks)
    if ((numOfPlants * plantArea)) {
        console.log(`Plants should be pruned!`)

     } else if () {
        console.log(`Plants should be monitored!`)

     } else if () {
        console.log(`Plants should be planted!`)
     }

 }


console.log(growthOfPlants(1))
console.log(growthOfPlants(2))
console.log(growthOfPlants(3))





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


