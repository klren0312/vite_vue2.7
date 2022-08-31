<template>
  <div>
    <HelloWorld msg="Hello Vue27 + Vite" />
  </div>
</template>
<script setup lang="ts">
import HelloWorld from '/@/components/HelloWorld.vue'
import { provide, reactive } from 'vue'
const testData = reactive({
  test: 12345,
  name: 'test',
})
provide('testData', testData)
</script>
<style></style>
