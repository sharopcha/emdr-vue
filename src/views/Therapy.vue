<template>
  <!-- Ball -->

  <div class="ball-container" @mousemove="showButtons()">
    <div
      id="ball"
      :style="{ 'animation-play-state': ballstate }"
      @click="playAudio()"
      class="ball"
    ></div>
  </div>

  <!-- Buttons + Timer Footer -->

  <div :style="{ opacity: showFooter }" class="buttons-container">
    <div class="timer">
      <span>00</span>:
      <span v-if="addzeros(minutes)">0{{ minutes }}</span>
      <span v-if="!addzeros(minutes)">{{ minutes }}</span
      >:<span v-if="addzeros(seconds)">0{{ seconds }}</span
      ><span v-if="!addzeros(seconds)">{{ seconds }}</span>
    </div>

    <div>
      <button @click="toggle()" class="button">
        <span v-if="!moving" class="material-icons">play_arrow</span>
        <span v-if="moving" class="material-icons">pause</span>
      </button>
    </div>

    <div>
      <button @click="resetTimer()" class="button">
        <span class="material-icons">replay</span>
      </button>
    </div>
    <div>
      <button @click="toggleFullscreen()" class="button">
        <span v-if="!fullscreen" class="material-icons">fullscreen</span>
        <span v-if="fullscreen" class="material-icons">fullscreen_exit</span>
      </button>
    </div>
    <div>
      <button @click="showdialogue()" class="button">
        <span class="material-icons">close</span>
      </button>
    </div>
  </div>

  <!-- Start modal -->
  <div v-if="startDialogue" class="dialogue-backdrop">
    <div class="dialogue">
      <p class="dialogue-text">Please select the duration of your session</p>
      <div class="dialogue-button-container">
        <div class="timeselector-container">
          <div class="plus-container">
            <button @click="minutesUp()" class="plus">
              <span class="material-icons">keyboard_arrow_up</span>
            </button>
          </div>
          <div class="value-container">
            <input v-model="minutes" class="value" type="text" />
          </div>
          <div class="plus-container">
            <button @click="minutesDown()" class="plus">
              <span class="material-icons">keyboard_arrow_down</span>
            </button>
          </div>
        </div>

        <span style="padding: 0.5vw">:</span>

        <div class="timeselector-container">
          <div class="plus-container">
            <button @click="secondsUp()" class="plus">
              <span class="material-icons">keyboard_arrow_up</span>
            </button>
          </div>
          <div class="value-container">
            <input v-model="seconds" class="value" type="text" />
          </div>
          <div class="plus-container">
            <button @click="secondsDown()" class="plus">
              <span class="material-icons">keyboard_arrow_down</span>
            </button>
          </div>
        </div>
      </div>
      <div class="start">
        <button @click="beginSession()" class="dialogue-button">
          Begin Session!
        </button>
      </div>
    </div>
  </div>

  <!-- Close modal -->

  <div v-if="showDialogue" class="dialogue-backdrop">
    <div class="dialogue">
      <p class="dialogue-text">Do you wish to end your session?</p>
      <div class="dialogue-button-container">
        <button @click="exitFromSession()" class="dialogue-button margin-right">
          Yes
        </button>
        <button @click="closedialogue()" class="dialogue-button margin-left">
          No
        </button>
      </div>
    </div>
  </div>

  <!-- Session finished modal -->

  <div v-if="sessionEnded" class="dialogue-backdrop">
    <div class="dialogue">
      <p class="dialogue-text">Your therapy session is completed!</p>
      <div class="dialogue-button-container">
        <button
          routerLink="/chat"
          @click="closeFullscreen()"
          class="dialogue-button margin-right"
        >
          Okay
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showFooter: 1,
        minutes: 2,
        seconds: 0,
        moving: false,
        ballstate: 'paused',
        ball: null,
        timer: null,
        sessionStarted: false,
        sessionEnded: false,
        initialMinutes: null,
        initialSeconds: null,
        fullscreen: false,
        startDialogue: true,
        ballOrientation: null,
        panNode: StereoPannerNode,
        audioCtx: new AudioContext(),
        audio: new Audio(
          require('../assets/sound/328117__greenvwbeetle__pop-8.flac')
        ),
        audioSource: null,
        elem: document.documentElement,
      };
    },

    methods: {
      addzeros(val) {
        return val < 10 ? true : false;
      },

      toggle() {
        this.moving = !this.moving;
        if (this.moving) {
          this.ballstate = 'running';

          if (!this.sessionStarted) {
            this.timer = setInterval(() => {
              if (this.seconds == 0 && this.minutes == 0) {
                this.ballstate = 'paused';
                this.moving = false;
                clearInterval(this.timer);
                this.sessionEnded = true;
              } else if (this.seconds <= 0) {
                this.minutes--;
                this.seconds = 59;
              } else {
                this.seconds--;
              }
            }, 1000);
            this.sessionStarted = true;
          }
        } else {
          this.ballstate = 'paused';
          clearInterval(this.timer);
          this.sessionStarted = false;
        }
      },

      resetTimer() {
        if (this.timer) {
          clearInterval(this.timer);
        }

        this.minutes = this.initialMinutes;
        this.seconds = this.initialSeconds;
        this.sessionStarted = false;
        this.ballstate = 'paused';
        this.moving = false;
      },

      closeFullscreen() {
        if (document.fullscreenElement) {
          console.log('document', document);
          if (document?.exitFullscreen) {
            document.exitFullscreen();
          } else if (this.document?.mozCancelFullScreen) {
            /* Firefox */
            document.mozCancelFullScreen();
          } else if (document?.webkitExitFullscreen) {
            console.log('entered');
            /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
          } else if (document?.msExitFullscreen) {
            /* IE/Edge */
            document.msExitFullscreen();
          }
        }
      },

      openFullscreen() {
        if (this.elem.requestFullscreen) {
          this.elem.requestFullscreen();
        } else if (this.elem.mozRequestFullScreen) {
          /* Firefox */
          this.elem.mozRequestFullScreen();
        } else if (this.elem.webkitRequestFullscreen) {
          /* Chrome, Safari and Opera */
          this.elem.webkitRequestFullscreen();
        } else if (this.elem.msRequestFullscreen) {
          /* IE/Edge */
          this.elem.msRequestFullscreen();
        }
      },

      toggleFullscreen() {
        if (this.fullscreen) {
          this.closeFullscreen();
        } else {
          this.openFullscreen();
        }

        this.fullscreen = !this.fullscreen;
      },

      closedialogue() {
        this.showDialogue = false;
      },

      exitFromSession() {
        this.closeFullscreen();
        this.$router.push({ path: '/chat' });
      },

      showdialogue() {
        this.showDialogue = true;
      },

      showButtons() {
        this.showFooter = 1;
        let hideButtons;
        if (hideButtons) {
          clearTimeout(hideButtons);
        }

        if (this.sessionStarted) {
          hideButtons = setTimeout(() => {
            this.showFooter = 0;
          }, 3000);
        }
      },

      minutesUp() {
        if (this.minutes < 10) {
          this.minutes += 1;
        }
      },

      minutesDown() {
        if (this.minutes > 2) {
          this.minutes -= 1;
        }
      },

      secondsUp() {
        if (this.seconds == 30) {
          this.seconds = 0;
          this.minutesUp();
        } else if (this.minutes < 10) {
          this.seconds += 30;
        }
      },

      secondsDown() {
        if (this.seconds == 0 && this.minutes > 2) {
          this.seconds += 30;
          this.minutesDown();
        } else {
          this.seconds = 0;
        }
      },

      beginSession() {
        this.initialMinutes = this.minutes;
        this.initialSeconds = this.seconds;

        this.ball = document.getElementById('ball');

        // this.ball = this.$refs.ball;
        console.log(this.ball);

        this.toggle();
        this.startDialogue = false;
        this.ball.onanimationiteration = () => {
          this.ballOrientation = this.ballOrientation == 1 ? -1 : 1;
          this.panNode.pan.setValueAtTime(
            this.ballOrientation,
            this.audioCtx.currentTime
          );
          this.playAudio();
        };
      },

      playAudio() {
        this.audio.play();
      },
    },

    mounted() {
      // this.audio.src = require('@/assets/sound/328117__greenvwbeetle__pop-8.flac');
      // this.audio.load();

      console.log(this.audio);
      this.audioSource = this.audioCtx.createMediaElementSource(this.audio);
      this.panNode = this.audioCtx.createStereoPanner();

      this.audioSource.connect(this.panNode);
      this.panNode.connect(this.audioCtx.destination);

      this.panNode.pan.setValueAtTime(1, this.audioCtx.currentTime);
    },
  };
