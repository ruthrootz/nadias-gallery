import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'Nadia\'s Gallery',
        component: Home,
    },
];

const router = new VueRouter({
    routes,
});

export default router;

