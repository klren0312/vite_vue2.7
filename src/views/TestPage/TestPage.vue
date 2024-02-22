<template>
  <div class="test-page">
    <div>route query: {{ queryData }}</div>
    <the-chart></the-chart>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router/composables'
  import TheChart from '/@/components/TheChart.vue'
  const $route = useRoute()
  const queryData = ref('')
  onMounted(() => {
    const query = $route.query.data as string
    if (query) {
      queryData.value = query
    }
  })
</script>
