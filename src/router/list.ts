/**
 * @file vuex router list
 * @author ienix(guoaimin1@tal.com)
 *
 * @since 2021/11/19
 */

/* global Vue, Vuex */

import {createRouter, createWebHashHistory} from 'vue-router';

let Index = () => import(/* webpackChunkName: 'view'*/ '@/view/Index');
let NotFound = () => import(/* webpackChunkName: 'view'*/ '@/view/NotFound');

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: NotFound,
            name: '404',
        },
        {
            path: '/',
            component: Index,
            name: 'index',
            meta: {
                // requireAuth: true,
            },
        },
    ],
});
