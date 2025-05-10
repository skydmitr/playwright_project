# Test info

- Name: Группа тестов на авторизацию >> Проверка кнопок в хедере страницы
- Location: E:\pet_playwright\tests\registerUser.spec.js:11:9

# Error details

```
Error: locator.click: Error: strict mode violation: locator('a[href="#/register"]') resolved to 2 elements:
    1) <a class="nav-link " href="#/register"> Sign up</a> aka getByRole('link', { name: 'Sign up' })
    2) <a href="#/register">Need an account?</a> aka getByRole('link', { name: 'Need an account?' })

Call log:
  - waiting for locator('a[href="#/register"]')

    at HeaderPage.buttonSignUpClick (E:\pet_playwright\src\pageObject\headerPage.js:19:26)
    at E:\pet_playwright\tests\registerUser.spec.js:20:26
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
  - heading "Sign in" [level=1]
  - paragraph:
    - link "Need an account?":
      - /url: "#/register"
  - group:
    - textbox "Email"
  - group:
    - textbox "Password"
  - button "Login"
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
  15 |         await this.login.click()
  16 |     }
  17 |
  18 |     async buttonSignUpClick() {
> 19 |         await this.signn.click()
     |                          ^ Error: locator.click: Error: strict mode violation: locator('a[href="#/register"]') resolved to 2 elements:
  20 |     }
  21 |
  22 | }
```