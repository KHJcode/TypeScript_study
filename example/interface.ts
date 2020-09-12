// 인터페이스가 없다면 
const person: {name: string; age: number} = {
    name: 'KHJcode',
    age: 16
};

// 인터페이스를 사용한다면
interface Person {
    name: string;
    age?: number; // age 를 강제하지 않는 경우 ? 를 쓸 수 있음.
}

const person2: Person = {
    name: 'KHJcode',
    age: 16
}

// indexable type
interface PersonArray {
    name: string;
    [index: string]: string;
}

const person3 : Person = {
    name: "mark"
}
//person3.anybody = "Anna";

// 여기서 접근 하는 index 를 array 로 선언했기 때문에 가능함.
interface PersonArray2 {
    [index: number]: string;
}

const p2: PersonArray2 = {};
p2[0] = "hi 0";
p2[100] = "hello 100";
console.log(p2);
