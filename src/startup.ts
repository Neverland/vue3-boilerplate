/**
 * @file startup
 * @author ienix(guoaimin1@tal.com)
 *
 * @since 2021/11/18
 */

import {createApp} from 'vue';

import ElementPlus from 'element-plus';
// import Vant from 'vant';

import store from '@/store';
import router from '@/router';

import App from '@/view/App.vue';

import {host, api, http} from '@/api';

import '@/ui';

console.log(host, 1111, api, 2222, http)

let app = createApp(App);

app
    .use(store)
    .use(router)
    .use(ElementPlus)
    // .use(Vant)
    .mount('#app');
