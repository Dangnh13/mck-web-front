export default {
    forwardToRouteName(routeName) {
        this.$router.push({ name: routeName}).catch(err => {
            // Ignore the vuex err regarding  navigating to the page they are already on.
            if (
              err.name !== 'NavigationDuplicated' &&
              !err.message.includes('Avoided redundant navigation to current location')
            ) {
              // But print any other errors to the console
              console.log['ERROR'](err);
            }
          });
    }
}