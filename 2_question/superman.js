/**
 * Problem 2: Superman's Chicken Rescue
 * @param {String} rawData
 * @return {String} Bad boy or Good boy
 */

export function getInfo(rawData) {
  console.log("test");
  const [info, rawChickenPosition] = rawData.trim().split("\n");
  const supermanHelpLength = +info.split(" ")[1] ?? 0;
  const chickenPosition = rawChickenPosition.split(" ").map((i) => +i) ?? [];
  return { supermanHelpLength, chickenPosition };
}
export function supermanRescue(rawData) {
  const { supermanHelpLength, chickenPosition } = getInfo(rawData);
  console.log("supermanHelpLength :", supermanHelpLength);
  console.log("chickenPosition :", chickenPosition);
}

supermanRescue(`5 5
2 5 10 12 15`);
