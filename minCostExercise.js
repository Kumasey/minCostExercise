function minCost(cost){
    var max = 100;
    var array = [];
      for(var i = 0; i < cost.length; i++){
       for(var j =0; j < cost[i].length; j++){
         if(cost[i][j] < max && array[i-1] !== cost[i][j]){
             array[i] = cost[i][j];
              max = cost[i][j];                    
         }
       }
          max = 100;
      }
      const reduced = array.reduce((total,number) => total + number);
   return reduced
  }

  //minCost([[1, 2, 3], [1, 2, 3], [3, 3, 1]]);