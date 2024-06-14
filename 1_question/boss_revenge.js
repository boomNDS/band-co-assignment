export function boss_revenge(sequenceEvent) {
  let revengeCount = 0;
  if (
    sequenceEvent.length === 0 ||
    sequenceEvent[0] === "R" ||
    sequenceEvent[sequenceEvent.length - 1] === "S"
  ) {
    return "Bad boy";
  }

  for (const action of sequenceEvent) {
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
