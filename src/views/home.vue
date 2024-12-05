<script setup>
import { ref, reactive, computed, inject } from 'vue';
import Top from '@/components/Top.vue';

const input = ref('')
//API
const Api = inject('Api');

</script>

<template>
  <div>
    <Top/>
  </div>
</template>

<style scoped lang="less">

</style>