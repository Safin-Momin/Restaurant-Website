<template>
  <Header />
  <div class="w-screen min-h-screen">
    <div class="flex justify-center items-center flex-col w-full">
      <img class="h-60 w-60" src="../assets/restaurant-logo.avif" alt="" />
      <h1 class="smh1">Add Restaurant</h1>
      <br />
      <div
        class="flex flex-col leading-10 gap-10 w-1/2 text-yellow-400 font-semibold text-2xl"
      >
        <input
          type="text"
          placeholder="Enter Name"
          v-model="restaurant.name"
          name="name"
        />
        <input
          type="text"
          placeholder="Enter Contact Number"
          v-model="restaurant.contact"
          name="contact"
        />
        <input
          type="text"
          placeholder="Enter Address"
          v-model="restaurant.address"
          name="address"
        />
        <button
          v-on:click="addRestaurant"
          class="bg-amber-900 leading-10 rounded py-1"
        >
          Add Restaurant
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "Add",
  components: {
    Header,
  },
  data() {
    return {
      restaurant: {
        name: "",
        contact: "",
        address: "",
        id: "",
      },
    };
  },
  methods: {
    async addRestaurant() {
      console.log(this.restaurant);
      const result = await axios.post("http://localhost:3000/restaurant", {
        name: this.restaurant.name,
        contact: this.restaurant.contact,
        address: this.restaurant.address,
      });
      if (result.status === 201) {
        this.$router.push({ name: "Home" });
      }
      console.log("result", result);
    },
  },
};
</script>
