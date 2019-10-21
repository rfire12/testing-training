const { generateText } = require('./util');

test('should output name and age', () => {
    const text = generateText('Raul', 29);
    expect(text).toBe('Raul (29 years old)');
});