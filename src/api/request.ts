/**
 * @file request
 * @author ienix(guoaimin01@baidu.com)
 *
 * @since 2019/04/15
 */

// @link https://www.npmjs.com/package/i-apify

import axios from 'axios';

import store from 'store';

import * as list from './list';
import apify from './apify';

let instance = axios.create({
    headers: {
        'content-type': 'application/json',
    },
});
let notify = (type = true, message = '') => {
    // type || notification({
    //     type: type === true ? 'success' : 'error',
    //     title: type === true ? '成功' : '错误',
    //     message,
    // });
};

// let $load = null;

instance
    .interceptors
    .request
    .use(
        config => {
            if (config['x-silent'] === false) {
                // ui: $loading
            }

            return config;
        },
        error => Promise.reject(error)
    );

instance
    .interceptors
    .response
    .use(response => {

        let {status = 0} = response;
        let {code = 0, data = {}, msg = ''} = response.data;

        if (status === 304) {
            response.status = 200;
        }

        if (status >= 200 && status < 300) {

            if (code === 200) {
                return data;
            }
            else if (code === 403) {
                // store.set('Authorization', '');
                location.hash = '/login';
            }

            notify(false, `[Request]: Error code ${code} Message: ${msg}`);

            return Promise.reject(response);
        }

        return {};
    },
    error => {
        // $load && $load.close();

        return Promise.reject(error.response || error);
    });

export default {
    ...apify(instance, 'GET', list.get),
    ...apify(instance, 'POST', list.post),
};
