// pat in a hat's montana code school week 3 coding assignment
// ain't no promises this is perfect but it'll get ya there


//array problem #1
let ages = [3, 9, 23, 64, 2, 8, 28, 93]

//function to subtract first value in the array from the last, the last value will change based on length of array so utilizing length -1
function arraySubtractor(array) {
    return (ages[array.length-1] - ages[0])
}
console.log(arraySubtractor(ages))

// ensuring the above function is dynamic
ages.push(100);
//testing the above function
console.log(arraySubtractor(ages))

//a loop to iterate through the array and calculate the average age
let counter = 0
for (let value of ages) {
    counter += value
} console.log(Math.round(counter/ages.length))

// using a reduce object in this function to calculate the average age
let counter2 = 0
let arraySum = ages.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    counter2
        );
console.log(Math.round(arraySum/ages.length))
//added Math.round to clean things up after Frank showed us his code in class



//problem #2a
// use a function to just nest everything. Then utilize a counter and a for of loop to sum the lengths of all the names
// made an extra variable to calculate the average so I could use toFixed to limit decimal places to 2 for cleaner average
// initially got tripped up becuase I used names[name].length but with for of it seems just name.length suffices for reading # of char in each name
// mental note, someone in class used array.join then took the average, I think that's a clever way to get the solution but used for loop b/c instructions
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

// 2b - very clunky way to do this
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

//much better to use array.join here...
 function arrayTransmorgifierUltra(){
    const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
    radioactiveFrankenArray = names.join(" ")
    console.log("Zaaap!")
    return console.log(radioactiveFrankenArray)
 }
arrayTransmorgifierUltra()