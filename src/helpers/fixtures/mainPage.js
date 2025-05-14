import {test as base} from "@playwright/test";
import {UserBuilder} from "../builder/user.builder.random";

export const test = base.extend({
    randomUser: async ({ }, use) => {
        const user = new UserBuilder()
            .addMail()
            .addPassword()
            .addName()
            .addAboutMe()
            .addPicture()
        await use(user)
    }
})

export { expect } from '@playwright/test'