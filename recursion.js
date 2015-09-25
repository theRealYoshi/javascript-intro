var range = function(start, end){

    if (end === start){
      return [end];
    }
    else {
      var tempArr = range(start + 1, end);
      tempArr.unshift(start);
      return tempArr;//.unshift(start);
    }
};

console.log(range(3,10));

var sums = [3, 5, 4, 31, 9, 6, 8];

var sumArray = function(array){
  if (array.length === 1){
    return array.pop();
  }
  else {
    return array.pop() + sumArray(array);
  }
};


console.log(sumArray(sums));


var exp1 = function(base, power){
    if (power === 0){
      return 1;
    }
    else {
      return base * exp1(base, power - 1)
    }
}

console.log(exp1(2,7));

var exp2 = function(base, power){
  if (power == 0){
    return 1;
  }
  else if (power == 1){
    return base;
  }
  else {
    if (power % 2 === 0){
      temp = exp2(base, power / 2) ;
      return temp * temp;
    }
    else {
      //2^7 = (2^3)*(2^3) * 2
      temp = exp2(base, (power-1)/2);
      return temp * temp * base;
    }
  }
};

console.log(exp2(2,9))


var fib = function(n) {

  if (n === 1) {
    return [1];
  }
  else if (n === 2) {
    return [1, 1];
  }
  else {
    var tempArr = fib(n-1);//[-1] + fib(n-2)[-2];
    tempArr.push(tempArr[n-2] + tempArr[n-3]);
    return tempArr;
  }
};

console.log(fib(7)) //=> [1,1]

var sortedArray = [1,2,4,5,6,7,9,23]; //length 8

var bsearch = function(array, target) {
  if (array.length === 1) {
    return (array[0] === target) ? 0 : null;
  }
  else {
    var middle = Math.floor(array.length / 2);
    var middleValue = array[middle];
    //console.log(middle, array[Math.floor(middle)])

    if (middleValue === target) {
      return middle;
    }
    else if (middleValue < target) {
      //console.log(array.length)
      temp = bsearch(array.slice(middle + 1, array.length), target);
      return (temp) ? (temp + middle + 1) : temp;
    }
    else {
      return bsearch(array.slice(0, middle), target);
    }
  }
};
//console.log(bsearch(sortedArray, 23));
//console.log(bsearch(sortedArray, 2));
//console.log(bsearch(sortedArray, 7));
console.log(bsearch(sortedArray, 2));

var makeChange = function(value, array) {
  if (value === 0) {
    return [];
  }
  var finalChange = [];
  //go through each coin
  for (var i = 0; i < array.length; i++) {
    var tempChange = [];

    if (value < array[i]) {
      continue;
    }
    else {
      tempChange = makeChange(value - array[i], array) ;
      tempChange.push(array[i]);

    }
    if (finalChange.length === 0){
      finalChange = tempChange;
    } else {
      if (tempChange.length < finalChange.length){
        finalChange = tempChange;
      }
    }

  }
  return finalChange;
};
console.log(makeChange(14, [10, 7, 1]));

///////////////////////////////////////////
//////// Merge //////////////
//// [2,3,4], [3,5] => [2,3,3,4,5]
var merge = function(array1, array2){
  var finalArray = [];

  while(array1.length && array2.length) {
    if (array1[0] <= array2[0]) {
      finalArray.push( array1.shift() );
    }
    else {
      finalArray.push( array2.shift() );
    }
  }

  while (array1.length) {
    finalArray.push( array1.shift() );
  }
  while (array2.length) {
    finalArray.push( array2.shift() );
  }

  return finalArray;
};
//console.log(mergeSort(sums));
console.log(merge([2,3,4], [1,6,7]));

////////// MergeSort ////////////////
var sums = [3, 5, 4, 31, 9, 6, 8];
var mergeSort = function(array){
  //base case
  var size = array.length;

  if (size < 2){
    return array;
  }

  var middle = Math.floor(size / 2)

  var sortedLeft = mergeSort(array.slice(0, middle));
  var sortedRight = mergeSort(array.slice(middle, size));

  return merge(sortedLeft, sortedRight);
};
console.log(mergeSort(sums));
//console.log("\n")

//////////////////////////////////
/////////// Subsets //////////////
// []
// [], [1]
// [], [1], [2], [1,2]
// [], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]
var subsets = function (array) {
  if (array.length === 1) {
    return [[], array];
  }
  //recursion
  var returnArr = subsets( array.slice(0, array.length - 1) );
  var lastValue = array[array.length - 1];

  var size = returnArr.length;
  for (var i = 0; i < size; i++) {
    //var tempArr = returnArr[i]; //not making a copy
    var tempArr = returnArr[i].slice(0); //makes a full copy
    tempArr.push(lastValue);
    returnArr.push(tempArr);
  }

  return returnArr;
}

console.log(subsets([1,2,3]));
