// 절대 발생할 수 없는 타입을 나타냄

function error(message: string): never { // 항상 오류를 발생시키거나 절대 반환하지 않는 타입으로 쓰임
  throw new Error(message);
}

// 모든 타입에 할당이 가능하지만 never 는 자신을 제외한 어떤 타입도 할당되지 못한다.

function fail() {
  return error("Something failed"); // 반환 타입이 never 로 추론된다.
}

console.log(typeof(fail()));

// never 를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function infiniteLoop(): never {
  while (true) {}
}
