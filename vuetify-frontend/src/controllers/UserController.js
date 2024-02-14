import BaseController from './BaseControllers'

const USER_PATH = 'http://localhost:6969/'

class UserController extends BaseController {

    async createUser(newCredentials) {
        try {
            return super.create(USER_PATH + "register", newCredentials)
        } catch(err) {
            throw new Error(err.response.data.message)
        }
    }

    async getUser() {
    }

    async getAllUsers() {   
    }

    logout() {
    }

}