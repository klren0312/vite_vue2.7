<template>
  <div class="h-screen w-full">
    <header-top></header-top>
    <div class="main-container flex w-full bg-[#e9e9e9]">
      <side-bar class="w-[15rem]"></side-bar>
      <div class="flex-1 p-5 m-2.5 w-full bg-white box-border overflow-y-auto">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import HeaderTop from '/@/views/Layout/HeaderTop.vue'
import SideBar from '/@/views/Layout/SideBar.vue'
import { provide } from 'vue'
defineOptions({
  name: 'Layout',
})
const setTest = (v) => {
  alert(v)
}
provide('test', setTest)
</script>
<style lang="scss" scoped>
.main-container {
  height: calc(100% - 50px);
}
</style>
