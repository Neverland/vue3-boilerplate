<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>
<script lang="ts">
/**
 * @file app
 * @author ienix(guoaimin1@tal.com)
 *
 * @since 2021/11/18
 */

import {ref} from 'vue';

export default{
    setup(props) {
        let name = ref('999');

        return {
            name
        };
    },
    mounted() {

    },
};
</script>

<style lang="less" scoped>
    .app {
        color: #000;
        a {
            direction: none;
        }
    }
</style>

<style>
    html, body {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: transparent;
        overflow-x: hidden;
        font-size: 14px;
    }
    a {
        text-decoration: none;
    }
</style>
