<template>
    <div class="index">
        {{index}}
        <div>
            <el-button type="primary">Primary</el-button>
        </div>
    </div>
</template>
<script lang="ts">
/**
 * @file startup
 * @author ienix(enix@foxmail.com)
 *
 * @since 2021/11/18
 */

import {ref, defineComponent} from 'vue';

export default defineComponent({
    name: 'index',
    setup() {
        let index = 'Welcome to the Index page.';

        return {
            index,
        };
    }
});

</script>

<style lang="less" scoped>
    .index {
        color: #000;
    }
</style>
