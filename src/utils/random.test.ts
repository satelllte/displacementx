import {type SpyInstance, describe, expect, it, vi, afterAll} from 'vitest';
import {randomBoolean, randomInteger, randomItem} from './random';

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

  const unmock = () => {
    _spy?.mockRestore();
    _spy = undefined;
  };

  return {
    mock,
    unmock,
  };
};
