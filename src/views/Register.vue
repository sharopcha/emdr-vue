<template>
  <div class="register-page">
    <div class="register-box">
      <img
        class="logo"
        src="../assets/img/emdr_logo_monochrome_white.svg"
        alt="EMDR therapy logo"
      />

      <form
        class="form-body"
        @submit.prevent="submitForm()"
        autocomplete="new-password"
      >
        <!-- row 1 First Name Last Name -->

        <div class="form-row">
          <div class="inp-container">
            <input
              class="input-style"
              type="text"
              name="firstName"
              placeholder="First name"
              id="firstName"
              v-model="firstName"
              required
            />
          </div>
          <div class="inp-container">
            <input
              class="input-style"
              type="text"
              name="lastName"
              placeholder="Last name"
              id="lastName"
              v-model="lastName"
              required
            />
          </div>
        </div>

        <!-- row 2 Bday  Phone Number -->

        <div class="form-row">
          <div class="inp-container">
            <input
              class="input-style"
              placeholder="Date of Birth"
              type="date"
              min="1900-01-01"
              name="bday"
              id="bday"
              v-model="birthday"
              required
            />
          </div>
          <div class="inp-container">
            <input
              class="input-style"
              type="text"
              name="phnb"
              placeholder="Phone Number"
              id="phnb"
              v-model="phoneNumber"
              required
            />
          </div>
        </div>

        <!-- row 3 Email  Gender -->

        <div class="form-row">
          <div class="inp-container">
            <input
              class="input-style"
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              v-model="email"
              required
            />
            <!-- <div *ngIf="email.invalid && emailclick" class="error">
                Invalid Email Address! 
              </div> -->
          </div>
          <div class="inp-container">
            <select class="input-style" v-model="gender" required>
              <option selected value="" disabled hidden>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <!-- row 4 pcode  Country -->

        <div class="form-row">
          <div class="inp-container">
            <input
              class="input-style"
              type="text"
              name="pcode"
              placeholder="Postal Code"
              id="pcode"
              v-model="postalCode"
              required
            />
          </div>
          <div class="inp-container">
            <select class="input-style" v-model="country" required>
              <option selected value="" disabled hidden>Country</option>
              <option
                v-for="country in countryList"
                :key="country"
                :value="country"
              >
                {{ country }}
              </option>
            </select>
          </div>
        </div>

        <!-- row 5 Passwords -->

        <div class="form-row">
          <div class="password-container">
            <input
              class="input-style"
              type="password"
              autocomplete="new-password"
              name="password"
              placeholder="Password"
              id="password"
              v-model="password"
              required
            />
            <!-- <button class="eye-button" type="button" id="eye_button" >
                <mat-icon id="eye_icon">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
              </button> -->
          </div>
          <div class="inp-container">
            <input
              class="input-style"
              type="password"
              name="repeatPassword"
              placeholder="Confirm password"
              id="repeatPassword"
              v-model="repeatPassword"
              required
            />
          </div>
        </div>

        <div class="lower-register">
          <!-- <div class="bottom-error" *ngIf="errorMsg">
              {{errorMsg}} 
            </div>
            <div class="success" *ngIf="successMsg">
              {{successMsg}} 
            </div> -->
          <button class="submit-button" type="submit">Sign Up!</button>

          <div class="alr-us">
            <router-link to="/login">Already a member? Login!</router-link>
          </div>
        </div>
      </form>
    </div>

    <div class="footer">
      <div class="bottom-nav">
        <a href="#">Home</a>
        <div class="spacer">|</div>
        <a href="#">Contact</a>
        <div class="spacer">|</div>
        <a href="#">Info</a>
      </div>

      <div class="emdr">@2020EMDRremote</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { countryList } from '../util/countries';
  export default {
    name: 'Register',
    data() {
      return {
        countryList: countryList,
        firstName: '',
        lastName: '',
        birthday: '',
        email: '',
        password: '',
        phoneNumber: '',
        repeatPassword: '',
        country: '',
        postalCode: '',
        gender: '',
      };
    },
    methods: {
      submitForm() {
        const body = {
          firstname: this.firstName,
          lastname: this.lastName,
          dateofbirth: this.birthday,
          email: this.email,
          password: this.password,
          phonenumber: this.phoneNumber,
          repeat_password: this.repeatPassword,
          country: this.country,
          postalcode: this.postalCode,
          gender: this.gender,
        };

        try {
          axios
            .post('https://emdr-back-end.herokuapp.com/register', body, {
              headers: { 'Content-Type': 'application/json' },
            })
            .then((res) => {
              console.log(res);
            });

          this.firstName = '';
          this.lastName = '';
          this.birthday = '';
          this.email = '';
          this.password = '';
          this.phoneNumber = '';
          this.repeatPassword = '';
          this.postalCode = '';
          this.gender = '';

          this.$router.push('/login');
        } catch (error) {
          console.log(error, body);
        }
      },
    },
  };
