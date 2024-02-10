import { addUser, getUserInfoByName } from '@/services/user.service'

export default {
    namespaced: true,
    state: {
        userInfo: {}
    },
    getters: {
        isLogin(state) {
            return !!state.userInfo?.name ?? false
        },
        name: (state) => {
            return state.userInfo?.name ?? ''
        },
        height: (state) => {
            return state.userInfo?.height ?? ''
        },
        weight: (state) => {
            return state.userInfo?.weight ?? ''
        },
        age: (state) => {
            return state.userInfo?.age ?? ''
        },
        gender: (state) => {
            if (state.userInfo?.gender == 'male') return '男性'
            if (state.userInfo?.gender == 'female') return '女性'
            return state.userInfo?.gender ?? ''
        },
        exerciseFrequency: (state) => {
            return state.userInfo?.exercise_per_week ?? ''
        },
        protein: (state) => {
            return state.userInfo?.protein ?? ''
        },
        carbohydrate: (state) => {
            return state.userInfo?.carbohydrates ?? ''
        },
        fat: (state) => {
            return state.userInfo?.fat ?? ''
        },
        BMI: (state) => {
            return state.userInfo?.bmi ?? ''
        },
        TDEE: (state) => {
            return state.userInfo?.tdee ?? ''
        },

    },
    mutations: {
        setUserInfo(state, data) {
            state.userInfo = data
        }
    },
    actions: {
        async addUser({ commit }, data) {
            const res = await addUser(data)
            console.log('add user', res.data)
            commit('setUserInfo', data)
        },
        async getUserInfoByName({ commit, state }, name) {
            const res = await getUserInfoByName(name)
            if (!res.data) throw ('使用者不存在')
            console.log('get user info by name', res)
            const userInfo = state.userInfo
            commit('setUserInfo', { ...userInfo, ...res.data })
        },
        async logout({ commit }) {
            commit('setUserInfo', {})
        }
    },
}