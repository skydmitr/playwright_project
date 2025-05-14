import {expect} from "@playwright/test";

export class SettingPage{

    constructor(page) {
        this.page = page;

        this.H1textUser = page.locator('//h1[@class= \'text-xs-center\']')
        this.urlToPictureUser = page.locator('//input[@class= \'form-control form-control-lg\']').nth(0)
        this.inputNameUser = page.locator('//input[@class= \'form-control form-control-lg\']').nth(1)
        this.inputAboutMeUser = page.locator('//textarea[@class= \'form-control form-control-lg\']')
        this.inputEmailUser = page.locator('//input[@class= \'form-control form-control-lg\']').nth(2)
        this.inputPasswordUser = page.locator('//input[@class= \'form-control form-control-lg\']').nth(3)
        this.buttonUpdateSetting = page.locator('//button[@class = \'btn btn-lg btn-primary pull-xs-right\']')
        this.dropdowmMenuSetting = page.locator('//*[@class = \'dropdown-item\']').nth(1)
        this.userNameText = page.locator('//*[@class = \'nav-link dropdown-toggle cursor-pointer\']')
    }


    async checkdropdowmMenuSetting(){
        await this.userNameText.click()
        await this.dropdowmMenuSetting.click()
        //TODO проверка то что мы тыкнули именно туда, проверяем урл /#/settings в експекте самого теста ENV.SITE_SETTING
    }

    async checkH1TextUser(){
        //await this.H1textUser.toBeVisible()
        if ( await this.H1textUser.textContent() !== process.env.TEXT_SETTING ){
            throw new Error ('Тест не совпадает с ожидаемым. Ошибка')
        }
    }
    async checkUrlToPictureUser(urlPicture){
        await this.urlToPictureUser.fill(urlPicture) //вставляем картинку
    }
    async checkInputNameUser(username){
        await this.inputNameUser.fill(username)
    }
    async checkInputAboutMeUser (aboutMeUser){
        await this.inputAboutMeUser.fill(aboutMeUser)
    }
    async checkInputPasswordUser(passwordUser){
        await this.inputPasswordUser.fill(passwordUser)
    }
    async checkInputEmailUser(emailUser){
        await this.inputEmailUser.fill(emailUser)
    }
    async checkButtonUpdateSetting(){
        await this.buttonUpdateSetting.click()
    }
    async checkNewUpdateAboutMe(updateAboutMe) {
        if (await this.inputAboutMeUser.inputValue() !== updateAboutMe ){
            throw new Error('Ошибка. Обновленное имя не совпадает')
        }
    }
    async checkNewUpdatePicture(updatePicture) {
        if (await this.urlToPictureUser.inputValue() !== updatePicture) {
            throw new Error('Ошибка. Обновленная ссылка на аватар не совпадает')
        }
    }

}