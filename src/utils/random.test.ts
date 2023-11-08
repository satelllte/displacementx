import {type SpyInstance, describe, expect, it, vi, afterAll} from 'vitest';
import {randomInteger} from './random';

describe('randomInteger', () => {
  const {mock, unmock} = useMathRandomMock();

  afterAll(() => {
    unmock();
  });

  it('works correctly', () => {
    mock(0);
    expect(randomInteger(0, 10)).toBe(0);

    mock(0.25);
    expect(randomInteger(0, 10)).toBe(2);

    mock(0.5);
    expect(randomInteger(0, 10)).toBe(5);

    mock(0.999);
    expect(randomInteger(0, 10)).toBe(10);
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
