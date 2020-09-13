function setTable (decimal: number, hex: number, binary: number, octal: number) {
  const sum = decimal + hex + binary + octal;

  this.decimal = decimal;
  this.hex = hex;
  this.binary = binary;
  this.octal = octal;
  this.sum = sum;
}

let decimal: number = 6; // 10진수
let hex: number = 0xf00d; // 16진수
let binary: number = 0b1010; // 2진수
let octal: number = 0o744; // 8진수

// => 2진수, 8진수 리터럴도 지원

const table = new setTable(decimal, hex, binary, octal);

console.table(table);
