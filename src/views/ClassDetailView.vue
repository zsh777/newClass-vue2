<template>
  <div>
    <BorderComponent :title="myTitle">
      <div class="left">
        <MenuComponent :menuList="menuArr"></MenuComponent>
      </div>
    </BorderComponent>
  </div>
</template>
<script>
import BorderComponent from '../components/BorderComponent.vue'
import MenuComponent from '../components/MenuComponent.vue'
export default {
  name: 'ClassDetailView',
  components: {
    BorderComponent,
    MenuComponent
  },
  data() {
    return {
      myTitle: '视频详情',
      menuArr: [
        {
          name: '语文视频详情', icon: 'el-icon-message', path: '/chineseDetail',
        },
        {
          name: '数学视频详情', icon: 'el-icon-message', path: '/mathDetail',
        }
      ],
    }
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
