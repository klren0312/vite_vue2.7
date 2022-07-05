<template>
  <div>
    <h1>{{ msg }}</h1>
    <deep-comp></deep-comp>
    <button type="button" @click="addCount">count is: {{ count }}</button>
    <div>isOk: {{ appStore.isOk }}</div>
  </div>
</template>
<script setup>
import { ref, provide } from 'vue'
import DeepComp from './DeepComp.vue'
import { useAppStore } from '/@/store/modules/app'

const appStore = useAppStore()

defineProps({
  msg: String,
})

const count = ref(0)

provide('count', count)

const addCount = () => {
  count.value++
  if (count.value % 2 === 0) {
    appStore.setIsOk(false)
  } else {
    appStore.setIsOk(true)
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
