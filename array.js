var duplicateArray = [1,2,3,2,2,3,4,5];

var myUniq = function(array){

  var finalArray = [];
  for(var i = 0; i < array.length; i++){
    //i = 0 => '1', []
    //i = 1 => '2', [1]
    //i = 2 => '3', [1,2], dupe = 'false'
    //i = 3 => '2', [1,2,3], dupe = 'true'
    //i = 4 => '2', [1,2,3], dupe = 'true'
    var dupe = false;

    for(var j = 0; j < finalArray.length; j++){
      if (array[i] === finalArray[j]){
        dupe = true;
        break;
      }
    }

    if(dupe === false){
      finalArray.push(array[i]);
    }
    //no change
  }
  return finalArray;
};



console.log(myUniq(duplicateArray));

/* monkey-patch approach, but don't do it
Array.prototype.uniq = function () {

}
*/

var twosumArray = [1,2,-3, -1,0,-2,-1];

var twoSums = function(array) {
  var finalArray = [];
  for(var i = 0; i < array.length - 1; i++){
    for(var j = i + 1; j < array.length; j++){
      if (array[i] + array[j] === 0){
        finalArray.push([i,j])
      }
    }
  }
  return finalArray;
};

console.log(twoSums(twosumArray));


var rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

  /*  [] << [0, 3, 6]
     [[0,3,6]] << [1,4,7]
     [[0,3,6],[1,4,7]] << [2,5,8]
  */
var myTranspose = function(array){
  var finalArray = [];
  var rows = array.length;
  var cols = array[0].length;

  for(var col = 0; col < cols; col++){

    var tempArr = [];
    for(var row = 0; row < rows; row++){
      tempArr.push(array[row][col]);
      //finalarray[col][row] = array[row][col]
    }

    finalArray.push(tempArr);
  }

  return finalArray;
};

console.log(myTranspose(rows));
