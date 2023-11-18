import {describe, expect, it} from 'vitest';
import {degreesToRadians} from './math';

describe('math', () => {
  describe('degreesToRadians', () => {
    it('works', () => {
      const results: Array<{
        angleDegrees: number;
        angleRadians: number;
      }> = [];
      for (let angleDegrees = -360; angleDegrees <= 360; angleDegrees += 45) {
        results.push({
          angleDegrees,
          angleRadians: degreesToRadians(angleDegrees),
        });
      }

      expect(results).toMatchInlineSnapshot(`
        [
          {
            "angleDegrees": -360,
            "angleRadians": -6.283185307179586,
          },
          {
            "angleDegrees": -315,
            "angleRadians": -5.497787143782138,
          },
          {
            "angleDegrees": -270,
            "angleRadians": -4.71238898038469,
          },
          {
            "angleDegrees": -225,
            "angleRadians": -3.9269908169872414,
          },
          {
            "angleDegrees": -180,
            "angleRadians": -3.141592653589793,
          },
          {
            "angleDegrees": -135,
            "angleRadians": -2.356194490192345,
          },
          {
            "angleDegrees": -90,
            "angleRadians": -1.5707963267948966,
          },
          {
            "angleDegrees": -45,
            "angleRadians": -0.7853981633974483,
          },
          {
            "angleDegrees": 0,
            "angleRadians": 0,
          },
          {
            "angleDegrees": 45,
            "angleRadians": 0.7853981633974483,
          },
          {
            "angleDegrees": 90,
            "angleRadians": 1.5707963267948966,
          },
          {
            "angleDegrees": 135,
            "angleRadians": 2.356194490192345,
          },
          {
            "angleDegrees": 180,
            "angleRadians": 3.141592653589793,
          },
          {
            "angleDegrees": 225,
            "angleRadians": 3.9269908169872414,
          },
          {
            "angleDegrees": 270,
            "angleRadians": 4.71238898038469,
          },
          {
            "angleDegrees": 315,
            "angleRadians": 5.497787143782138,
          },
          {
            "angleDegrees": 360,
            "angleRadians": 6.283185307179586,
          },
        ]
      `);
    });
  });
});
