// code created to return all the objects in the firt arguments which contains all the keys and values of the second argument;
// I created a for loop instead of a filter beacause this code makes a mess in my head just with two simple for loops, but it is working as it can be;
// you can ignore the comments in this code assuming they were used to me to check what was happening in the code between the loops, so it is a very efficient debug technic;

function whatIsInAName(collection, source) {
    const newArr = [];
    const collectionLen = collection.length;
    const sourceKeys = Object.keys(source);
    const sourceLen = sourceKeys.length;

    for (let i = 0; i < sourceLen; i++) {
        for (let c = 0; c < collectionLen; c++) {
            // console.log(`source keys ${i} => ${sourceKeys[i]}`)
            // console.log(`collection keys ${c} => ${Object.keys(collection[c])}`);

            // console.log(sourceKeys[i]);
            // console.log(`colection[${sourceKeys[i]}] ${Object.values(source)[i]} => ${Object.values(collection)[c][sourceKeys[i]]}`);
            // console.log(Object.values(source));

            if (!collection[c].hasOwnProperty(sourceKeys[i]) || Object.values(source)[i] != Object.values(collection)[c][sourceKeys[i]]) {
                collection[c] = [];
            }
        }
    }

    for (let e = 0; e < collection.length; e++) {
        if (collection[e].length != 0) {
            newArr.push(collection[e]);
        }
    }

    return newArr;
}
  
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
