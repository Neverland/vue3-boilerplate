/**
 * @file apify
 * @author ienix(guoaimin01@baidu.com)
 *
 * @since 2019/04/15
 */

import HOST from './host';

const ROOT_URL = `https://${HOST}`;

export let post = {
    logout: `${ROOT_URL}/logout`,
};

export let get = {
    getGen: `${ROOT_URL}/v1/api/supervise/genQR`,
};
