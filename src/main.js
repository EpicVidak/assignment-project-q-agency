import Vue from 'vue'
import App from './App.vue'
import router from './javascript/router/routes.js'
import i18n from './javascript/i18n'
import constants from './javascript/constants'
import {initFilters} from './javascript/filters/globalFilters'

import GLOBAL_MIXIN from './javascript/mixins/globalMixin.js'

Vue.mixin(GLOBAL_MIXIN)

Vue.prototype.$constants = constants;

initFilters(Vue)

export default new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
