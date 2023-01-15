<template>
  <div>
    <el-input class="searchInput" placeholder="请输入关键字进行查询" v-model="filterText" suffix-icon="el-icon-search"></el-input>
    <el-tree ref="tree" class="filter-tree" :value="treeData" node-key="id" :data="treeData" @node-click="handleNodeClick" :filter-node-method="filterNode">
    </el-tree>
  </div>
</template>
<script>

export default {
  name: 'TreeComponent',
  components: {
  },
  data() {
    return {
      filterText: "",
    }
  },
  watch: {
    filterText(val) {
      // console.log(this.$refs)
      this.$refs.tree.filter(val);
    },
  },
  props: {
    treeData: Array
  },
  methods: {
    handleNodeClick(data) {
      this.$emit("getTreeData", data);
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  }
}
</script>
<style lang="less" scoped>
</style>