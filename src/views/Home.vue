<template>
  <div>
    <Hero />
    <Therapy />
    <Professionals />
    <Accordion />
    <Contact />
    <Footer />
  </div>
</template>

<script>
  import Hero from '../components/Hero.vue';
  import Therapy from '../components/EMDR-Therapy.vue';
  import Professionals from '../components/Professionals.vue';
  import Contact from '../components/Contact.vue';
  import Footer from '../components/Footer.vue';
  import Accordion from '../components/Accordion.vue';

  export default {
    name: 'Home',
    components: {
      Hero,
      Therapy,
      Professionals,
      Contact,
      Footer,
      Accordion,
    },
  };
</script>

<style>
  .start-button {
    margin-left: 20px;
    border: none;
    background-color: #20bea7;
    color: white;
    font-size: 18px;
    border-radius: 8px;
  }

  .home-body {
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(100vh - 105px);
    margin-top: 115px;
    position: relative;
    padding: 0px 70px;
  }

  .animated-motto {
    /* height: 30vh; */
    width: 40vw;
    background-color: #20bea7;
    position: absolute;
    bottom: 10vh;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    left: -100%;
    animation-name: slide-right;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2vw 0px;
  }

  @keyframes slide-right {
    from {
      left: -40vw;
    }
    to {
      left: 0;
    }
  }

  .motto {
    font-size: 36px;
    color: white;
    text-align: center;
    padding: 20px;
    padding-left: 60px;
  }

  .tablet-title,
  .tablet-motto {
    color: #fff;
  }

  .tablet-title {
    font-size: 3em;
    font-weight: 400;
    margin-bottom: 10px;
  }

  .tablet-motto {
    font-size: 1.5em;
    font-weight: 300;
    margin-bottom: 20px;
  }

  .tablet-start-button {
    padding: 8px;
    font-size: 1.5em;
    font-weight: 500;
    width: 50%;
    border-radius: 50px;
    margin: 0;
  }

  .therapy-description {
    /* background-image:linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(C:\Users\andre\Desktop\Licenta\EMDR\images\anchor-lee-kO1G3neRA2o-unsplash.jpg) ; */
    min-height: 700px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0px 20vw;
    /* display: flex;
    align-items: center; */
    /* padding-bottom: 60px; */
    position: relative;
  }

  .title1 {
    text-align: center;
    padding-bottom: 50px;
    font-weight: 500;
    font-size: 33px;
    text-shadow: 2px 2px 2px #525252;
    color: #4a4a4a;
  }

  .description1 {
    color: #525252;
    font-size: 28px;
    text-align: center;
  }

  .professionals-container {
    background-color: #1fb793;
    /* min-height: 1500px; */
    padding: 150px 10vw;
    position: relative;
  }

  .title2 {
    padding-bottom: 50px;
    font-weight: 500;
    font-size: 33px;
    text-shadow: 2px 2px 2px #525252;
    color: white;
  }

  .subtitle {
    color: #525252;
    font-size: 28px;
    color: white;
    padding: 0px 10vw 30px 10vw;
  }

  .cards {
    margin-top: 300px;
  }

  .card-container {
    padding: 0px 50px;
  }

  .professional-card {
    background-color: white;
    border-radius: 30px;
    padding: 0px 32px 32px 32px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .professional-card h3,
  p {
    padding: 0px;
    margin: 0px;
  }

  .card-title {
    padding: 8vw 2% 3px 2% !important;
    color: #4a4a4a;
    font-size: 25px;
    width: 100%;
  }

  .card-title:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .card-description {
    padding: 2% !important;
    font-size: 22px;
  }

  .card-photo {
    padding-top: 60%;
    width: 60%;
    border-radius: 50%;
    z-index: 9;
    position: absolute;
    top: -8vw;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  /* FAQs */

  .faqs {
    padding: 10vw 10vw;
    position: relative;
  }

  ::ng-deep .faqs-panel > div {
    background-color: #f5f5f5 !important;
    color: #4a4a4a;
    font-size: large;
  }

  .title3 {
    text-align: center;
    padding-bottom: 90px;
    font-weight: 500;
    font-size: 33px;
    text-shadow: 2px 2px 2px #525252;
    color: #525252;
  }

  ::ng-deep .mat-expansion-panel {
    background-color: #008d78;
    font-size: large !important;
    margin-bottom: 5px !important;
  }

  ::ng-deep .mat-expansion-panel-header {
    font-size: large !important;
  }

  ::ng-deep #cdk-accordion-child-1 {
    background-color: #f5f5f5 !important;
    color: #4a4a4a;
    font-size: large;
  }

  ::ng-deep #cdk-accordion-child-2 {
    background-color: #f5f5f5 !important;
    color: #4a4a4a;
    font-size: large;
  }

  ::ng-deep #cdk-accordion-child-3 {
    background-color: #f5f5f5 !important;
    color: #4a4a4a;
    font-size: large;
  }

  ::ng-deep #cdk-accordion-child-4 {
    background-color: #f5f5f5 !important;
    color: #4a4a4a;
    font-size: large;
  }

  ::ng-deep .mat-expansion-panel-body {
    padding: 20px !important;
  }

  /* Contact */

  .contact-body {
    padding: 50px 5vw;
    position: relative;
  }

  .title4 {
    text-align: center;
    padding-bottom: 25px;
    font-weight: 500;
    font-size: 33px;
    text-shadow: 2px 2px 2px #525252;
    color: #4a4a4a;
  }

  .subtitle-2 {
    color: #525252;
    font-size: 28px;
    text-align: center;
    color: #525252;
    padding: 30px 15vw;
  }

  .form-container {
    /* display: flex; */
    padding: 30px 80px;
  }

  .contact-image {
    height: 500px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    /* width: 50%; */
  }

  .contact-form {
    padding: 0px 50px;
  }

  .contact-form .row {
    margin-left: 0px !important;
    margin-right: 0px !important;
  }

  .padding-left {
    padding-left: 5px !important;
  }

  .padding-right {
    padding-right: 5px !important;
  }

  .form-row1 {
    margin-bottom: 15px;
    margin-top: 45px;
  }

  .row1 {
    height: 35px;
    background-color: white;
    border: 1px solid rgba(196, 196, 196, 0.3);
    box-sizing: border-box;
    box-shadow: inset 0px 2px 1px rgba(0, 0, 0, 0.15);
    border-radius: 7px;
    /* width: 100%; */
    padding-left: 10px;
  }

  .row2 {
    height: 35px;
    background-color: white;
    border: 1px solid rgba(196, 196, 196, 0.3);
    box-sizing: border-box;
    box-shadow: inset 0px 2px 1px rgba(0, 0, 0, 0.15);
    border-radius: 7px;
    width: 100%;
    padding-left: 10px;
    margin-bottom: 15px;
  }

  .row3 {
    height: 250px;
    background-color: white;
    border: 1px solid rgba(196, 196, 196, 0.3);
    box-sizing: border-box;
    box-shadow: inset 0px 2px 1px rgba(0, 0, 0, 0.15);
    border-radius: 7px;
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    resize: none;
  }

  .send-button {
    border: none;
    background-color: #20bea7;
    color: white;
    font-size: 18px;
    border-radius: 8px;
  }

  .button-container {
    display: flex;
    justify-content: right;
  }

  .send-button:hover {
    cursor: pointer;
  }

  .form-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .error {
    color: #cc0000;
    padding-left: 1vw;
  }

  .successful-mail {
    color: #008d78;
    padding-left: 1vw;
  }

  /* FOOTER */
  .footer {
    padding: 60px 15vw;
    background-color: #f0f0f0;
  }

  .logo {
    height: 130px;
    width: 250px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .description {
    color: #525252;
  }

  .footer-link {
    display: block;
    padding-bottom: 20px;
    color: #525252;
    text-decoration: none;
  }

  .footer-link:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media only screen and (min-width: 992px) {
    .contact-form .col-lg-6 {
      width: 49%;
    }

    .content-left {
      padding-right: 100px !important;
    }
  }

  @media only screen and (max-width: 992px) {
    .navbar-brand {
      padding-left: 15px;
    }

    .navbar-nav {
      padding: 20px;
    }

    .start-button,
    .animated-motto {
      display: none;
    }

    .tablet-start-button {
      display: block;
    }

    .home-body {
      padding-bottom: 15vw;
    }

    .therapy-description {
      padding: 0px 8vw;
    }

    .cards {
      margin-top: 20vw;
    }

    .card-container {
      margin-bottom: 30%;
      padding: 0px 12vw;
    }

    .card-photo {
      padding-top: 45%;
      width: 45%;
      top: -12vw;
    }

    .card-title {
      padding: 16vw 2% 3px 2% !important;
    }

    .form-container {
      padding: 30px;
    }

    .margin-bottom-lg-15 {
      margin-bottom: 15px;
    }

    .footer {
      padding: 60px 5vw 60px 10vw;
    }

    .content-left {
      margin-bottom: 80px;
    }

    .content-middle {
      margin-bottom: 20px;
    }
  }

  @media only screen and (max-width: 576px) {
    .therapy-description {
      padding: 50px 8vw !important;
    }

    .tablet-start-button {
      padding: 8px;
      font-size: 1.5em;
      font-weight: 500;
      width: 100%;
      border-radius: 50px;
    }

    .title1 {
      text-align: left;
      font-size: 28px;
      padding-bottom: 15px;
      padding-right: 150px;
    }

    .description1 {
      text-align: left;
      font-size: 24px;
    }

    .therapy-description {
      padding: 0px 12vw;
    }

    .professionals-container {
      padding: 100px 10vw 0px 10vw;
    }

    .title2 {
      text-align: left;
      font-size: 28px;
      padding-bottom: 15px;
      padding-right: 150px;
    }

    .subtitle {
      text-align: left;
      font-size: 24px;
      padding: 0px 0px;
    }

    .cards {
      margin-top: 40vw;
    }

    .card-container {
      margin-bottom: 30%;
      padding: 0px 0px 10vw 0px;
    }

    .card-photo {
      padding-top: 50%;
      width: 50%;
      top: -20vw;
    }

    .card-title {
      padding: 23vw 2% 3px 2% !important;
    }

    .title4 {
      text-align: start;
      font-size: 28px;
      padding-bottom: 10px;
      padding-left: 15px;
    }

    .subtitle-2 {
      text-align: start;
      font-size: 24px;
      padding: 10px 15px;
    }

    .form-container {
      padding-top: 0px;
    }

    .contact-form {
      padding: 0px;
    }

    .contact-image {
      display: none;
    }
  }
</style>
