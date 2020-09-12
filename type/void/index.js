// 어떤 타입도 존재하지 않음을 명시
function notReturn() {
    console.log('This function returns nothing.\nSo you can use void type here.');
}
notReturn();
var unusable = undefined; // undefined 를 void 에 할당 가능
console.log('unusable :', unusable);
