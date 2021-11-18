// sort a array and add num to the rigth place into it,
// I've used a simpler for to sort arrays with comparisson function but it works fine to me;
// after I've created a if-else statement to see I could I do firts. in this case I prefered to check if the last number in the passed way would be less than the passeed num parameter;
// after it, I create this time a for loop to iterate the array and search if the values in the positions were greater or equal to num;
// if the number in the index "i" was greater, so that place would be the new place of num, if it was equal I'd do nothing.

function getIndexToIns(arr, num) {
    let sortedArr = arr.sort(function(a, b) { return a - b});
    let arrLen = sortedArr.length;
    var index = 0;

    if (sortedArr[arrLen - 1] < num) { sortedArr.push(num); index = arrLen }
    else {
        for (let i = 0; i < arrLen; i++) {
            // console.log(arr[i]);
            if (sortedArr[i] > num) {
                index = i;
                sortedArr.splice(index, 0, num);
                break;
            }
            else if (sortedArr[i] == num) {
                index = i;
                break;
            }
        }
    }
    console.log(sortedArr);
    return index;
}
  
console.log(getIndexToIns([2, 5, 10], 15));
