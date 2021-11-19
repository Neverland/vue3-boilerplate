/**
 * @file vuex store
 * @author ienix(guoaimin1@tal.com)
 *
 * @since 2018/12/24
 */

/* global Vue, Vuex */

import {createStore} from 'vuex';

import login from './login';

export default createStore({
    modules: {
        login,
    },
});
