export class HeaderPage {

    constructor(page) {
        this.page = page
        this.home = page.locator ('a[href="#/"]').nth(1)
        this.login = page.locator ('a[href="#/login"]')
        this.signn = page.locator ('a[href="#/register"]:has-text("Sign up")')
    }

    async buttonHomeClick() {
        await this.home.click()
    }

    async buttonLoginClick() {
        await this.login.click()
    }

    async buttonSignUpClick() {
        await this.signn.click()
    }

}