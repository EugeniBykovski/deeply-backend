import { DIVES } from './seed.dive';

describe('DIVES seed data (one free practice for the dive list)', () => {
  it('has exactly one free (non-premium) dive template', () => {
    const free = DIVES.filter((d) => !d.isPremium);
    expect(free).toHaveLength(1);
  });

  it('the free dive is the first by sortOrder — the intended introductory dive', () => {
    const free = DIVES.filter((d) => !d.isPremium)[0];
    expect(free.sortOrder).toBe(1);
  });

  it('locks every other dive', () => {
    const locked = DIVES.filter((d) => d.sortOrder !== 1);
    expect(locked.every((d) => d.isPremium)).toBe(true);
  });
});
