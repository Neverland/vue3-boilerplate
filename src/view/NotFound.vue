<template>
    <div class="not-found">
        {{notFound}}
    </div>
</template>
<script lang="ts" setup>
/**
 * @file NotFound
 * @author ienix(guoaimin1@tal.com)
 *
 * @since 2021/11/18
 */

import {ref} from 'vue';

let notFound = ref('The page is not found!');

</script>

<style lang="less" scoped>
    .not-found {
        color: #000;
    }
</style>
