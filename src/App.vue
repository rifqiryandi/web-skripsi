<template>
  <main class="wrapp">
    <div v-if="this.$route.name == 'Login'">
      <LoginPage />
    </div>
    <div v-else>
      <splashScreen />
      <headerComp />
      <RouterView />
      <footerComp />
    </div>
  </main>
</template>
<script>
import headerComp from "./components/Layouts/Header.vue";
import footerComp from "./components/Layouts/Footer.vue";
import splashScreen from "./components/Layouts/Splash.vue";
import LoginPage from "./components/page/Login.vue";
export default {
  name: "APP",
  components: {
    headerComp,
    footerComp,
    splashScreen,
    LoginPage,
  },
  mounted() {},
};
</script>
<style>
body {
  background-image: url("./assets/bg-fix.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
}
.wrapp {
  min-height: calc(100vh - 70px) !important;
}
</style>
