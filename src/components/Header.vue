<template>
  <div class="flex justify-around bg-amber-900 text-yellow-400 p-3 text-xl">
    <a class="nav" href="/">Home</a>
    <a class="nav" href="/add">Add Restaurant</a>
    <a class="nav" v-on:click="logout" href="#">Logout</a>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
