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
  props : {
    indexAxis : String,
    dataChart : Array,
    labelsChart : Array,
    Labels : String
  },
  data() {
    return {
      chartData: {
        labels: this.labelsChart,
        datasets: [
          {
            label: this.Labels,
            backgroundColor: "#f87979",
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
};
</script>
