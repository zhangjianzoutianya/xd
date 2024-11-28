<script setup>
  
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
