// 원시 타입이 아닌 모든 타입을 나타낼 수 있음.
// => (ex) number, string, boolean, bigint, symbol, null, undefined 제외
// success
create({ prop: 0 });
create(null);
// fail
create(42);
create("string");
create(true);
create(undefined);
