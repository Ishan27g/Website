import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'

import VueTypedJs from 'vue-typed-js'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Card from 'primevue/card';
import Sidebar from 'primevue/sidebar';


import 'primeflex/primeflex.css'

import 'primevue/resources/themes/saga-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App);

app.use(Router)
app.use(PrimeVue), {ripple: true};

app.use(VueTypedJs)

app.component('Button', Button);
app.component('Card', Card);
app.component('Sidebar', Sidebar);

app.mount('#app')
