# Test info

- Name: Не успешная вторизация
- Location: E:\pet_playwright\tests\registerUser.spec.js:36:10

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://realworld.qa.guru/", waiting until "load"

    at E:\pet_playwright\tests\registerUser.spec.js:8:16
```

# Test source

```ts
   1 | import {test, expect, page} from '@playwright/test';
   2 | import { RegisterPage, HeaderPage } from '../src/pageObject';
   3 | import {UserBuilder} from "../src/helpers/builder/user.builder.random";
   4 | import {LoginPage} from "../src/pageObject/loginPage";
   5 |
   6 |
   7 | test.beforeEach('Главная страница', async ({page}) => {
>  8 |     await page.goto('/')
     |                ^ Error: page.goto: Test ended.
   9 | })
  10 |
  11 |     test('Проверка кнопок в хедере страницы', async ({page}) => {
  12 |         const headerPage = new HeaderPage(page);
  13 |
  14 |         await headerPage.buttonHomeClick();
  15 |         await expect(page).toHaveURL('https://realworld.qa.guru/#/');
  16 |
  17 |         await headerPage.buttonLoginClick();
  18 |         await expect(page).toHaveURL('https://realworld.qa.guru/#/login');
  19 |
  20 |         await headerPage.buttonSignUpClick();
  21 |         await expect(page).toHaveURL('https://realworld.qa.guru/#/register');
  22 |
  23 |     });
  24 |
  25 |     test('Регистрация пользователя', async ({page}) => {
  26 |         const registerPage = new RegisterPage(page);
  27 |         const randomUser = new UserBuilder()
  28 |             .addMail()
  29 |             .addPassword()
  30 |             .addName()
  31 |         await registerPage.signUp(randomUser);
  32 |
  33 | });
  34 |
  35 | //TODO доделать
  36 |     test.only ('Не успешная вторизация', async ({page}) => {
  37 |         const loginPage = new LoginPage(page);
  38 |
  39 |         const userData = {
  40 |             email: UserBuilder.addMail(),
  41 |             password: UserBuilder.addPassword()
  42 |         }
  43 |         console.log(UserBuilder.addMail())
  44 |
  45 |         await loginPage.emailInputForm(email)
  46 |         await loginPage.passwordInputForm(password)
  47 |         await loginPage.buttonLoginGreen()
  48 | });
  49 | //TODO доделать
  50 |     test('Успешная вторизация', async ({page}) => {
  51 |
  52 |
  53 | });
  54 |
  55 |
```