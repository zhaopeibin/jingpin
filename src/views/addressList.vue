<template>
  <div class="addressList">
    <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow/>
  
    <section class="van-doc-demo-block">
     
      <div class="van-address-list">
        <div class="van-radio-group">
          <div class="van-cell van-cell--clickable van-address-item">
            <div class="van-cell__value van-cell__value--alone van-address-item__value">
              <div class="van-radio">
                <div class="van-radio__icon van-radio__icon--round van-radio__icon--checked">
                  <i class="van-icon van-icon-success">
                    <!---->
                  </i>
                </div>
                <span class="van-radio__label" v-for="item in list" :key="item.id">
                  <div class="van-address-item__name">{{item.name}} &nbsp &nbsp<span>{{item.phoneNumber}}</span></div>
                  <div class="van-address-item__address">{{item.province}}{{item.city}}{{item.region}}{{item.detailAddress}}</div>
                </span>
              </div>
            </div>
            <i class="van-icon van-icon-edit van-address-item__edit" @click="onEdit()">
              <!---->
            </i>
          </div>
         
        </div>
    
      
        <button class="van-button van-button--danger van-button--large van-button--square van-address-list__add" @click="onAdd()">
          <span class="van-button__text" >新增地址</span>
        </button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chosenAddressId: "1",
      addressList: [],
      list: [],
      
    };
  },
  created() {
    this.handleAddress();
  },

  methods: {
    onAdd() {
      // alert("触发")
      this.$router.push({name: 'addAddress'});
    },

    onEdit(item, index) {
      alert('修改触发')
    },
    async handleAddress() {
      const res = await this.$http.get("/member/address/" + 14);
      this.list.push(res.data.data)
      console.log(this.list);
    }
  }
};
</script>
<style scoped>
</style>


