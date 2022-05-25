<template>
  <header class="app-header">
    <div class="logo">LogoHere</div>

    <nav class="app-nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/new-post">New post</router-link>
    </nav>
  </header>
</template>
<script>
// import AppNavVue from "./AppNav.vue";

export default {
  components: {
    // AppNavVue,
  },
};
</script>
<style lang="scss">
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(226, 226, 226);
  padding: 0 40px;
}

.app-nav {
  padding: 30px;
  & a {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
