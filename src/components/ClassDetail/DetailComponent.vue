<template>
  <div>
    <video :controls="true" width="1150px" height="300px" :item="item" :src="item.url" type="video/mp4" />
    <div class="main1">
      <h1>{{item.title}}</h1>
      <div class="zan">
        <img width="25px" height="25px" class="img" src="@/assets/image/zan.jpg" />
        <span>{{item.likeCount}}</span>
      </div>
      <p>{{item.passenge}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ChineseDetail',
  components: {
  },
  data() {
    return {
    }
  },
  props: {
    item: Object
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
h1 {
  color: #a7c942;
  text-align: center;
  letter-spacing: 8px;
}
p {
  width: 1150px;
  letter-spacing: 2px;
  line-height: 40px;
  text-indent: 37px;
  text-shadow: 2px 2px gold;
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  font-weight: bold;
}
.zan{
  margin-top: -51px;
  margin-left: 700px;
}

</style>