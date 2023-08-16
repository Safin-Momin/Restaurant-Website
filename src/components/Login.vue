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
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          v-model="email"
          @blur="v$.email.$touch"
        />
        <div class="red" v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}
        </div>

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          v-model="password"
          @blur="v$.password.$touch"
        />
        <div class="red" v-if="v$.password.$error">
          {{ v$.password.$errors[0].$message }}
        </div>

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
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  name: "Login",
  data() {
    return {
      v$: useVuelidate(),
      email: "",
      password: "",
    };
  },
  validations() {
    return {
      email: { required, email },
      password: { required },
    };
  },
  methods: {
    async login() {
      this.v$.$validate();
      if (this.v$.$invalid) {
        return;
      }
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem(
          "user-info",
          JSON.stringify({
            email: result.data[0].email,
            password: result.data[0].password,
          })
        );
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    user = JSON.parse(user);
    let userName = user?.name;
    if (userName) {
      this.$router.push({ name: "Login" });
    }
    if (user && !userName) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
