import {test, expect} from '../src/helpers/fixtures/mainPage';
import { RegisterPage, HeaderPage } from '../src/pageObject';
import {LoginPage} from "../src/pageObject/loginPage";

test.describe ('Группа тестов на авторизацию', () => {

    test.beforeEach('Главная страница', async ({page}) => {
        await page.goto('/')
    })

    test('Проверка кнопок в хедере страницы', async ({page}) => {
        const headerPage = new HeaderPage(page);

        await headerPage.buttonHomeClick();
        await expect(page).toHaveURL(process.env.SITE_START);

        await headerPage.buttonLoginClick();
        await expect(page).toHaveURL(process.env.SITE_LOGIN);

        await headerPage.buttonSignUpClick();
        await expect(page).toHaveURL(process.env.SITE_REGISTER);

    });

    test('Регистрация пользователя', async ({page, randomUser}) => {
        const registerPage = new RegisterPage(page);
        const headerPage = new HeaderPage(page);

        await headerPage.buttonSignUpClick();
        await registerPage.signUp(randomUser);
        //await page.pause()
    });

//TODO добавить проверку на ошибку при авторизации "Email not found sign in first"
    test('Не успешная авторизация', async ({page, randomUser}) => {
        const loginPage = new LoginPage(page);
        const headerPage = new HeaderPage(page);

        await headerPage.buttonLoginClick();
        await expect(page).toHaveURL(process.env.SITE_LOGIN);

        await loginPage.loginInputForm(randomUser.email)
        await loginPage.passwordInputForm(randomUser.password)
        await loginPage.buttonLoginGreen()
        await loginPage.checkLoginError('Email not found sign in first')
    });

//TODO разобраться почему падает сайт реалгуру
//TODO добавить проверку на имени вошедшего пользователя
    test('Успешная авторизация', async ({page}) => {
        const loginPage = new LoginPage(page);
        const headerPage = new HeaderPage(page);

        await headerPage.buttonLoginClick();
        await expect(page).toHaveURL(process.env.SITE_LOGIN);
        //console.log(process.env.LOGIN)
        await loginPage.loginInputForm(process.env.LOGIN)
        await loginPage.passwordInputForm(process.env.PASSWORD)
        await loginPage.buttonLoginGreen()
        await loginPage.checkLoginName(process.env.LOGIN_NAME)
        //await page.pause()
    });

});
