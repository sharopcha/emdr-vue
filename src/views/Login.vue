<template>
  <div class="login-page">
    <div class="login-card">
      <div class="login-box">
        <img
          class="logo"
          src="../assets/img/emdr_logo_monochrome_white.svg"
          alt="EMDR therapy logo"
        />

        <form @submit.prevent="submitForm()" class="form-body">
          <div class="upper-login">
            <div class="inp">
              <input
                type="text"
                name="email"
                placeholder="Email"
                id="username"
                v-model="email"
                autofocus
                required
              />
            </div>
            <div class="inp">
              <input
                type="password"
                name="password"
                v-model="password"
                autocomplete="new-password"
                placeholder="Password"
                id="password"
                required
              />
            </div>
          </div>

          <div class="lower-login">
            <div class="login-error"></div>

            <button type="submit">Login!</button>
            <router-link
              :to="{ name: 'ResetPassword', params: { token: 'fsdfsdf' } }"
              class="forgot-password"
              >Forgot Password?</router-link
            >
            <!-- <mat-spinner [diameter]="50" *ngIf="isClicked"></mat-spinner> -->
          </div>
        </form>

        <div class="new-us">
          <router-link to="/register">Not a member yet? Sign Up!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: '',
        error: '',
      };
    },
    methods: {
      submitForm() {
        console.log(this.email, this.password);
        const headers = {
          'Content-Type': 'application/json',
          Authorization: `Basic ${window.btoa(
            this.email + ':' + this.password
          )}`,
        };

        axios
          .post('https://emdr-back-end.herokuapp.com/login', {}, { headers })
          .then((res) => {
            // console.log(res.data[0].token);

            const token = res.data[0].token;

            sessionStorage.setItem('token', token);

            this.$store.commit('loginUser');

            this.$router.push('/');
          })
          .catch((err) => {
            this.error = err;
            console.log(err);
          });
      },
    },
  };
</script>

<style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .login-box {
    background-color: #20bea7;
    border-radius: 23px;
    width: 330px;
    margin-top: 40px;
    height: 475px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo {
    width: 50%;
  }

  .login-card {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 100px;
    flex-direction: column;
  }

  .login-card a {
    text-decoration: none;
    color: #575757;
  }

  .login-card a:hover {
    text-decoration: underline;
  }

  .form-body {
    width: 330px;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    top: 25px;
  }

  ::placeholder {
    color: rgba(77, 78, 77, 0.6);
  }

  .upper-login {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 330px;
    height: 140px;
  }

  .lower-login {
    height: 120px;
    width: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  button {
    width: 100px;
    font-size: 17px;
    border-radius: 10px;
    outline: none;
    border: none;
    background-color: #10443c;
    color: #fff;
  }

  .forpass {
    position: relative;
    top: 5px;
    font-size: 10px;
    text-decoration: underline;
  }

  .inp {
    position: relative;
    display: flex;
    flex-direction: row;
  }

  .inp input:focus {
    outline: none;
  }

  .inp input {
    height: 35px;
    width: 250px;
    background-color: white;
    border: 1px solid rgba(196, 196, 196, 0.3);
    box-sizing: border-box;
    box-shadow: inset 0px 2px 1px rgb(0 0 0 / 15%);
    border-radius: 7px;
    padding: 10px;
  }

  .login-error {
    /* text-shadow: -1px -1px 0 rgb(255, 79, 79), 1px -1px 0 rgb(255, 79, 79), -1px 1px 0 rgb(255, 79, 79), 1px 1px 0 rgb(255, 79, 79); */
    text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    color: rgb(255, 25, 25);
    width: 195px;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
  }

  .forgot-password {
    font-size: 13px;
  }

  .new-us {
    position: relative;
    top: 40px;
    font-size: 13px;
    flex-direction: column;
    display: flex;
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    top: 70px;
  }

  .bottom-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 200px;
    font-size: 20px;
  }

  .bottom-nav a {
    color: #929191;
    text-decoration: none;
  }

  .spacer {
    color: #929191;
  }

  .emdr {
    color: #929191;
    position: relative;
    top: 15px;
  }

  ::ng-deep.mat-progress-spinner circle,
  .mat-spinner circle {
    stroke: #008d78 !important;
  }

  .mat-darkGreen {
    background-color: #008d78;
    color: rgb(212, 212, 212);
  }
</style>
