function houseNumbersSum(a) {
  var sum = 0
  for (var i=0; i<a.length; i++){
    if (a[i]==0){
      return sum
    } else {
      sum += a[i]
    }
    
  }
  
  
}
