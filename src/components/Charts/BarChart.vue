<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  props: {
    indexAxis: String,
    dataChart: Array,
    labelsChart: Array,
    Labels: String,
  },
  watch: {
    dataChart: function() {
      this.renderBarChart();
    }
  },
  data() {
    return {
      chartData: {
        labels: this.labelsChart,
        datasets: [
          {
            label: this.Labels,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
            ],
            data: this.dataChart,
          },
        ],
      },
      chartOptions: {
        indexAxis: this.indexAxis,
        responsive: true,
      },
    };
  },
  methods: {
    renderBarChart() {
      this.chartData = {
        labels: this.labelsChart,
        datasets: [
          {
            label: this.Labels,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
            ],
            data: this.dataChart,
          },
        ],
      };

      this.chartOptions = {
        indexAxis: this.indexAxis,
        responsive: true,
      };
    },
  },
  mounted() {
    this.renderBarChart();
  },
};
</script>
