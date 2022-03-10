/**
 * @file router guard
 * @author ienix(guoaimin1@tal.com)
 *
 * @since 2021/11/19
 */

export default function guard(router: any) {

    router.beforeEach((to: any, from: any, next: any) => {
        // if (to.meta.requireAuth) {
        //     if (to.name !== 'login') {
        //         next({name: 'login', query: {jump: encodeURIComponent(location.href)}});
        //     }
        // }

        next();
    });
}
