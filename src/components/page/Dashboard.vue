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
            :format="format"
            class="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full"
            auto-apply
            range
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
            v-model="layanan"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-[4px] block w-full px-[30px] py-[6px] h-[38px] focus:ring-[#aaaeb7]"
          >
            <option value="">Semua Layanan</option>
            <option value="Keuangan">Keuangan</option>
            <option value="Kurir">Kurir</option>
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
            v-model="regional"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-[4px] block w-full px-[30px] py-[6px] h-[38px] focus:ring-[#aaaeb7]"
          >
            <option value="">Choose a regional</option>
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
            v-model="kcu"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-[4px] block w-full px-[30px] py-[6px] h-[38px] focus:ring-[#aaaeb7]"
          >
            <option value="">Choose a kcu</option>
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
            v-model="kc"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-[4px] block w-full px-[30px] py-[6px] h-[38px] focus:ring-[#aaaeb7]"
          >
            <option value="">Choose a kc</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div
          class="flex grid-cols-1 lg:col-span-2 sm:col-span-1 justify-center px-20"
        >
          <button
            type="button"
            class="w-1/2 text-posblue bg-white border-2 border-posblue hover:bg-posblue hover:text-white focus:outline-none focus:ring-1 focus:ring-posblue font-medium rounded-lg text-sm px-5 py-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            @click="showData"
          >
            Tampilkan
          </button>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 mb-3">
      <p class="roboto text-center font-bold text-2xl">NPS Dashboard</p>
    </div>
    <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 pb-4">
      <div class="card container px-4 py-2 mx-auto">
        <p class="roboto text-lg font-semibold">NPS Score</p>
        <p class="roboto text-[24px] font-semibold">{{ cardNpsScore.score }}</p>
        <p class="roboto text-lg">This Month {{ cardNpsScore.thisMonth }}%</p>
        <BarChart
          :indexAxis="'x'"
          :dataChart="getLineData"
          :labelsChart="getLineLabel"
          :Labels="'Nps Score Per Month'"
        />
      </div>
      <div class="card container px-4 py-2 mx-auto">
        <p class="roboto text-lg font-semibold">Score based on Category</p>
        <PieChart
          :dataChart="cardNpsCat.DataNps"
          :labelsChart="cardNpsCat.LabelNps"
        />
      </div>
      <div class="card container px-4 py-2 mx-auto">
        <p class="roboto text-lg font-semibold">Responden Count</p>
        <p class="roboto text-[24px] font-semibold">{{cardResponden.jumlahResponden.toLocaleString('id-ID')}}</p>
        <p class="roboto text-lg">All Time +20%</p>
        <BarChart
          :indexAxis="'y'"
          :dataChart="cardResponden.dataChartRes"
          :labelsChart="cardResponden.labelChartRes"
          :Labels="'Total Responden'"
        />
      </div>
    </div>
    <div class="grid grid-cols-1 mb-3">
      <p class="roboto text-center font-bold text-2xl">Sentiment Analysis</p>
    </div>
    <div
      class="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-3 pb-4 mb-2"
    >
      <div class="card container px-4 py-2 mx-auto">
        <p class="roboto text-lg font-semibold">Positive</p>
        <p class="roboto text-3xl">300</p>
        <p class="roboto">8% Up Since Last Week</p>
      </div>
      <div class="card container px-4 py-2 mx-auto">
        <p class="roboto text-lg font-semibold">Neutral</p>
        <p class="roboto text-3xl">80</p>
        <p class="roboto">11% Up Since Last Week</p>
      </div>
      <div class="card container px-4 py-2 mx-auto">
        <p class="roboto text-lg font-semibold">Negative</p>
        <p class="roboto text-3xl">20</p>
        <p class="roboto">4% Down Since Last Week</p>
      </div>
    </div>
    <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 pb-4">
      <div class="card container px-4 py-2 mx-auto">
        <p class="roboto text-xl font-semibold">Areas Of Improvement</p>
        <p class="roboto text-lg text-red-500">Customer Service</p>
        <!-- <p class="roboto text-[24px] font-semibold">-2%</p> -->
        <p class="roboto text-lg">Last 30 Days</p>
        <LineChart />
      </div>
      <div class="card container px-4 py-2 mx-auto">
        <p class="roboto text-xl font-semibold">Positive Review Topic</p>
        <p class="roboto text-[24px] font-semibold">63</p>
        <BarChart
          :indexAxis="'y'"
          :dataChart="dataChartTop"
          :labelsChart="labelChartTop"
          :Labels="'Positive Highlight'"
        />
      </div>
      <div class="grid-cols-1 lg:col-span-2 sm:col-span-1">
        <div class="card container px-4 py-2 mx-auto">
          <p class="roboto text-xl font-semibold">FeedBack Detail</p>
          <!-- Note Barnya di ganti table -->
          <DataTable
            :value="getAllData"
            paginator
            :rows="5"
            :rowsPerPageOptions="[5, 10, 20, 50]"
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} to {last} of {totalRecords}"
            tableStyle="min-width: 50rem"
            v-model:filters="filters"
            :loading="loading"
          >
            <template #header>
              <div class="flex justify-end">
                <span class="p-input-icon-left">
                  <i class="fa fa-search" aria-hidden="true"></i>
                  <InputText
                    placeholder="Search"
                    v-model="filters['global'].value"
                  />
                </span>
              </div>
            </template>
            <template #empty> No Data found. </template>
            <template #loading> Loading data. Please wait. </template>
            <!-- <Column header="No" style="width: 50px">
              <template #body="slotProps">
                {{ slotProps.index + 1 + first }}
              </template>
            </Column> -->
            <Column field="name" header="Nama">
              <template #body="{ data }">
                <div style="font-weight: 600">
                  {{ data.name }}
                </div>
              </template>
            </Column>
            <Column field="" header="Jenis Kelamin">
              <template #body="{ data }">
                <div>
                  {{ data.code }}
                </div>
              </template>
            </Column>
            <Column field="" header="Pekerjaan">
              <template #body="{ data }">
                <div>
                  {{ data.category }}
                </div>
              </template>
            </Column>
            <Column field="" header="Skala">
              <template #body="{ data }">
                <div>
                  {{ data.quantity }}
                </div>
              </template>
            </Column>
            <Column field="" header="Alasan">
              <template #body="{ data }">
                <div>
                  {{ data.quantity }}
                </div>
              </template>
            </Column>
          </DataTable>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BarChart from "../Charts/BarChart.vue";
import PieChart from "../Charts/PieChart.vue";
import LineChart from "../Charts/LineChart.vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { FilterMatchMode } from "@primevue/core/api";
import InputText from "primevue/inputtext";
import reportNpsService from "../../services/ReportNps.service";

export default {
  name: "Dashboard",
  data() {
    return {
      regional: "",
      kcu: "",
      kc: "",
      layanan: "",
      cardNpsScore: {
        score: 0,
        thisMonth: 0,
        LabelPerMonth: [],
        DataPerMonth: [],
      },
      cardNpsCat: {
        LabelNps: ["Detractor", "Passive", "Promotor"],
        DataNps: [],
      },
      cardResponden: {
        jumlahResponden : 0,
        labelChartRes: [],
        dataChartRes: [],
      },
      products: [
        {
          id: "1000",
          code: "f230fh0g3",
          name: "Bamboo Watch",
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1001",
          code: "nvklal433",
          name: "Black Watch",
          description: "Product Description",
          image: "black-watch.jpg",
          price: 72,
          category: "Accessories",
          quantity: 61,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
        {
          id: "1002",
          code: "zz21cz3c1",
          name: "Blue Band",
          description: "Product Description",
          image: "blue-band.jpg",
          price: 79,
          category: "Fitness",
          quantity: 2,
          inventoryStatus: "LOWSTOCK",
          rating: 3,
        },
        {
          id: "1003",
          code: "244wgerg2",
          name: "Blue T-Shirt",
          description: "Product Description",
          image: "blue-t-shirt.jpg",
          price: 29,
          category: "Clothing",
          quantity: 25,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1004",
          code: "h456wer53",
          name: "Bracelet",
          description: "Product Description",
          image: "bracelet.jpg",
          price: 15,
          category: "Accessories",
          quantity: 73,
          inventoryStatus: "INSTOCK",
          rating: 4,
        },
      ],
      date: [new Date("01-01-" + new Date().getFullYear()), new Date()],
      loading: false,
      dataChart: [40, 20, 12],
      labelChart: ["Detractor", "Passive", "Promotor"],
      dataChartSen: [],
      labelChartSen: ["Positive", "Negative", "Neutral"],
      dataChartTop: [120, 90, 75],
      labelChartTop: ["Petugas", "Layanan", "Promo"],
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        status: "",
      },
    };
  },
  components: {
    BarChart,
    PieChart,
    LineChart,
    DataTable,
    Column,
    InputText,
  },
  computed: {
    getAllData() {
      return this.products;
    },
    getLineLabel() {
      return this.cardNpsScore.LabelPerMonth;
    },
    getLineData() {
      return this.cardNpsScore.DataPerMonth;
    },
  },
  methods: {
    format(date) {
      const dayAwal = date[0].getDate();
      const monthAwal = String(this.date[0].getMonth() + 1).padStart(2, "0");
      const yearAwal = date[0].getFullYear();
      const dayAkhir = date[1].getDate();
      const monthAkhir = String(this.date[1].getMonth() + 1).padStart(2, "0");
      const yearAkhir = date[1].getFullYear();
      return `${dayAwal}-${monthAwal}-${yearAwal} - ${dayAkhir}-${monthAkhir}-${yearAkhir}`;
    },
    ChartNpsScore(result) {
      this.cardNpsScore.thisMonth = result.Data.LastMonth;
      this.cardNpsScore.score = result.Data.npsScoreAll;
      this.cardNpsScore.LabelPerMonth = Object.keys(result.Data.ResultPerMonth);
      let arrDataScorePerM = [];
      for (let i = 0; i < this.cardNpsScore.LabelPerMonth.length; i++) {
        const element =
          result.Data.ResultPerMonth[this.cardNpsScore.LabelPerMonth[i]];
        arrDataScorePerM.push(element["npsScorePerMonth"]);
      }
      this.cardNpsScore.DataPerMonth = arrDataScorePerM;
    },
    ChartNpsCat(result) {
      this.cardNpsCat.DataNps = [
        result.Data.jumlahDetractor,
        result.Data.jumlahPassive,
        result.Data.jumlahPromotor,
      ];
    },
    ChartResponden(result) {
      this.cardResponden.labelChartRes = Object.keys(result.Responden);
      this.cardResponden.dataChartRes = Object.values(result.Responden);
      this.cardResponden.jumlahResponden = this.cardResponden.dataChartRes.reduce((a, b) => a + b, 0);
    },
    async showData() {
      let dayAwal,
        monthAwal,
        yearAwal,
        dayAkhir,
        monthAkhir,
        yearAkhir,
        tglAwal,
        tglAkhir,
        area;
      if (this.date != undefined && this.date != "") {
        dayAwal = this.date[0].getDate();
        monthAwal = String(this.date[0].getMonth() + 1).padStart(2, "0");
        yearAwal = this.date[0].getFullYear();
        dayAkhir = this.date[1].getDate();
        monthAkhir = String(this.date[1].getMonth() + 1).padStart(2, "0");
        yearAkhir = this.date[1].getFullYear();
        tglAwal = `${yearAwal}-${monthAwal}-${dayAwal}`;
        tglAkhir = `${yearAkhir}-${monthAkhir}-${dayAkhir}`;
      }
      if (this.regional != "") {
        area = this.regional;
      } else if (this.kcu != "") {
        area = this.kcu;
      } else if (this.kc != "") {
        area = this.kc;
      } else {
        area = "";
      }

      let params = {
        area: area,
        start: tglAwal,
        end: tglAkhir,
        layanan: this.layanan,
      };
      try {
        this.$swal.showLoading();
        // get Data Nps
        let requestService = await reportNpsService.getReportNps(params);
        let result = requestService.data;
        console.log(result);

        // Bar Chart
        this.ChartNpsScore(result);

        //Pie chart
        this.ChartNpsCat(result);

        // Bar Chart Responden
        this.ChartResponden(result);

        this.$swal.close();
      } catch (error) {
        console.log(error);

        this.$swal({
          icon: "info",
          title: "GAGAL",
          text: "Data Tidak Tersedia",
          confirmButtonColor: "#002a5c",
        });
      }
    },
  },
  mounted() {
    // this.loading = true;
    // setTimeout(() => {
    //   this.loading = false;
    // }, 2000);
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
