# Test info

- Name: Создание и проверка статьи >> Заходим на страницу /setting
- Location: E:\pet_playwright\tests\settingUser.spec.js:24:9

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('//input[@class= \'form-control form-control-lg\']').nth(4)

    at SettingPage.checkInputPasswordUser (E:\pet_playwright\src\pageObject\settingPage.js:41:38)
    at E:\pet_playwright\tests\settingUser.spec.js:38:27
```

# Test source

```ts
   1 |
   2 | export class SettingPage{
   3 |
   4 |     constructor(page) {
   5 |         this.page = page;
   6 |
   7 |         this.H1textUser = page.locator('//h1[@class= \'text-xs-center\']')
   8 |         this.urlToPictureUser = page.locator('//input[@class= \'form-control form-control-lg\']').nth(0)
   9 |         this.inputNameUser = page.locator('//input[@class= \'form-control form-control-lg\']').nth(1)
  10 |         this.inputAboutMeUser = page.locator('//textarea[@class= \'form-control form-control-lg\']')
  11 |         this.inputEmailUser = page.locator('//input[@class= \'form-control form-control-lg\']').nth(3)
  12 |         this.inputPasswordUser = page.locator('//input[@class= \'form-control form-control-lg\']').nth(4)
  13 |         this.buttonUpdateSetting = page.locator('//button[@class = \'btn btn-lg btn-primary pull-xs-right\']')
  14 |         this.dropdowmMenuSetting = page.locator('//*[@class = \'dropdown-item\']').nth(1)
  15 |         this.userNameText = page.locator('//*[@class = \'nav-link dropdown-toggle cursor-pointer\']')
  16 |     }
  17 |
  18 |
  19 |     async checkdropdowmMenuSetting(){
  20 |         await this.userNameText.click()
  21 |         await this.dropdowmMenuSetting.click()
  22 |         //TODO проверка то что мы тыкнули именно туда, проверяем урл /#/settings в експекте самого теста ENV.SITE_SETTING
  23 |     }
  24 |
  25 |     async checkH1TextUser(){
  26 |         //await this.H1textUser.toBeVisible()
  27 |         if ( await this.H1textUser.textContent() !== process.env.TEXT_SETTING ){
  28 |             throw new Error ('Тест не совпадает с ожидаемым. Ошибка')
  29 |         }
  30 |     }
  31 |     async checkUrlToPictureUser(urlPicture){
  32 |         await this.urlToPictureUser.fill(urlPicture) //вставляем картинку
  33 |     }
  34 |     async checkInputNameUser(username){
  35 |         await this.inputNameUser.fill(username)
  36 |     }
  37 |     async checkInputAboutMeUser (aboutMeUser){
  38 |         await this.inputAboutMeUser.fill(aboutMeUser)
  39 |     }
  40 |     async checkInputPasswordUser(passwordUser){
> 41 |         await this.inputPasswordUser.fill(passwordUser)
     |                                      ^ Error: locator.fill: Target page, context or browser has been closed
  42 |     }
  43 |     async checkInputEmailUser(emailUser){
  44 |         await this.inputEmailUser.fill(emailUser)
  45 |     }
  46 |     async checkButtonUpdateSetting(){
  47 |         await this.buttonUpdateSetting.fill()
  48 |     }
  49 |
  50 | }
```