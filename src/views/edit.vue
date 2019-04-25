<template>
    <div class="edit">
        <van-nav-bar
  title="修改个人信息"
  left-text="返回"
  
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
  <div class="item_bock head_p">
     <div class="head_img">
       <img :src="userInfo.avatar"/>
    
     </div>
     <div class="setting_right" @click.stop="uploadHeadImg">
       <div class="caption">更改头像</div>
     </div>
     <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
   </div>


    </div>
</template>
<script>
export default {
    data () {
        return {
           userInfo: {
            avatar: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=62d46c39067b020818c437b303b099b6/d4628535e5dde7119c3d076aabefce1b9c1661ba.jpg'


        }
    }
},
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

</style>


