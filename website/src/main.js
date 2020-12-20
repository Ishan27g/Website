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



import 'primeflex/primeflex.css'

import 'primevue/resources/themes/mdc-light-deeppurple/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App);

app.use(Router)
app.use(PrimeVue), {ripple: true};

app.component('Button', Button);
app.component('Card', Card);
app.component('Sidebar', Sidebar);
app.component('Avatar', Avatar)
app.component('AvatarGroup', AvatarGroup)
app.component('Dialog', Dialog)


app.directive('tooltip', Tooltip)

app.mount('#app')
