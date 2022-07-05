<template>
  <div>
    <div>{{ testData.name }}</div>
    <div>{{ testData.test }}</div>
    <last-comp></last-comp>
  </div>
</template>
<script setup>
import LastComp from './LastComp.vue'
import { inject } from 'vue'
const testData = inject('testData')
</script>
<style lang=""></style>
