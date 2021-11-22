// in this code I had tried to create a new array with the symetric difference between two other arrays passed as parameters in a function;
// as you can see, firstly I created two new arrays containing the indexes in the two arrays where we have equal values;
// after I replaced the repeated values with an empty double quote "" inside the two arrays passed previously;
// after that, I just assign the values differents of "" to a newer array;
// I could have used Array.prototype.concat() but it didn't work. you can use that if you want;

function diffArray(arr1, arr2) {
    let newArr = [];
    let arr1Len = arr1.length;
    let arr2Len = arr2.length;
    let arr1Index = [];
    let arr2Index = [];

    for (let i = 0; i < arr1Len; i++) {
        for (let e = 0; e < arr2Len; e++) {
            if (arr1[i] == arr2[e]) {
                arr1Index.unshift(arr1.indexOf(arr1[i]));
                console.log(arr1[i], " index = ", arr1.indexOf(arr1[i]));
                arr2Index.unshift(arr2.indexOf(arr2[e]));
                console.log(arr2[e], " index = ", arr2.indexOf(arr2[e]));
                console.log("==========");
            }
        }
    }
    let arr1IndexLen = arr1Index.length;
    for (let i = 0; i < arr1IndexLen; i++) {
        arr1[arr1Index[i]] = "";
        // arr1.splice(arr1Index[i], 1);
        // console.log(arr1.length);
    }
    let arr2IndexLen = arr2Index.length;
    for (let e = 0; e < arr2IndexLen; e++) {
        arr2[arr2Index[e]] = "";
        // arr2.splice(arr2Index[e], 1);
        // console.log(arr2.length);
    }

    newArr = arr1.concat(arr2);
    let newerArr = [];
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] != "") {
            newerArr.push(newArr[i]);
        }
    }
    return newerArr;
}
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
