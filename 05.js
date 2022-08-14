function oddOrEven(arrays) {
    return arrays.reduce(function(sum, item) {return sum + item}, 0) %2 == 0 ? 'even' : 'odd'
 }

 