</script>

<style scoped>
  .ball-container {
    height: 100vh;
    width: 100vw;
    background-color: #242424;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .ball {
    height: 8vw;
    width: 8vw;
    border-radius: 50%;
    position: absolute;
    animation-name: side-to-side;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: alternate;
    background: radial-gradient(circle at 2.66vw 2.66vw, red, #000);
  }

  @keyframes side-to-side {
    from {
      left: 0px;
    }
    to {
      left: calc(100vw - 8vw);
    }
  }

  .dialogue {
    min-height: 10vh;
    /* width: 20vw; */
    width: 350px;
    background-color: #e3e3e3;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
    position: relative;
    z-index: 11;
  }

  .dialogue-backdrop {
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    position: absolute;
    z-index: 10;
    background: rgba(0, 0, 0, 0.32);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dialogue-text {
    margin-top: 0px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dialogue-button-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dialogue-button {
    height: 30px;
    background-color: #c7c7c7;
    border-radius: 3px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 30%);
    border: 1px solid #ccc;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .start {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1vh;
  }

  .scale {
    transform: scale(1.2);
    width: 15%;
    height: 30px;
    background-color: #c7c7c7;
    border-radius: 3px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    border: 1px solid #ccc;
  }

  .buttons-container {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #242424;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    transition: all 0.5s ease-in-out;
  }

  .button {
    height: 40px;
    width: 60px;
    border: none;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #424242;
  }

  .margin-left {
    margin-left: 10px;
  }

  .margin-right {
    margin-right: 10px;
  }

  .timer {
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
    color: #e6e6e6;
  }

  .timeselector-container {
    min-height: 50px;
    width: 50px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .value {
    height: 27px;
    width: 100%;
    border: none;
    outline: none;
    text-align: center;
  }

  .plus {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    height: 30px;
    width: 100%;
  }

  .plus-container {
    width: 100%;
  }

  .rotate {
    transform: scaleY(-1);
  }
</style>
