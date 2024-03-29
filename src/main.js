import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'


import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Card from 'primevue/card';
import Sidebar from 'primevue/sidebar';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Tooltip from 'primevue/tooltip';
import Dialog from 'primevue/dialog';
import Timeline from 'primevue/timeline';
//import Particles from "particles.vue3";
import Fieldset from 'primevue/fieldset';
import Galleria from 'primevue/galleria';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import ToggleButton from 'primevue/togglebutton';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import ScrollPanel from 'primevue/scrollpanel';


import 'animate.css'

import 'primeflex/primeflex.css'

import 'primevue/resources/themes/arya-orange/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App);

app.use(Router)
app.use(PrimeVue), {ripple: true}
app.use(ToastService)
// app.use(Particles)

app.component('Button', Button)
app.component('Card', Card)
app.component('Sidebar', Sidebar)
app.component('Avatar', Avatar)
app.component('AvatarGroup', AvatarGroup)
app.component('Dialog', Dialog)
app.component('Timeline', Timeline)
app.component('Fieldset', Fieldset)
app.component('Galleria', Galleria)
app.component('Accordion', Accordion)
app.component('AccordionTab', AccordionTab)
app.component('ToggleButton', ToggleButton)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Toast',Toast)
app.component('ScrollPanel',ScrollPanel)

app.directive('tooltip', Tooltip)

app.mount('#app')
