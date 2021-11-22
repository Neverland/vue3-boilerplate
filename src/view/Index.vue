<template>
    <div class="index">
        <el-container>
            <el-header>
                <center>Vue3、 Typescript、 Element plus</center>
            </el-header>
            <el-main>
                <center>{{index}}</center>
                <center>
                    <el-button type="primary" @click="toOther">To 404</el-button>
                </center>
            </el-main>
        </el-container>
    </div>
</template>
<script lang="ts">
/**
 * @file startup
 * @author ienix(guoaimin1@tal.com)
 *
 * @since 2021/11/18
 */

import {ref, defineComponent, getCurrentInstance} from 'vue';
import {useRouter as UseRouter} from 'vue-router';

export default defineComponent({
    name: 'index',
    setup() {
        let index = 'Welcome to the Index page.';
        let router = new UseRouter();

        let toOther = () => {
            router.push('/abc');
        };
        return {
            index,
            toOther,
        };
    },
});

</script>

<style lang="less" scoped>
    .index {
        color: #000;
    }
</style>
