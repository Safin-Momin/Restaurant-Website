<template>
  <div class="w-screen min-h-screen">
    <div class="flex justify-center items-center flex-col w-full">
      <img
        class="h-60 w-60 mt-32"
        src="../assets/restaurant-logo.avif"
        alt=""
      />
      <h1 class="text-yellow-400 font-semibold text-6xl mb-10">Sign Up</h1>
      <br />
      <div
        class="flex flex-col leading-10 gap-10 w-1/2 text-yellow-400 font-semibold text-2xl"
      >
        <input
          type="text"
          placeholder="Enter Name"
          v-model="name"
          class="border-amber-900 border-2 rounded outline-amber-900 px-4 placeholder-yellow-400"
        />
        <input
          type="email"
          placeholder="Enter Email"
          v-model="email"
          class="border-amber-900 border-2 rounded outline-amber-900 px-4 placeholder-yellow-400"
        />
        <input
          type="password"
          placeholder="Enter Password"
          v-model="password"
          class="border-amber-900 placeholder-yellow-400 border-2 rounded outline-amber-900 px-4"
        />
        <button
          v-on:click="signUp"
          class="bg-amber-900 leading-10 rounded py-1"
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Signup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      console.log("signup", this.name, this.email, this.password);
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
        _id: this._id,
      });
      console.log(result);
      if (result.status == 201) {
        alert("signup successfully");
      }
      localStorage.setItem("user-info", JSON.stringify(result.data));
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
