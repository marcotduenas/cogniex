import { createStore } from 'vuex'
import UserController from '../controllers/UserController'

const user = new UserController;

export default createStore({
    state: {
        user: []
    },
    getters: {
    },
    mutations: {
        SET_USER(state, payload) {
            state.user = payload
        },

    },
    actions: {
        async login({ commit }, payload) {
            try {
                const res = await user.getUser(payload);
                commit('SET_USER', res)
            } catch {
                console.log('error in login')
            } finally {

            }
        },
        async register({ commit }, payload) {
            try {
                await user.createUser(payload);
            } catch {
                console.log('error in register user')
            } finally {

            }
        }
    },
    modules: {
    }
})
