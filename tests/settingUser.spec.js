import { LoginPage } from "../src/pageObject/loginPage";
import { HeaderPage } from "../src/pageObject";
import { expect, test } from "../src/helpers/fixtures/mainPage";
import { SettingPage } from "../src/pageObject/settingPage";
import { faker } from "@faker-js/faker";

//TODO 1. Добавить проверки на открытие всех страниц, без ошибок в консоле
//TODO 2. Добавить создание статьи и ее проверку
//TODO 3. Добавить проверку пагинации
//TODO 4. Добавить проверку тегов
//TODO 5. Добавить проверку лайков
//TODO 6. Добавить проверку выхода из аккаунта
//TODO 7. Вынести локатовы в отдельный файл

test.describe('Страница настроек', () => {

    test.beforeEach('Авторизация ', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const headerPage = new HeaderPage(page);

        await page.goto('/')

        await headerPage.buttonLoginClick();
        await expect(page).toHaveURL(process.env.SITE_LOGIN);
        await loginPage.loginInputForm(process.env.LOGIN)
        await loginPage.passwordInputForm(process.env.PASSWORD)
        await loginPage.buttonLoginGreen()
        await loginPage.checkLoginName(process.env.LOGIN_NAME)

    })

    test('Заходим на страницу /setting и обновляем данные пользователя', async ({ page,randomUser }) => {
        const settingPage = new SettingPage(page)

        const newPicture = await randomUser.picture
        const newAboutMe = await randomUser.aboutMe


        await settingPage.checkdropdowmMenuSetting()
        await settingPage.checkH1TextUser()
        await settingPage.checkUrlToPictureUser(newPicture)
        //await page.pause()
        await settingPage.checkInputNameUser(process.env.LOGIN_NAME) // Вставляет старое значение из env для предотвращение потери аккаунта
        await settingPage.checkInputAboutMeUser(newAboutMe)
        await settingPage.checkInputEmailUser(process.env.LOGIN) // Вставляет старое значение из env для предотвращение потери аккаунта
        await settingPage.checkInputPasswordUser(process.env.PASSWORD) // Вставляет старое значение из env для предотвращение потери аккаунта
        await settingPage.checkButtonUpdateSetting()

        //ниже проверка на обновление данных
        //await page.pause()
        await settingPage.checkNewUpdateAboutMe(newAboutMe)
        await settingPage.checkNewUpdatePicture(newPicture)
    })

    test('Проверка обновленного имени и емейла пользователя', async ({ page,randomUser }) => {
        const settingPage = new SettingPage(page)

    })

});