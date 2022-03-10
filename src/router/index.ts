/**
 * @file vuex router
 * @author ienix(guoaimin1@tal.com)
 *
 * @since 2021/11/19
 */

/* global Vue, Vuex */

import router from './list';
import guard from './guard';

guard(router);

export default router;
