// 어떤 타입도 존재하지 않음을 명시

function notReturn(): void { // 반환 값이 없는 함수
  console.log('This function returns nothing.\nSo you can use void type here.');
}

notReturn();

let unusable: void = undefined; // undefined 를 void 에 할당 가능

console.log('unusable :', unusable);
