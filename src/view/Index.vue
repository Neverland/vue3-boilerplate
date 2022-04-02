<template>
    <div class="index">
        <el-container>
            <el-header>
                <div class="center">Vue3、 Typescript、 Element plus</div>
            </el-header>
            <el-main>
                <div class="center">{{index}}</div>
                <div class="center">
                    <el-button type="primary" @click="toOther">To 404</el-button>

                    <helloWorld />
                </div>
                <div ref="map"></div>
            </el-main>
        </el-container>
    </div>
</template>
<script lang="ts" setup>
/**
 * @file startup
 * @author ienix(guoaimin1@tal.com)
 *
 * @since 2021/11/18
 */

import {ref, getCurrentInstance, onMounted} from 'vue';
import {useRouter as UseRouter} from 'vue-router';

import helloWorld from '@/component/hello-world';

let index = ref('Welcome to the Index page.');
let router = new UseRouter();
let toOther = () => {
    router.push('/abc');
};

onMounted(() => {
    let center = new TMap.LatLng(39.984120, 116.307484);
    let map = new TMap.Map(getCurrentInstance().refs.map, {
        center,
    });
});
</script>

<style lang="less" scoped>
    .index {
        color: #000;
        .center {
            text-align: center;
            padding: 10px;
        }
    }
</style>
