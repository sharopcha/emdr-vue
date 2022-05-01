<template>
  <section id="contact-us">
    <div class="contact-body">
      <div class="section-anchor"></div>
      <div class="title4">Contact Us</div>
      <div class="subtitle-2">
        For further details don’t hesitate to contact us and our staff will get
        back to you with a reply as soon as possible
      </div>

      <div class="form-container row">
        <div
          alt="doodle of a screen surrounded by social media icons"
          class="contact-image col-12 col-lg-6"
        ></div>
        <div class="contact-form col-12 col-lg-6">
          <form>
            <div class="form-row1 row justify-content-lg-between">
              <input
                required
                class="row1 col-12 col-lg-6 margin-bottom-lg-15"
                type="text"
                name="username"
                placeholder="Name"
                id="username"
              />
              <input
                required
                class="row1 col-12 col-lg-6"
                type="tel"
                name="Phone"
                placeholder="Phone"
                id="phone"
              />
            </div>
            <input
              required
              class="row2"
              type="text"
              name="Email"
              placeholder="Email"
              id="email"
            />
            <textarea
              required
              class="row3"
              type="text"
              name="Message"
              placeholder="Message"
              id="message"
            ></textarea>
            <div class="form-bottom">
              <div>
                <p class="error"></p>
                <p class="successful-mail">Mail sent succesfully!</p>
              </div>
              <div class="button-container">
                <button class="send-button">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Contact',
  };
</script>

<style>
  .contact-image {
    background-image: url('../assets/img/social-media-2786261_1920.jpg');
  }
</style>
