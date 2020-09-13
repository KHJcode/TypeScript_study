// 타입 검사를 하지 않고 컴파일 통과가 가능
function printlog(value) {
    console.log('value :', value);
    console.log('\n= = = = =\n');
}
var notSure = 7;
printlog(notSure);
notSure = 'this is string';
printlog(notSure);
notSure = false;
printlog(notSure);
var list = [16, true, 'student']; // 여러 타입이 섞인 배열
printlog(list[2]);
notSure.notReal(); // 성공 => 컴파일러는 검사하지 않음.
var sure = 4; // Object 로 선언된 변수들은 어떤 값이든 할당할 수 있지만 메소드가 존재하더라도 임의로 호출할 수 없다.
sure.toFixed(); // 컴파일러 오류
