<template>
  <Navbar v-if="isNavbarShown" />
  <router-view />
</template>

<script>
  import Navbar from './components/Navbar.vue';
  export default {
    components: {
      Navbar,
    },

    data() {
      return {
        isNavbarShown: true,
      };
    },

    watch: {
      $route: function () {
        if (
          this.$route.path === '/therapy' ||
          this.$route.path === '/login' ||
          this.$route.path === '/register'
        ) {
          this.isNavbarShown = false;
        } else if (this.$route.path === '/') {
          this.isNavbarShown = true;
        }
      },
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  button {
    padding: 10px 15px;
  }
</style>
