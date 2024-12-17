import {
    createWebHistory,
    createRouter
  } from "vue-router";
  
  let namaAkses = localStorage.getItem('namaAkes')
  let routes
  switch (namaAkses) {
    // case 'Superadmin':
    //   routes = [{
    //       path: "/",
    //       alias: "/login",
    //       name: "Login",
    //       component: () => import("./components/page/auth/Login.vue"),
    //     },
    //     {
    //       path: "/anggaran",
    //       alias: "/anggaran",
    //       name: "Daftar Anggaran",
    //       component: () => import("./components/page/superadmin/transaksi/Anggaran.vue"),
    //     },
    //     {
    //       path: "/persenAnggaran",
    //       alias: "/persenAnggaran",
    //       name: "Persentasi Anggaran",
    //       component: () => import("./components/page/superadmin/transaksi/PersentasiAnggaran.vue"),
    //     },
    //     {
    //       path: "/topupanggaran",
    //       alias: "/topupanggaran",
    //       name: "Top Up Anggaran",
    //       component: () => import("./components/page/superadmin/transaksi/TopUpAnggaran.vue"),
    //     },
    //     {
    //       path: "/laporanRealisasi",
    //       alias: "/laporanRealisasi",
    //       name: "Laporan Realisasi",
    //       component: () => import("./components/page/superadmin/laporan/LaporanRealisasi.vue"),
    //     },
    //     {
    //       path: "/switchDepartemen",
    //       alias: "/switchDepartemen",
    //       name: "Switch Anggaran Antar Departemen",
    //       component: () => import("./components/page/superadmin/transaksi/SwitchAnggaranDepartemen.vue"),
    //     },
    //     {
    //       path: "/summary",
    //       alias: "/summary",
    //       name: "Summary",
    //       component: () => import("./components/page/superadmin/laporan/Summary.vue"),
    //     },
    //   ];
    //   break;
   
    
  
    default:
      routes = [{
        path: "/",
        alias: "/dashboard",
        name: "Dashboard",
        component: () => import("./components/page/Dashboard.vue"),
      }];
      break;
  }  
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  // Route Guard
//   router.beforeEach((to) => {
//     let isLogin = localStorage.getItem('isLogin')
//     if (isLogin != null) {
//       if (to.path == '/') {
//         return false
//       }
//     } else {
//       if (to.path != '/') {
//         return {
//           path: '/'
//         }
//       }
//     }
//   })
  
  export default router;