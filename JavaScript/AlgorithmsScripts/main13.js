
function myReplace(str, before, after) {
  str = str.split(" ");
  let upperCaseMatching = before.match(/^[A-Z]/);

  str.forEach(word => {
    if (word === before) {
      let newIndexOfAfter = str.indexOf(before);
      let newAfter = after.split('');

      if (upperCaseMatching != null) {
        newAfter.splice(0, 1, newAfter[0].toUpperCase());
        newAfter = newAfter.join('');
      }
      else {
        newAfter.splice(0, 1, newAfter[0].toLowerCase());
        newAfter = newAfter.join('');
      }
      str[newIndexOfAfter] = newAfter;
    }
  })
  str = str.join(" ");
  return str;
}

console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));

