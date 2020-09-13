function setTable(decimal, hex, binary, octal) {
    var sum = decimal + hex + binary + octal;
    this.decimal = decimal;
    this.hex = hex;
    this.binary = binary;
    this.octal = octal;
    this.sum = sum;
}
var decimal = 6; // 10진수
var hex = 0xf00d; // 16진수
var binary = 10; // 2진수
var octal = 484; // 8진수
// => 2진수, 8진수 리터럴도 지원
var table = new setTable(decimal, hex, binary, octal);
console.table(table);
