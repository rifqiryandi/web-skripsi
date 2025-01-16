import {
    createApp
} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import PrimeVue from 'primevue/config';
import Noir from './Presets/Noir.js';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import './style.css'
const app = createApp(App);

app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Noir,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-dark',
            cssLayer: false,
        }
    }
})
app.use(VueSweetalert2)
app.component('VueDatePicker', VueDatePicker);
app.mount('#app')