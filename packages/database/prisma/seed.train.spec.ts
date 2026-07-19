import { isFreeIntroIndex } from './seed.train';

describe('isFreeIntroIndex (train programs)', () => {
  it('marks exactly one index — the first — as free per program', () => {
    const freeIndices = Array.from({ length: 30 }, (_, idx) => idx + 1).filter(isFreeIntroIndex);
    expect(freeIndices).toEqual([1]);
  });

  it('locks every other index', () => {
    for (let i = 2; i <= 30; i++) {
      expect(isFreeIntroIndex(i)).toBe(false);
    }
  });
});
