// https://www.halloween.dev/retos/2025/6

function surviveRoulette(victims, count) {
  const victimsArray = Array.from({ length: victims }, (_, index) => index);

  let currentIndex = 0;
  while (victimsArray.length > 1) {
    currentIndex = (currentIndex + count - 1) % victimsArray.length;
    victimsArray.splice(currentIndex, 1);
  }
  return victimsArray[0];
}

console.log(surviveRoulette(4, 2));
// Result: 0

// Explanation:
// Start with 4 victims: [0, 1, 2, 3]
// Count 2 from position 0: eliminates 1 → [0, 2, 3]
// Count 2 from last victim: eliminates 3 → [0, 2]
// Count 2 from last victim: eliminates 2 → [0]
// Survivor: 0

console.log(surviveRoulette(5, 3));
// Result: 3

// Explanation:
// Start with 5 victims: [0, 1, 2, 3, 4]
// Count 3 from 0: eliminates 2 → [0, 1, 3, 4]
// Count 3 from 3: eliminates 0 → [1, 3, 4]
// Count 3 from 1: eliminates 4 → [1, 3]
// Count 3 from 1: eliminates 1 → [3]
// Survivor: 3

console.log(surviveRoulette(5, 10));
// Result: 3

// Explanation:
// Start with 5 victims: [0, 1, 2, 3, 4]
// Count 10 from 0: eliminates 4 → [0, 1, 2, 3]
// Count 10 from 0: eliminates 2 → [0, 1, 3]
// Count 10 from 0: eliminates 0 → [1, 3]
// Count 10 from 1: eliminates 1 → [3]
// Survivor: 3
