function test1(arg: string | number): string | number {
    return arg;
}

//위와 같이 작성할때마다 해주는게 힘들다보니 사용함

type StringOrNumber = string | number; // Union 타입

function test2(arg: StringOrNumber): StringOrNumber {
    return arg;
}
