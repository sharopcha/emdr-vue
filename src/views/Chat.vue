<template>
  <div class="home-body">
    <div class="body-container">
      <div class="body-background">
        <div class="body">
          <h3 class="title">Welcome To Your EMDR Therapy Session</h3>
          <p class="description">
            You are about to engage in an online therapy session, please take
            your time to answer all of the questions our conversational agent
            will present you.
          </p>
          <h3 class="title2">
            Read and follow the next instructions for an improved experience:
          </h3>

          <div class="instruction-box">
            <div class="box-number">1</div>
            <div class="box-text">
              Find a quiet room in which you feel comfortable. Make sure there
              are no distractions
            </div>
          </div>

          <div class="instruction-box">
            <div class="box-number">2</div>
            <div class="box-text">
              Try to be as honest as possible, be aware of your emotions and
              take your time to process them.
            </div>
          </div>

          <div class="instruction-box">
            <div class="box-number">3</div>
            <div class="box-text">
              Focus on what you are feeling when you remember the traumatic
              experience ,both physically and emotionally.
            </div>
          </div>

          <div class="instruction-box">
            <div class="box-number">4</div>
            <div class="box-text">
              The Conversational Agent will guide you through your therapy
              session.
            </div>
          </div>

          <div class="instruction-box">
            <div class="box-number">5</div>
            <div class="box-text">
              You will be redirected to your therapy session page as you
              progress through the questions
            </div>
          </div>

          <p class="description2" style="margin-bottom: 20px">
            When the session begins, try to focus on the ball while managing
            your feelings. You will have to do this twice. The first time you
            will process the traumatic event. The second time you will imagine a
            pleasant memory to replace the traumatic one.
          </p>

          <router-link :to="{ name: 'Therapy' }" class="start-button"
            >Begin Session</router-link
          >

          <div><button class="start-button-tablet">Open Chat</button></div>
        </div>
      </div>
    </div>

    <!-- Chat -->

    <div class="chat-container">
      <div class="chat-topbar"><p class="chat-title">ChatBot</p></div>
      <div id="message-container">
        <div class="chat-row" v-for="(message, index) in messages" :key="index">
          <div
            v-if="message.sender == 'user'"
            class="chat-bubble chat-bubble-right"
          >
            {{ message.message }}
            <span class="chat-bubble-corner chat-bubble-corner-right"></span>
          </div>

          <div
            v-if="message.sender == 'bot'"
            class="chat-bubble chat-bubble-left"
          >
            {{ message.message }}
            <span class="chat-bubble-corner chat-bubble-corner-left"></span>
          </div>

          <div class="chat-divider"></div>
        </div>
      </div>

      <div class="message-bar">
        <input
          id="input"
          placeholder="Type something here..."
          autocomplete="off"
          name="message"
          v-model="message"
          v-on:keyup.enter="sendMessage()"
        />
        <button @click="sendMessage()" id="send">
          <span class="material-icons"> send </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Chat',
    methods: {
      async getBotMessages() {
        const res = await axios.get(
          'https://emdr-back-end.herokuapp.com/chatbotENG'
        );

        res.data?.intrebari_eng?.map((intreabar) =>
          this.botMessages.push(intreabar)
        );
      },

      sendMessage(e) {
        if (this.message && this.message.trim().length != 0) {
          var chatMessage = { message: this.message, sender: 'user' };
          this.messages.push(chatMessage);
          var botMessage = { message: this.botMessages.shift(), sender: 'bot' };
          this.messages.push(botMessage);
          this.questionIndex++;

          if (this.questionIndex == 4) {
            if (this.message.toLowerCase() === 'yes') {
              sessionStorage.setItem('consent', JSON.stringify(this.consent));
            }

            if (this.questionIndex == 11) {
              sessionStorage.setItem('messages', JSON.stringify(this.messages));
              sessionStorage.setItem(
                'botMessages',
                JSON.stringify(this.botMessages)
              );
              sessionStorage.setItem(
                'questionIndex',
                String(this.questionIndex)
              );
              sessionStorage.setItem('attendedTherapy', 'true');
              this.$router.push({ path: '/therapy' });
            }

            if (this.questionIndex == 15) {
              sessionStorage.setItem('messages', JSON.stringify(this.messages));
              sessionStorage.setItem(
                'botMessages',
                JSON.stringify(this.botMessages)
              );
              sessionStorage.setItem(
                'questionIndex',
                String(this.questionIndex)
              );
              sessionStorage.setItem('attendedTherapy', 'true');
              this.$router.push({ path: '/therapy' });
            }

            if (this.questionIndex == 18) {
              this.isDisabled = true;
              setTimeout(() => {
                this.messages.shift();
                this.messages.pop();

                if (sessionStorage.getItem('consent')) {
                  this.sendMessagesArray();
                  sessionStorage.removeItem('consent');
                }

                sessionStorage.removeItem('messages');
                sessionStorage.removeItem('botMessages');
                sessionStorage.removeItem('questionIndex');
                sessionStorage.removeItem('attendedTherapy');
                this.$router.push({ path: '/therapy' });
              }, 5000);
            }
          }
        }

        this.message = '';
      },
    },
    data() {
      return {
        messages: [],
        message: '',
        botMessages: [],
        welcomeMessage:
          'Hello, User! Welcome to our EMDR platform. I am your conversational agent and I will assist you during your therapy session. Please take a few moments to answer the following questions.',
        questionIndex: 0,
        isDisabled: false,
      };
    },

    mounted() {
      this.getBotMessages();
      this.messages.push({ message: this.welcomeMessage, sender: 'bot' });
    },
  };
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  *:focus {
    outline: none !important;
  }

  /* Top */

  .topbar {
    height: 25px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 1px;
    z-index: 4;
    position: relative;
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

  .navbar-toggler:focus {
    box-shadow: none;
  }

  .clickable:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  /* .logo-top {
    width: 130px; 
    margin-right: 30px;
} */

  .box-shadow-lower {
    -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.35);
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.35);
  }

  .logo-top {
    margin-right: 20px;
  }

  .nav-item {
    padding: 0px 4px;
  }

  .nav-link {
    font-size: 18px;
    color: #525252 !important;
  }

  @media only screen and (min-width: 992px) {
    .logo-bar {
      height: 90px;
    }
  }

  .home-body {
    padding-top: 115px;
    height: calc(100vh - 115px);
    display: flex;
    background-image: none;
    height: calc(100vh- 115px);
    padding: 0;
  }

  /* Instructions */

  .body-container {
    flex: 70%;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    display: inline-block;
  }

  .body-background {
    padding: 15px;
    background-color: #a8e0d8;
  }

  .body-background::-webkit-scrollbar {
    display: none;
  }

  .body {
    background-color: #fff;
    padding: 35px 60px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: fit-content;
    text-align: center;
  }

  .title {
    text-align: center;
    padding-bottom: 35px;
    font-weight: 500;
    font-size: 22px;
    color: #4a4a4a;
  }

  .description {
    color: #525252;
    font-size: 18px;
    text-align: center;
    padding: 0px 8vw;
  }

  .title2 {
    text-align: center;
    padding-bottom: 20px;
    font-weight: 500;
    font-size: 22px;
    color: #1fb793;
    padding-top: 45px;
  }

  .instruction-box {
    border: solid 10px rgba(32, 190, 167, 0.57);
    display: flex;
    padding: 10px 10px 10px 0px;
    align-items: center;
    margin-bottom: 20px;
  }

  .box-number {
    font-size: 30px;
    color: #1fb793;
    font-weight: 500;
    width: 50px;
    text-align: center;
  }

  .box-text {
    /* flex: 13; */
    width: calc(100% - 50px);
    color: #4a4a4a;
    text-align: start;
  }

  .description2 {
    color: #525252;
    font-size: 18px;
    text-align: center;
    padding: 0px 8vw;
    margin-top: 50px;
  }

  .start-button {
    text-decoration: none;
    border: none;
    background-color: #20bea7;
    color: white;
    padding: 15px 10px;
    font-size: 18px;
    border-radius: 8px;
    margin-top: 40px;
  }

  .start-button:hover {
    cursor: pointer;
  }

  .start-button-tablet {
    border: none;
    background-color: #20bea7;
    color: white;
    font-size: 18px;
    border-radius: 8px;
    margin-top: 40px;
    display: none;
  }

  .start-button-tablet:hover {
    cursor: pointer;
  }

  /* chat */

  .chat-container {
    display: inline-block;
    background-color: black;
    flex: 30%;
  }

  .chat-topbar {
    height: 45px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.35);
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.35);
    position: relative;
    z-index: 2;
  }

  .chat-title {
    margin: 0px;
    color: #4a4a4a;
    font-weight: 500;
    font-size: larger;
  }

  #message-container {
    background-color: #fff;
    padding: 20px;
    height: calc(100% - 105px);
    overflow-y: scroll;
    position: relative;
    z-index: 1;
  }

  .message-bar {
    display: flex;
    height: 60px;
    align-items: center;
    background-color: #008d78;
    padding: 5px 25px;
  }

  #input {
    display: flex;
    height: 35px;
    align-items: center;
    background-color: white;
    border: none;
    border-radius: 10px;
    padding: 0px 15px;
    flex: 70%;
    -webkit-box-shadow: inset 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: inset 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    font-size: medium;
  }

  #input::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    font-size: medium;
  }
  #input::-moz-placeholder {
    /* Firefox 19+ */
    font-size: medium;
  }
  #input:-ms-input-placeholder {
    /* IE 10+ */
    font-size: medium;
  }
  #input:-moz-placeholder {
    /* Firefox 18- */
    font-size: medium;
  }

  #send {
    border: none;
    background: none;
    color: white;
    margin-left: 10px;
    display: flex;
    align-items: center;
  }

  #send span {
    font-size: 35px;
  }

  #send:hover {
    cursor: pointer;
  }

  /* bubbles */

  .chat-row {
    margin-bottom: 2px;
  }

  .chat-row-right {
    justify-content: flex-end;
  }

  .chat-row-left {
    justify-content: flex-start;
  }

  .chat-bubble {
    display: inline-block;
    padding: 10px;
    border-radius: 10px;
    position: relative;
  }

  .chat-bubble-right {
    background-color: #53a395;
    color: white;
    float: right;
  }

  .chat-bubble-left {
    background-color: #e9e9e9;
    color: #6b6b6b;
    float: left;
  }

  .chat-bubble-right {
    display: inline-block;
    padding: 10px;
    border-radius: 10px;
    background-color: #53a395;
    color: white;
    position: relative;
  }

  .chat-bubble-corner {
    position: absolute;
    width: 0;
    height: 0;
  }

  .chat-bubble-corner-right {
    bottom: 0px;
    border-top: 17.5px solid transparent;
    border-left: 20px solid #53a395;
    border-bottom: 0px solid transparent;
    transform: rotate(15deg);
  }

  .chat-bubble-corner-left {
    bottom: 0px;
    left: -10px;
    border-top: 17.5px solid transparent;
    border-right: 20px solid #e9e9e9;
    border-bottom: 0px solid transparent;
    transform: rotate(-15deg);
  }

  .chat-divider {
    clear: both;
    margin-bottom: 15px;
  }

  /* small devices */
  .chat-overlay {
    position: absolute;
    z-index: 1031;
    bottom: 0px;
    left: 0px;
    width: 100vw;
    height: 0px;
    overflow-y: hidden;
    transition: 0.5s height;
  }

  .close-chat {
    position: absolute;
    top: 6px;
    right: 5px;
    outline: none;
    border: none;
    background: none;
    font-size: 24px;
  }

  @media only screen and (max-width: 992px) {
    .home-body {
      padding-top: 108px;
    }

    .navbar-brand {
      padding-left: 15px;
    }

    .navbar-nav {
      padding: 20px;
    }

    .body-container {
      flex: 100%;
      scrollbar-width: initial;
    }

    .chat-container {
      display: none;
    }

    .start-button-tablet {
      display: inline-block;
    }
  }

  @media only screen and (max-width: 740px) {
    .body-background {
      padding: 40px;
    }

    .body {
      padding: 50px 30px;
    }

    .description,
    .description2 {
      padding: 0px;
    }
  }

  @media only screen and (max-width: 576px) {
    .body-background {
      padding: 20px;
    }

    .body {
      padding: 50px 30px;
    }

    .description,
    .description2 {
      padding: 0px;
    }
  }
</style>
