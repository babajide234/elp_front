<script>
import {
  Doughnut,
} from 'vue-chartjs';

export default {
  extends: Doughnut,
  data() {
    return {
      datacollection: {
        datasets: [{
          data: [20, 80, 85, 45],
          backgroundColor: [
            'rgb(0,224,147)',
            'rgb(0,143,251)',
            'rgb(255,80,70)',
            'rgb(228,238,243)',
          ],
          borderColor: [
            'rgb(0,224,147)',
            'rgb(0,143,251)',
            'rgb(255,80,70)',
            'rgb(228,238,243)',
          ],
        }],
        labels: [
          'Human Resources',
          'Manger',
          'Other',
        ],
      },
      options: {
        cutoutPercentage: 75,
        animationEasing: 'easeOutBounce',
        animateRotate: true,
        animateScale: false,
        responsive: true,
        maintainAspectRatio: true,
        showScale: true,
        legend: {
          display: false,
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.datacollection, this.options);
  },
};
</script>
