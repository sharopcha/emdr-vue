<template>
  <section id="help">
    <div class="professionals-container container-full text-center">
      <div class="section-anchor"></div>
      <h2 class="title2">Seek Help from our Professionals</h2>
      <p class="subtitle">
        Our team of properly trained professionals is ready to guide you on your
        healing journey. Don’t hesitate to contact your preferred therapist to
        discuss details and set up an appointment
      </p>
      <div class="cards row">
        <div class="col-12 col-lg-4 card-container">
          <div class="professional-card text-start">
            <h3 class="card-title">Jane Smith</h3>
            <p class="card-description">
              “As a therapist, you have to remember that for each patient you
              may be the only person truly capable of hearing and holding their
              pain. This is sacred. ”
            </p>
            <div
              alt="therapist smiling with kindness"
              class="card-photo photo1"
            ></div>
          </div>
        </div>

        <div class="col-12 col-lg-4 card-container">
          <div class="professional-card text-start">
            <h3 class="card-title">John Lakin</h3>
            <p class="card-description">
              “A healing journey takes time, it requires dedication, it will
              sometimes hurt and it requires sacrifice but in the end, it will
              all be worth it.”
            </p>
            <div
              alt="therapist smiling with kindness"
              class="card-photo photo2"
            ></div>
          </div>
        </div>

        <div class="col-12 col-lg-4 card-container">
          <div class="professional-card text-start">
            <h3 class="card-title">Sarah Pearlman</h3>
            <p class="card-description">
              “Strength doesn't come from what you can do, but from overcoming
              the hardships you once thought will stick with you forever.”
            </p>
            <div
              alt="therapist smiling with kindness"
              class="card-photo photo3"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Professionals',
  };
</script>

<style>
  .photo1 {
    background-image: url('../assets/img/stephanie-liverani-Zz5LQe-VSMY-unsplash.jpg');
  }

  .photo2 {
    background-image: url('../assets/img/timothy-ayegbede-MCrBXiMskNE-unsplash.jpg');
  }

  .photo3 {
    background-image: url('../assets/img/michael-dam-mEZ3PoFGs_k-unsplash.jpg');
  }
</style>
