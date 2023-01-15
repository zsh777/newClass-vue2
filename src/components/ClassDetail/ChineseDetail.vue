<template>
  <div>
    <Detail :item="item"></Detail>
  </div>
</template>
<script>
import Detail from '../ClassDetail/DetailComponent.vue'
export default {
  name: 'ChineseDetail',
  components: {
    Detail
  },
  data() {
    return {
      item: {
        url: '//vjs.zencdn.net/v/oceans.webm',
        title: '课程简介',
        likeCount: 20,
        passenge: '北京师范大学新世纪义务教育课程标准小学语文实验教科书是首批进入国家课程改革实验区的三套数学教材之一.在本套教材的编写和实验中,我们力图解决三个问题,一是学习语文的兴趣问题,让学生喜欢语文;二是学习语文的方法问题,让学生会学语文;三是人文性和工具性的统一,让语文学习的过程,既是学习文字的过程,又是学习现代文化知识的过程,还是接受现代文明熏陶、感染的过程.我们以"兴趣先导,学会学习、整体推进、文化积累"作为本套教材总的指导思想.'
      }
    }
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