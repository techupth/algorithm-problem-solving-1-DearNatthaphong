function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }

  if (result.length > 2) {
    return result.slice(0, 2);
  } else {
    return result;
  }
}

let numbers = [2, 7, 11, 15];

console.log(twoSum(numbers, 9)); // [0,1]
console.log(twoSum(numbers, 13)); // [0,2]
console.log(twoSum(numbers, 17)); // [0,3]
console.log(twoSum(numbers, 18)); // [1,2]
console.log(twoSum(numbers, 22)); // [1,3]
console.log(twoSum(numbers, 26)); // [2,3]

console.log(twoSum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 20)); // [0,9]
