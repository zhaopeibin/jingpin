<template>
  <div class="address">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
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
        <div class="van-cell van-field">
          <div class="van-cell__title van-field__label" @click="popList()">
            <span>地区</span>
            
          </div>
          
          <!-- <div class="van-cell__value">
            <div class="van-field__body">
              <input
                type="text"
                placeholder="选择省 / 市 / 区"
                readonly="readonly"
                class="van-field__control"
              >
            </div>
          </div>-->
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
              <input type="tel" maxlength="6" placeholder="邮政编码" class="van-field__control">
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
          <button class="van-button van-button--danger van-button--normal van-button--block">
            <span class="van-button__text">保存</span>
          </button>
          <button class="van-button van-button--default van-button--normal van-button--block">
            <span class="van-button__text">删除</span>
          </button>
        </div>
      </div>
    </section>
    <van-popup v-model="show" position="top" :overlay="false">内容11111111111111111111111</van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      areaList,
      searchResult: [],
      show: false
    };
  },

  methods: {
       popList() {
      // alert('111')
      this.show = true;
    },
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
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
    },
   
  }
};
</script>
<style scoped>
</style>

