<template>

  <section class="simple-slider">
    <vue-slide-bar v-model="simpleValue" class="pt-3" />
  </section>

</template>

<script>
import VueSlideBar from 'vue-slide-bar';
export default {
  name: 'SimpleSlider',
  components: {
    VueSlideBar,
  },
  data() {
    return {
      simpleValue: 50,
    };
  },
};
</script>
