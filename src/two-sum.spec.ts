import { describe, expect, test } from "bun:test";

describe("two sum", () => {
  test("with 2 fors - O(n2)", () => {
    function solution(nums: number[], target: number) {
      for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length; j >= 0; j--) {
          if (nums[i] + nums[j] === target) {
            return [nums[i], nums[j]];
          }
        }
      }
    }
    expect(solution([ 11, 15, 2, 7], 9)).toEqual([2, 7]);
  });

  test("with 1 for - O(n)", () => {
    function solution(nums: number[], target: number) {
      const map: Record<number, number> = {};
      for (let i = 0; i < nums.length; i++) {
        const y = nums[i];
        const x = target - y;
        if (map[x]) return [y, map[x]];
        map[y] = y;
      }
    }
    expect(solution([11, 15, 2, 7], 9)).toEqual([7, 2]);
  });
})