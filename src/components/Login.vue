<template>
  <div class="w-screen min-h-screen">
    <div class="flex justify-center items-center flex-col w-full">
      <img
        class="h-60 w-60 mt-32"
        src="../assets/restaurant-logo.avif"
        alt=""
      />
      <h1>Login</h1>
      <br />
      <div
        class="flex flex-col leading-10 gap-10 w-1/2 text-yellow-400 font-semibold text-2xl"
      >
        <input type="email" placeholder="Enter Email" v-model="email" />
        <input
          type="password"
          placeholder="Enter Password"
          v-model="password"
        />
        <button v-on:click="login" class="bg-amber-900 leading-10 rounded py-1">
          Login
        </button>
        <router-link class="text-center" to="/signup"
          >Not a Foodie? Sign Up</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      console.warn(result);
      console.warn(result.data[0]);
      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    user = JSON.parse(user);

    if (user && user.name) {
      this.$router.push({ name: "Login" });
      // console.log("this is login page");
    }
  },
};
</script>
