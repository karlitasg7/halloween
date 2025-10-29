// https://www.halloween.dev/retos/2025/2

function countSheep(letters) {
  const mapLetters = new Map();
  for (const letter of letters) {
    mapLetters.set(letter, (mapLetters.get(letter) || 0) + 1);
  }

  let totalSheepWords = 0;

  while (
    mapLetters.get("s") >= 1 &&
    mapLetters.get("h") >= 1 &&
    mapLetters.get("e") >= 2 &&
    mapLetters.get("p") >= 1
  ) {
    totalSheepWords++;
    mapLetters.set("s", mapLetters.get("s") - 1);
    mapLetters.set("h", mapLetters.get("h") - 1);
    mapLetters.set("e", mapLetters.get("e") - 2);
    mapLetters.set("p", mapLetters.get("p") - 1);
  }

  return totalSheepWords;
}

console.log(countSheep("sheepxsheepy")); // → 2 (you can form "sheep" twice)

console.log(countSheep("sshhheeeepppp")); // → 2 (s=2, h=3, e=4, p=4 → only 2 complete "sheep")

console.log(countSheep("hola")); // → 0 (not enough letters)

console.log(countSheep("peesh")); // → 1 (letters are scrambled but they're all there)
