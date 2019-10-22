const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
    const text = generateText('Raul', 29);
    expect(text).toBe('Raul (29 years old)');
    const text2 = generateText('Maria', 15);
    expect(text2).toBe('Maria (15 years old)');
});

test('should output data-less text', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
});

test('should generate a valid text output', () => {
    const text = checkAndGenerate('Raul', 29);
    expect(text).toBe('Raul (29 years old)');
});

test('should click around', async () => {
    const browser = await puppeteer.launch({
        headless: false, // Run with a user interface
        slowMo: 80,
        args: ['--window-size=1080,720']
    })
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:5500/')
    await page.click('input#name');
    await page.type('input#name', 'Anna');
    await page.click('input#age');
    await page.type('input#age', '28');
    await page.click('#btnAddUser');

})