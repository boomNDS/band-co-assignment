/**
 * Parses the raw input string and extracts useful variables.
 *
 * - The first number represents the total number of chickens.
 * - The second number represents the maximum length of the roof Superman can carry.
 * - The next line contains the positions of each chicken.
 *
 * Example input:
 * "5 5\n2 5 10 12 15"
 *
 * @param {String} rawData - The raw input string containing the data.
 * @return {Object} An object containing:
 *   - {number} supermanHelpLength: maximum length of Superman can carry.
 *   - {number[]} chickenPositions: positions of each chicken.
 *   - {number} totalChicken: total chickens.
 */
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
 * Find maximum number of chickens Superman can protect
 * The roof can cover chickens whose positions are within k units from its starting point. [p, p+k)
 * convert to formula, [p,p+k) = p≤x<p+k.
 * @param {String} rawData - The raw input string containing the data.
 * @return {Number} total rescue chickens
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
