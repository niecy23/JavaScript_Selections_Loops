console.log("Hello World!\n==========\n");

// Exercise 1 Section - Ignore Even
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i < 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  } else {
    continue;
  }
}

// Exercise 2 Section - FIZZBUZZ
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
  let answer = "";
  if (i % 3 == 0) {
    answer += "FIZZ";
  }
  if (i % 5 == 0) {
    answer += "BUZZ";
  }
  console.log(`${i} ${answer}`);
}

// Exercise 3 Section - Repeat with While and Do/While
console.log("EXERCISE 3:\n==========\n");

//Exercise 1 as while and do/while statement
let i = 1;
while (i < 100) {
  if (i % 2 != 0) {
    console.log(i);
  }

  i++;
}

let x = 1;
do {
  if (x % 2 !== 0) {
    console.log(x);
  }

  x++;
} while (x < 100);

//Exercise 2 as while and do/while statement
let y = 1;
while (y <= 100) {
  let answer = "";
  if (y % 3 == 0) {
    answer += "FIZZ";
  }
  if (y % 5 == 0) {
    answer += "BUZZ";
  }

  console.log(`${y} ${answer}`);

  y++;
}

let m = 1;
do {
  let answer = "";
  if (m % 3 == 0) {
    answer += "FIZZ";
  }
  if (m % 5 == 0) {
    answer += "BUZZ";
  }

  console.log(`${m} ${answer}`);

  m++;
} while (m <= 100);

// Exercise 4 Section - Find Value
console.log("EXERCISE 4:\n==========\n");

let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);

for (let i = 1; i <= n; i++) {
  if (i == value) {
    console.log(`Found value: ${value} between 1-${n}!`);
    break;
  }
  if (i == n) {
    console.log(`Did not find value ${value} between 1-${n}!`);
  }
}

// Exercise 5 Section - BONUS - Customized FIZZBUZZ
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 100) + 100);

for (let i = start; i <= end; i++) {
  let answer = "";
  if (i % fizzDivisor == 0) {
    answer += "FIZZ";
  }
  if (i % buzzDivisor == 0) {
    answer += "BUZZ";
  }
  console.log(`${i} ${answer}`);
}
