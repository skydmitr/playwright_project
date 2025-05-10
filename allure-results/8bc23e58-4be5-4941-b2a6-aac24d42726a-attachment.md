# Test info

- Name: Регистрация пользователя1
- Location: E:\pet_playwright\tests\registerUser.spec.js:10:9

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)

Locator: locator(':root')
Expected string: "https://realworld.qa.guru/#/1"
Received string: "https://realworld.qa.guru/#/"
Call log:
  - expect.toHaveURL with timeout 5000ms
  - waiting for locator(':root')
    9 × locator resolved to <html lang="en">…</html>
      - unexpected value "https://realworld.qa.guru/#/"

    at E:\pet_playwright\tests\registerUser.spec.js:14:28
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
  - heading "conduit" [level=1]
  - paragraph: A place to share your knowledge.
  - list:
    - listitem:
      - button "Global Feed"
  - link "Leatha":
    - /url: "#/profile/Leatha"
    - img "Leatha"
  - link "Leatha":
    - /url: "#/profile/Leatha"
  - text: May 5, 2025
  - button "( 0 )"
  - link "Akva Cibus cometes. Deputo suffoco demens crux crudelis. Read more... My_test":
    - /url: "#/article/akva-cibus-cometes-"
    - heading "Akva Cibus cometes." [level=1]
    - paragraph: Deputo suffoco demens crux crudelis.
    - text: Read more...
    - list:
      - listitem: My_test
  - link "Mollie":
    - /url: "#/profile/Mollie"
    - img "Mollie"
  - link "Mollie":
    - /url: "#/profile/Mollie"
  - text: May 5, 2025
  - button "( 0 )"
  - link "Akva Deduco consectetur. Voluptate autem aveho cattus comes. Read more... My_test":
    - /url: "#/article/akva-deduco-consectetur-"
    - heading "Akva Deduco consectetur." [level=1]
    - paragraph: Voluptate autem aveho cattus comes.
    - text: Read more...
    - list:
      - listitem: My_test
  - link "qwerty":
    - /url: "#/profile/qwerty"
    - img "qwerty"
  - link "qwerty":
    - /url: "#/profile/qwerty"
  - text: May 5, 2025
  - button "( 0 )"
  - link "Новая тема123 Что то буде писать Read more... newTag":
    - /url: "#/article/----------123"
    - heading "Новая тема123" [level=1]
    - paragraph: Что то буде писать
    - text: Read more...
    - list:
      - listitem: newTag
  - navigation "Pagination":
    - listitem:
      - button "Previous page" [disabled]
    - listitem:
      - button "Page 1 is your current page": "1"
    - listitem:
      - button "Page 2": "2"
    - listitem:
      - button "Page 3": "3"
    - listitem:
      - button "..."
    - listitem:
      - button "Page 5193": "5193"
    - listitem:
      - button "Page 5194": "5194"
    - listitem:
      - button "Page 5195": "5195"
    - listitem:
      - button "Next page"
  - complementary:
    - heading "Popular Tags" [level=6]
    - button "реклама"
    - button "autus"
    - button "iste"
    - button "tripudio"
    - button "amplus"
    - button "inflammatio"
    - button "ver"
    - button "umbra"
    - button "apto"
    - button "bestia"
    - button "placeat"
    - button "vinitor"
    - button "asporto"
    - button "aestivus"
    - button "armarium"
    - button "adfectus"
    - button "conduco"
    - button "acsi"
    - button "timor"
    - button "bene"
    - button "sortitus"
    - button "sumo"
    - button "ustilo"
    - button "sperno"
    - button "trepide"
    - button "perferendis"
    - button "clamo"
    - button "videlicet"
    - button "cognatus"
    - button "vulgus"
    - button "voluptate"
    - button "consuasor"
    - button "denego"
    - button "conscendo"
    - button "tergum"
    - button "volutabrum"
    - button "verto"
    - button "cras"
    - button "capto"
    - button "peccatus"
    - button "subito"
    - button "confido"
    - button "subnecto"
    - button "creber"
    - button "abduco"
    - button "suggero"
    - button "vallum"
    - button "terra"
    - button "alienus"
    - button "vetus"
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
   1 | import {test, expect, page} from '@playwright/test';
   2 | import { RegisterPage, HeaderPage } from '../src/pageObject';
   3 | import {UserBuilder} from "../src/helpers/builder/user.builder.random";
   4 |
   5 |
   6 | test.beforeEach('Главная страница', async ({page}) => {
   7 |     await page.goto('/')
   8 | })
   9 |
  10 |     test('Регистрация пользователя1', async ({page}) => {
  11 |         const headerPage = new HeaderPage(page);
  12 |
  13 |         await headerPage.buttonHomeClick();
> 14 |         await expect(page).toHaveURL('https://realworld.qa.guru/#/1');
     |                            ^ Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)
  15 |
  16 |     });
  17 |
  18 |     test('Регистрация пользователя', async ({page}) => {
  19 |         const registerPage = new RegisterPage(page);
  20 |         const randomUser = new UserBuilder()
  21 |             .addMail()
  22 |             .addPassword()
  23 |             .addName()
  24 |         await registerPage.signUp(randomUser);
  25 |
  26 | });
  27 |
  28 |
```