/**
 * @file apify
 * @author ienix(guoaimin01@baidu.com)
 *
 * @since 2019/04/15
 */

import request from './request';
import hosts from './host';

export let api = request;

export let http = {
    install(Vue) {
        Vue.prototype.$http = request;
    },
};

export let host = hosts;
