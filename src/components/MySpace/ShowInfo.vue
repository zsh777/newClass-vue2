<template>
  <div class="right">
    <el-card style="height:100%" :body-style="{ padding: '20px' }">
      <el-descriptions class="margin-top" title="简介" :column="2" border>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-picture-outline"></i>
            头像
          </template>
          <img style="width: 100px; height: 100px; border-radius: 100px" :src="avatar" class="image" id="picture" alt="" />
          <input class="file-upload" type="file" accept=".jpg,.png" name="file" />
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            账户名
          </template>
          {{ account }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-s-custom"></i>
            昵称
          </template>
          {{ nickname }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-odometer"></i>
            年龄
          </template>
          {{ age }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-male"></i>
            <i class="el-icon-female"></i>
            性别
          </template>
          <el-tag size="small">{{ sex }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-message"></i>
            邮箱Email
          </template>
          {{ email }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            手机号码
          </template>
          {{ mobilePhoneNumber }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            地区
          </template>
          {{ area }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            职业
          </template>
          {{ work }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-basketball"></i>
            兴趣爱好
          </template>
          {{ hobby }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-magic-stick"></i>
            个性签名
          </template>
          {{ design }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-date"></i>
            注册日期
          </template>
          {{ createDate }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>
<script>
import image from '@/assets/image/22.png'
export default {
  name: 'showInfo',
  data() {
    return {
      avatar: image,
      account: "zsh7777",
      age: "18",
      email: "2998427721@qq.com",
      mobilePhoneNumber: "18339224213",
      area: "郑州",
      createDate: "2023-01-01",
      nickname: "ffffffff",
      sex: "男",
      work: "教师",
      hobby: "篮球",
      design: "唱跳、rap、篮球",
    }
  },
  mounted() {
    this.upImage()
  },
  methods: {
    upImage() {
      $(document).on('click', '#picture', function () {
        // 点击图片的同时，点击上传文件的input
        $('.file-upload').click()
        // 将上传的图片显示到页面上
        $(document).on('change', '.file-upload', function () {
          var fileObj = $('.file-upload')[0]
          var img = document.getElementById('picture') //获得用户上传的图片节点
          var reader = new FileReader()
          // 转换成功后的操作，img.src即为转换后的DataURL
          reader.onload = function (e) {
            if (reader.readyState === 2) {
              //加载完毕后赋值
              img.src = e.target.result
              img.style.height = '100px'
              img.style.width = '100px'
              img.style.borderRadius = '100px'
            }
          }
          reader.readAsDataURL(fileObj.files[0])
        })
      })
    }
  }
}
</script>
<style scoped>
.right{
  height: 100%;
}
.file-upload {
  display: none;
}
</style>