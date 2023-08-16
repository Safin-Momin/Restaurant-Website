<template>
  <div class="w-screen min-h-screen">
    <div class="flex justify-center items-center flex-col w-full">
      <img
        class="h-60 w-60 mt-32"
        src="../assets/restaurant-logo.avif"
        alt=""
      />
      <h1>Sign Up</h1>
      <br />
      <div
        class="flex flex-col leading-10 gap-10 w-1/2 text-yellow-400 font-semibold text-2xl"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          v-model="name"
          @blur="v$.name.$touch"
        />
        <div class="red" v-if="v$.name.$error">
          {{ v$.$errors[0].$message }}
        </div>

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

        <button
          v-on:click="signUp"
          class="bg-amber-900 leading-10 rounded py-1"
        >
          Sign Up
        </button>
        <router-link class="text-center" to="/login"
          >Already Foodie? Login</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import axios from "axios";
export default {
  name: "Signup",
  data() {
    return {
      v$: useVuelidate(),
      name: "",
      email: "",
      password: "",
    };
  },
  validations: {
    name: { required },
    email: { required, email },
    password: {
      required,
      minLength: minLength(6),
      containsPasswordRequirement: helpers.withMessage(
        () =>
          `The password requires an uppercase, lowercase, number and special character`,
        (value) =>
          /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(value)
      ),
    },
  },
  methods: {
    async signUp() {
      this.v$.$validate();
      if (this.v$.$invalid) {
        return;
      }
      console.log("signup", this.name, this.email, this.password);
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
        _id: "",
      });
      console.log(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Login" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");

    if (user) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>
