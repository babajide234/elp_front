
<template>

  <section class="custom-danger-slider">
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
        val: 4,
        lineHeight: 10,
        processStyle: {
          backgroundColor: '#ff5046',
        },
        tooltipStyles: {
          backgroundColor: '#ff5046',
          borderColor: '#ff5046',
        },
      },
    };
  },
};
</script>
