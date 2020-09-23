// JS 의 표준 자료형 집합과 사용하면 도움이 됨
// 기본적으로 0부터 시작하여 요소들에 번호를 매김

enum Color { Red = 1, Green = 3, Blue, White }; // 수동 설정이 가능

let a: Color = Color.Red;
let b: string = Color[3];
let c: number = Color.Blue; // 정의되지 않은 Blue 에 일치하는 값을 알아냄.
let d: string = Color[5]; // 정의되지 않은 5 라는 번호에 일치하는 항목을 알아낼 수 있다.

console.log('a :', a);
console.log('b :', b);
console.log('c :', c);
console.log('d :', d);

console.log('enum :', Color);
