// convert HTML entities;

const entities = [
  ['amp', '&'],
  ['lt', '<'],
  ['gt', '>'],
  ['quot', '"'],
  ['apos', "'"]
]

function convertHTML(str) {
  const regex = /(\&)|(\<)|(\>)|(\")|(\')/g;
  let entitiesMatch = str.match(regex);
  let conversion = [];

  if (entitiesMatch !== null) {
      entities.map(exp => {
      entitiesMatch.filter(elem => {
        if (elem === exp[1]) conversion.push(exp[0]);
      })
    })
    for (let i = 0; i < entitiesMatch.length; i++) str = str.replace(entitiesMatch[i], `&${conversion[i]};`);
  }
  return str;
}

console.log(convertHTML("Schindler's List"));
