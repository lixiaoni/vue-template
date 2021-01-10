import Vue from "vue"
import VueRouter from "vue-router" //导入路由
import Home from "@/views/Home.vue"
import User from "@/views/User.vue"
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch((err) => err)
// }
//安装router
Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/user",
        name: "User",
        component: User
    }
]

//创建router
const router = new VueRouter({
    mode: "history",
    routes
})

export default router
