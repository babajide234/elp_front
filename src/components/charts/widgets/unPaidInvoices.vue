<script>
import {
  Line,
} from 'vue-chartjs';

export default {
  extends: Line,
  data() {
    return {
      datacollection: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
          label: 'Profit',
          data: [5, 4, 7, 2, 9, 2, 8],
          borderColor: '#fed713',
          backgroundColor: 'rgba(254,215,19, .2)',
          borderWidth: 2,
          fill: true,
        }],
      },
      options: {
        scales: {
          yAxes: [{
            display: false,
          }],
          xAxes: [{
            display: false,
          }],
        },
        legend: {
          display: false,
        },
        elements: {
          point: {
            radius: 0,
          },
          line: {
            tension: 0,
          },
        },
        stepsize: 10,
      },
    };
  },
  mounted() {
    this.renderChart(this.datacollection, this.options);
  },
};
</script>
