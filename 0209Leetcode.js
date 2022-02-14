var maxProfit = function(prices) {
    for(let i = 0; i < prices.length ; i++){
      for(let j = 1; j < prices.length; i++){
        if(prices[i] < prices[j]){
          prices[j] - price
        }
      }
    }
};


maxProfit([7,1,5,3,6,4])
maxProfit([7,6,4,3,1])


// Solution 1

var maxProfit = function(prices) {
  var min = Number.MAX_SAFE_INTEGER; 
  var max = 0;
  for (var i = 0; i < prices.length; i++) {
      min = Math.min(min, prices[i]);
      max = Math.max(max, prices[i] - min);
  }
  return max;
};

// Solution 2

var maxProfit = function(prices) {
  let min = prices[0], max = 0;
  
  for(let i = 1; i < prices.length; i++){
      if(prices[i] - min > max){
          max = prices[i] - min;
      }
      
      if(prices[i] < min) min = prices[i]
  }
  
  return max;
};

// Solution 3

var maxProfit = function(prices) {
  let maxProf = 0, curr = prices[0];
  
  for(let x of prices) {
      if(curr < x) maxProf = Math.max(maxProf, x - curr);
      else curr = x;
  }
  return maxProf;
};


