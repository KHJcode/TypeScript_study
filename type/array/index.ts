let list_1: number[] = [1, 2, 3];
let list_2: Array<number> = [1, 2, 3];

if (list_1 !== list_2) {
  const sentense = `list_1 is [${ list_1 }]. list_2 is [${ list_2 }].
    list_1 and list_2 are the different.
  `;

  console.log(sentense);
}
