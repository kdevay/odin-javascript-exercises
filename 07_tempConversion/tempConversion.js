
// Convert fahrenheit to celcius
const ftoc = function(fTemp) {
  let cTemp = (fTemp - 32) / 1.8;
  // round
  cTemp = (round(cTemp * 10))/10;
  return cTemp;
};

// Convert celsius to fahrenheit
const ctof = function(cTemp) {
  let fTemp = (cTemp * 1.8) + 32;
  // round
  fTemp = (round(fTemp * 10))/10;
  return fTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
