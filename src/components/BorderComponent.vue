<template>
  <div class="border" id="border">
    <div class="top">
      <span :value="title">{{title}}</span>
      <div class="icon">
        <span @click="mini"><img class="buttonIcon" src="@/assets/image/min.png" /></span>
        <span @click="max"><img class="buttonIcon" src="@/assets/image/max.png" /></span>
        <span @click="close"><img class="buttonIcon" src="@/assets/image/close.png" /></span>
      </div>
    </div>
    <div class="middle" id="middle">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BorderComponent',
  data() {
    return {}
  },
  props: {
    title: String
  },
  mounted() {
  },
  methods: {
    close() {
      this.$router.push('/')
    },
    max() {
      let dom = this.$el
      $(dom).width('80%')
      $(dom).height('84%')
    },
    mini() {
      //缩小以后布局乱了 
      let dom = this.$el
      $(dom).width('20%')
      $(dom).height('0%')
    }
  }
}
</script>
<style lang="less" scoped>
.border{
    position: absolute;
    background: #ffffff;
    height: 84%;
    left: 10%;
    top: 12%;
    width: 80%;
    .top{
          height: 46px;
          background-color: #ffffff;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          font-weight: 700;
          font-family: 'Microsoft YaHei';
          overflow: hidden;
          border: 1px solid #dcdfe5;
    }
    .middle{
    display: flex;
    height: calc(100% - 48px);
    }
}
</style>