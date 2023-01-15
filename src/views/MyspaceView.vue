<template>
  <div>
    <BorderComponent :title="Mytitle">
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
  name: 'MyspaceView',
  components: {
    BorderComponent,
    MenuComponent
  },
  data() {
    return {
      Mytitle: "个人中心",
      menuArr: [
        {
          name: '个人中心', icon: 'el-icon-star-off', path: '/个人中心',
          children: [
            {
              name: '我的主页',
              icon: 'el-icon-reading',
              path: '/showInfo',
              children: []
            }
          ]
        },
        {
          name: '设置', icon: 'el-icon-star-off', path: '/设置',
          children: [
            {
              name: '退出',
              icon: 'el-icon-discover',
              path: '/',
              children: []
            }
          ]
        }
      ],
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.left{
  width: 100%;
  height: 100%;
}
</style>
