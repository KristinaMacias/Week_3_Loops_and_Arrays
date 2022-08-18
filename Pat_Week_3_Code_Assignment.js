// pat in a hat's montana code school week 3 coding assignment
// ain't no promises this is perfect but it'll get ya there


//array problem #1
let ages = [3, 9, 23, 64, 2, 8, 28, 93]

// 1a - function to dynamically subtract first value in the array names from the last, the last value will change based on length of array so utilizing length -1
function arraySubtractor(array) {
    return (ages[array.length-1] - ages[0])
}
console.log(arraySubtractor(ages))

// 1b ensuring the above function is dynamic
ages.push(100);
//testing the above function
console.log(arraySubtractor(ages))

//1c - a loop to iterate through the array and calculate the average age
let counter = 0
for (let value of ages) {
    counter += value
} console.log(Math.round(counter/ages.length))

// using a reduce object in this function to calculate the average age because it seems more efficient
// also I just wanted to practice thinking about and using array methods
let counter2 = 0
let arraySum = ages.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    counter2
        );
console.log(Math.round(arraySum/ages.length))
//added Math.round to clean things up after Frank showed us his code in class



//problem #2a - use a loop to iterate through the names array and calculate avg number of letters per name then print result to console
// use a function to just nest everything. Then utilize a counter and a for of loop to sum the lengths of all the names
// made an extra variable to calculate the average so I could use toFixed to limit decimal places to 2 for cleaner average
// initially got tripped up becuase I used names[name].length but with for of it seems just name.length suffices for reading # of char in each name
// mental note, someone in class used array.join then took the average, I think that's a clever way to get the solution but I used a for loop b/c instructions
function nameCounterAverage(){
    const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
    let nameCounter = 0
    for (let name of names) {
        nameCounter += name.length
    }
    let averageNameLength = nameCounter / names.length
    return averageNameLength.toFixed(2)
}

console.log(nameCounterAverage())

// 2b - a loop that iterates through the names and concats them together separated by spaces then prints result
// very clunky way to do this but the prompt asks for this
function arrayTransmorgifier(){
    const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
    let frankenArray = "";
    for (let name of names){
        frankenArray += name + " "
    }
    console.log("Zap!")
    return console.log(frankenArray)
}
arrayTransmorgifier()

//much better to use array.join here to solve 2b
 function arrayTransmorgifierUltra(){
    const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
    radioactiveFrankenArray = names.join(" ")
    console.log("Zaaap!")
    return console.log(radioactiveFrankenArray)
 }
arrayTransmorgifierUltra()


// problem 3
// access the last element in an array via array.length -1


//problem 4
//access the first element of an array via array[0]


//problem 5 - iterates over the names array and adds the lengths of each name to a new array, NameLengths
//making it more dynamic by using a function with two array inputs
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
const nameLengths = []
function problemFive(array1, array2){
    for (let name of array1){
        array2.push(name.length)
    }
    console.log(array2)
    //problem 6 - iterates over nameLengths array to calculate sum of all elements in the array
    let arraycounter = 0
    for (let number of array2){
        arraycounter += number
    }
    console.log(arraycounter)
}
problemFive(names, nameLengths)


// problem 7 - concats word input n number of times
function concatTriple(word,n){
    let concatTotaler = ""
    for (let i = 0; i < n; i++){
        concatTotaler += word
    }
    return console.log(concatTotaler)
}
concatTriple("Hello", 3)


// problem 8 - concats first and last name to full name plus a space
function fullNameConcat(firstName, lastName){
    return console.log(firstName + " " + lastName)
}
fullNameConcat("Barb", "Dwyer")


//problem 9 - takes  an array of numbers and returns true if the sum of all numbers is greater than 100
function sumTester(array1){
    let initialValue = 0
    let arraySumEr = array1.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
    if (arraySumEr > 100){
        return true
    } else {
        return "The sum of the given array is less than 100"
    }
}
console.log(sumTester([1, 5, 16, 3, 6]))
console.log(sumTester([10, 5, 25, 50, 60]))


// problem 10 - takes an array of numbers and returns the average of all elements in the array using array.reduce
function arrayAverage(array1){
    let arraySumEr = array1.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    return arraySumEr / array1.length
}
console.log(arrayAverage([1, 5, 16, 3, 6]))
console.log(arrayAverage([10, 5, 25, 50, 60]))


// problem 11 - compares the average of array 1 and array 2 and returns true if array 1 is greater than array 2, otherwise returns false
function twoArrayComparer(array1,array2){
    let array1Sum = array1.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    let array1Avg = array1Sum / array1.length

    let array2Sum = array2.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    let array2Avg = array2Sum / array2.length

    if(array1Sum > array2Sum){
        return true
    }
    return false
}
console.log(twoArrayComparer([1, 5, 16, 3, 6],[10, 5, 25, 50, 60]))
console.log(twoArrayComparer([10, 5, 25, 50, 60],[1, 5, 16, 3, 6]))


// problem 12 - function that returns true if it is hot outside (boolean = true) and there is enough money in pocket to purchase a very pricey drink
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside === true && moneyInPocket > 10.5){
        return true
    }
    return "No drink for you!"
}
console.log(willBuyDrink(true, 11))
console.log(willBuyDrink(true, 10))
console.log(willBuyDrink(false, 12))
// after further research my friend from new york disagrees about a $10.5 drink being expensive IF its alcoholic


// problem 13 - spent a while trying to mess with interactive buttons and such in HTML with functions
// a little over my head still so going with a more basic function that takes your birth day and month and returns happy birthday if its today
function birthdayChecker(birthMonth, birthDay){
    let today = new Date()
    let todayDay = today.getDate()
    let todayMonth = today.getMonth() + 1
    let bDaySay = birthMonth === todayMonth && birthDay === todayDay ? "Happy Birthday!" : "Today is not your birthday"
    return console.log(bDaySay)
}
birthdayChecker(10,20)
birthdayChecker(8,19)
birthdayChecker(8,18)