// sub.test.js
import { describe, it, expect } from 'vitest';
import sub from './sub.js';

describe('sub', () => {
  it('sub 4 - 2', () => {
    expect(sub(4, 2)).toBe(2);
  });
});