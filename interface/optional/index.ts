interface SquareConfig {
  color?: string;
  width?: number;
  // 선택적 프로퍼티는 인터페이스에 속하지 않는 속성의 사용을 금지하면서, 사용 가능한 속성들을 기술할 수 있다.
}

function createSquare(config: SquareConfig) : {color: string; area: number} {
  let newSquare = { color: "white", area: 100 };

  if (config.color) newSquare.color = config.color;
  if (config.width) newSquare.area = config.width * config.width;

  return newSquare;
}

let mySquare = createSquare({ color: "blue" });

console.log(mySquare);
