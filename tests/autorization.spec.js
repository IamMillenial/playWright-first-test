const { test, expect } = require('@playwright/test');
test ('New test grinfer',async ({page}) => {
 await page.goto('https://grinfer.com/')
 await page.locator('.sc-2aalce-2').click()
 //page.click('.sc-2aalce-2 dvzzdp')
 await page.locator('#email').fill('test@gmail.com')
 await page.locator('#password').fill('Q123456778w')

await page.locator ('.sc-p4qn9p-0').click()
await expect(page.locator('.sc-2aalce-2')).toBeVisible
 await page.screenshot({ path: 'img/login.jpg' });
});

