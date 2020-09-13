// 원시 타입이 아닌 모든 타입을 나타낼 수 있음.
// => (ex) number, string, boolean, bigint, symbol, null, undefined 제외

// Object.create 같은 API 에서 더 잘 나타남.
declare function create(o: object | null): void;

// success
create({ prop: 0 });
create(null);

// fail
create(42);
create("string");
create(true);
create(undefined);
