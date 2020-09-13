let list_1: number[] = [1, 2, 3];
let list_2: Array<number> = [1, 2, 3];

if (list_1 !== list_2) { // JS 의 특성
  const sentense = `list_1 is [${ list_1 }]. list_2 is [${ list_2 }].
    => list_1 and list_2 are the different.
  `;

  console.log(sentense);
}

let list_3: string[] = ['Tom', 'Amy', 'Jhon', 'Brown', 'Julia'];
console.log(list_3);

let list_4: Array<boolean> = [true, false, true, false];
console.log(list_4);
