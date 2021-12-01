<template>
    <div class="hello-world">
        {{banner}}
    </div>
</template>
<script lang="ts">
/**
 * @file startup
 * @author ienix(guoaimin1@tal.com)
 *
 * @since 2021/11/18
 */

import {ref, getCurrentInstance} from 'vue';


export default {
    name: 'index',
    setup() {
        let banner = ref('Component: Hello world !');


        return {
            banner,
        };
    },
};

</script>

<style lang="less" scoped>
    .hello-world {
        border: 1px solid #ccc;
        border-radius: 10px;
        width: 300px;
        height: 30px;
        line-height: 30px;
        margin: 10px auto;
    }
</style>
