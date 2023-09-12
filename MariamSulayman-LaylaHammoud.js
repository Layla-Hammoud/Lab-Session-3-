//Exercice1
// var keys = 0;
// switch(keys) { // switch case to check the number of keys collected so it will display the appropriate message 
//   case 0:
//     console.log("we sank together")
//     break;
//   case 30000:
//     console.log("we made it")
//     break;
//   default:
//     console.log("we need to swim a little bit more!")
// }
//Exercice 2
// var arr = [5, 10, 20, 1, 15, -1];
// var min = arr[0]; // give min and max the fist element of the array by default
// var max = arr[0];
// for (var i = 0; i < arr.length; i++) { // this loop will campare every element in the array with the min and max value and modify them to find the appropriate one
//     if (arr[i]<min){
//         min = arr[i]
//     }
//     if (arr[i]>max){
//         max=arr[i]
//     }
// }
// console.log(`The smallest number is ${min} and the biggest number is ${max}`)

//Exercice 3
// for (var i = 0; i < 6; i++) {
//     var star = "" // we will initialise the star in every loop
//     for(var j =0 ; j < i; j++){
//         star+="*"// concatenate the * with the variable start that we've intialised
//     }
//     console.log(star)
// }

//Exercice 4
// var array = [4000, 5, 200, -11, 300];
// var largestNumber = array[0];// we will store the largest number in this variable and give it the value by default
// for (var i = 0; i < array.length; i++) { //we will compare each element by others element using nested loop
//     for (var j = 0; j < array.length; j++) {
//         if(array[j]>array[i]){
//             largestNumber= array[j]
//         }
//     }
// }
// console.log(largestNumber)

//Exrcice 5
let num = 2
function squareOfNumber(num){// this function will return the square of num which is its the argument 
    return Math.pow(num, 2)
}
console.log(squareOfNumber(4))