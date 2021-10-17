function leapYear(year) {
  if( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return year+'年はうるう年です';
  }
  return year+'年はうるう年ではありません';
}

console.log(leapYear(2020));
console.log(leapYear(2021));
