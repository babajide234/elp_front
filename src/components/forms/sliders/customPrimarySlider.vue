
<template>

  <section class="custom-primary-slider">
    <vue-slide-bar v-model="sliderCustomzie.val" class="pt-3" :min="1" :max="10" :process-style="sliderCustomzie.processStyle" :line-height="sliderCustomzie.lineHeight" :tooltip-styles="sliderCustomzie.tooltipStyles" />
  </section>

</template>

<script>
import VueSlideBar from 'vue-slide-bar';
export default {
  components: {
    VueSlideBar,
  },
  data() {
    return {
      sliderCustomzie: {
        val: 6,
        lineHeight: 10,
        processStyle: {
          backgroundColor: '#008ffb',
        },
        tooltipStyles: {
          backgroundColor: '#008ffb',
          borderColor: '#008ffb',
        },
      },
    };
  },
};
</script>
