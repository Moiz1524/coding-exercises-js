// Challenge # 1 — Counting duplicate characters

// Input: “adsjfdsfsfjsdjfhacabcsbajda”

// Output: { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 

const countDuplicateCharacters = (str) => {
  let objOccurences = {};

  for (let i = 0; i < str.length; i++) {
    if (Object.keys(objOccurences).includes(str[i])) {
      objOccurences[str[i]] = objOccurences[str[i]] + 1;
      continue;
    }

    objOccurences[str[i]] = 1;
  }

  return objOccurences;
}