<template>
    <div class="express">
<van-nav-bar
  title="标题"
  left-text="返回"
 
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
  <div id="wuliuCon">
      
    <div id="wuliuDiv">
        
      <div class="track_info">
        <a class="track_info_serve" href="javascript:;" style="display:none" id="wuliudongdong">联系卖家</a>
        <div class="track_info_item">
          <p class="track_info_item_label">订单编号：</p>
          <div class="track_info_item_content">76939468008</div>
        </div>

        <div class="track_info_item">
          <p class="track_info_item_label">物流公司：</p>
          <div class="track_info_item_content">顺丰速递</div>
        </div>

        <div class="track_info_item">
          <p class="track_info_item_label">运单号码：</p>
          <div class="track_info_item_content">656454545151554</div>
        </div>
      </div>

      <ul class="track_shipflow">
        <li class="track_shipflow_item cur" v-for="item in list" :key="item.id">
          <i class="track_shipflow_item_status type_dot"></i>
          <div class="track_shipflow_item_msg">
            <p class="track_shipflow_item_msg_text">{{item.remark}}</p>
            <p class="track_shipflow_item_msg_time">{{item.datetime}}</p>
          </div>
        </li>
        <!-- <li class="track_shipflow_item">
          <i class="track_shipflow_item_status type_dot"></i>
          <div class="track_shipflow_item_msg">
            <p class="track_shipflow_item_msg_text">您的商品需要从供应商采购，我们会尽快处理，请耐心等待</p>
            <p class="track_shipflow_item_msg_time">2018-06-18 10:15:58</p>
          </div>
        </li>

        <li class="track_shipflow_item">
          <i class="track_shipflow_item_status type_dot"></i>
          <div class="track_shipflow_item_msg">
            <p class="track_shipflow_item_msg_text">您提交了订单，请等待系统确认</p>
            <p class="track_shipflow_item_msg_time">2018-06-18 10:00:19</p>
          </div>
        </li> -->
      </ul>
    </div>
    <div id="jdAppID"></div>
  </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      list: [],
      expressNum: ""
    };
  },
  created() {
    this.getExpress(), this.selectGetExpress();
  },
  methods: {
    async getExpress() {
      const res = await this.$http.get(
        "/order/getOrderById?" + "orderId=" + 18
      );
      this.list = res.data.data;
      this.expressNum = this.list.deliveryNo;
      // console.log(this.expressNum)
    },
     async selectGetExpress() {
      const res = await this.$http.get("/order/getExpressById?"+"com="+"yd"+"&no="+"3874461118919");

      
      this.list = res.data.result.list
      console.log(this.list)
    }
  }
};
</script>
<style scoped>
body,
p,
div,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
dl,
ol,
dt,
dd,
li,
a,
i,
span,
select,
textarea {
  font-size: 1em;
  /* font-family: "Microsoft YaHei", Tahoma, Arial; */
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
body {
  max-width: 760px;
  margin: 0 auto !important;
}
a:hover {
  color: #db384c;
}
select {
  -webkit-appearance: none;
  /* background:url(../images/select.png) no-repeat right; */
  border: solid 1px #dddddd;
}
input,
img {
  border: 0 none;
  outline-style: none;
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  float: left;
}
.clearfix:after {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  clear: both;
  visibility: hidden;
}
.clearfix {
  zoom: 1;
}
body {
  background-color: #f8f8f8;
}
.track_info {
  margin-bottom: 10px;
  position: relative;
  padding: 12px 10px;
  font-size: 14px;
  background-color: #fff;
}
.track_info_item {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  color: #333;
  padding-top: 3px;
}
.track_info_item_label {
  min-width: 70px;
  color: #999;
}
.track_info_item_content {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.track_info .track_goods {
  position: relative;
  padding: 10px 80px 10px 0;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.track_info .track_goods .track_goods_imgs {
  margin-right: 5px;
  width: 50px;
  height: 50px;
}
track_shipflow  li:last-child {
    color:red;
}
.track_info .track_goods .track_goods_imgs img {
  width: 100%;
  height: 100%;
}
.track_info .track_goods .track_goods_go {
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  padding-left: 12px;
  line-height: 70px;
  font-size: 12px;
  color: #666;
}
.track_info .track_goods .track_goods_go::after {
  top: 50%;
  right: -10px;
  width: 8px;
  height: 8px;
  border-color: #ccc;
}
.track_info .track_goods .track_goods_detail {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.track_info .track_goods .track_goods_detail_text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.track_info .track_goods::after {
  content: "";
  position: absolute;
  z-index: 1;
  pointer-events: none;
  background-color: #e5e5e5;
  height: 1px;
  left: 0;
  right: 0;
  bottom: 0;
}
@media only screen and (-webkit-min-device-pixel-ratio: 2) {
  .track_info .track_goods::after {
    -webkit-transform: scaleY(0.5);
    -webkit-transform-origin: 50% 100%;
  }
}
.track_shipflow {
  margin-top: 15px;
  padding: 0 10px;
  background-color: #fff;
}
.track_shipflow_item {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  font-size:10px;
}
.track_shipflow_item:not(:last-child)::after {
  content: "";
  position: absolute;
  z-index: 1;
  pointer-events: none;
  background-color: #e5e5e5;
  width: 1px;
  top: 0;
  bottom: 0;
  left: 0;
  top: 37px;
  left: 10px;
  bottom: -20px;
}
@media only screen and (-webkit-min-device-pixel-ratio: 2) {
  .track_shipflow_item:not(:last-child)::after {
    -webkit-transform: scaleX(0.5);
    -webkit-transform-origin: 0 50%;
  }
}
.track_shipflow_item.cur::after {
  background: -webkit-linear-gradient(bottom, #e8e8ed, #e64b4e);
  background: linear-gradient(0deg, #e8e8ed, #e64b4e);
}
.track_shipflow_item.cur .track_shipflow_item_status {
  color: #fff;
  background-color: #e4393c;
}
.track_shipflow_item.cur .track_shipflow_item_status.type_dot::after {
  content: "";
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  margin-top: -9px;
  margin-left: -9px;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  border: 1px solid #e4393c;
}
.track_shipflow_item.cur .track_shipflow_item_msg_text,
.track_shipflow_item.cur .track_shipflow_item_msg_time {
  /* color: #e4393c;     */
}
.track_shipflow_item_status {
  position: relative;
  margin: 15px 10px 0 0;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 10px;
  text-align: center;
  border-radius: 10px;
  color: #666;
  background-color: #f7f7f7;
}
.track_shipflow_item_status.type_dot {
  margin: 24px 15px 0 5px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #ccc;
}
.track_shipflow_item_msg {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  padding: 15px 0;
}
.track_shipflow_item_msg_text {
  color: #333;
  font-size: 14px;
  line-height: 1.35em;
}
.track_shipflow_item_msg_time {
  font-size: 12px;
  color: #999;
}
.track_shipflow_item_map {
  width: 100%;
  margin-left: 20px;
  height: 9.25rem;
  background-color: #666;
}
.van-nav-bar__title {
    margin: 0 auto;
    /* max-width: 60%; */
    color: #323233;
    font-size: 16px;
    font-weight: 500;
}
</style>


