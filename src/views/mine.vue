<template>
  <div class="mine">
    <van-nav-bar
  title="个人中心"
  left-text="返回"
  
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
    <div class="nickName">
      <div class="list">
     <div class="nickpic"> <img src="../../src/assets/images/icon/12344.jpg" alt=""></div>
     <div class="nick">大班阿毛</div>
     </div>
    </div>
    <div class="minbox">
     <ul>
       <li class="minelist">我的订单</li>
       <li></li> 
       <li></li>
       <li class="alllist"> <router-link to="allList" >全部订单</router-link> </li>
     </ul> 
    <van-row class="user-links">
      <van-col span="6">
        <!-- <van-icon name="pending-payment" /> -->
        <div><router-link to="waitMoney"><img src="../assets/images/icon/待付款.png" alt="" srcset=""></router-link></div>
        待付款
      </van-col>
      <van-col span="6">
        <div><router-link to="waitGoods"><img src="../assets/images/icon/待发货.png" alt="" srcset=""></router-link></div>
        待发货
      </van-col>
      <van-col span="6">
        <div><router-link to="peiSong"><img src="../assets/images/icon/配送总.png" alt="" srcset=""></router-link></div>
        配送中
      </van-col>
      <!-- <van-col span="6">
        <div><img src="../assets/images/icon/待付款.png" alt="" srcset=""></div>
        待评价
      </van-col> -->
       <van-col span="6">
        <div><img src="../assets/images/icon/退换货.png" alt="" srcset=""></div>
        退换货
      </van-col>
    </van-row>
      </div>
       <div class="serbox">
     <ul>
       <li class="minelist">我的服务</li>
       
       <!-- <li class="alllist">全部订单</li> -->
     </ul>
    <van-row class="user-links">
      <van-col span="6">
        <div><img src="../assets/images/icon/地址管理.png" alt="" srcset=""></div>
        地址管理
      </van-col>
      <van-col span="6">
        <div><img src="../assets/images/icon/收藏.png" alt="" srcset=""></div>
        收藏
      </van-col>
      <van-col span="6">
        <div><img src="../assets/images/icon/设置.png" alt="" srcset=""></div>
        设置
      </van-col>
      <van-col span="6">
        <div><img src="../assets/images/icon/消息中心.png" alt="" srcset=""></div>
        消息中心
      </van-col>
       
    </van-row>
      </div>
   
  </div>
</template>
<script>
import { Row, Col, Icon, Cell, CellGroup } from 'vant';
// import '../lib/mui-master/dist/css/mui.css'
export default {
    components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data () {
    return {
      
    }
  },
   beforeCreate(){
            const token = sessionStorage.getItem('token')
            if(!token){
                this.$router.push('login')
            }
        },
  methods:{
    onClickLeft() {
      // this.$router.push({name:'home'});
      // 返回上一页面
       this.$router.go(-1)
    },
  }
}
</script>
<style lang="less" scoped>
    .user {
  &-poster {
    width: 100%;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #ffffff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
.user-links div img {
  width:24px;
}
.mine {
  // background-color: #ccc;
  height:100%;
}
.minbox li {
  display: inline-block;
  width: 50%;
  float: left;
  text-align: left;
  }
.minbox .alllist {
  text-align: right;
}
.minbox .minelist {
  font-size: 20px;
}
.van-col--6 {
    width: 25%;
}
.serbox .van-col--6 {
   width: 25%;
   margin-bottom: 15px;
}
.minbox {
  margin:5px 5px 15px 5px;
  background-color: #ffffff;
  box-shadow:#cccccc 0px 0px 10px;
}
.serbox {
  margin:0 5px 5px 5px;
  background-color: #ffffff;
  box-shadow: #cccccc 0px 0px 10px;
   
}
.list {
 padding-top:42px;
 display: -webkit-flex;  
-webkit-justify-content: center;  
-webkit-align-items: center; 

 
}
.nickName span {
  display: inline-block;
  margin-top: 10px;
}
.nickName {
  width:100%;
  height:180px;
  margin-bottom: 20px;
  // background-color: #fa7701;
  background-image: url('../assets/images/common/组13.png');
  
}

.nickpic {
  display: inline-block;
  width:80px;
  height:80px;
  border:1px solid #ffffff;
  border-radius: 50%;
  background-color: #fff;
}
.nickpic img{
  width:100%;
   border-radius: 50%;
   vertical-align:middle;
}
.nick {
  margin-left: 8%;
  color: #ffffff;
  font-size: 20px;
}
ul {
  padding: 5%;
}
.van-nav-bar__text {
  color:#f2223b;
}
.van-nav-bar .van-icon {
  color:#f2223b;
}
.van-nav-bar__left {
  left:0;
}
</style>
