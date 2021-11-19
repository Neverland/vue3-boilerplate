/**
 * @file login
 * @author ienix(guoaimin01@baidu.com)
 *
 * @since 2021-3-15
 */

import {api} from '@/api';
import * as mutation from './mutationType';

export default {
    state: {
        uuid: '',
    },
    mutations: {
        [mutation.LOGIN_LOGIN](state, data) {
            let {uuid} = data;

            state.uuid = uuid;
        },
    },
    actions: {
        async getGen({commit}, payload) {
            try {
                let data = await api.getGen(payload);

                commit(mutation.LOGIN_LOGIN, data);
            }
            catch (e) {
                //
            }
        },
    },
};
 