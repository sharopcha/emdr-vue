<template>
  <section id="home">
    <div class="top-anchor"></div>
    <!-- Home -->

    <div class="nav-container box-shadow-lower fixed-top">
      <div class="topbar">
        <div class="topbar-elements">
          <span>(+40)000 000000</span>
          <span v-show="!isLoggedIn"
            ><router-link to="/register">Sign Up</router-link></span
          >
          <span v-show="!isLoggedIn"
            ><router-link to="/login">Log in</router-link></span
          >
          <span v-show="isLoggedIn"><a @click="logout()">Log Out</a></span>
        </div>
      </div>

      <!-- NAVBAR START -->
      <nav class="navbar navbar-expand-lg navbar-light bg-white logo-bar">
        <div class="container-fluid justify-content-lg-center">
          <a class="navbar-brand a-link"
            ><img
              class="logo-top d-inline-block align-text-top mg-2"
              width="130px"
              src="../assets/img/emdr_official.svg"
              alt="EMDR therapy logo"
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse flex-lg-grow-0"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link clickable" href="#" @click="goHome()">
                  Home
                </a>
                <!-- <router-link
                  :to="{ path: '/', name: 'Home' }"
                  class="nav-link clickable"
                  >Home</router-link
                > -->
              </li>
              <li class="nav-item">
                <a href="#emdr-therapy" class="nav-link clickable"
                  >EMDR Therapy</a
                >
              </li>
              <li class="nav-item">
                <a href="#help" class="nav-link clickable">Professional Help</a>
              </li>
              <li class="nav-item">
                <a href="#faqs" class="nav-link clickable">FAQs</a>
              </li>
              <li class="nav-item">
                <a href="#contact-us" class="nav-link clickable">Contact Us</a>
              </li>
              <li class="nav-item d-lg-inline-flex align-items-lg-center">
                <button @click="onGoTherapy()" class="start-button">
                  Start Therapy
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- NAVBAR END -->
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        isLoggedIn: null,
      };
    },
    methods: {
      logout() {
        this.$store.commit('logout');
        this.isLoggedIn = false;
      },

      onGoTherapy() {
        if (!this.isLoggedIn) {
          this.$router.push('/login');
        } else {
          this.$router.push('/chat');
        }
      },

      goHome() {
        if (this.$router.currentRoute.value.fullPath !== '/') {
          this.$router.push({ path: '/', name: 'Home' });
        } else {
          window.scrollTo(0, 0);
        }
      },
    },

    created() {
      const token = sessionStorage.getItem('token');

      token ? (this.isLoggedIn = true) : (this.isLoggedIn = false);
    },
  };
</script>

<style>
  /* PAGE ANCHORS */

  .top-anchor {
    position: absolute;
    top: 0;
  }

  .section-anchor {
    position: absolute;
    top: -115px;
  }

  /* PAGE ANCHORS END */

  /* nav + herp */
  .navbar-toggler:focus {
    box-shadow: none;
  }

  .clickable:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .topbar {
    height: 25px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 1px;
  }

  .topbar-elements span {
    font-size: 14px;
    font-weight: lighter;
    padding-right: 18px;
    color: #6b6b6b;
    font: Roboto;
  }

  .topbar-elements a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media only screen and (min-width: 992px) {
    .logo-bar {
      height: 90px;
      /* display: block; */
    }

    .tablet-title,
    .tablet-motto,
    .tablet-start-button {
      display: none;
    }
  }

  .box-shadow-lower {
    -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.35);
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.35);
  }

  .logo-top {
    margin-right: 20px;
    width: 100%;
    height: 60px;
  }

  .nav-item {
    padding: 0px 4px;
  }

  .nav-link {
    font-size: 18px;
    color: #525252 !important;
  }
</style>
