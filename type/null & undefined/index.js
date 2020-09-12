// 본 변수(타입)에 다른 할당할 수 있는 값이 없다.
var u = undefined;
var n = null;
console.log('u :', u, '\ntype :', typeof (u));
console.log('n :', n, '\ntype :', typeof (n));
// --strictNullChecks 사용하지 않는 경우 값의 undefined 와 null 은 다른 타입들에 할당 가능
// 일반적인 경우 --strictNullChecks를 사용을 권장
// 다른 타입들에서 값의 undefined 와 null 을 허용하고 싶은 경우 'union' 타입을 이용. => number | null | undefined
// 예외 : ( undefined 는 'void' 타입에 할당 가능 ) => 에러를 방지하는데 도움을 준다.
