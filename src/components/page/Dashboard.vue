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
            @change="getKcu"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-[4px] block w-full px-[30px] py-[6px] h-[38px] focus:ring-[#aaaeb7]"
          >
            <option value="">Semua Regional</option>
            <option
              v-for="(item, index) in DataRegional"
              :key="index"
              :value="item.nopen"
            >
              {{ item.nmwilayah + " - " + item.nopen }}
            </option>
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
            @change="getKc"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-[4px] block w-full px-[30px] py-[6px] h-[38px] focus:ring-[#aaaeb7]"
          >
            <option value="">Semua kcu</option>
            <option
              v-for="(item, index) in DataKcu"
              :key="index"
              :value="item.nopend"
            >
              {{ item.namaktr + " - " + item.nopend }}
            </option>
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
            <option value="">Semua kc</option>
            <option
              v-for="(item, index) in DataKc"
              :key="index"
              :value="item.nopend"
            >
              {{ item.namaktr + " - " + item.nopend }}
            </option>
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
        <img src="../../assets/star.png" alt="" />
        <p class="roboto text-lg font-semibold">NPS Score</p>
        <p class="roboto text-[24px] font-semibold">{{ cardNpsScore.score }}</p>
        <div class="grid grid-cols-5 gap-3">
          <div class="col-span-4 h-[380px]">
            <BarChart
              :indexAxis="'x'"
              :dataChart="getLineData"
              :labelsChart="getLineLabel"
              :Labels="'Nps Score Per Month'"
            />
          </div>
          <div class="pt-[65px]">
            <p class="roboto text-lg text-center">
              This Month {{ cardNpsScore.thisMonth }}%
            </p>
          </div>
        </div>
      </div>
      <div class="card container px-4 py-2 mx-auto">
        <p class="roboto text-lg font-semibold">Score based on Category</p>
        <PieChart
          :dataChart="cardNpsCat.DataNps"
          :labelsChart="cardNpsCat.LabelNps"
        />
      </div>
      <div class="card container px-4 py-2 mx-auto">
        <img src="../../assets/users.png" alt="" />
        <p class="roboto text-lg font-semibold">Responden Count</p>
        <p class="roboto text-[24px] font-semibold">
          {{ cardResponden.jumlahResponden.toLocaleString("id-ID") }}
        </p>
        <div class="grid grid-cols-5 gap-3">
          <div class="col-span-4 h-[380px]">
            <BarChart
              :indexAxis="'x'"
              :dataChart="cardResponden.dataChartRes"
              :labelsChart="cardResponden.labelChartRes"
              :Labels="'Total Responden'"
            />
          </div>
          <div class="pt-[50px]">
            <p class="roboto text-lg text-center">
              Last Quartal {{ PersenQuartal }}%
            </p>
          </div>
        </div>
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
        <p class="roboto text-3xl">{{ jumlahPositive }}</p>
        <div class="flex gap-2">
          <div v-if="persenPositive.includes('-')">
            <img src="../../assets/down.png" alt="" width="24px" />
            <p class="roboto">{{ persenPositive }} Down Since Last Month</p>
          </div>
          <div v-else>
            <img src="../../assets/up.png" alt="" width="24px" />
            <p class="roboto">{{ persenPositive }} Up Since Last Month</p>
          </div>
        </div>
      </div>
      <!-- <div class="card container px-4 py-2 mx-auto">
        <p class="roboto text-lg font-semibold">Neutral</p>
        <p class="roboto text-3xl">80</p>
        <p class="roboto">11% Up Since Last Week</p>
      </div> -->
      <div class="card container px-4 py-2 mx-auto">
        <p class="roboto text-lg font-semibold">Negative</p>
        <p class="roboto text-3xl">{{ jumlahNegative }}</p>
        <div class="flex gap-2">
          <div v-if="persenNegative.includes('-')">
            <img src="../../assets/down.png" alt="" width="24px" />
            <p class="roboto">{{ persenNegative }} Down Since Last Month</p>
          </div>
          <div v-else>
            <img src="../../assets/up.png" alt="" width="24px" />
            <p class="roboto">{{ persenNegative }} Up Since Last Month</p>
          </div>
        </div>
      </div>
    </div>
    <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 pb-4">
      <div class="card container px-4 py-2 mx-auto">
        <p class="roboto text-xl font-semibold">Areas Of Improvement</p>
        <p class="roboto text-lg text-red-500">{{ areaImprove }}</p>
        <div class="flex gap-2">
          <div v-if="persenImprove.includes('-')">
            <img src="../../assets/down.png" alt="" width="24px" />
            <p class="roboto text-lg">-{{persenImprove}} Down since last month</p>
          </div>
          <div v-else>
            <img src="../../assets/up.png" alt="" width="24px" />
            <p class="roboto text-lg">{{persenImprove}} Up since last month</p>
          </div>
        </div>

        <LineChart
          :labelsChart="cardImprove.labelsChart"
          :dataChart="cardImprove.dataChart"
        />
        <p class="roboto text-lg text-right">
          Counted by Total Negative Review
        </p>
      </div>
      <div class="card container px-4 py-2 mx-auto">
        <p class="roboto text-xl font-semibold">Positive Review Topic</p>
        <!-- <p class="roboto text-[24px] font-semibold">63</p> -->
        <BarChart
          :indexAxis="'y'"
          :dataChart="cardReviewTopic.dataChartTop"
          :labelsChart="cardReviewTopic.labelChartTop"
          :Labels="'Positive Highlight'"
        />
        <p class="roboto text-lg text-right">
          Counted by Total Positive Review
        </p>
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
            <Column field="PARTY_NAME" header="Nama">
              <template #body="{ data }">
                <div style="font-weight: 600">
                  {{ data.PARTY_NAME }}
                </div>
              </template>
            </Column>
            <Column field="" header="Jenis Kelamin">
              <template #body="{ data }">
                <div>
                  {{ data.PARTY_GENDER }}
                </div>
              </template>
            </Column>
            <Column field="" header="Pekerjaan">
              <template #body="{ data }">
                <div>
                  {{ data.PARTY_JOB }}
                </div>
              </template>
            </Column>
            <Column field="" header="Skala">
              <template #body="{ data }">
                <div>
                  {{ data.CHOICE_POIN }}
                </div>
              </template>
            </Column>
            <Column field="" header="Alasan">
              <template #body="{ data }">
                <div>
                  {{ data.desc_answer }}
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
import GeneralService from "../../services/General.service";
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
        jumlahResponden: 0,
        labelChartRes: [],
        dataChartRes: [],
      },
      feedbackRow: null,
      date: [new Date("01-01-" + new Date().getFullYear()), new Date()],
      loading: false,
      dataChart: [40, 20, 12],
      labelChart: ["Detractor", "Passive", "Promotor"],
      dataChartSen: [],
      labelChartSen: ["Positive", "Negative", "Neutral"],

      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        status: "",
      },
      DataRegional: {},
      DataKcu: {},
      DataKc: {},
      jumlahPositive: 0,
      jumlahNegative: 0,
      persenPositive: "0%",
      persenNegative: "0%",
      PersenQuartal: 0,
      areaImprove: "",
      cardImprove: {
        labelsChart: [],
        dataChart: [],
      },
      cardReviewTopic: {
        dataChartTop: [],
        labelChartTop: [],
      },
      persenImprove : "0%"
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
      return this.feedbackRow;
    },
    getLineLabel() {
      return this.cardNpsScore.LabelPerMonth;
    },
    getLineData() {
      return this.cardNpsScore.DataPerMonth;
    },
  },
  methods: {
    async getRegional() {
      let data = await GeneralService.getRegional();
      this.DataRegional = data.data.Data;
    },
    async getKcu(event) {
      let data = await GeneralService.getKcu({ regional: event.target.value });
      this.DataKcu = data.data.Data;
    },
    async getKc(event) {
      let data = await GeneralService.getKc({ kcu: event.target.value });
      this.DataKc = data.data.Data;
    },
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
      this.cardResponden.jumlahResponden =
        this.cardResponden.dataChartRes.reduce((a, b) => a + b, 0);
    },
    ChartImproveArea(result) {
      this.areaImprove = result.mustToimprove;
      this.cardImprove.labelsChart = Object.keys(result.rangeImprove);
      this.cardImprove.dataChart = Object.values(result.rangeImprove);
    },
    ChartReviewTopic(result) {
      this.cardReviewTopic.labelChartTop = Object.keys(result.positiveReview);
      this.cardReviewTopic.dataChartTop = Object.values(result.positiveReview);
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
        area = "",
        kcu = "",
        kc = "";
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
      if (this.regional != "" && this.kcu == "" && this.kc == "") {
        area = this.regional;
      } else if (this.regional != "" && this.kcu != "" && this.kc == "") {
        kcu = this.kcu;
      } else if (this.regional != "" && this.kcu != "" && this.kc != "") {
        kc = this.kc;
      }

      let params = {
        area: area,
        kcu: kcu,
        kc: kc,
        start: tglAwal,
        end: tglAkhir,
        layanan: this.layanan,
      };
      try {
        this.feedbackRow = null;
        this.$swal.fire({
          title: "Please Wait, this may take a while",
          html: '<div class="loader"></div>',
          allowEscapeKey: false,
          allowOutsideClick: false,
          showConfirmButton: false,
          onBeforeOpen: () => {
            this.$swal.showLoading();
          },
        });
        // get Data Nps
        let requestService = await reportNpsService.getReportNps(params);
        let result = requestService.data;
        this.PersenQuartal = result.PersenQuartal;
        // Bar Chart
        this.ChartNpsScore(result);

        //Pie chart
        this.ChartNpsCat(result);

        // Bar Chart Responden
        this.ChartResponden(result);

        // get Data sentiment
        let requestServiceSen = await reportNpsService.getReportSentiment(
          params
        );
        let resultSen = requestServiceSen.data;
        // card jumlah positive dan negative
        this.jumlahPositive = resultSen.Data.jumlahPositive;
        this.jumlahNegative = resultSen.Data.jumlahNegative;
        this.persenPositive = resultSen.Data.persenPositivie;
        this.persenNegative = resultSen.Data.persenNegative;

        // card datatable feedback
        this.feedbackRow = resultSen.Data.datatable;

        // card improve area
        this.ChartImproveArea(resultSen.Data);

        // card review topic
        this.ChartReviewTopic(resultSen.Data);

        this.persenImprove = resultSen.Data.persenImprove
        this.$swal.close();
      } catch (error) {
        this.feedbackRow = null;
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
    this.getRegional();
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

.loader {
  width: 80px;
  aspect-ratio: 2;
  --_g: no-repeat radial-gradient(circle closest-side, #000 90%, #0000);
  background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
  background-size: calc(100% / 3) 50%;
  animation: l3 1s infinite linear;
}
@keyframes l3 {
  20% {
    background-position: 0% 0%, 50% 50%, 100% 50%;
  }
  40% {
    background-position: 0% 100%, 50% 0%, 100% 50%;
  }
  60% {
    background-position: 0% 50%, 50% 100%, 100% 0%;
  }
  80% {
    background-position: 0% 50%, 50% 50%, 100% 100%;
  }
}

.swal2-html-container {
  display: flex !important;
  justify-content: center;
}
</style>
