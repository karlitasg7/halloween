// https://www.halloween.dev/retos/2025/2

function countSheep(letters) {
  const mapLetters = new Map();
  for (const letter of letters) {
    mapLetters.set(letter, (mapLetters.get(letter) || 0) + 1);
  }

  const s = mapLetters.get("s") || 0;
  const h = mapLetters.get("h") || 0;
  const e = mapLetters.get("e") || 0;
  const p = mapLetters.get("p") || 0;

  return Math.floor(Math.min(s, h, e / 2, p));
}

console.log(countSheep("sheepxsheepy")); // → 2 (you can form "sheep" twice)

console.log(countSheep("sshhheeeepppp")); // → 2 (s=2, h=3, e=4, p=4 → only 2 complete "sheep")

console.log(countSheep("hola")); // → 0 (not enough letters)

console.log(countSheep("peesh")); // → 1 (letters are scrambled but they're all there)
