// sum.test.js
import { expect, test } from "vitest";
import { boss_revenge } from "./boss_revenge";

test("test case SRSSRRR", () => {
  expect(boss_revenge("SRSSRRR")).toBe("Good boy");
});

test("test case RSSRR", () => {
  expect(boss_revenge("RSSRR")).toBe("Bad boy");
});

test("test case SSSRRRRS", () => {
  expect(boss_revenge("SSSRRRRS")).toBe("Bad boy");
});

test("test case SRRSSR", () => {
  expect(boss_revenge("SRRSSR")).toBe("Bad boy");
});

test("test case SRSSRRR", () => {
  expect(boss_revenge("SSRSRRR")).toBe("Good boy");
});
