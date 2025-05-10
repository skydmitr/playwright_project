# Test info

- Name: Не успешная вторизация
- Location: E:\pet_playwright\tests\registerUser.spec.js:42:10

# Error details

```
Error: locator.click: Error: strict mode violation: locator('a[href="#/login"]') resolved to 2 elements:
    1) <a href="#/login" class="nav-link ">…</a> aka getByRole('link', { name: 'Login' })
    2) <a href="#/login">Sign in to your account</a> aka getByRole('link', { name: 'Sign in to your account' })

Call log:
  - waiting for locator('a[href="#/login"]')

    at HeaderPage.buttonLoginClick (E:\pet_playwright\src\pageObject\headerPage.js:15:26)
    at E:\pet_playwright\tests\registerUser.spec.js:52:26
```

# Page snapshot

```yaml
- banner:
  - navigation:
    - link "conduit":
      - /url: "#/"
    - list:
      - listitem:
        - link "Source code":
          - /url: https://github.com/TonyMckes/conduit-realworld-example-app
    - list:
      - listitem:
        - link "Home":
          - /url: "#/"
      - listitem:
        - link "Login":
          - /url: "#/login"
      - listitem:
        - link "Sign up":
          - /url: "#/register"
- main:
  - heading "Sign up" [level=1]
  - paragraph:
    - link "Sign in to your account":
      - /url: "#/login"
  - group:
    - textbox "Your Name"
  - group:
    - textbox "Email"
  - group:
    - textbox "Password"
  - button "Sign up"
- contentinfo:
  - link "conduit":
    - /url: "#/"
  - text: An interactive learning project from
  - link "Thinkster":
    - /url: https://thinkster.io
  - text: . Code & design licensed under MIT.
  - list:
    - listitem:
      - link "Source code":
        - /url: https://github.com/TonyMckes/conduit-realworld-example-app
```

# Test source

```ts
   1 | export class HeaderPage {
   2 |
   3 |     constructor(page) {
   4 |         this.page = page
   5 |         this.home = page.locator ('a[href="#/"]').nth(1)
   6 |         this.login = page.locator ('a[href="#/login"]')
   7 |         this.signn = page.locator ('a[href="#/register"]')
   8 |     }
   9 |
  10 |     async buttonHomeClick() {
  11 |         await this.home.click()
  12 |     }
  13 |
  14 |     async buttonLoginClick() {
> 15 |         await this.login.click()
     |                          ^ Error: locator.click: Error: strict mode violation: locator('a[href="#/login"]') resolved to 2 elements:
  16 |     }
  17 |
  18 |     async buttonSignUpClick() {
  19 |         await this.signn.click()
  20 |     }
  21 |
  22 | }
```