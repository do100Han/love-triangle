/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(arr) {
  // your implementation
  var number = 0;
  for (let i = 0; i < arr.length; i++) {
    var a = arr[i],
        b = arr[a - 1],
        c = arr[b - 1];
    if ( c == (i + 1) && a != b && b != c && c != a ) {
      number++;
    } 
  }
  return number/3;

};
