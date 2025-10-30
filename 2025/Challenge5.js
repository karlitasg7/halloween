// https://www.halloween.dev/retos/2025/5

function changeLock(current, target) {
  if (current === target || current.length !== target.length) {
    return 0;
  }

  const currentDigits = current.split("");
  const targetDigits = target.split("");

  let totalMoves = 0;

  for (let i = 0; i < currentDigits.length; i++) {
    const currentDigit = parseInt(currentDigits[i]);
    const targetDigit = parseInt(targetDigits[i]);

    if (currentDigit === targetDigit) {
      continue;
    }

    const forwardMove = Math.abs(currentDigit - targetDigit);
    const backwardMove = 10 - Math.abs(currentDigit - targetDigit);

    totalMoves += Math.min(forwardMove, backwardMove);
  }

  return totalMoves;
}

console.log(changeLock("0022", "0044"));
// → 4
// Wheel 2: 2→4 (2 moves forward)
// Wheel 3: 2→4 (2 moves forward)
// Total: 2+2 = 4

console.log(changeLock("0000", "9999"));
// → 4
// Each wheel: 0→9 (1 move backward is faster than 9 forward)
// Total: 1+1+1+1 = 4

console.log(changeLock("1234", "5678"));
// → 16
// Wheel 0: 1→5 (4 moves)
// Wheel 1: 2→6 (4 moves)
// Wheel 2: 3→7 (4 moves)
// Wheel 3: 4→8 (4 moves)
// Total: 4+4+4+4 = 16

console.log(changeLock("0000", "0000"));
// → 0
// We're already at the target code

console.log(changeLock("1357", "2468"));
// → 4
// Wheel 0: 1→2 (1 move)
// Wheel 1: 3→4 (1 move)
// Wheel 2: 5→6 (1 move)
// Wheel 3: 7→8 (1 move)
// Total: 1+1+1+1 = 4
