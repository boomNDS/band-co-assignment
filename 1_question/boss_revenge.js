export function boss_revenge(msg) {
  const words = [...msg];
  let revengeCount = 0;
  let totalWords = msg.length;
  // n 1 r 0
  // n 0 r 1
  // n -1
  if (totalWords === 0 || msg[0] === "R") {
    return "Bad boy";
  } else if (words[totalWords - 1] === "S") {
    return "Bad boy";
  }
  for (const action of words) {
    if (action === "S") {
      revengeCount += 1;
    } else if (action === "R" && revengeCount !== 0) {
      revengeCount -= 1;
    }
  }

  if (revengeCount === 0) {
    return "Good boy";
  } else {
    return "Bad boy";
  }
}
