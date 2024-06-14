// superman.test.js
import { expect, test } from "vitest";
import { supermanRescue } from "./superman";

test("superman can protect 2 chicken", () => {
  expect(
    supermanRescue(`5 5
    2 5 10 12 15`),
  ).toBe(2);
});

test("superman can protect 4 chicken", () => {
  expect(
    supermanRescue(`6 10
    1 11 30 34 35 37`),
  ).toBe(4);
});
