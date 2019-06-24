import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/vuetify'
import store from "./store/store";
import App from './App.vue'

Vue.config.productionTip = false

Vue.use( {
  iconfont: 'md'
})
Vue.use(Vuex)


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
