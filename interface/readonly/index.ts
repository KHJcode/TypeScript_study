interface ReadOnly {
  readonly x: number;
  readonly y: number;
}

let point: ReadOnly = { x: 10, y: 20 }; // 첫 할당 이후에는 수정이 불가능하다.

point.x = 5; // 에러

// ReadonlyArray 타입을 지원하여 생성 후 배열의 변경을 방지할 수 있다.
let n: number[] = [1, 2, 3, 4, 5];
let read: ReadonlyArray<number> = n;

read[0] = 16; // 에러
read.push(8); // 에러
read.length = 100; // 에러
n = read; // 재할당 또한 불가능

n = read as number[]; // type assertion 으로 오버라이드는 가능.

console.log(n);

// 프로퍼티는 'readonly', 변수는 'const' 를 사용.
