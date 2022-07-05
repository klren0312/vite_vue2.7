<template>
  <div>
    <el-table :data="tableData" border stripe>
      <el-table-column label="id" prop="id"></el-table-column>
      <el-table-column label="name" prop="name"></el-table-column>
    </el-table>
  </div>
</template>
<script setup>
const tableData = [
  {
    id: 0,
    name: 'test',
  },
]
</script>
<style lang=""></style>
