<template>
  <div class="address">
    <van-nav-bar title="修改个人信息" left-text="返回" left-arrow/>

    <section class="van-doc-demo-block">
      <div class="van-address-edit">
        <div class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>头像</span>
          </div>
          <div class="item_bock head_p">
            <div class="head_img">
              <img :src="userInfo.avatar">
            </div>
            <div class="setting_right" @click.stop="uploadHeadImg">
              <!-- <div class="caption">更改头像</div> -->
            </div>
            <input type="file" accept="image/*" @change="handleFile" class="hiddenInput">
          </div>
          <!-- <div class="van-cell__value">
            <div class="van-field__body">
              <input type="" placeholder="收货人手机号" class="van-field__control" v-model="tel">
              
            </div>
          </div>-->
        </div>
        <div class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>用户名</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input type="text" placeholder="用户名" class="van-field__control">
            </div>
          </div>
        </div>

        <div class="van-cell van-field" style>
          <div class="van-cell__title van-field__label">
            <span>性别</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <van-radio-group v-model="radio">
                <van-radio name="1">男</van-radio>
                <van-radio name="2">女</van-radio>
              </van-radio-group>
            </div>
          </div>
        </div>
        <div class="van-address-edit__buttons" style>
          <button class="van-button van-button--danger van-button--normal van-button--block">
            <span class="van-button__text">保存</span>
          </button>
          <button class="van-button van-button--default van-button--normal van-button--block">
            <span class="van-button__text">删除</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {
        avatar:
          "https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=62d46c39067b020818c437b303b099b6/d4628535e5dde7119c3d076aabefce1b9c1661ba.jpg"
      },
      radio: 1
    };
  },
  created() {},

  methods: {
    // 打开图片上传
    uploadHeadImg: function () {
      this.$el.querySelector('.hiddenInput').click()
    },
    // 将头像显示
    handleFile: function (e) {
      let $target = e.target || e.srcElement
      let file = $target.files[0]
      var reader = new FileReader()
      reader.onload = (data) => {
        let res = data.target || data.srcElement
        this.userInfo.avatar = res.result
      }
      reader.readAsDataURL(file)
    },
}
}
</script>
<style scoped>
.head_img img {
    width:50px;
}
</style>

