// 타입 검사를 하지 않고 컴파일 통과가 가능

let free: any = 7;
console.log(free);

free = 'this is string';
console.log(free);

free = false;
console.log(free);

let list: any = [16, true, 'student']; // 여러 타입이 섞인 배열
console.log(list[2]);

free.notReal(); // 컴파일 성공

let sure: Object = 4; // Object 로 선언된 변수들은 어떤 값이든 할당할 수 있지만 메소드가 존재하더라도 임의로 호출할 수 없다.
//sure.toFixed(); // 컴파일러 오류
