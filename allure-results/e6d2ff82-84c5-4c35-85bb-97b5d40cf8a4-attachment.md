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
  - link "Garrison":
    - /url: "#/profile/Garrison"
    - img "Garrison"
  - link "Garrison":
    - /url: "#/profile/Garrison"
  - text: May 4, 2025
  - button "( 0 )"
  - link "Akva Custodia tam. Blanditiis cado sulum odit adficio. Read more... My_test":
    - /url: "#/article/akva-custodia-tam-"
    - heading "Akva Custodia tam." [level=1]
    - paragraph: Blanditiis cado sulum odit adficio.
    - text: Read more...
    - list:
      - listitem: My_test
  - link "Michaela":
    - /url: "#/profile/Michaela"
    - img "Michaela"
  - link "Michaela":
    - /url: "#/profile/Michaela"
  - text: May 4, 2025
  - button "( 0 )"
  - link "Akva Tersus error. Assumenda velut arcus aro comparo. Read more... My_test":
    - /url: "#/article/akva-tersus-error-"
    - heading "Akva Tersus error." [level=1]
    - paragraph: Assumenda velut arcus aro comparo.
    - text: Read more...
    - list:
      - listitem: My_test
  - link "Krystel":
    - /url: "#/profile/Krystel"
    - img "Krystel"
  - link "Krystel":
    - /url: "#/profile/Krystel"
  - text: May 3, 2025
  - button "( 0 )"
  - link "Akva Tenetur bene. Crinis curtus paens subvenio vilis. Read more... My_test":
    - /url: "#/article/akva-tenetur-bene-"
    - heading "Akva Tenetur bene." [level=1]
    - paragraph: Crinis curtus paens subvenio vilis.
    - text: Read more...
    - list:
      - listitem: My_test
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
      - button "Page 5185": "5185"
    - listitem:
      - button "Page 5186": "5186"
    - listitem:
      - button "Page 5187": "5187"
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