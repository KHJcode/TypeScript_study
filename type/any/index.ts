// 타입 검사를 하지 않고 컴파일 통과가 가능

function printlog(value: any) {
  console.log('value :', value);
  console.log('type :', typeof(value));
  console.log('\n= = = = =\n');
}

let notSure: any = 7;
printlog(notSure);

notSure = 'this is string';
printlog(notSure);

notSure = false;
printlog(notSure);

let list: any = [16, true, 'student']; // 여러 타입이 섞인 배열
printlog(list[2]);

notSure.notReal(); // 컴파일러는 검사하지 않음.
