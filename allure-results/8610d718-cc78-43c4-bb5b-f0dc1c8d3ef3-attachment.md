# Test info

- Name: Не успешная вторизация
- Location: E:\pet_playwright\tests\registerUser.spec.js:36:10

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Email' })

    at LoginPage.emailInputForm (E:\pet_playwright\src\pageObject\loginPage.js:17:31)
    at E:\pet_playwright\tests\registerUser.spec.js:45:25
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
  - link "Janet":
    - /url: "#/profile/Janet"
    - img "Janet"
  - link "Janet":
    - /url: "#/profile/Janet"
  - text: May 5, 2025
  - button "( 0 )"
  - link "Akva Amaritudo cresco. Universe vehemens volo testimonium blanditiis. Read more... My_test":
    - /url: "#/article/akva-amaritudo-cresco-"
    - heading "Akva Amaritudo cresco." [level=1]
    - paragraph: Universe vehemens volo testimonium blanditiis.
    - text: Read more...
    - list:
      - listitem: My_test
  - link "Jefferey":
    - /url: "#/profile/Jefferey"
    - img "Jefferey"
  - link "Jefferey":
    - /url: "#/profile/Jefferey"
  - text: May 5, 2025
  - button "( 0 )"
  - link "Akva Corrumpo vae. Tabella nisi laborum crux sophismata. Read more... My_test":
    - /url: "#/article/akva-corrumpo-vae-"
    - heading "Akva Corrumpo vae." [level=1]
    - paragraph: Tabella nisi laborum crux sophismata.
    - text: Read more...
    - list:
      - listitem: My_test
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
      - button "Page 5194": "5194"
    - listitem:
      - button "Page 5195": "5195"
    - listitem:
      - button "Page 5196": "5196"
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
   1 | export class LoginPage {
   2 |
   3 |     constructor(page) {
   4 |
   5 |         this.failedTextLogin = page.locator ('//*[@class = "error-messages"] ')
   6 |         this.inputLogin =  page.getByRole('textbox', { name: 'Email' });
   7 |         this.inputPassword = page.getByRole('textbox', { name: 'Password' });
   8 |         this.buttonLogin = page.locator('//*[@class = \'btn btn-lg btn-primary pull-xs-right\']')
   9 |
  10 |     }
  11 |
  12 |     async failedText(){
  13 |         await this.failedTextLogin.click()
  14 |         await this.failedTextLogin.fill()
  15 |     }
  16 |     async emailInputForm(){
> 17 |         await this.inputLogin.click()
     |                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  18 |         await this.inputLogin.fill()
  19 |     }
  20 |     async passwordInputForm(){
  21 |         await this.inputPassword.click()
  22 |         await this.inputPassword.fill()
  23 |     }
  24 |     async buttonLoginGreen(){
  25 |         await this.buttonLogin.click()
  26 |         await this.buttonLogin.click()
  27 |     }
  28 |
  29 | }
```