import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'
import 'videojs-markers'
import 'videojs-markers/dist/videojs.markers.css'

window.jQuery = $
window.$ = $
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
