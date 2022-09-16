<template>
  <div class="home-page">
    isOk: {{ store.isOk }} - testNum: {{ testNum }}
    <el-button type="primary" @click="changeStore">changeStore</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
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
const tableData = [
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄',
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄',
  },
  {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄',
  },
]
</script>
<style lang="scss" scoped></style>
