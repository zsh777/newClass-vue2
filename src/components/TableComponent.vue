<template>
  <div>
    <el-table :data="this.tableData" max-height="440px" style=" font-size: 16px" size="small" :highlight-current-row="true" fit border>
      <el-table-column sortable v-for="(item, index) in tableLabel" :key="index" :prop="item.prop" :width="item.width" :label="item.label">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'TableComponent',
  data() {
    return {
    }
  },
  props: {
    tableData: { // 父组件传递过来的表格数据
      type: Array,
      default: () => {
        return []
      }
    },
    tableLabel: { // 父组件传递过来的表头数据
      type: Array,
      default: () => {
        return []
      }
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style scoped>
</style>