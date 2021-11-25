// create a multi dimensional array with (size) subsets. it was not so easy, so I need speacially Array.prototype.slice() to create a copy of a new array and after Array.prototype.push() to assign a new subset;
// I did some simple math with Math.ceil to round the division of the length of the array by the size of each subset to figure out how many time the program would need to create new subsets;

function chunkArrayInGroups(arr, size) {
    let arrLen = arr.length;
    let newArr = [];

    if (size == 1) {
        return arr;
    }
    let numberOfGroups = Math.ceil(arrLen/size);
    let index = 0;
    let lastIndex = size;
    for (let i = 0; i < numberOfGroups; i++) {
        if (lastIndex < arrLen) {    
            newArr.push(arr.slice(index, lastIndex));
        }
        else {
            newArr.push(arr.slice(index, arrLen));
        }
        index += size;
        lastIndex += size;
    }
    return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
