var bubbleArray = [3, 5, 4, 31, 9, 6, 8];

var bubbleSort = function(array){

  var sorted = false; //flag to see if any position has been swapped

  while (!sorted) { //if no positions were swapped, then array is sorted
    sorted = true;

    for(var i = 0; i < array.length - 1; i++) {
      if(array[i] > array[i + 1]) {
        var temp = array[i];
        array[i] = array[i + 1];
        array[i+1] = temp;

        sorted = false;
      }
    }
  }

  return array;
};

console.log(bubbleSort(bubbleArray))


var string = "assass";

var subStrings = function(string) {

  var finalArray = [];

  for(var head = 0; head < string.length; head++) {

    for (var tail = head + 1; tail <= string.length; tail++) {
      var dupe = false;
      //go through finalArray to check for duplicates
      for (var el = 0; el < finalArray.length; el++) {

        if (finalArray[el] === string.slice(head,tail)) {
          dupe = true;
        }
      }
      if (!dupe) {
        finalArray.push(string.slice(head, tail));
      }
    }

  }

  return finalArray;
}

console.log(subStrings(string));