</script>

<style scoped>
  .register-page {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 100%;
    padding-top: 20px;
  }

  .register-box {
    background-color: #20bea7;
    border-radius: 23px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 992px;
    height: 650px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    position: relative;
    padding: 30px;
  }

  .logo {
    width: 200px;
    padding: 20px 0px;
    margin-bottom: 100px;
  }

  .form-body {
    width: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    top: 25px;
  }

  .upper-register {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
  }

  .lower-register {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .alr-us {
    font-size: 14px;
    font-weight: 300;
    color: white;
    padding-top: 20px;
  }

  .submit-button {
    width: 40%;
    font-size: 16px;
    font-weight: 400;
    background-color: #008d78;
    color: rgb(212, 212, 212);
    border: none;
  }

  .alr-us a {
    color: white;
  }

  .form-row {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
  }

  .inp-container {
    width: 49%;
    position: relative;
  }

  .password-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 49%;
  }

  .inp input:focus {
    outline: none;
  }

  .input-style {
    height: 50px;
    width: 100%;
    background-color: white;
    border: 1px solid rgba(196, 196, 196, 0.3);
    box-sizing: border-box;
    box-shadow: inset 0px 2px 1px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 5px;
    outline: none;
  }

  .error {
    position: absolute;
    top: 51px;
    left: 2px;
    font-size: small;
    color: #cc0000;
  }

  .bottom-error {
    font-size: medium;
    color: #cc0000;
    padding-bottom: 20px;
  }

  .success {
    font-size: medium;
    color: rgb(193, 255, 211);
    padding-bottom: 20px;
  }

  #password {
    /* display: flex; */
    width: 100% !important;
    height: 50px !important;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url(https://cdn4.iconfinder.com/data/icons/mayssam/512/down-512.png)
      no-repeat right;
    background-position-x: 220px;
    background-size: 15px;
  }

  ::placeholder {
    color: rgba(74, 94, 69, 0.6);
  }

  select:invalid {
    color: rgba(74, 94, 69, 0.4);
  }

  select:invalid option:not(:disabled) {
    color: rgb(54, 54, 54);
  }

  #password {
    height: 35px;
    width: 250px;
    background-color: white;
    border: 1px solid rgba(196, 196, 196, 0.3);
    box-sizing: border-box;
    box-shadow: inset 0px 2px 1px rgb(0 0 0 / 15%);
    border-radius: 7px;
    padding: 10px;
  }

  #eye_button {
    background-color: white;
    width: 35px;
    height: 50px;
    border-radius: 0px 5px 5px 0px;
    box-shadow: inset 0px 2px 1px rgba(0, 0, 0, 0.15);
  }

  #eye_icon {
    position: relative;
    bottom: 3px;
    border: 0px;
    opacity: 30%;
  }

  .login-error {
    /* text-shadow: -1px -1px 0 rgb(255, 79, 79), 1px -1px 0 rgb(255, 79, 79), -1px 1px 0 rgb(255, 79, 79), 1px 1px 0 rgb(255, 79, 79); */
    border-radius: 5px;
    color: rgb(255, 25, 25);
    width: 195px;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    position: relative;
    bottom: 10px;
  }

  .footer {
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    /* position:relative;
  top:15px; */
  }

  ::ng-deep.mat-progress-spinner circle,
  .mat-spinner circle {
    stroke: #008d78 !important;
  }

  .mat-darkGreen {
    background-color: #008d78;
    color: rgb(212, 212, 212);
  }

  @media only screen and (max-width: 992px) {
    .register-page {
      padding-top: 0px;
    }

    .register-box {
      border-radius: 0px;
      padding: 10px;
      box-shadow: none;
    }

    .logo {
      width: 170px;
      padding: 20px 0px;
    }

    .lower-register {
      padding: 10px 0px;
    }

    .submit-button {
      width: 100%;
    }

    .alr-us {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 576px) {
    .form-row {
      flex-wrap: wrap;
      margin-bottom: 0px;
    }

    .inp-container {
      width: 100%;
      margin-bottom: 20px;
    }

    .password-container {
      width: 100%;
      margin-bottom: 20px;
    }

    .lower-register {
      padding-bottom: 30px;
    }

    .footer {
      padding: 30px;
    }
  }

  @media screen and (orientation: landscape) {
    .lower-register {
      padding-bottom: 30px;
    }

    .footer {
      padding: 30px;
    }
  }
</style>
