import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';

import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Chart from 'primevue/chart';
import Sidebar from 'primevue/sidebar';
import Menubar from 'primevue/menubar';
import PanelMenu from 'primevue/panelmenu';
import Card from 'primevue/card';
import Image from 'primevue/image';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import "primeflex/primeflex.css";
// import '../node_modules/primeflex/primeflex.css'

const app = createApp(App);
app.use(store);
app.use(router);
app.use(PrimeVue);

app.component('InputText', InputText);
app.component('Sidebar', Sidebar);
app.component('Menubar', Menubar);
app.component('PanelMenu', PanelMenu);
app.component('Button', Button);
app.component('Card', Card);
app.component('Password', Password);
app.component('Image', Image);
// app.component('Toast', Toast);
app.component('Chart', Chart);

app.mount('#app')
// createApp(App).use(store).use(router).mount('#app')
