import {throws} from "node:assert";

export class LoginPage {

    constructor(page) {

        this.failedTextLogin = page.locator ('//*[contains(@class, \'error-messages\')]/li')
        this.inputLogin =  page.getByRole('textbox', { name: 'Email' });
        this.inputPassword = page.getByRole('textbox', { name: 'Password' });
        this.buttonLogin = page.locator('//*[@class = "btn btn-lg btn-primary pull-xs-right"]')
        this.loginName = page.locator('//*[contains(@class, \'nav-link dropdown-toggle cursor-pointer\')]')

    }

    async loginInputForm(login){
        await this.inputLogin.click()
        await this.inputLogin.fill(login)

    }
    async passwordInputForm(password){
        await this.inputPassword.click()
        await this.inputPassword.fill(password)
    }
    async buttonLoginGreen(){
        await this.buttonLogin.click()
    }
    async checkLoginError(expectedText){
        await this.failedTextLogin.waitFor({ state: 'visible'});
       if( await this.failedTextLogin.textContent('Email not found sign in first') !== expectedText) {
           throw new Error('Ошибка. Текст не совпадает')
       }
    }
    async checkLoginName(expectedText){
        if( await this.loginName.textContent(process.env.LOGIN_NAME) !== expectedText) {
            console.log(this.loginName)
            throw new Error('Ошибка. Имя не совпадает')
        }
    }
}
