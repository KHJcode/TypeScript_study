// 요소의 타입과 갯수가 고정된 배열 표현 가능.
var x;
x = ["hello", 10];
console.log('x :', x);
try {
    x[1].substring(1);
}
catch (err) {
    console.error(err);
}
try {
    x[2] = true;
}
catch (err) {
    console.error(err);
}
