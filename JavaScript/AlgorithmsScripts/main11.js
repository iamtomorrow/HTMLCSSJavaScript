
const validNumbers = ["555-555-5555", "(555)555-5555", "(555) 555-5555", "555 555 5555", "5555555555", "1 555 555 5555"];

function telephoneCheck(str) {
  const regex = /^(1\s|1)?((\d{3})|(\(\d{3}\)))[\s\-]?\d{3}[\s\-]?\d{4}$/igm;

  // console.log(str.match(regex));
  return regex.test(str);
}

console.log(telephoneCheck("1 (555)-555-5555"));
