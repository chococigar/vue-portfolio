import Works from './components/Works/Works.vue';
import Markov_BTS from './components/Works/Markov_bts.vue';
import Cv from './components/Cv.vue';
import Logs from './components/Logs.vue';
import Beta from './components/Beta.vue';
import Contact from './components/Contact.vue';
export const routes = [

    {
        path: '/',
        redirect: '/works',
    }, {
        path: '/works',
        component: Works,
        children: [{
            path: 'markov_bts',
            component: Markov_BTS
        }]
    }, {
        path: '/cv',
        component: Cv
    }, {
        path: '/logs',
        component: Logs
    }, {
        path: '/beta',
        component: Beta
    }, {
        path: '/contact',
        component: Contact
    }

]