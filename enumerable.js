//arary.each { |el| stuff }
var simpleArr = [1,3,5];
var arr = [1,2,6,8,4,65,9];

var func = function(el) {
  return el * 2;
}

var myEach = function(array, eff) {

  for(var i = 0; i < array.length; i++) {
    eff(array[i]);
  }

  return array;
}

console.log(myEach(arr, func));

var myMap = function(array, eff) {

  var finalArray = [];

  var mapped = function(el){
    finalArray.push(eff(el));
  };

  myEach(array, mapped);
  return finalArray;
}

console.log(myMap(arr,func));

var myInject = function(array){
  var accumulator = array[0];
  var inject = function(el){
    accumulator += el;
  };

  myEach(array.slice(1), inject);
  return accumulator;
};

console.log(myInject(arr));
