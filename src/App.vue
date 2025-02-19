<script setup>
import { inject } from 'vue';
import { useStore } from '@/stores/index';

const store = useStore();
//API
const Api = inject('Api');

const getLanguageList = async () => {
  const res = await Api.getLanguageList();
  if(res.languageList.length > 0){
    store.setLanguageOption(res.languageList.map(item => ({
      key: item.id,
      value: item.id,
      label: item.title
    })));
  }
}

//created
const onCreated = async () => {
  //获取语言
  getLanguageList();
}
onCreated();

</script>

<template>
  <div>
    <router-view v-slot="{Component}">
      <component :is="Component"></component>
    </router-view>
  </div>
</template>

<style scoped lang="less">

</style>
