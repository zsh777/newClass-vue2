<template>
  <div>
    <BorderComponent v-bind:title="myTitle">
      <div class="left">
        <div class="tree">
          <TreeComponent :treeData="myData" @getTreeData="handleNodeClick"></TreeComponent>
        </div>
        <div class="tableStyle">
          <TableComponent :tableData="tableData" :tableLabel="tableLabel"></TableComponent>
        </div>
      </div>
      <div class="right myEchartsStyle allEcharts">
        <div id="chart" class="mychart" style="margin: 0 auto">&nbsp;</div>
      </div>
    </BorderComponent>
  </div>
</template>
<script>
import BorderComponent from '../components/BorderComponent.vue'
import TreeComponent from '../components/TreeComponent.vue'
import TableComponent from '../components/TableComponent.vue'
import Bar from '../utils/echart/Bar'

export default {
  name: 'AllView',
  components: {
    BorderComponent,
    TreeComponent,
    TableComponent
  },
  data() {
    return {
      myChart: null,
      tableData: [
      ],
      // 子组件的表头数据
      tableLabel: [
        { label: '序号', width: '60', prop: 'id' },
        { label: '发布日期', width: '', prop: 'updateDate' },
        { label: '学科类型', width: '', prop: 'xklx' },
        { label: '学科名称', width: '', prop: 'xkmc' },
      ],
      myTitle: "课程统计",
      myData: [
        {
          label: "全部课程",
          children: [
            {
              label: "语文",
              id: '0',
            },
            {
              label: "数学",
              id: '1',
            },
            {
              label: "英语",
              id: '2',
            },
            {
              label: "政治",
              id: '3',
            },
            {
              label: "历史",
              id: '4',
            },
            {
              label: "地理",
              id: '5',
            },
          ],
        }
      ],
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.searchData = [
        {
          "type": "语文",
          "id": "0",
          "total": 3,
          "data": [
            {
              "id": 1,
              "xkmc": "少年奇葩说",
              "updateDate": "2018-07-23",
              "xklx": "语文"
            },
            {
              "id": 2,
              "xkmc": "黄河颂",
              "updateDate": "2018-07-24",
              "xklx": "语文"
            },
            {
              "id": 3,
              "xkmc": "插上科学的翅膀飞",
              "updateDate": "2018-07-25",
              "xklx": "语文"
            }
          ]
        },
        {
          "id": "1",
          "type": "数学",
          "total": 3,
          "data": [
            {
              "id": 1,
              "xkmc": "整式的除法（一）",
              "updateDate": "2018-07-24",
              "xklx": "数学"
            },
            {
              "id": 2,
              "xkmc": "分式的巧算",
              "updateDate": "2018-07-24",
              "xklx": "数学"
            },
            {
              "id": 3,
              "xkmc": "一分钟有多长",
              "updateDate": "2018-07-24",
              "xklx": "数学"
            }
          ]
        },
        {
          "type": "英语",
          "id": "2",
          "total": 5,
          "data": [
            {
              "id": 1,
              "xkmc": "Writing an email to Amy",
              "updateDate": "2018-07-24",
              "xklx": "英语"
            },
            {
              "id": 2,
              "xkmc": "Reusing things",
              "updateDate": "2018-07-24",
              "xklx": "英语"
            },
            {
              "id": 3,
              "xkmc": "Children's Day",
              "updateDate": "2018-07-24",
              "xklx": "英语"
            },
            {
              "id": 4,
              "xkmc": "Holidays",
              "updateDate": "2018-07-24",
              "xklx": "英语"
            },
            {
              "id": 5,
              "xkmc": "Writing an email to Amy",
              "updateDate": "2018-07-24",
              "xklx": "英语"
            }
          ]
        },
        {
          "type": "政治",
          "id": "3",
          "total": 3,
          "data": [
            {
              "id": "1",
              "xkmc": "中国有了共产党",
              "updateDate": "2022-11-19",
              "xklx": "政治"
            },
            {
              "id": "2",
              "xkmc": "让我自己来整理",
              "updateDate": "2022-11-19",
              "xklx": "政治"
            },
            {
              "id": "3",
              "xkmc": "试种一粒籽",
              "updateDate": "2022-11-19",
              "xklx": "政治"
            }
          ]
        },
        {
          "type": "历史",
          "id": "4",
          "total": 3,
          "data": [
            {
              "id": "1",
              "xkmc": "古代西亚文化",
              "updateDate": "2022-11-19",
              "xklx": "历史"
            },
            {
              "id": "2",
              "xkmc": "香港和澳门回归祖国",
              "updateDate": "2022-11-19",
              "xklx": "历史"
            },
            {
              "id": "3",
              "xkmc": "隋唐时期测评解析",
              "updateDate": "2022-11-19",
              "xklx": "历史"
            }
          ]
        },
        {
          "type": "地理",
          "id": "5",
          "total": 3,
          "data": [
            {
              "id": "1",
              "xkmc": "地理信息技术在城市管理中的应用",
              "updateDate": "2022-11-19",
              "xklx": "地理"
            },
            {
              "id": "2",
              "xkmc": "区域环境的可持续发展",
              "updateDate": "2022-11-19",
              "xklx": "地理"
            },
            {
              "id": "3",
              "xkmc": "东南亚--中南半岛",
              "updateDate": "2022-11-19",
              "xklx": "地理"
            }
          ]
        }
      ]
      let xAxisData = []
      let valueData = []
      for (let i = 0; i < this.searchData.length; i++) {
        xAxisData.push(this.searchData[i].type)
        valueData.push(this.searchData[i].data.length)
      }
      this.tableData = this.searchData[0].data
      this.initChart(xAxisData, valueData)
    },
    initChart(xAxisData, seriesData) {
      this.myChart = new Bar({
        targetElement: document.getElementById('chart'),
        data: {
          xAxisData: xAxisData,
          seriesData: seriesData
        },
        xAxisRotate: 30
      })
      this.myChart.createGraphic()
    },
    handleNodeClick(data) {
      for (let i = 0; i < this.searchData.length; i++) {
        if (this.searchData[i].id === data.id) {
          // console.log(data.id, this.searchData[i])
          this.tableData = this.searchData[i].data
        }
      }
    }
  }
}
</script>
<style scoped>
.left{
  width: 60%;
  height: 100%;
  display: flex;
}
.right {
  width: 38%;
  height: 610px;
  text-align: center;
  margin-top: 8px ;
  border: 1px solid #dcdfe5;
  border-radius: 4px;
  margin-left: 8px;
}
.allEcharts {
  width: 500px !important;
  height: 610px;
  text-align: center;
  margin-top: 10px !important;
  border: 1px solid #dcdfe5;
  border-radius: 4px;
  margin-left: 10px;
}
.mychart {
  width: 300px !important;
  height: 60vh !important;
}
.tree {
  position: relative;
  cursor: default;
  margin-top: 8px;
  margin-left: 10px;
  border: 1px solid #dcdfe5;
  border-radius: 4px;
  background: #FFF;
  color: #606266;
  width: 50%;
  height: 610px;
  overflow: auto
}
.tableStyle{
  position: relative;
  cursor: default;
  margin-top: 8px;
  margin-left: 10px;
  border: 1px solid #dcdfe5;
  border-radius: 4px;
  background: #FFF;
  color: #606266;
  width: 100%;
  height: 610px;
  overflow: auto
}
</style>
