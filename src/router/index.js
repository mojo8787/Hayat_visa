import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('@/pages/HomePage.vue'),
        name: 'Home',
    },
    {
        path: '/application-form',
        component: () => import('@/pages/ApplicationFormPage.vue'),
        name: 'ApplicationForm',
    },
    {
        path: '/apply-now',
        component: () => import('@/pages/ApplyNowPage.vue'),
        name: 'ApplyNow',
    },
    {
        path: '/cost-breakdown',
        component: () => import('@/pages/CostBreakdownPage.vue'),
        name: 'CostBreakdown',
    },
    {
        path: '/orders-list',
        component: () => import('@/pages/OrdersListPage.vue'),
        name: 'OrdersList',
    },
    {
        path: '/payment',
        component: () => import('@/pages/PaymentPage.vue'),
        name: 'Payment',
    },
    {
        path: '/profile',
        component: () => import('@/pages/ProfilePage.vue'),
        name: 'Profile',
    },
    {
        path: '/reports',
        component: () => import('@/pages/ReportPage.vue'),
        name: 'Reports',
    },
    {
        path: '/track-visa',
        component: () => import('@/pages/TrackVisaPage.vue'),
        name: 'TrackVisa',
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/NotFoundPage.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
