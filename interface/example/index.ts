interface LabeledValue {
  label: string;
  // 실제로는 더 많은 프로퍼티를 갖지만 컴파일러는 최소한으로 필요한 프로퍼티가 있는지와 타입이 잘 맞는지만 검사합니다.
  // 타입 검사는 프로퍼티들의 순서를 요구하지 않고 인터페이스가 요구하는 프로퍼티의 존재 여부와 그 타입만을 확인합니다.
}

function printLabel(labelObj: LabeledValue) {
  console.log(labelObj); // => size 의 타입을 정의하지 않았음에도 에러가 발생하지 않음.
  console.log(labelObj.size) // => 정의되지 않음으로 에러 발생
}

let Obj = { size: 2, label: "Size 2 Object" };

printLabel(Obj);
