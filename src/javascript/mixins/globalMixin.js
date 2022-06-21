
export default {
  // This is some basic mixin that i could think of using here
  // with app this simple, i personally would not use mixins
  // since there is no repeating operations through multiple components
  methods: {
    // basic error handling
    handleError(error) {
      let msg = error.message
      console.warn(error)
      alert(msg);
    },
    // wrapper for api calls for ease of use
    async callApi(apiCall, args = []) {
      try {
        let res = await apiCall(...args);
        return [res, null];
      } catch (error) {
        this.handleError(error);
        return [null, error];
      }
    },
    // fetch image for template
    getImageLink(id, dimensions = 100) {
      return `https://picsum.photos/id/${id}/${dimensions}/${dimensions}`;
    },
    // shortcut im used to
    navigateTo(path) {
      this.$router.push({ path: path });
    }
  },
}