<template>
  <Header />
  <div class="w-screen min-h-screen">
    <div class="flex justify-center items-center flex-col w-full">
      <img class="h-60 w-60" src="../assets/restaurant-logo.avif" alt="" />
      <h1 class="smh1">Update Restaurant</h1>
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
          v-on:click="updateRestaurant"
          class="bg-amber-900 leading-10 rounded py-1"
        >
          Update Restaurant
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "Update",
  components: {
    Header,
  },
  data() {
    return {
      restaurant: {
        name: "",
        contact: "",
        address: "",
      },
    };
  },
  methods: {
    async updateRestaurant() {
      const result = await axios.put(
        "http://localhost:3000/restaurant/" + this.$route.params.id,
        {
          name: this.restaurant.name,
          contact: this.restaurant.contact,
          address: this.restaurant.address,
        }
      );
      if (result.status === 200) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  async mounted() {
    const result = await axios.get(
      "http://localhost:3000/restaurant/" + this.$route.params.id
    );
    this.restaurant = result.data;
  },
};
</script>
