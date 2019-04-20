<template>
  <div class="home">
    <van-search  placeholder="请输入搜索关键词" show-action shape="round" >
      <div slot="action">搜索</div>
    </van-search>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../assets/images/common/topbanner.png" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/images/common/topbanner2.png" alt>
      </van-swipe-item>
    </van-swipe>
    <div class="serve">
      <ul>
        <li>
          <img src="../assets/images/icon/address.png" alt>
          <span>原产地提供</span>
        </li>
        <li>
          <img src="../assets/images/icon/tuihuo.png" alt>
          <span>七天无忧退货</span>
        </li>
        <li class="last">
          <img src="../assets/images/icon/youji.png" alt>
          <span>全场包邮</span>
        </li>
      </ul>
    </div>
    <div class="recomGoods">
      <div class="recom">
        <h2>推荐精品</h2>
      </div>
    </div>
    <template class="product">
      <ul class="datalist">
        <li v-for="item in list" :key="item.id">
          <!-- ur传参  -->
          <router-link :to="{path:'/detail',query:{ id:item.id }}" tag="li">
          <div class="imggood">
            <img :src=item.pic alt>
          </div>
          <div class="data">
            <ul>
              <li>
                <h3>{{item.name}}</h3>
              </li>
              <li>
                <h4>{{item.subTitle}}</h4>
              </li>
              <li>
                <span>￥</span>
                <span>{{item.price}}</span>
                <del>{{item.originalPrice}}</del>
              </li>
            </ul>
          </div>
          </router-link>
        </li>
        
      </ul>
    </template>

    <!-- -->
    <router-link to="/mine">
      <div class="mine">
        <img src="../assets/images/icon/mine.png" alt>
      </div>
    </router-link>

    <router-view></router-view>
  </div>
</template>
<script>
import md5 from "js-md5";
// import '../lib/mui-master/dist/css/mui.min.css'
export default {
  data() {
    return {
      //imageURL:'http://www.zhidong.cn//uploadfiles/recommendUploadImage/15529812192322646.png',
      pageSize: "6",
      pageNum: "1",
      id:'',
      list: []
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    // 渲染
    async getProduct() {
      const res = await this.$http.get(
        "/home/recommendProductList?"
        +"pageSize="+ this.pageSize + "&pageNum=" + this.pageNum
      );
      this.list = res.data.data;
      // id = this.list.id;
      console.log(res);
      // console.log(id);
    }
  }
};
</script>
<style scoped>
h1,
h2,
h3,
h4 {
  padding: 0;
  margin: 0;
}
h3 {
  font-size: 16px;
}
h4 {
  margin-top: 2px;
  margin-bottom: 2px;
}

.data {
  margin-left: 1%;
}
.product {
  margin-bottom: 1%;
}
.van-swipe-item img {
  width: 100%;
  height: 100%;
}
.van-swipe-item {
  width: 100%;
}
.van-search {
  padding-left: 5%;
  padding-right: 5%;
}
.serve {
  width: 100%;
  height: 50px;
  background-color: #fff;
}
.serve ul {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
}
.serve li {
  font-size: 10px;
}
.serve li img {
  vertical-align: middle;
  height: 32px;
}
.serve li span {
  line-height: 50px;
}
.recomGoods {            
  width: 100%;
  height: 100%;
}
.recom {
  width: 100%;
  height: 50px;
}
.recom h2 {
  text-align: center;
}
.van-card__thumb {
  width: 100%;
  height: 514px;
}
.imggood {
  width: 100%;
  /* height:332px; */
}
.imggood img {
  width: 100%;
  border-radius: 10px;
}
.data li h3 {
  font-weight: 400;
}
.data li h4 {
  color: #aeafb7;
  font-weight: 400;
  font-size: 15px;
}
.data li span {
  color: #f2223b;
  font-size: 20px;
}
.data li del {
  margin-left: 5%;
  font-size: 14px;
  color: #a0a1aa;
}
.datalist {
  margin-right: 1%;
  margin-left: 1%;
}
.datalist > li {
  margin-bottom: 12px;
}
.van-search .van-cell {
  padding: 0;
}
input[type="color"] {
  margin-bottom: 0px;
}
van-field__body input {
  background-color: #fff;
}
.mine {
  width: 35px;
  height: 35px;
  /* background-color: red; */
  position: fixed;
  top: 70%;
  right: 1%;
}
.mine img {
  width: 100%;
}
</style>

