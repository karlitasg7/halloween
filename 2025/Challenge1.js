// https://www.halloween.dev/retos/2025/1

function translatePossessed(message) {
  const wordsList = message.split(" ");
  const translatedWords = wordsList.map((word) =>
    Array.from(word).reverse().join("")
  );

  const messageTranslated = translatedWords.join(" ");
  if (messageTranslated.trim() != "") {
    return messageTranslated;
  }
  return "";
}

console.log(translatePossessed("i yojne gnihctaw uoy")); // "i enjoy watching you"
console.log(translatePossessed("siht si gnorw")); // "this is wrong"
console.log(translatePossessed("      ")); // ""
console.log(translatePossessed("dooG secitcarP")); // "Good Practices"
console.log(translatePossessed("olleH 👋")); // "Hello 👋"
