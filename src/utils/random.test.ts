import {type SpyInstance, describe, expect, it, vi, afterAll} from 'vitest';
import {
  randomBoolean,
  randomColorRGB,
  randomInteger,
  randomItem,
} from './random';
import {type ColorRGB} from '@/types';

describe('randomBoolean', () => {
  const {mock, unmock} = useMathRandomMock();

  afterAll(() => {
    unmock();
  });

  it('works correctly', () => {
    const results: Array<{
      mock: number;
      result: boolean;
    }> = [];

    for (let i = 0; i < 0.999; i += 0.1) {
      const m = Math.round(i * 100) / 100;
      mock(m);
      results.push({
        mock: m,
        result: randomBoolean(),
      });
    }

    expect(results).toMatchInlineSnapshot(`
      [
        {
          "mock": 0,
          "result": false,
        },
        {
          "mock": 0.1,
          "result": false,
        },
        {
          "mock": 0.2,
          "result": false,
        },
        {
          "mock": 0.3,
          "result": false,
        },
        {
          "mock": 0.4,
          "result": false,
        },
        {
          "mock": 0.5,
          "result": true,
        },
        {
          "mock": 0.6,
          "result": true,
        },
        {
          "mock": 0.7,
          "result": true,
        },
        {
          "mock": 0.8,
          "result": true,
        },
        {
          "mock": 0.9,
          "result": true,
        },
      ]
    `);
  });
});

describe('randomColorRGB', () => {
  const {mockMultiOnce, unmock} = useMathRandomMock();

  afterAll(() => {
    unmock();
  });

  it('works correctly', () => {
    const results: Array<{
      mocks: number[];
      result: ColorRGB;
    }> = [];

    const max = 0.999;
    for (let i = 0; i < max; i += 0.1) {
      const m = Math.round(i * 100) / 100;
      const mocks = [
        Math.min(m, max),
        Math.min(m + 0.05, max),
        Math.min(m + 0.1, max),
      ];
      mockMultiOnce(mocks);
      results.push({
        mocks,
        result: randomColorRGB(),
      });
    }

    expect(results).toMatchInlineSnapshot(`
      [
        {
          "mocks": [
            0,
            0.05,
            0.1,
          ],
          "result": {
            "b": 25,
            "g": 12,
            "r": 0,
          },
        },
        {
          "mocks": [
            0.1,
            0.15000000000000002,
            0.2,
          ],
          "result": {
            "b": 51,
            "g": 38,
            "r": 25,
          },
        },
        {
          "mocks": [
            0.2,
            0.25,
            0.30000000000000004,
          ],
          "result": {
            "b": 76,
            "g": 64,
            "r": 51,
          },
        },
        {
          "mocks": [
            0.3,
            0.35,
            0.4,
          ],
          "result": {
            "b": 102,
            "g": 89,
            "r": 76,
          },
        },
        {
          "mocks": [
            0.4,
            0.45,
            0.5,
          ],
          "result": {
            "b": 128,
            "g": 115,
            "r": 102,
          },
        },
        {
          "mocks": [
            0.5,
            0.55,
            0.6,
          ],
          "result": {
            "b": 153,
            "g": 140,
            "r": 128,
          },
        },
        {
          "mocks": [
            0.6,
            0.65,
            0.7,
          ],
          "result": {
            "b": 179,
            "g": 166,
            "r": 153,
          },
        },
        {
          "mocks": [
            0.7,
            0.75,
            0.7999999999999999,
          ],
          "result": {
            "b": 204,
            "g": 192,
            "r": 179,
          },
        },
        {
          "mocks": [
            0.8,
            0.8500000000000001,
            0.9,
          ],
          "result": {
            "b": 230,
            "g": 217,
            "r": 204,
          },
        },
        {
          "mocks": [
            0.9,
            0.9500000000000001,
            0.999,
          ],
          "result": {
            "b": 255,
            "g": 243,
            "r": 230,
          },
        },
      ]
    `);
  });
});

