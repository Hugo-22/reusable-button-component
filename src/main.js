import Vue from 'vue'
import App from './App.vue'
import icons from 'material-design-icons'

Vue.config.productionTip = false

Vue.use(icons)

new Vue({
  render: h => h(App),
}).$mount('#app')
