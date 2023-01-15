<template>
  <div class="homeBox">
    <div class="left">
      <div class="leftNav">
        <el-menu :default-active="activeIndex" class="elMenu" background-color="#333" text-color="#B0B0B2" active-text-color="#fff" :unique-opened="true" router ref="elMenu" @select="menuSelect">
          <div>
            <template v-for="menu in menuList">
              <el-submenu :key="menu.id" :index="menu.path" v-if="menu.children && menu.children.length > 0">
                <template slot="title">
                  <i :class="menu.icon"></i>
                  <span>{{ menu.name }}</span>
                </template>
                <el-menu-item :index="val.path" v-for="val in menu.children" :key="val.id">{{val.name}}</el-menu-item>
              </el-submenu>
              <el-menu-item :key="menu.id" v-else :index="menu.path">
                <i :class="menu.icon"></i>
                <span slot="title">{{ menu.name }}</span>
              </el-menu-item>
            </template>
          </div>
        </el-menu>
      </div>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MenuComponent',
  data() {
    return {
      isCollapse: false,
      activeIndex: this.$router.path
    }
  },
  methods: {
    menuSelect(index) {
      this.activeIndex = index;
    },
  },
  props: {
    menuList: {
      type: Array,
      required: false,
    },
  },
  mounted() {
  }
}
</script>
<style lang="less" scoped >
.homeBox {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    width: 216px;
    height: 100%;
    .leftNav {
      width: 216px;
      height: 100%;
      .elMenu {
        width: 100%;
        height: 100%;
      }
      // 菜单选中高亮样式
      /deep/ .el-menu-item.is-active {
        background-color: #478ce9 !important;
        font-weight: bold;
      }
    }
  }
  .right{
    width: 100%;
    height: 100%;
  }
}
</style>