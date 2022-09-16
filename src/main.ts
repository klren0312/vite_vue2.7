import Vue from 'vue'
import App from './App.vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import router from './router'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()
Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 3000 }
new Vue({
  render: (h) => h(App),
  pinia,
  router,
}).$mount('#app')
