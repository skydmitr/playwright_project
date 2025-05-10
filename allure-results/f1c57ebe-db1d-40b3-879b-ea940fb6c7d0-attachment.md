# Test info

- Name: Регистрация пользователя
- Location: E:\pet_playwright\tests\registerUser.spec.js:8:9

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Your Name' })

    at RegisterPage.signUp (E:\pet_playwright\src\pageObject\registerPage.js:17:34)
    at E:\pet_playwright\tests\registerUser.spec.js:18:28
```

# Page snapshot

```yaml
- text: "{\"errors\":{\"body\":[\"Not found\"]}}"
```

# Test source

```ts
   1 | import { page } from '@playwright/test';
   2 |
   3 | export class RegisterPage {
   4 |
   5 |     constructor(page) {
   6 |         this.page = page
   7 |
   8 |         this.buttonSignUp = page.getByRole('button', { name: 'Sign up' });  // button Sign Up
   9 |         this.inputYourName = page.getByRole('textbox', { name: 'Your Name' }); // input Your Name
  10 |         this.inputEmail = page.getByRole('textbox', { name: 'Email' }); // input Email
  11 |         this.inputPassword =page.getByRole('textbox', { name: 'Password' }); // input Password
  12 |     }
  13 |
  14 |     async signUp(randomUser){
  15 |
  16 |         const { email, password, username } = randomUser;
> 17 |         await this.inputYourName.click();
     |                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
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