<template>
  <div class="login-page">
    <div class="login-card">
      <div class="login-box">
        <img
          class="logo"
          src="../assets/img/emdr_logo_monochrome_white.svg"
          alt="EMDR therapy logo"
        />

        <form class="form-body" autocomplete="new-password">
          <div class="upper-login">
            <div class="inp">
              <input
                type="password"
                name="email"
                placeholder="New Password"
                id="username"
                autocomplete="new-password"
                required
              />
            </div>
            <div class="inp">
              <input
                type="password"
                name="email"
                placeholder="Confirm Password"
                id="username"
                autocomplete="new-password"
                required
              />
            </div>
          </div>

          <div class="lower-login">
            <!-- <div class="login-error" *ngIf="passError">{{passError}}</div>
          <div class="success" *ngIf="successMsg">{{successMsg}}</div> -->
            <button id="Connect" type="submit">Reset</button>
          </div>
        </form>
      </div>

      <div class="emdr">@2021EMDRremote</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ResetPassword',
  };
</script>

<style>
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
    width: 30px;
    height: 35px;
    border-radius: 0px 7px 7px 0px;
    box-shadow: inset 0px 2px 1px rgba(0, 0, 0, 0.15);
  }

  #eye_icon {
    position: relative;
    bottom: 3px;
    border: 0px;
    opacity: 50%;
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
    text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    color: rgb(193, 255, 211);
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
    top: 15px;
    display: flex;
    justify-content: center;
  }

  .mat-darkGreen {
    background-color: #008d78;
    color: rgb(212, 212, 212);
  }
</style>
