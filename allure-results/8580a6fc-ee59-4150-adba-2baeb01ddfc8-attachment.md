# Test info

- Name: Регистрация пользователя
- Location: E:\pet_playwright\tests\registerUser.spec.js:8:9

# Error details

```
Error: browserType.launch: Executable doesn't exist at C:\Users\Дмитрий\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
   1 | import {test, expect, page} from '@playwright/test';
   2 | import { RegisterPage } from '../src/pageObject';
   3 | import {UserBuilder} from "../src/helpers/builder/user.builder.random";
   4 |
   5 |
   6 |
   7 |
>  8 |     test('Регистрация пользователя', async ({page}) => {
     |         ^ Error: browserType.launch: Executable doesn't exist at C:\Users\Дмитрий\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
   9 |
  10 |         const registerPage = new RegisterPage(page);
  11 |
  12 |         const randomUser = new UserBuilder()
  13 |             .addMail()
  14 |             .addPassword()
  15 |             .addName()
  16 |
  17 |         await page.goto('https://realworld.qa.guru/#/register')
  18 |         await registerPage.signUp(randomUser);
  19 |     });
  20 |
```