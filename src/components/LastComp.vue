<template>
  <div>get count: {{ theCount }}</div>
</template>
<script setup>
import { inject } from 'vue'

const theCount = inject('count')
</script>
<style lang=""></style>
