function evenHyphen(num) {
  var result, wN;
  // initialising variables 
  num = num.toString();
  // converting to string
  result = [];
  for (let i = 0, len = num.length; i < len; i += 1) {
    wN = Number.parseInt(num[i]);
    if (i === 0) {
      result.push(wN.toString());
      continue;
    }
    if (Number.parseInt(num[i - 1])
      % 2 === 0 && wN % 2 === 0) {
      result.push(`-${wN}`);
    } else {
      result.push(wN.toString());
    }
  }
  console.log(result.join(""));
}
evenHyphen(025468)