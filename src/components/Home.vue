<template>
  <h1 class="text-6xl font-semibold">Home Page</h1>
</template>
<script>
export default {
  name: "Home",
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
