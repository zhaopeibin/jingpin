<template>
  <div class="goods">
    <van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb.id">
        <img :src="thumb">
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-name">{{goods.name}}</div>
        <div class="goods-title">{{ goods.title }}</div>
        <!-- <div class="goods-price">{{ formatPrice(goods.price) }}</div> -->
      </van-cell>
      <van-cell class="goods-express">
        <van-col class="lastPrice" span="5">{{formatPrice(goods.price) }}</van-col>
        <van-col span="3">
          <del>{{formatPrice(goods.price) }}</del>
        </van-col>
        <van-col class="yiShou" span="16">已售：{{ goods.remain }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">规格</span>
          <!-- <van-tag class="goods-tag" type="danger">官方</van-tag> -->
        </template>
      </van-cell>
      <van-cell title="服务" is-link @click="sorry"/>
    </van-cell-group>

    <div class="people" v-if="buyerSaidName">
      <div class="mui-card">
        <div class="mui-card-header mui-card-media">
          <img class="pic" src="../assets/images/icon/12344.jpg">

          <div class="mui-media-body">
            {{buyerSaidName}}
            <p>{{buyerSaidTitle}}</p>
          </div>
        </div>
        <div class="mui-card-content"></div>
        <div class="mui-card-footer">
          <p>{{buyerSaidDetail}}</p>
        </div>
      </div>
    </div>
    <div class="spec">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">产品名称： {{goods.name}}</li>
        <li class="mui-table-view-cell">产品规格： {{goods.unit}}</li>
        <!-- <li class="mui-table-view-cell">保质期限： 自己想</li>
        <li class="mui-table-view-cell">储藏方式： 随便</li>-->
      </ul>
    </div>
    <div class="img">
      <img src="../assets/images/common/23565645646.png" alt>
    </div>
    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o" @click="sorry">客服</van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="chat-o" @click="sorry">收藏</van-goods-action-mini-btn>

      <van-goods-action-big-btn primary @click="goBuy">立即购买</van-goods-action-big-btn>
    </van-goods-action>
    <van-sku
      v-model="showBase"
      :sku="sku"
      :goods="goods"
    
      
      @buy-clicked="onBuyClicked"
    />
  </div>
</template>

<script>

import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from "vant";
export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
  },
  data() {
    return {
      list: [],
      goods: {
        title: "",
        name: "",
        price: 2680,
        express: "免运费",
        remain: 19,
        original_price: "",
        unit:"",
        thumb: []
      },
       buyerSaidName:'',
      showBase: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "https://img.yzcdn.cn/1.jpg" // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: "1215",
                name: "蓝色",
                imgUrl: "https://img.yzcdn.cn/2.jpg"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1193", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [],
        hide_stock: false // 是否隐藏剩余库存
      },
      // goods: {
      //   // 商品标题
      //   title: "测试商品",
      //   // 默认商品 sku 缩略图
      //   picture: "https://img.yzcdn.cn/1.jpg"
      // }
    };
  },
  created() {
    this.getProList();
  },
  methods: {
    onClickLeft() {
      // this.$router.push({name:'home'});
      // 返回上一页面
      this.$router.go(-1);
    },
    // 渲染
    async getProList() {
      var productId = this.$route.query.id;
      //  console.log(proId);
      const res = await this.$http.get("/home/product/" + productId);
      this.list = res.data.data;
      this.goods.thumb.push(this.list.pic);
      this.goods.title = this.list.subTitle;
      this.goods.name = this.list.name;
      this.goods.original_price = this.list.original_price;
      this.goods.name = this.list.name;
      this.goods.unit = this.list.unit;
      this.buyerSaidName = this.list.buyerSaidName;
      this.buyerSaidDetail = this.list.buyerSaidDetail;
      this.buyerSaidTitle = this.list.buyerSaidTitle;
      
      console.log(res);
    },
    // 弹出规格框
    goBuy() {
      this.showBase = true;
    },
    // 价格过滤
    formatPrice() {
      return "¥" + this.goods.price;
    },
    // 购买
   async onBuyClicked(){
      var cartItem = {
  "createDate": "2019-04-12T07:54:38.072Z",
  "deleteStatus": 0,
  "id": 0,
  "memberId": 0,
  "memberNickname": "string",
  "modifyDate": "2019-04-12T07:54:38.072Z",
  "price": 0,
  "productAttr": "string",
  "productBrand": "string",
  "productCategoryId": 0,
  "productId": 0,
  "productName": "string",
  "productPic": "string",
  "productSkuCode": "string",
  "productSkuId": 0,
  "productSn": "string",
  "productSubTitle": "string",
  "quantity": 0,
  "sp1": "string",
  "sp2": "string",
  "sp3": "string"
}
      var res = await this.$http.post("/cart/add?"+cartItem);
      console.log(res)
    },
    
    

    // onClickCart() {
    //   this.$router.push("cart");
    // },
    sorry() {
      Toast("11111");
    }
  }
};
</script>

<style lang="less" scoped >
@import "../lib/mui-master/dist/css/mui.min.css";
.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}

.lastPrice {
  color: #f2223b;
  font-size: 18px;
}

del {
  font-size: 16px;
  // margin-right: 5px;
}
.mui-card-header > img:first-child {
  width: 40px;
  height: 40px;
}
.mui-table-view-cell {
  position: static;
  overflow: hidden;
  padding: 7px 15px;
  -webkit-touch-callout: none;
}
.mui-table-view-cell:after {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 15px;
  height: 1px;
  content: "";
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  // background-color: #c8c7cc;
}
.mui-table-view {
  color: #a0a1aa;
}
.pic {
  border: 1px solid #ffffff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.pic img {
  width: 100%;
  height: 100%;
}
.img img {
  width: 100%;
  height: 100%;
}
.goods {
  background-color: #f2f2f5;
}
button[data-v-68b3be6b] {
  background-color: #f2223b;
  color: #ffffff;
  border: 1px solid #f2223b;
}
.van-nav-bar__text {
  color: #f2223b;
}
.van-nav-bar .van-icon {
  color: #f2223b;
}
.van-nav-bar__left {
  left: 0;
}
.goods-name {
  color: #f2223b;
  font-size: 16px;
}
.goods-title {
  // white-space:nowrap;
  word-wrap: break-word;
  word-break: keep-all;
}
.yiShou {
  margin-left: 16px;
}
.van-col--16 {
  width: 60%;
}
// an-goods-action-big-btn {
//   background-color: red;
// }
</style>