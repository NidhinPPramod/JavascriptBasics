const numArray = [10, 20, 40, 30, 50];

const newArray = numArray
  .map((value) => value)
  .filter((data) => data > 10)
  .reduce((total, value) => total + value, 0);

console.log(newArray)

const newArray1 = numArray
    .map((value) => value)
    .filter((data) => data > 10)
    .sort((a,b)=>a-b)

console.log(newArray1)
