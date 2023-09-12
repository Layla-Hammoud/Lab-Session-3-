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

var arr = [5, 10, 20, 1, 15, -1];
var min = arr[0]; // give min and max the fist element of the array by default
var max = arr[0];
for (var i = 0; i < arr.length; i++) { // this loop will campare every element in the array with the min and max value and modify them to find the appropriate one
    if (arr[i]<min){
        min = arr[i]
    }
    if (arr[i]>max){
        max=arr[i]
    }
}
console.log(`The smallest number is ${min} and the biggest number is ${max}`)