/**
 * @file apify
 * @author ienix(guoaimin01@baidu.com)
 *
 * @since 2019/04/15
 */

// import queryString from 'query-string';

import HOST from './host';

export default
function request(url = '/', method = 'GET', payload = {}, config = {}) {
    let option = {
        url,
        baseURL: HOST,
        method,
        headers: {

        },
        timeout: 10 * 1000,
        withCredentials: false,
        responseType: 'json',
        responseEncoding: 'utf8',
        maxRedirects: 5,
        paramsSerializer: function paramsSerializer(params) {
            // return queryString.stringify(params);
        },
        'x-silent': false,
        'x-message': false,
    };

    if (method === 'GET') {
        option.params = payload;
    }
    else if (method === 'POST') {
        option.params = config.params || {};
        option.data = payload;
    }
    else {
        option.data = payload;
    }

    return {...option, ...config};
}
