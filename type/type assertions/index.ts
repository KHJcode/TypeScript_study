// 개발자가 알고 있는 실제 타입이 현재 타입보다 구체적일 때 쓰임

// 1. angle-bracket
let str: any = "this is a string";
let strLength: number = (<string>str).length;

// 2. as
let str2: any = "this is a string2";
let str2Length: number = (str2 as string).length;

// 형변환과 유사하지만 특별한 검사 또는 데이터 재구성을 하지 않음.
// => 즉, 런타임에 영향을 미치지 않고 컴파일러만 이를 사용.
