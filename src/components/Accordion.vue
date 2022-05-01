<template>
  <section id="faqs">
    <div class="accordion">
      <div class="title3">Frequently Asked Questions</div>
      <vue-collapsible-panel-group accordion>
        <vue-collapsible-panel
          v-for="(tab, index) in tabs"
          base-color=""
          :key="index"
          :expanded="false"
        >
          <template #title>{{ tab.header }}</template>
          <template #content>{{ tab.body }}</template>
        </vue-collapsible-panel>
      </vue-collapsible-panel-group>
    </div>
  </section>
</template>

<script>
  import {
    VueCollapsiblePanelGroup,
    VueCollapsiblePanel,
  } from '@dafcoe/vue-collapsible-panel';
  import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css';
  export default {
    name: 'Accordion',
    components: {
      VueCollapsiblePanelGroup,
      VueCollapsiblePanel,
    },

    data() {
      return {
        tabs: [
          {
            header: 'What is EMDR therapy?',
            body: "EMDR (Eye Movement Desensitization and Reprocessing) is a psychotherapy technique that was developed to help people cope with the pain of traumatic memories (Shapiro, 1989a, 1989b). According to Shapiro's (2001) Adaptive Information Processing model, EMDR counseling helps people access and interpret painful memories and other negative life experiences in order to reach an adaptive resolution.",
          },
          {
            header: 'Who can benefit from EMDR therapy?',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
          {
            header: 'How does EMDR treatment work?',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
          {
            header: 'How effective is EMDR?',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
          {
            header: 'How many sessions will it take?',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
        ],
      };
    },
  };
</script>

<style>
  .accordion {
    max-width: 950px;
    margin: 15px auto;
    font-size: 1.2rem;
  }

  .vcp__header {
    background-color: #368d78 !important;
    color: #fff;
    padding: 25px !important;
  }
</style>