describe('randomInteger', () => {
  const {mock, unmock} = useMathRandomMock();

  afterAll(() => {
    unmock();
  });

  it('works correctly', () => {
    const results: Array<{
      mock: number;
      result: number;
    }> = [];

    for (let i = 0; i < 0.999; i += 0.1) {
      const m = Math.round(i * 100) / 100;
      mock(m);
      results.push({
        mock: m,
        result: randomInteger(0, 10),
      });
    }

    expect(results).toMatchInlineSnapshot(`
      [
        {
          "mock": 0,
          "result": 0,
        },
        {
          "mock": 0.1,
          "result": 1,
        },
        {
          "mock": 0.2,
          "result": 2,
        },
        {
          "mock": 0.3,
          "result": 3,
        },
        {
          "mock": 0.4,
          "result": 4,
        },
        {
          "mock": 0.5,
          "result": 5,
        },
        {
          "mock": 0.6,
          "result": 6,
        },
        {
          "mock": 0.7,
          "result": 7,
        },
        {
          "mock": 0.8,
          "result": 8,
        },
        {
          "mock": 0.9,
          "result": 9,
        },
      ]
    `);
  });
});

describe('randomItem', () => {
  const {mock, unmock} = useMathRandomMock();

  afterAll(() => {
    unmock();
  });

  it('returns undefined if array is empty', () => {
    const results: Array<{
      mock: number;
      result: number | undefined;
    }> = [];

    for (let i = 0; i < 0.999; i += 0.1) {
      const m = Math.round(i * 100) / 100;
      mock(m);
      results.push({
        mock: m,
        result: randomItem([] as number[]),
      });
    }

    expect(results).toMatchInlineSnapshot(`
      [
        {
          "mock": 0,
          "result": undefined,
        },
        {
          "mock": 0.1,
          "result": undefined,
        },
        {
          "mock": 0.2,
          "result": undefined,
        },
        {
          "mock": 0.3,
          "result": undefined,
        },
        {
          "mock": 0.4,
          "result": undefined,
        },
        {
          "mock": 0.5,
          "result": undefined,
        },
        {
          "mock": 0.6,
          "result": undefined,
        },
        {
          "mock": 0.7,
          "result": undefined,
        },
        {
          "mock": 0.8,
          "result": undefined,
        },
        {
          "mock": 0.9,
          "result": undefined,
        },
      ]
    `);
  });

  it('returns random item correctly', () => {
    const results: Array<{
      mock: number;
      result: number | undefined;
    }> = [];

    for (let i = 0; i < 0.999; i += 0.1) {
      const m = Math.round(i * 100) / 100;
      mock(m);
      results.push({
        mock: m,
        result: randomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      });
    }

    expect(results).toMatchInlineSnapshot(`
      [
        {
          "mock": 0,
          "result": 1,
        },
        {
          "mock": 0.1,
          "result": 2,
        },
        {
          "mock": 0.2,
          "result": 3,
        },
        {
          "mock": 0.3,
          "result": 4,
        },
        {
          "mock": 0.4,
          "result": 5,
        },
        {
          "mock": 0.5,
          "result": 6,
        },
        {
          "mock": 0.6,
          "result": 7,
        },
        {
          "mock": 0.7,
          "result": 8,
        },
        {
          "mock": 0.8,
          "result": 9,
        },
        {
          "mock": 0.9,
          "result": 10,
        },
      ]
    `);
  });
});

const useMathRandomMock = () => {
  let _spy: SpyInstance | undefined;

  const mock = (returnValue: number) => {
    unmock();
    vi.spyOn(global.Math, 'random').mockReturnValue(returnValue);
  };

  const mockMultiOnce = (returnValues: number[]) => {
    unmock();
    returnValues.forEach((returnValue) => {
      _spy = vi.spyOn(global.Math, 'random').mockReturnValueOnce(returnValue);
    });
  };

  const unmock = () => {
    _spy?.mockRestore();
    _spy = undefined;
  };

  return {
    mock,
    mockMultiOnce,
    unmock,
  };
};
