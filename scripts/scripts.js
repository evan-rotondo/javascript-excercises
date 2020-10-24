//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."

let jobTitile = `janitor`
let geoLocation = `school`
let annualSalary = `5k`
let companyName = `scoop poopers`


console.log(`this is a test`)

console.log(`You will be a ${jobTitile} in ${geoLocation}, making $${annualSalary} for ${companyName}`);


//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.

let currentYear = `2220`
let birthYear = `1913`
let age = currentYear-birthYear

console.log(`They are ${age} years old`)

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

let myAge = `33`
let maximumAge = `233`
let amountPerDay = `75`
let lifetimeSupply = (maximumAge - myAge) *75

console.log(`You will need ${lifetimeSupply} to last you until the ripe old age of ${maximumAge}`)

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let radius =`25`
let pi = `3.14159`
let circumference = 2*(pi*radius)
let area = pi*radius*radius

console.log(`The circumference is ${circumference}`)
console.log(`The area is ${area}`)

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let celsius = `45`
let farenheit = (celsius * 9/5) +32
let temperature = `80`
let conversion = (temperature -32) *5/9


console.log(`${celsius}°C is ${farenheit}°F". ${temperature}°F is ${conversion}°C.`)



// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber (num) {
   //let num = 3
   return num ** 2
}


let theResult = squareNumber(3) 
console.log(`The root of the number is: ${theResult}`)


// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".


function halfNumber(num) {
    return num / 2
}

let theAnswer = halfNumber(16)
let initialNum = theAnswer * 2
console.log(`Half of ${initialNum} is: ${theAnswer} `)

// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."


function percentOf(numOne, numTwo) {
    return numOne / numTwo * 100
}

let numOne = 50
let numTwo = 100
let perOf = percentOf (numOne, numTwo)


console.log(`${numOne} is ${perOf}% of ${numTwo}`)


// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle (radius) {
    return Math.PI * radius ** 2
}

let rad = 50
let circleArea = areaOfCircle (rad)
let wholeNum = circleArea.toFixed(2)


console.log(`The area for a circle with a radius of ${rad}cm is ${wholeNum}cm`)


// EXERCISE 5
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area is of the squared result (#3).




function makeItWork (num) {
    let halved = halfNumber(num)
    let skware =squareNumber(halved)
    let areas = areaOfCircle(skware)
    let percy = percentOf(skware, areas)
    let finishThem =  [ halved, skware, areas, percy]
    return finishThem
    
    
}



let num = 10
let runIt = makeItWork(num)
console.log(`Half of ${num}cm is: ${runIt[0]}cm. When you square it, it looks like this: ${runIt[1]}cm. Taking the square, it's area is: ${runIt[2].toFixed(2)}cm. Which is about: ${runIt[3].toFixed(2)}% of that total area.`)







