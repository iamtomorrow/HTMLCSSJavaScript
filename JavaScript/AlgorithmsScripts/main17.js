
function truthCheck(collection, pre) {
  const numberOfObjects = Object.keys(collection).length;
  let matches = 0;
  let a = (3/"j");

  for (let i = 0; i < numberOfObjects; i++) {
    for (let key in collection[i]) {
      if (key === pre && collection[i][key] !== null && collection[i][key] !== "" && collection[i][key] !== undefined && collection[i][key] > '0') matches++;
    }
  }
  if (matches === numberOfObjects) {
    return true;
  }
  return false;
}

console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));
