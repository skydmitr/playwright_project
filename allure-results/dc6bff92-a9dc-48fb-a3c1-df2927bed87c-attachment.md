# Test info

- Name: Группа тестов на авторизацию >> Успешная авторизация
- Location: E:\pet_playwright\tests\registerUser.spec.js:50:9

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://realworld.qa.guru/", waiting until "load"

    at E:\pet_playwright\tests\registerUser.spec.js:8:20
```

# Test source

```ts
   1 | import {test, expect} from '../src/helpers/fixtures/mainPage';
   2 | import { RegisterPage, HeaderPage } from '../src/pageObject';
   3 | import {LoginPage} from "../src/pageObject/loginPage";
   4 |
   5 | test.describe ('Группа тестов на авторизацию', () => {
   6 |
   7 |     test.beforeEach('Главная страница', async ({page}) => {
>  8 |         await page.goto('/')
     |                    ^ Error: page.goto: Test ended.
   9 |     })
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
  25 |     test('Регистрация пользователя', async ({page, randomUser}) => {
  26 |         const registerPage = new RegisterPage(page);
  27 |         const headerPage = new HeaderPage(page);
  28 |
  29 |         await headerPage.buttonSignUpClick();
  30 |         await registerPage.signUp(randomUser);
  31 |         //await page.pause()
  32 |     });
  33 |
  34 | //TODO добавить проверку на ошибку при авторизации "Email not found sign in first"
  35 |     test('Не успешная авторизация', async ({page, randomUser}) => {
  36 |         const loginPage = new LoginPage(page);
  37 |         const headerPage = new HeaderPage(page);
  38 |
  39 |         await headerPage.buttonLoginClick();
  40 |         await expect(page).toHaveURL('https://realworld.qa.guru/#/login');
  41 |
  42 |         await loginPage.loginInputForm(randomUser.email)
  43 |         await loginPage.passwordInputForm(randomUser.password)
  44 |         await loginPage.buttonLoginGreen()
  45 |         await loginPage.checkLoginError('Email not found sign in first')
  46 |     });
  47 |
  48 | //TODO разобраться почему падает сайт реалгуру
  49 | //TODO добавить проверку на имени вошедшего пользователя
  50 |     test('Успешная авторизация', async ({page}) => {
  51 |         const loginPage = new LoginPage(page);
  52 |         const headerPage = new HeaderPage(page);
  53 |
  54 |         await headerPage.buttonLoginClick();
  55 |         await expect(page).toHaveURL('https://realworld.qa.guru/#/login');
  56 |         //console.log(process.env.LOGIN)
  57 |         await loginPage.loginInputForm(process.env.LOGIN)
  58 |         await loginPage.passwordInputForm(process.env.PASSWORD)
  59 |         await loginPage.buttonLoginGreen()
  60 |         await loginPage.checkLoginName(process.env.LOGIN_NAME)
  61 |         //await page.pause()
  62 |     });
  63 |
  64 | });
  65 |
```