import {faker} from '@faker-js/faker'

export class UserBuilder {

    addMail(){
        this.email = faker.internet.email()
        return this
    }

    addName(){
        this.username = faker.internet.displayName()
        return this
    }

    addPassword(){
        this.password = faker.internet.password()
        return this
    }
    addPicture(){
        this.picture = faker.image.avatar()
        return this
    }
    addAboutMe(){
        this.aboutMe = faker.lorem.sentence()
        return this
    }
}