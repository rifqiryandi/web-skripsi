<template>
    <LineChartGenerator
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script>
  import { Line as LineChartGenerator } from 'vue-chartjs'
  
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
  } from 'chart.js'
  
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
  )
  
  export default {
    name: 'LineChart',
    components: {
      LineChartGenerator
    },
    data() {
      return {
        chartData: {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July'
          ],
          datasets: [
            {
              label: 'Score Per Month',
              backgroundColor: '#002a5c',
              data: [40, 39, 10, 40, 39, 80, 40]
            }
          ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>
  