<template>
  <div>
    <hello-world></hello-world>
    <div>
      <router-link to="/">页面一</router-link>
      <router-link to="/contentPage">页面二</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>
<style scoped></style>
