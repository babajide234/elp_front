
<template>

  <section class="custom-success-slider">
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
        val: 9,
        lineHeight: 10,
        processStyle: {
          backgroundColor: '#00e093',
        },
        tooltipStyles: {
          backgroundColor: '#00e093',
          borderColor: '#00e093',
        },
      },
    };
  },
};
</script>
