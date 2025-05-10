import { test as setup, expect } from '@playwright/test'
import * as path from 'path';

//const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {

    await page.goto('https://www.ya.ru/');

});
