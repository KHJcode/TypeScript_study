// JS 의 표준 자료형 집합과 사용하면 도움이 됨
// 기본적으로 0부터 시작하여 요소들에 번호를 매김
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
    Color[Color["White"] = 5] = "White";
})(Color || (Color = {})); // 수동 설정이 가능
var a = Color.Red;
var b = Color[3];
var c = Color.Blue; // 정의되지 않은 Blue 에 일치하는 값을 만들어냄.
var d = Color[5]; // 정의되지 않은 5 라는 값의 일치하는 항목을 알아낼 수 있다.
console.log('a :', a);
console.log('b :', b);
console.log('c :', c);
console.log('d :', d);
console.log('enum :', Color);
