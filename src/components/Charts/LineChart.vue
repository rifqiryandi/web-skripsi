<template>
  <LineChartGenerator :options="chartOptions" :data="chartData" />
</template>

<script>
import { Line as LineChartGenerator } from "vue-chartjs";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
);

export default {
  name: "LineChart",
  components: {
    LineChartGenerator,
  },
  props: {
    dataChart: Array,
    labelsChart: Array,
  },
  computed:{
    LabelChart: function(){
      return this.labelsChart
    },
    dataChart: function(){
      return this.dataChart
    }
  },
  watch: {
    dataChart: function() {
      // this._chart.destroy();
      this.renderLineChart();
    }
  },
  data() {
    return {
      chartData: {
        labels: this.labelsChart,
        datasets: [
          {
            label: "Score Per Month",
            backgroundColor: [
              "rgba(255, 99, 132)",
              "rgba(255, 159, 64)",
              "rgba(255, 205, 86)",
              "rgba(75, 192, 192)",
              "rgba(54, 162, 235)",
              "rgba(153, 102, 255)",
              "rgba(201, 203, 207)",
              "rgba(211, 213, 227)",
              "rgba(221, 233, 247)",
              "rgba(233, 206, 207)",
              "rgba(244, 203, 257)",
              "rgba(212, 213, 267)",
            ],
            data: this.dataChart,
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  methods: {
    renderLineChart() {
      this.chartData = {
        labels: this.labelsChart,
        datasets: [
          {
            label: "Score Per Month",
            backgroundColor: [
              "rgba(255, 99, 132)",
              "rgba(255, 159, 64)",
              "rgba(255, 205, 86)",
              "rgba(75, 192, 192)",
              "rgba(54, 162, 235)",
              "rgba(153, 102, 255)",
              "rgba(201, 203, 207)",
              "rgba(211, 213, 227)",
              "rgba(221, 233, 247)",
              "rgba(233, 206, 207)",
              "rgba(244, 203, 257)",
              "rgba(212, 213, 267)",
            ],
            data: this.dataChart,
          },
        ],
      };
    },
  },
  mounted() {
    this.renderLineChart();
  },
};
</script>
