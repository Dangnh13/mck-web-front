export default {
    async login(loginRequest) {
        console.log('loginRequest: ', loginRequest);
        return {
            userId: 1,
            email: loginRequest.email
        }
    },

    async logout() {
        
    }
}