/**
 * @file startup
 * @author ienix(guoaimin1@tal.com)
 *
 * @since 2021/11/18
 */

import {createApp} from 'vue';

import ElementPlus from 'element-plus';

import store from '@/store';
import router from '@/router';

import App from '@/view/App.vue';

import '@/ui';

let app = createApp(App);

app
    .use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app');
