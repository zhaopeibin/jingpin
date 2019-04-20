<template>
    <div class="alllist">
      <div class="goodList">
    <div class="listNum">
      <span>订单编号：123456789</span>
    </div>
    <van-card
  num="2"
  tag="标签"
  price="2.00"
  desc="描述信息"  
  title="商品标题"
  :thumb="imageURL"
  origin-price="10.00"
>

  <div slot="footer">
    <span class="money">应付: <strong>￥22.5</strong> </span>
    <van-button size="mini">取消订单</van-button>
    <van-button size="mini">去付款</van-button>
  </div>
</van-card>
</div>
    </div>
                
</template>
<script>
export default {
  data () {
    return {
       imageURL:'http://www.zhidong.cn//uploadfiles/recommendUploadImage/15529812192322646.png',
    }
  }
}
</script>
<style scoped>
.alllist{
  /* background: #999999; */
  height: 100%;
}
.listNum {
  color:#a0a1aa;
  height:20px;
  line-height:36px;
  padding-left: 15px;
  font-size: 14px;
  
}
.van-button--mini {
    width: 82px;
    height: 31px;
    line-height: 20px;
    font-size: 12px;
}
.van-card__header {
  border-bottom: 1px solid #cccc;
  padding-top:15px ;
  border-top: 1px solid #cccc;
}
.van-card {
  background-color: #fff;
}
.footer {
  /* margin-top:15px; */
}
.van-card__footer {
  margin-top: 15px;
}
.money {
  float: left;
  line-height: 32px;
}
</style>


