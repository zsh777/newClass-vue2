<template>
  <div>
    <BorderComponent :title="Mytitle">
      <div class="topSearch">
        <el-input v-model="search" placeholder="请输入学科类型关键字" style="margin-bottom:15px"></el-input>
        <el-button type="primary" @click="search1">查询</el-button>
      </div>
      <div class="middleTable">
        <TableComponent :tableData="tableData" :tableLabel="tableLabel" style="height:100%">
        </TableComponent>
      </div>
    </BorderComponent>
  </div>
</template>
<script>
import BorderComponent from '../components/BorderComponent.vue'
import TableComponent from '../components/TableComponent.vue'
export default {
  name: 'SearchView',
  components: {
    BorderComponent,
    TableComponent
  },
  data() {
    return {
      search: "",
      searchData1: [],
      Mytitle: "课程查询",
      tableData: [
        { id: 1, updateDate: "2018-07-23", xklx: "语文", xkmc: "少年奇葩说" },
        { id: 2, updateDate: "2018-07-24", xklx: "语文", xkmc: "黄河颂" },
        { id: 3, updateDate: "2018-07-25", xklx: "语文", xkmc: "插上科学的翅膀" },
        { id: 4, updateDate: "2018-07-24", xklx: "数学", xkmc: "整式的除法（一）" },
        { id: 5, updateDate: "2018-07-24", xklx: "数学", xkmc: "分式的巧算" },
        { id: 6, updateDate: "2018-07-24", xklx: "数学", xkmc: "一分钟有多长" },
        { id: 7, updateDate: "2018-07-24", xklx: "英语", xkmc: "Writing an email to Amy" },
        { id: 8, updateDate: "2018-07-24", xklx: "英语", xkmc: "Reusing things" },
        { id: 9, updateDate: "2018-07-24", xklx: "英语", xkmc: "Children's Day" },
        { id: 10, updateDate: "2018-07-24", xklx: "英语", xkmc: "Holidays" },
        { id: 11, updateDate: "2018-07-24", xklx: "英语", xkmc: "Writing an email to Amy" },
        { id: 12, updateDate: "2018-07-24", xklx: "政治", xkmc: "中国有了共产党" },
        { id: 13, updateDate: "2018-07-24", xklx: "政治", xkmc: "让我自己来整理" },
        { id: 14, updateDate: "2018-07-24", xklx: "政治", xkmc: "试种一粒籽" },
        { id: 15, updateDate: "2018-07-24", xklx: "历史", xkmc: "古代西亚文化" },
        { id: 16, updateDate: "2018-07-24", xklx: "历史", xkmc: "香港和澳门回归祖国" },
        { id: 17, updateDate: "2018-07-24", xklx: "历史", xkmc: "香港和澳门回归祖国" },
        { id: 18, updateDate: "2018-07-24", xklx: "地理", xkmc: "地理信息技术在城市管理中的应用" },
        { id: 19, updateDate: "2018-07-24", xklx: "地理", xkmc: "区域环境的可持续发展" },
        { id: 20, updateDate: "2018-07-24", xklx: "地理", xkmc: "东南亚--中南半岛" }
      ],
      tableLabel: [
        { label: '', width: '40', prop: 'id' },
        { label: '发布日期', width: '', prop: 'updateDate' },
        { label: '学科类型', width: '', prop: 'xklx' },
        { label: '学科名称', width: '', prop: 'xkmc' }
      ],
      tableDataTemp1: [
        { id: 1, updateDate: "2018-07-23", xklx: "语文", xkmc: "少年奇葩说" },
        { id: 2, updateDate: "2018-07-24", xklx: "语文", xkmc: "黄河颂" },
        { id: 3, updateDate: "2018-07-25", xklx: "语文", xkmc: "插上科学的翅膀" },
        { id: 4, updateDate: "2018-07-24", xklx: "数学", xkmc: "整式的除法（一）" },
        { id: 5, updateDate: "2018-07-24", xklx: "数学", xkmc: "分式的巧算" },
        { id: 6, updateDate: "2018-07-24", xklx: "数学", xkmc: "一分钟有多长" },
        { id: 7, updateDate: "2018-07-24", xklx: "英语", xkmc: "Writing an email to Amy" },
        { id: 8, updateDate: "2018-07-24", xklx: "英语", xkmc: "Reusing things" },
        { id: 9, updateDate: "2018-07-24", xklx: "英语", xkmc: "Children's Day" },
        { id: 10, updateDate: "2018-07-24", xklx: "英语", xkmc: "Holidays" },
        { id: 11, updateDate: "2018-07-24", xklx: "英语", xkmc: "Writing an email to Amy" },
        { id: 12, updateDate: "2018-07-24", xklx: "政治", xkmc: "中国有了共产党" },
        { id: 13, updateDate: "2018-07-24", xklx: "政治", xkmc: "让我自己来整理" },
        { id: 14, updateDate: "2018-07-24", xklx: "政治", xkmc: "试种一粒籽" },
        { id: 15, updateDate: "2018-07-24", xklx: "历史", xkmc: "古代西亚文化" },
        { id: 16, updateDate: "2018-07-24", xklx: "历史", xkmc: "香港和澳门回归祖国" },
        { id: 17, updateDate: "2018-07-24", xklx: "历史", xkmc: "香港和澳门回归祖国" },
        { id: 18, updateDate: "2018-07-24", xklx: "地理", xkmc: "地理信息技术在城市管理中的应用" },
        { id: 19, updateDate: "2018-07-24", xklx: "地理", xkmc: "区域环境的可持续发展" },
        { id: 20, updateDate: "2018-07-24", xklx: "地理", xkmc: "东南亚--中南半岛" }
      ]
    }
  },
  methods: {
    search1() {
      // console.log('this.search', this.search, this)
      var shuru = this.search
      const vm = this;
      this.searchData1 = [];
      this.tableDataTemp1.forEach(function (item) {
        if (item.xklx.indexOf(shuru) > -1) {
          vm.searchData1.push(item);
        }
      });
      this.tableData = this.searchData1;
    }
  }
}
</script>
<style scoped>
.middleTable{
  width: 96%;
  left: 2%;
  height: 80%;
  position: absolute;
  top: 20%;
}
.topSearch{
  height: 7% !important;
  width: 100%;
  display: flex;
  margin-top: 2%;
  margin-left: 2%;
}
.el-input__inner{
  width: 10%;
}
.el-input{
width: 20% !important;
}
</style>
