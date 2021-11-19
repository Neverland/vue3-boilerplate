/**
 * @file vuex store
 * @author ienix(enix@foxmail.com)
 *
 * @since 2021/11/19
 */

/* global Vue, Vuex */

import {createRouter, createWebHashHistory} from 'vue-router'

let Index = () => import(/* webpackChunkName: 'view'*/ '@/view/Index');
let NotFound = () => import(/* webpackChunkName: 'view'*/ '@/view/NotFound');

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: NotFound,
            name: 'NotFound',
        },
        {
            path: '/',
            component: Index,
            name: 'Index',
        },    
    ],
});
