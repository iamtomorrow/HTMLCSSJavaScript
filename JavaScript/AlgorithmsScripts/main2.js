function reverseString(str) {
  let strIndex = str.length - 1;
  let reverse = "";

  for (strIndex; strIndex >= 0; strIndex--) {
    // console.log(str[strLen]);
    reverse += str[strIndex];
  }

  return reverse;
}

console.log(reverseString("hello"));
