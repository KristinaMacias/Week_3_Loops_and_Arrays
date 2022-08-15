// pat in a hat's montana code school week 3 coding assignment
// ain't no promises this is perfect but it'll get ya there

//array problem 1
let ages = [3, 9, 23, 64, 2, 8, 28, 93, 100]

//function to subtract first value in the array from the last, the last value will change based on length of array so utilizing length -1
function arraySubtractor(array) {
    return (ages[array.length-1] - ages[0])
}
//testing the above function
console.log(arraySubtractor(ages))

//a loop to iterate through the array and calculate the average age


// using a reduce object in this function to calculate the average age