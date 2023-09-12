//Exercice1
function KeysEvaluation(keys) {
    switch (keys) { // switch case to check the number of keys collected so it will display the appropriate message 
        case 0:
            return "we sank together"
            break;
        case 30000:
            return "we made it"
            break;
        default:
            return "we need to swim a little bit more!"
    }
}
//Exercice 2
function FindingMaxAndMin(arr) {
    var min = arr[0]; // give min and max the fist element of the array by default
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) { // this loop will campare every element in the array with the min and max value and modify them to find the appropriate one
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return `The smallest number is ${min} and the biggest number is ${max}`
}
//Exercice 3
function printTheTriangle() {
    for (var i = 0; i < 5; i++) {
        var star = "*" // we will initialise the star in every loop
        for (var j = 0; j < i; j++) {
            star += "*"// concatenate the * with the variable start that we've intialised
        }
        console.log(star)
    }
    return "This is the Pattern"
}
//Exercice 4
function findTheLargestNum(array){
    var largestNumber = array[0];// we will store the largest number in this variable and give it the value by default
    for (var i = 0; i < array.length; i++) { //we will compare each element by others element using nested loop
        for (var j = 0; j < array.length; j++) {
            if(array[j]>array[i]){
                largestNumber= array[j]
            }
        }
    }
    return largestNumber
}
//Exrcice 5
function squareOfNumber(num){// this function will return the square of num which is its the argument 
    return Math.pow(num, 2)
}
