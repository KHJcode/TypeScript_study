// 절대 발생할 수 없는 타입을 나타냄

function error(message: string): never { // 항상 오류를 발생
  throw new Error(message);
}

function fail() {
  return error("Something failed"); // 반환 타입이 never 로 추론된다.
}

// never 를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function infiniteLoop(): never {
  while (true) {}
}
