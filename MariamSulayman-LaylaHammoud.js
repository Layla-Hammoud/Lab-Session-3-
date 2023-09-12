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
var min = arr[0];
var max = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (arr[i]<min){
        min = arr[i]
    }
    if (arr[i]>max){
        max=arr[i]
    }
}
console.log(`${min} and ${max}`)