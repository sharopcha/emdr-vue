<template>
  <div
    class="page-container h-100 d-flex flex-column justify-content-center align-items-center"
  >
    <p class="confirm-text">{{ msg }}</p>
    <button id="Connect" type="submit">Login!</button>
  </div>
</template>

<script>
  export default {
    name: 'AccountActivated',
    data() {
      return {
        msg: 'Validating your Data...',
      };
    },
  };
</script>

<style scoped>
  .page-container {
    margin-top: 10rem;
  }

  .confirm-text {
    font-size: x-large !important;
  }

  button {
    margin-top: 2rem;
    padding: 10px 15px !important;
  }

  #Connect {
    padding: 0px 30px;
    background-color: #20bea7;
  }
</style>
