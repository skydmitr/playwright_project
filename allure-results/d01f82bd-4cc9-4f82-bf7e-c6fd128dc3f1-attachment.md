# Test info

- Name: Группа тестов на авторизацию >> Регистрация пользователя
- Location: E:\pet_playwright\tests\registerUser.spec.js:25:9

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('textbox', { name: 'Your Name' })

    at RegisterPage.signUp (E:\pet_playwright\src\pageObject\registerPage.js:17:34)
    at E:\pet_playwright\tests\registerUser.spec.js:27:28
```

# Test source

```ts
   1 |
   2 | export class RegisterPage {
   3 |
   4 |     constructor(page) {
   5 |         this.page = page
   6 |
   7 |         this.buttonSignUp = page.getByRole('button', { name: 'Sign up' });  // button Sign Up
   8 |         this.inputYourName = page.getByRole('textbox', { name: 'Your Name' }); // input Your Name
   9 |         this.inputEmail = page.getByRole('textbox', { name: 'Email' }); // input Email
  10 |         this.inputPassword = page.getByRole('textbox', { name: 'Password' }); // input Password
  11 |     }
  12 |
  13 |     async signUp(randomUser){
  14 |
  15 |         const { email, password, username } = randomUser;
  16 |
> 17 |         await this.inputYourName.click();
     |                                  ^ Error: locator.click: Test ended.
  18 |         await this.inputYourName.fill(username);
  19 |
  20 |         await this.inputEmail.click();
  21 |         await this.inputEmail.fill(email);
  22 |
  23 |         await this.inputPassword.click();
  24 |         await this.inputPassword.fill(password);
  25 |
  26 |         await this.buttonSignUp.click();
  27 |     }
  28 |
  29 | }
```