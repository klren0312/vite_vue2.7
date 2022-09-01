<template>
  <div>
    isOk: {{ store.isOk }} - testNum: {{ testNum }}
    <el-button type="primary" @click="changeStore">changeStore</el-button>
  </div>
</template>
<script setup lang="ts">
import useCounterStore from '/@/store/modules/app'
import { storeToRefs } from 'pinia'
const store = useCounterStore()
const { testNum } = storeToRefs(store)
const changeStore = () => {
  store.setIsOk(!store.isOk)
  testNum.value++
}
</script>
<style></style>
