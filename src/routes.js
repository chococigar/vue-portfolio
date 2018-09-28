import Works from './components/Works.vue';
import Cv from './components/CV.vue';
import Logs from './components/Logs.vue';
import Contact from './components/Contact.vue';
export const routes = [

    {
        path: '/',
        component: Works
    }, {
        path: '/cv',
        component: Cv
    }, {
        path: '/logs',
        component: Logs
    }, {
        path: '/contact',
        component: Contact
    }

]