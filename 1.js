// const findMostFrequentDigit = (num) => {
//   let n = num
//     .toString()
//     .split("")
//     .map((n) => parseInt(n, 10));

//   const digitCounts = n.reduce((counts, digit) => {
//     counts[digit] = (counts[digit] || 0) + 1;
//     return counts;
//   }, {});

//   let maxCount = 0;
//   let mostFrequentDigit = null;

//   for (const digit in digitCounts) {
//     if (
//       digitCounts[digit] > maxCount ||
//       (digitCounts[digit] === maxCount && digit > mostFrequentDigit)
//     ) {
//       maxCount = digitCounts[digit];
//       mostFrequentDigit = digit;
//     }
//   }

//   return { digit: mostFrequentDigit, count: maxCount };
// };

// const result = findMostFrequentDigi(11222334444555556666);
// console.log(`Most frequent digit: ${result.digit}, Count: ${result.count}`);

// const haapyNum = (num) => {
//   const result = {};
//   let change = String(num)
//     .split("")
//     .map((v) => Number(v));
//   change.forEach((x) => {
//     result[x] = (result[x] || 0) + 1;
//   });
//   const keys = Object.keys(result);
//   const values = Object.values(result);

//   const maxValue = Math.max(...values);
//   const maxIndex = values.indexOf(maxValue);
//   const maxKey = keys[maxIndex];
//   return [maxKey, maxValue];
// };

// console.log(haapyNum(1122333444456));
const findHappyNumber = (num) => {
  const result = {};
  let change = String(num)
    .split("")
    .map((v) => Number(v));

  change.forEach((x) => {
    // result[x] = (result[x] || 0) + 1;
    result[x] = change.filter((v) => v === change[x]).length;
  });
  console.log(Object.entries(result)[0][0]);

  // // 최대 빈도 구하기
  // const maxFrequency = Math.max(...Object.values(result));

  // // 최대 빈도를 가진 숫자들 찾기
  // const foundNumbers = Object.keys(result)
  //   .filter((key) => result[key] === maxFrequency)
  //   .map(Number);
  // // 최대 빈도가 같은 경우 높은 키를 가진 숫자 찾기
  // const maxKey = Math.max(...foundNumbers);
  // return `Happy number is ${maxKey} with a frequency of ${maxFrequency}`;
  return result;
};

console.log(findHappyNumber(1111222233334698));
