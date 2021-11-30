// this code is about conversing algebraic numbers to roman numbers. at first time, it did look intimidating but I solved it with simple math;
// firstly I created a division where the program can find the maximum number in the object "numerals" able to create a division where it can find some remainder;
// while there is values to analyse, the "roman" variable will receive  the value of the found romanic number times the amount of times which it can be multiplied without be greater than the num;
// after that the num variable becomes the remainder of the previous division ultil the loop ends;
// if you don't understand you can reach through simple math.

const numerals = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M"
};

function convertToRoman(num) {
  let roman = "";

  for (let c = 12; c >= 0; c--) {
    let currentNum = Object.keys(numerals)[c];
    const restDivision = Math.round(num % currentNum);
    const entireDivision = Math.floor(num / currentNum);

    if (restDivision < num) {
      num = num - entireDivision * currentNum;
      roman += Object.values(numerals)[c].repeat(entireDivision);
      if (num == 0) {
        break;
      }
    };
  }
 return roman;
}

console.log(convertToRoman(2019));
