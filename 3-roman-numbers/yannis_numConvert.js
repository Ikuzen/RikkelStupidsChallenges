var thousandsDigits = function thousandsDigits(arabicNum,currentValue) {
  if (arabicNum.length > 3) {
    for (let i = 0; i < parseInt(arabicNum.slice(0,arabicNum.length - 3)); i++) {
      currentValue += 'M';
    }
  }
  return currentValue
}
var hundredsDigits = function hundredsDigits(arabicNum,currentValue) {
  switch (arabicNum[arabicNum.length - 3]) {
    case undefined:
      break
    case "9":
      currentValue += 'CM'
      break;
    case "8":
      currentValue += 'DCCC'
      break;
    case "7":
      currentValue += 'DCC';
      break;
    case "6":
      currentValue += 'DC';
      break;
    case "5":
      currentValue += 'D'
      break;
    case "4":
      currentValue += 'CD'
      break;
    case "3":
      currentValue += 'CCC'
      break;
    case "2":
      currentValue += 'CC'
      break;
    case "1":
      currentValue += 'C'
      break;
  }
  return currentValue
}
var dozenDigits = function dozenDigits(arabicNum,currentValue) {
  switch (arabicNum[arabicNum.length - "2"]) {
    case undefined:
      break
    case "9":
      currentValue += 'XC'
      break;
    case "8":
      currentValue += 'LXXX'
      break;
    case "7":
      currentValue += 'LXX';
      break;
    case "6":
      currentValue += 'LX';
      break;
    case "5":
      currentValue += 'L'
      break;
    case "4":
      currentValue += 'XL'
      break;
    case "3":
      currentValue += 'XXX'
      break;
    case "2":
      currentValue += 'XX'
      break;
    case "1":
      currentValue += 'X'
      break;
  }
  return currentValue
}
var unitsDigit = function unitsDigit(arabicNum,currentValue) {
  switch (arabicNum[arabicNum.length - 1]) {
    case undefined:
      break
    case "9":
      currentValue += 'IX'
      break;
    case "8":
      currentValue += 'VIII'
      break;
    case "7":
      currentValue += 'VII';
      break;
    case "6":
      currentValue += 'VI';
      break;
    case "5":
      currentValue += 'V'
      break;
    case "4":
      currentValue += 'IV'
      break;
    case "3":
      currentValue += 'III'
      break;
    case "2":
      currentValue += 'II'
      break;
    case "1":
      currentValue += 'I'
      break;
  }
  return currentValue
}

var arabicToUrn = (min, max) => {
  let result = [];
  let currentValue = "";
  // converting the first value
  for (let i = 1; i < Math.floor(min % 5); i++) {
    currentValue += "/";
  }
  for (let i = 0; i < Math.floor(min / 5); i++) {
    currentValue += "L";
  }

  for (let i = min; i <= max; i++) {

    if (i % 5 !== 0) {
      currentValue = '/' + currentValue;
      if (currentValue.length < 1) {}
    } else if (i % 5 === 0) {
      currentValue = currentValue.slice(4);
      currentValue += 'L';
    }
    i > min ? result.push(" " + currentValue) : result.push(currentValue);
  }
  return result.toString();
}
var urnToArabic = (min, max) => {
  let result = [];
  let arabicMin = 0;
  let arabicMax = 0;
  // converting the min and the max to arabic
  for (let i = 0; i < min.length; i++) {
    min[i] === '/' ? arabicMin++ : arabicMin += 5;
  }
  for (let i = 0; i < max.length; i++) {
    max[i] === '/' ? arabicMax++ : arabicMax += 5;
  }

  for (let i = arabicMin; i <= arabicMax; i++) {
    i < arabicMax ? result.push(i + " ") : result.push(i);
  }
  return result.toString();
}


var arabicToRoman = (min, max) => {
  let result = [];
  var currentValue = "";
  // min = min.toString();
  //converting the first value
  // Over 1000 digits
  for(let i= min; i<= max; i++){
    currentValue = thousandsDigits(i.toString(),currentValue);
    currentValue = hundredsDigits(i.toString(),currentValue);
    currentValue = dozenDigits(i.toString(),currentValue);
    currentValue = unitsDigit(i.toString(),currentValue);
    i> parseInt(min) ? result.push(" "+currentValue) : result.push(currentValue)
    currentValue= ""
  }
  return result.toString();
}
module.exports = {
  arabicToUrn,
  urnToArabic,
  arabicToRoman,
  thousandsDigits,
  unitsDigit,
  hundredsDigits,
  dozenDigits
}
console.log(arabicToRoman(1, 10))
