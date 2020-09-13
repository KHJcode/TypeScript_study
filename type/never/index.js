// 절대 발생할 수 없는 타입을 나타냄
function error(message) {
    throw new Error(message);
}
// 모든 타입에 할당이 가능하지만 never 는 자신을 제외한 어떤 타입도 할당되지 못한다.
function fail() {
    return error("Something failed"); // 반환 값이 never 로 추론된다.
}
console.log(typeof (fail()));
// never 를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function infiniteLoop() {
    while (true) {
    }
}
