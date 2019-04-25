<template>
  <div class="address">
    <van-nav-bar title="修改地址" left-text="返回" left-arrow/>
    <!-- <van-address-edit
  :area-list="areaList"
  show-postal
  show-delete 
  show-set-default
  show-search-result
  :search-result="searchResult"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
    />-->
    <section class="van-doc-demo-block">
      <div class="van-address-edit">
        <div class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>姓名</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input type="text" placeholder="收货人姓名" class="van-field__control" v-model="username">
            </div>
          </div>
        </div>
        <div class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>电话</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input type="tel" placeholder="收货人手机号" class="van-field__control" v-model="tel">
            </div>
          </div>
        </div>
        <div class="van-cell van-field" @click="poplist()">
          <div class="van-cell__title van-field__label">
            <span>地区</span>
          </div>

          <div class="van-cell__value">
            <div class="van-field__body">
              <!-- <span v-for="item in this.cityList" :key="item.id">{{item.name}}</span> -->
              <span>{{this.province}}</span>
              <span>{{this.city}}</span>
              <span>{{this.region}}</span>

              <!-- {{}}{{}}{{}} -->
              <!-- <input
                type="text"
                placeholder="选择省 / 市 / 区"
                readonly="readonly"
                class="van-field__control"
              >-->
            </div>
          </div>
        </div>
        <div class="van-cell van-address-edit-detail">
          <div class="van-cell__value van-cell__value--alone">
            <div class="van-cell van-field">
              <div class="van-cell__title van-field__label">
                <span>详细地址</span>
              </div>
              <div class="van-cell__value">
                <div class="van-field__body">
                  <textarea
                    rows="1"
                    maxlength="200"
                    placeholder="街道门牌、楼层房间号等信息"
                    class="van-field__control"
                    style="height: 24px;"
                    v-model="detatilAdd"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="van-cell van-field" style>
          <div class="van-cell__title van-field__label">
            <span>邮政编码</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input
                type="tel"
                maxlength="6"
                placeholder="邮政编码"
                class="van-field__control"
                v-model="postNum"
              >
            </div>
          </div>
        </div>
        <div class="van-cell van-cell--center van-cell--borderless van-switch-cell" style>
          <div class="van-cell__title">
            <span>设为默认收货地址</span>
          </div>
          <div class="van-cell__value">
            <div class="van-switch" style="font-size: 24px;">
              <div class="van-switch__node"></div>
            </div>
          </div>
        </div>
        <div class="van-address-edit__buttons" style>
          <button
            class="van-button van-button--danger van-button--normal van-button--block"
            @click="editAddress()"
            
          >
            <span class="van-button__text" >保存</span>
          </button>
          <button class="van-button van-button--default van-button--normal van-button--block">
            <span class="van-button__text">删除</span>
          </button>
        </div>
      </div>
      <van-popup v-model="show" position="bottom">
        <van-area :area-list="areaList" value="370100" @confirm="OnConfirm"/>
      </van-popup>
    </section>
  </div>
</template>
<script>
import city from "../components/city.js";
export default {
  data() {
    return {
      show: false,
      areaList: city,
      searchResult: [],
      username: "",
      tel: "",
      cityList: [],
      province: "",
      city: "",
      region: "",
      detatilAdd:'',
      postNum:'',
      list:[]
    };
  },
  created() {
    this.selAddress();
  },

  methods: {
    poplist() {
      //   alert('111')
      this.show = true;
    },
    OnConfirm: function(res) {
      // var res = res;
      // this.cityList = res;
      // this.province = this.cityList[0].name;
      // this.city = this.cityList[1].name;
      // this.region = this.cityList[2].name;
      // console.log(this.cityList)
      // console.log(this.cityList[1].name)
      // for (let i = 0; i < this.cityList.length; i++) {
      //   console.log(this.cityList[i])

      // }
    },
    async selAddress (){
        const res = await this.$http.get("/member/address/getAddressById?"+"id="+8 );
        this.list = res.data.data
         console.log(this.list)
        this.province = this.list.province
        this.city = this.list.city
        this.region = this.list.region
        this.username = this.list.name
        this.tel = this.list.phoneNumber
        this.detatilAdd = this.list.detailAddress
        this.postNum = this.list.postCode
      

    },
    async editAddress (){
      var address = {
        city: this.city,
        defaultStatus: 0,
        detailAddress: this.detatilAdd,
        id: 0,
        memberId: 14,
        name: this.username,
        phoneNumber: this.tel,
        postCode: this.postNum,
        province: this.province,
        region: this.region
      };
       const res = await this.$http.post("/member/address/update/8?",address);
       console.log(res)
    },
    //  async addAddress() {
    //   var address = {
    //     city: this.city,
    //     defaultStatus: 0,
    //     detailAddress: this.detatilAdd,
    //     id: 0,
    //     memberId: 14,
    //     name: this.username,
    //     phoneNumber: this.tel,
    //     postCode: this.postNum,
    //     province: this.province,
    //     region: this.region
    //   };
    //   const res = await this.$http.post("/member/address/add" ,address);
    //   console.log(res)
    // },
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    confirm() {},
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>
<style scoped>
</style>

