// Numbers for Area Calculation
const PI = Math.PI;
const radius = 5;
const area = PI * radius * radius;
const plantArea = .8;
const numOfPlants = 20;
const multiplier = 2;




// Pruned 
console.log(numOfPlants * plantArea) // 16
console.log(area) // 78.53...

if ((((numOfPlants * 2)*2) * plantArea) < (area * .8)) {
    console.log(`Space for plants in week 3 is ${((numOfPlants*2)*2) * plantArea} and 80% of the garden is ${area * .8}, meaning it is time to prune.`)
}



