export function getInfo(rawData) {
  const [info, rawChickenPositions] = rawData.trim().split("\n");
  const supermanHelpLength = +info.split(" ")[1].trim() ?? 0;
  const totalChicken = +info.split(" ")[0] ?? 0;
  const chickenPositions =
    rawChickenPositions
      .trim()
      .split(" ")
      .slice(0, totalChicken)
      .map((i) => +i) ?? [];
  return { supermanHelpLength, chickenPositions, totalChicken };
}

/**
 * Problem 2: Superman's Chicken Rescue
 *  [p,p+k) = p≤x<p+k.
 * @param {String} rawData
 * @return {String} Bad boy or Good boy
 */
export function supermanRescue(rawData) {
  const { supermanHelpLength, chickenPositions, totalChicken } =
    getInfo(rawData);
  let rescueAmount = 1;
  chickenPositions.slice(0, totalChicken - 1).forEach((startPosition) => {
    const totalRescue = chickenPositions.filter(
      (chickenPosition) =>
        chickenPosition >= startPosition &&
        chickenPosition < startPosition + supermanHelpLength,
    ).length;
    if (totalRescue > rescueAmount) {
      rescueAmount = totalRescue;
    }
  });

  return rescueAmount;
}
