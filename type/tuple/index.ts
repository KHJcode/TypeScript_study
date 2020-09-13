// 요소의 타입과 갯수가 고정된 배열 표현 가능.

let x: [string, number];

x = ["hello", 10]; // success
console.log('x :', x);

x[1].substring(1); // error

x[2] = true; // error
