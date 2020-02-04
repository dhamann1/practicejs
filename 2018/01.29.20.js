// Jumping number is the number that All adjacent digits in it differ by 1.

function jumpingNumber(n){
    var arr = n.toString().split('')
    for(i=0; i < arr.length-1; i++){
      if(Math.abs(arr[i] - arr[i+1]) !== 1 ){
        return "Not!!";
      }
    }
    return "Jumping!!";
  }