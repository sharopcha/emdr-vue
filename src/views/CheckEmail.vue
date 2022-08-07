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
            <p style="color: white">Please enter your Email Address:</p>
            <div class="inp">
              <input
                type="text"
                name="email"
                v-model="email"
                placeholder="email@email.com"
                id="username"
                required
              />
            </div>
          </div>

          <div class="lower-login">
            <div class="success" v-if="successMsg">{{ successMsg }}</div>
            <div class="login-error" v-if="resetError">{{ resetError }}</div>

            <button id="Connect" type="submit">Continue</button>
          </div>
        </form>
      </div>

      <div class="emdr">@2021EMDRremote</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'CheckEmail',
    data() {
      return {
        email: '',
        successMsg: null,
        errorMsg: null,
        resetError: null,
        isError: false,
      };
    },
    methods: {
      submitForm() {
        this.resetError = null;
        const headers = { 'Content-Type': 'application/json' };

        axios
          .post(
            'https://emdr-back-end.herokuapp.com/ForgotPassword',
            { eamil: this.email },
            { headers }
          )
          .then((res) => {
            this.successMsg =
              'Password reset link has been sent successfully. Please check your inbox!';
          })
          .catch((err) => {
            console.log(err.message);
            this.resetError = err.message;
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
    height: 100vh;
  }

  .login-box {
    background-color: #20bea7;
    border-radius: 23px;
    width: 330px;
    height: 430px;
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
    flex-direction: column;
    height: 530px;
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

  #Connect {
    width: 100px;
    font-size: 17px;
    /* position: absolute; */
    /* top:10px; */
    /* bottom:10px; */
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

  #username {
    height: 35px;
    width: 250px;
    background-color: white;
    border: 1px solid rgba(196, 196, 196, 0.3);
    box-sizing: border-box;
    box-shadow: inset 0px 2px 1px rgba(0, 0, 0, 0.15);
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

  .success {
    color: rgb(193, 255, 211);
    text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    width: 195px;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
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
    top: 15px;
    display: flex;
    justify-content: center;
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
