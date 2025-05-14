import {LoginPage} from "../src/pageObject/loginPage";
import {HeaderPage} from "../src/pageObject";
import {expect} from "../src/helpers/fixtures/mainPage";

test.describe('Создание и проверка статьи', () => {

    test.beforeAll('Авторизация перед созданием теста', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const headerPage = new HeaderPage(page);

        await headerPage.buttonLoginClick();
        await expect(page).toHaveURL(process.env.SITE_LOGIN);
        await loginPage.loginInputForm(process.env.LOGIN)
        await loginPage.passwordInputForm(process.env.PASSWORD)
        await loginPage.buttonLoginGreen()
        await loginPage.checkLoginName(process.env.LOGIN_NAME)

    })

    test('Создание статьи', async ({ page }) => {


    })


});