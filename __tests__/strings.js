import reverse from '../build/index';

describe('String Reverse', () => {
  test('reverse a string and return the result', () => {
    const text = reverse('pizza');
    expect(text).toBe('azzip');
  });

  test('reverse unicode characters and return the result', () => {
    const unicodeReverse = reverse('🚀🔥🚀🚀');
    expect(unicodeReverse).toBe('🚀🚀🔥🚀');
  });

  test('reverse unicode characters with strings then return the result', () => {
    const strUnicode = reverse('Animals: 🐆🐕');
    expect(strUnicode).toBe('🐕🐆 :slaminA');
  });
});
