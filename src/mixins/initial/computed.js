export default {
    authenticated() {
        console.log('vao authenticated to get login status');
        if (localStorage.getItem('user'))
            return true;
        return false;
    }
}