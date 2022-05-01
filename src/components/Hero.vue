<template>
  <section id="home">
    <div
      alt="girl with laptop attends EMDR session"
      class="home-body d-flex flex-column align-items-center justify-content-center"
    >
      <h1 class="tablet-title text-center">EMDR Therapy</h1>
      <p class="tablet-motto text-center">
        Heal from the past to succeed in the future.
      </p>
      <button class="tablet-start-button start-button">Start Therapy</button>
      <button class="tablet-start-button start-button">Start Therapy</button>
      <div class="animated-motto">
        <h4 class="motto text-start">
          Heal from the past in order to succeed in the future.
        </h4>
      </div>
    </div>
  </section>

  <!-- [ngStyle]="screenWidth > 992 ? {'background-image': 'url(' + herosrc + ')'}:{'background-image': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(' + herosrc + ')'}" -->
</template>

<script>
  export default {};
</script>

<style>
  .home-body {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('../assets/img/hero-photo.jpg');
  }

  @media (min-width: 992px) {
    .home-body {
      background-image: url('../assets/img/hero-photo.jpg');
    }
  }
</style>
