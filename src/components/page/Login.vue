<template>
  <div
    class="container-sm mx-auto grid grid-cols-1 justify-center min-h-screen place-content-center place-items-center"
  >
    <div
      class="card py-2 md:px-6 sm:px-12 md:min-w-[420px] sm:min-w-[420px] max-w-[580px] bg-posblue"
    >
      <div class="container flex justify-center my-4">
        <img
          src="../../assets/dashboard.jpg"
          alt=""
          class="w-[160px] rounded-[120px]"
        />
      </div>
      <form class="max-w-sm mx-auto">
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-white"
            >Username</label
          >
          <input
            type="text"
            v-model="username"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Masukkan username..."
            required
          />
        </div>
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-white"
            >Password</label
          >
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Masukkan password..."
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="flex justify-center">
          <button
            type="button"
            class="text-white bg-blue-600 hover:text-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="login"
          >
            Submit
          </button>
        </div>
      </form>
      <div class="container flex justify-center my-4">
        <img src="../../assets/logo-white.png" alt="" class="w-[120px]" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.username == "admin" || this.password == "admin") {
        this.$router.push({ path: "/dashboard" });
      }
    },
  },
};
</script>
<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
  height: 100%;
  border-radius: 12px;
  /* background-color: white; */
}
</style>
