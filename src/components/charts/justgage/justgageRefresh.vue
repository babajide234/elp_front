
<template>
  <section class="justgageRefresh">
    <vue-justgage id="g2" ref="g2" class="gauge" data-value="100" />
    <button id="g2_refresh" href="javascript:void(0);" class="btn btn-success" @click="refresh">Random Refresh</button>
  </section>
</template>

<script>
import Vue from 'vue';
import vueJustgage from 'vue-justgage';
Vue.use(vueJustgage);
export default {
  data() {
    return {
      dflt: {
        min: 0,
        max: 200,
        donut: true,
        gaugeWidthScale: 0.6,
        counter: true,
        hideInnerShadow: true,
      },
    };
  },
  mounted() {
    this.$refs.g2.draw({
      id: 'g2',
      value: 100,
      title: 'refresh',
      defaults: this.dflt,
    });
  },
  methods: {
    refresh() {
      this.$refs.g2.refresh(this.getRandomInt(0, 100));
    },
  },
};
</script>
