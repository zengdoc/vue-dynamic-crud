import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Main from '@/views/Main/index.vue';

Vue.use(VueRouter);

export const crudRoute: RouteConfig[] = [
    // ^crud
    {
        path: '/account',
        name: '账号管理',
        component: () => import('@/views/Account/index.vue'),
    },
    // $crud
];

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'Main',
        component: Main,
        children: crudRoute,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
