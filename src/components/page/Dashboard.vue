<template>
  <div class="container-sm mx-auto lg:px-10 sm:px-8 py-6">
    <div class="grid grid-rows-1 grid-flow-col gap-3 pb-4">
      <div class="card px-8 py-4 grid lg:grid-cols-2 sm:grid-cols-1 gap-3 h-4">
        <div class="periodForm">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium roboto text-gray-900 dark:text-white"
            >PERIOD</label
          >
          <VueDatePicker
            v-model="date"
            :max-date="new Date()"
            class="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full"
            year-picker
            auto-apply
          >
            <template #input="{ value, onInput }">
              <input :value="value" @input="onInput" />
            </template>
          </VueDatePicker>
        </div>
        <div class="serviceForm">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium roboto text-gray-900 dark:text-white"
            >SERVICE TYPE</label
          >
          <select
            id="countries"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-[4px] block w-full px-[30px] py-[6px] h-[38px] focus:ring-[#aaaeb7]"
          >
            <option selected>Choose a service</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div class="regForm">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium roboto text-gray-900 dark:text-white"
            >REGIONAL</label
          >
          <select
            id="countries"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-[4px] block w-full px-[30px] py-[6px] h-[38px] focus:ring-[#aaaeb7]"
          >
            <option selected>Choose a regional</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div class="kcuForm">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium roboto text-gray-900 dark:text-white"
            >KCU</label
          >
          <select
            id="countries"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-[4px] block w-full px-[30px] py-[6px] h-[38px] focus:ring-[#aaaeb7]"
          >
            <option selected>Choose a kcu</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div class="kcForm">
          <label
            for="base-input"
            class="block mb-2 text-sm font-medium roboto text-gray-900 dark:text-white"
            >KC</label
          >
          <select
            id="countries"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-[4px] block w-full px-[30px] py-[6px] h-[38px] focus:ring-[#aaaeb7]"
          >
            <option selected>Choose a kc</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div class="flex grid-cols-1 lg:col-span-2 sm:col-span-1 justify-center px-20">
          <button
            type="button"
            class="w-1/2 text-posblue bg-white border-2 border-posblue hover:bg-posblue hover:text-white focus:outline-none focus:ring-1 focus:ring-posblue font-medium rounded-lg text-sm px-5 py-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Tampilkan
          </button>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 mb-3">
      <p class="roboto text-center font-bold text-2xl">NPS Dashboard</p>
    </div>
    <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 pb-4">
      <div class="card container px-4 py-2 lg:col-span-2 sm:col-span-1">
        <p class="roboto text-lg font-semibold">NPS Score</p>
        <p class="roboto text-[24px] font-semibold">80</p>
        <p class="roboto text-lg">This Month 10%</p>
        <LineChart />
      </div>
      <div class="card container px-4 py-2">
        <p class="roboto text-lg font-semibold">Trend</p>
        <p class="roboto text-[24px] font-semibold">+5%</p>
        <p class="roboto text-lg">Last Year -15%</p>
        <BarChart
          :indexAxis="'x'"
          :dataChart="dataChart"
          :labelsChart="labelChart"
          :Labels="'Persentase'"
        />
      </div>
      <div class="card container px-4 py-2">
        <p class="roboto text-lg font-semibold">Responden Count</p>
        <p class="roboto text-[24px] font-semibold">500</p>
        <p class="roboto text-lg">All Time +20%</p>
        <BarChart
          :indexAxis="'y'"
          :dataChart="dataChartRes"
          :labelsChart="labelChartRes"
          :Labels="'Total Responden'"
        />
      </div>
    </div>
    <div class="grid grid-cols-1 mb-3">
      <p class="roboto text-center font-bold text-2xl">Sentiment Analysis</p>
    </div>
    <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 pb-4">
      <div class="card container px-4 py-2">
        <p class="roboto text-lg font-semibold">Sentiment Summary</p>
        <p class="roboto text-lg">Last 30 Days</p>
        <BarChart
          :indexAxis="'y'"
          :dataChart="dataChartSen"
          :labelsChart="labelChartSen"
          :Labels="'Total Sentiment'"
        />
      </div>
      <div class="card container px-4 py-2">
        <p class="roboto text-xl font-semibold">Areas Of Improvement</p>
        <p class="roboto text-lg">Customer Service</p>
        <p class="roboto text-[24px] font-semibold">-2%</p>
        <p class="roboto text-lg">Last 30 Days -4%</p>
        <LineChart />
      </div>
      <div class="card container px-4 py-2 lg:col-span-2 sm:col-span-1 mx-auto">
        <p class="roboto text-xl font-semibold">Positive Review Topic</p>
        <p class="roboto text-[24px] font-semibold">63</p>
      </div>
    </div>
  </div>
</template>
<script>
import BarChart from "../Charts/BarChart.vue";
import LineChart from "../Charts/LineChart.vue";
export default {
  name: "Dashboard",
  data() {
    return {
      date: new Date().getFullYear(),
      dataChart: [40, 20, 12],
      labelChart: ["Detractor", "Passive", "Promotor"],
      dataChartRes: [100, 200, 320],
      labelChartRes: ["2022", "2023", "2024"],
      dataChartSen: [60, 30, 80],
      labelChartSen: ["Positive", "Negative", "Neutral"],
    };
  },
  components: {
    BarChart,
    LineChart,
  },
};
</script>
<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: white;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

img {
  border-radius: 5px 5px 0 0;
}
</style>
