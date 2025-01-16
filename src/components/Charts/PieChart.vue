<template lang="">
  <PieGenerator :options="chartOptions" :data="chartData" />
</template>
<script>
import { Pie as PieGenerator } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
export default {
  name: "PieChart",
  components: {
    PieGenerator,
  },
  props: {
    dataChart: Array,
    labelsChart: Array,
  },
  watch: {
    dataChart: function() {
      this.renderPieChart();
    }
  },
  data() {
    return {
      chartData: {
        labels: this.labelsChart,
        datasets: [
          {
            backgroundColor: ["#E46651", "#00D8FF", "#41B883"],
            data: this.dataChart,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        aspectRatio : 2,
        plugins: {
          legend: {
            position: "right",
          },
          title: {
            display: true,
            text: "Score By category",
          },
        },
      },
    };
  },
  methods:{
    renderPieChart(){
      this.chartData = {
        labels: this.labelsChart,
        datasets: [
          {
            backgroundColor: ["#E46651", "#00D8FF", "#41B883"],
            data: this.dataChart,
          },
        ],
      }
    }
  },
  mounted(){
    this.renderPieChart();
  }
};
</script>
<style lang=""></style>
