const getters = {
    isAuth (state) {
        return !!state.accessToken
    },
    getUsername (state) {
        return state.username
    }
}

export default getters