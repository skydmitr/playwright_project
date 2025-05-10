# Test info

- Name: Проверка кнопок в хедере страницы
- Location: E:\pet_playwright\tests\registerUser.spec.js:10:9

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://realworld.qa.guru/", waiting until "load"

    at E:\pet_playwright\tests\registerUser.spec.js:7:16
```

# Test source

```ts
   1 | import {test, expect, page} from '@playwright/test';
   2 | import { RegisterPage, HeaderPage } from '../src/pageObject';
   3 | import {UserBuilder} from "../src/helpers/builder/user.builder.random";
   4 |
   5 |
   6 | test.beforeEach('Главная страница', async ({page}) => {
>  7 |     await page.goto('/')
     |                ^ Error: page.goto: Target page, context or browser has been closed
   8 | })
   9 |
  10 |     test('Проверка кнопок в хедере страницы', async ({page}) => {
  11 |         const headerPage = new HeaderPage(page);
  12 |
  13 |         await headerPage.buttonHomeClick();
  14 |         await expect(page).toHaveURL('https://realworld.qa.guru/#/');
  15 |
  16 |         await headerPage.buttonLoginClick();
  17 |         await expect(page).toHaveURL('https://realworld.qa.guru/#/login');
  18 |
  19 |         await headerPage.buttonSignUpClick();
  20 |         await expect(page).toHaveURL('https://realworld.qa.guru/#/register');
  21 |
  22 |     });
  23 |
  24 |     test('Регистрация пользователя', async ({page}) => {
  25 |         const registerPage = new RegisterPage(page);
  26 |         const randomUser = new UserBuilder()
  27 |             .addMail()
  28 |             .addPassword()
  29 |             .addName()
  30 |         await registerPage.signUp(randomUser);
  31 |
  32 | });
  33 |
  34 |
```