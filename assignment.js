
// Problem number 1 convert kilometer to meter

var inputInKilometer = 3;
var outputInMeter;
function kilometerToMeter(inputInKilometer){

    if(inputInKilometer > 0){
        outputInMeter = inputInKilometer * 1000;
        
    }

    else{
        console.log("Distance cannot negetive value");
    } 

    return outputInMeter ;
}
kilometerToMeter(6);
console.log(outputInMeter);



//problem Number 2  Calculate the total budget

function budgetCalculator(watch, phone, laptop){
     var watchPrice = watch * 50;
     var phonePrice = phone * 100;
     var laptoprice = laptop * 500;
     var total = watchPrice + phonePrice + laptoprice;

     return total;
   
}
 var totalPrice = budgetCalculator(0, 3, 2);
console.log(totalPrice);



// Problem number 3 add total hotel day cost


function hotelCost(day){
    var totalCost = 0;
        if( day <= 10){
            totalCost = day * 100;
        }
        else if ( day <= 20){
            var firstTenDays = 10 * 100;
            var remaining = day - 10;
            var secondTenDays = remaining * 80;
            totalCost = firstTenDays + secondTenDays;
        }
        else{
            var firstTenDays = 10 * 100;
            var secondTenDays = 10 * 80;
            var remaining = day - 20;
            var remainingAllDays = remaining * 50;
            totalCost = firstTenDays + secondTenDays + remainingAllDays;
        }
            return totalCost;
    
}
var cost = hotelCost(12);
console.log(cost);


// Problem number 4  find max element in an array

var friendsName = ["Maliha", "AntoraSaha", "Munia", "jim", "MehediRabby", "Faysalhasin" ];

function megaFriend(array)
{
  var max_element = array[0].length;
  var answer = array[0];
  for (var i = 1; i < array.length; i++) {
      var maxi = array[i].length;
      if (maxi > max_element) {
          answer = array[i];
          max_element = maxi;
      }
  }
  return answer;
}
var max = megaFriend(friendsName);
console.log(max);

