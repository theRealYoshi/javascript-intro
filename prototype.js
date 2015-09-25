Array.prototype.myUniq = function(){
  var finalArray = [];
  for(var i = 0; i < this.length; i++){
    var dupe = false;

    for(var j = 0; j < finalArray.length; j++){
      if (this[i] === finalArray[j]){
        dupe = true;
        break;
      }
    }

    if(dupe === false){
      finalArray.push(this[i]);
    }
  }
  return finalArray;
};

var duplicateArray = [1,2,3,2,2,3,4,5];

console.log(duplicateArray.myUniq());

Array.prototype.twoSums = function(){
  var finalArray = [];
  for(var i = 0; i < this.length - 1; i++){
    for(var j = i + 1; j < this.length; j++){
      if (this[i] + this[j] === 0){
        finalArray.push([i,j])
      }
    }
  }
  return finalArray;
};

var twosumArray = [1,2,-3, -1,0,-2,-1];
console.log(twosumArray.twoSums());


Array.prototype.myTranspose = function(){
  var finalArray = [];
  var rows = this.length;
  var cols = this[0].length;

  for(var col = 0; col < cols; col++){

    var tempArr = [];
    for(var row = 0; row < rows; row++){
      tempArr.push(this[row][col]);
      //finalarray[col][row] = array[row][col]
    }
    finalArray.push(tempArr);
  }
  return finalArray;
};

var rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];
console.log(rows.myTranspose());

Array.prototype.myEach = function(eff){
  for(var i = 0; i < this.length; i++) {
    eff(this[i]);
  }

  return this;
};

var simpleArr = [1,3,5];
var arr = [1,2,6,8,4,65,9];
var func = function(el) {
  return el * 2;
}
console.log(arr.myEach(func))


Array.prototype.myMap = function(eff){
  var finalArray = [];

  var mapped = function(el){
    finalArray.push(eff(el));
  };

  this.myEach(mapped);
  return finalArray;
};

console.log(arr.myMap(func));

Array.prototype.myInject = function(){
  var accumulator = this[0];
  var inject = function(el){
    accumulator += el;
  };

  this.myEach(inject);
  return accumulator - this[0];
};
console.log(arr.myInject());

Array.prototype.bubbleSort = function(){
  var sorted = false; //flag to see if any position has been swapped

  while (!sorted) { //if no positions were swapped, then array is sorted
    sorted = true;

    for(var i = 0; i < this.length - 1; i++) {
      if(this[i] > this[i + 1]) {
        var temp = this[i];
        this[i] = this[i + 1];
        this[i+1] = temp;

        sorted = false;
      }
    }
  }

  return this;
};

var bubbleArray = [3, 5, 4, 31, 9, 6, 8];
console.log(bubbleArray.bubbleSort());

String.prototype.subStrings = function(){
  var finalArray = [];

  for(var head = 0; head < this.length; head++) {

    for (var tail = head + 1; tail <= this.length; tail++) {
      var dupe = false;
      //go through finalArray to check for duplicates
      for (var el = 0; el < finalArray.length; el++) {

        if (finalArray[el] === this.slice(head,tail)) {
          dupe = true;
        }
      }
      if (!dupe) {
        finalArray.push(this.slice(head, tail));
      }
    }
  }
  return finalArray;
};

var string = "assignment";
console.log(string.subStrings());
