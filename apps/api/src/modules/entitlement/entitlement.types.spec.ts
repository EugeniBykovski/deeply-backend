import { isPracticeLocked } from './entitlement.types';

describe('isPracticeLocked', () => {
  it('locks a premium practice for a user without full access', () => {
    expect(isPracticeLocked(true, false)).toBe(true);
  });

  it('unlocks a premium practice for a user with full access (trial or Pro)', () => {
    expect(isPracticeLocked(true, true)).toBe(false);
  });

  it('never locks a non-premium (free introductory) practice, access or not', () => {
    expect(isPracticeLocked(false, false)).toBe(false);
    expect(isPracticeLocked(false, true)).toBe(false);
  });
});
