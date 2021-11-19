/**
 * @file apify
 * @author ienix(guoaimin01@baidu.com)
 *
 * @since 2019/04/15
 */

import getOption from './getOption';

export default
function apify(axios, method, list = {}) {
    let all = Object.keys(list);
    let result = {};

    all.forEach(key => {
        let url = list[key];

        result[key] = (...parameter) => {
            return axios(getOption(url, method.toUpperCase(), ...parameter));
        };
    });

    return result;
}
