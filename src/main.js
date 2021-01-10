import Vue from "vue"
import Vuex from "vuex"
import App from "./App.vue"
import router from "./router/index.js" // 引入路由
import store from "./store"
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount("#app")
