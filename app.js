console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i < 100; i++) 
    if (i % 2 !== 0) {
      console.log(1)  
    }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
    let output = "";

  if (i % 3 == 0) {
    output += "FIZZ";
  }

  if (i % 5 == 0) {
    output += "BUZZ";
  }

    console.log(`${i} ${output}`);
}

// Exercise 3 Section  While and Do/While
let x = 1;

do{
  if (x % 2 !== 0) {
    console.log(x)
  }
x++
} while (x < 100)



let i = 1;

while (i <= 100) {
    let output = "";

  if (i % 3 == 0) {
    output += "FIZZ";
  }

  if (i % 5 == 0) {
    output += "BUZZ";
  }

    console.log(`${i} ${output}`);

    i++;
}


// Exercise 4 Section  Find Value
let value = Math.round((Math.random() * 500));  //Generate Random Num between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100);  //Generate Random Num between 100 and 500

for (let i = 1; i < n; i++){
    if (i == value) {
      console.log(`Found ${value}`);
    break;  
    }
}

// Exercise 5 Section  Customize Fizz/Buzz
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);   
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);   
let end = Math.round(Math.random() * (1000 - 1) + 1);   
let start = Math.round(Math.random() * (10 - 1) + 1);   

for (let i = start; i <= end; i++ ) {
  let output = "";

  if (i % fizzDivisor == 0){
    output += "FIZZ"
  }

  if (i % buzzDivisor == 0){
    output += "BUZZ"
  }
  console.log(`${i} ${output}`);
}

