
export class RegisterPage {

    constructor(page) {
        this.page = page

        this.buttonSignUp = page.getByRole('button', { name: 'Sign up' });  // button Sign Up
        this.inputYourName = page.getByRole('textbox', { name: 'Your Name' }); // input Your Name
        this.inputEmail = page.getByRole('textbox', { name: 'Email' }); // input Email
        this.inputPassword = page.getByRole('textbox', { name: 'Password' }); // input Password
    }

    async signUp(randomUser){

        const { email, password, username } = randomUser;

        await this.inputYourName.click();
        await this.inputYourName.fill(username);

        await this.inputEmail.click();
        await this.inputEmail.fill(email);

        await this.inputPassword.click();
        await this.inputPassword.fill(password);

        await this.buttonSignUp.click();
    }

}