enum Color {Red = 1, Green = 3, Blue, White} // 모든 값 수동 설정이 가능

let a: Color = Color.Red;
let b: string = Color[3];
let c: Color = Color.Blue; // 정의되지 않은 Blue 에 일치하는 값을 만들어냄.
let d: string = Color[5]; // 정의되지 않은 5 라는 값의 일치하는 항목을 알아낼 수 있다.

console.log('a :', a);
console.log('b :', b);
console.log('c :', c);
console.log('d :', d);
