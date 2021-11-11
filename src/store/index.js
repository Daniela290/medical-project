import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // true - day,
        // false - night
        theme: true
    },
    mutations: {
        changeTheme(state) {
            state.theme = !state.theme
        }
    },
    actions: {
        setChangeToTheme({commit}) {
            commit('changeTheme')
        }
    },
    getters: {
        theme(state) {
            return state.theme
        }
    }
})

export default store