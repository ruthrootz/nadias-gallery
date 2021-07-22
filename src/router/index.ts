import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Gallery from '../views/Gallery.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'Nadia\'s Gallery',
        component: Gallery,
    },
    // {
        // path: '/about',
        // name: 'About',
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // },
];

const router = new VueRouter({
    routes,
});

export default router;

