
function myReplace(str, before, after) {
    if (before[0] === before[0].toLowerCase()) str = str.replace(before, after[0].toLowerCase() + after.slice(1));
    else str = str.replace(before, after[0].toUpperCase() + after.slice(1));
  
    return str;
}
  
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
