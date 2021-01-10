<template>
    <div id="app">
        <h1>Hello VUE</h1>
        <p class="link">
            <!-- use router-link component for navigation. -->
            <!-- specify the link by passing the `to` prop. -->
            <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
            <router-link to="/">Go to Home</router-link> |
            <router-link to="/User">Go to User</router-link>
        </p>
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <router-view></router-view>
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"

export default {
    name: "App",
    components: {
        HelloWorld
    },
    methods: {
        // jump(){
        //   this.$router.push({ name: 'User', params: { userId: 1 }})
        // }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    margin-top: 60px;
}
.link {
    color: red;
    font-weight: bold;
}
</style>
