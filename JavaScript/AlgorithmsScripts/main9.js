// program that calculates the orbital period of object on the Earth's orbit based on its GM and distance from the core;


function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  
  let getPeriod = (distance) => {
    return Math.round(2*Math.PI *(Math.sqrt((distance**3) / GM)));
  }

  let altitude = arr.map(obj => {
    let newObj = {};
    newObj.name = obj.name;
    newObj.orbitalPeriod = getPeriod(obj.avgAlt + earthRadius);
    return newObj;
  });
  // const distance = earthRadius + arr[1].avAlt;

  return altitude;
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
