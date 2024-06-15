/**
 * Find out is boss baby is good or bad boy base on
 - S is shots from kids and R for revenged short
 - boss baby can't short first
 - all shots must be revenged at least once
 - raw problem (```Return "Good boy" if all shots have been revenged at least once and Boss Baby doesn’t initiate any shots at
 the neighborhood kids first. Return "Bad boy" if these conditions are not satisfied.```)
 * @param {String} sequenceEvent
 * @return {String} Bad boy or Good boy
 */
export function boss_revenge(sequenceEvent) {
  let revengeCount = 0;

  // it case boss baby doesn't' revenged shots or shots first
  if (
    sequenceEvent.length === 0 ||
    sequenceEvent[0] === "R" ||
    sequenceEvent[sequenceEvent.length - 1] === "S"
  ) {
    return "Bad boy";
  }
  // count boss baby have revenged shots
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
