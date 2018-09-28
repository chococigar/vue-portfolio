import Vue from 'vue'
import VueRouter from 'vue-router';
import VueMasonry from 'vue-masonry-css';
import App from './App.vue'
import icons from 'glyphicons'
import {
    routes
} from './routes';

Vue.use(VueRouter);
Vue.use(VueMasonry);
Vue.use(icons);

require('./assets/styles/main.css');

const router = new VueRouter({
    //export default new VueRouter({
    mode: 'history',
    routes: routes,

});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})