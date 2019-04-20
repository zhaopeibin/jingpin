<template>
  <div class="login">
    <van-nav-bar title="登录注册" left-text="返回" left-arrow/>

    <h3>欢迎使用指动精品</h3>

    <van-cell-group>
      <van-field
        required
        right-icon="question-o"
        v-model="telephone"
        :error-message="telephoneErrorMsg" 
        placeholder="请输入手机号"
        @click-right-icon="$toast('请输入11位纯数字不包含空格和特殊字符')"
      />

      <van-cell-group>
        <van-cell-group>
          <van-field center v-model="authCode"  :error-message="authCodeErrorMsg"  placeholder="请输入短信验证码">
            <van-button slot="button" size="small" type="primary" @click="handlesms()">获取验证码</van-button>
          </van-field>
        </van-cell-group>
      </van-cell-group>
    </van-cell-group>

    <van-button type="info" @click="handlelogin()">登录/注册</van-button>
    <div class="xieyi">
      <p>
        <span>
          <img src alt>
        </span>我已阅读并同意
        <span class="red">《指动精品商城协议》</span>
      </p>
    </div>
  </div>
</template>
<script>
// var qs=require('qs');
// var instance = axios.create({
//     headers: {'content-type': 'application/x-www-form-urlencoded'}
// });


import qs from "qs"
import md5 from "js-md5"
import { Toast } from 'vant'
export default {
  data() {
    return {
      telephone: "",
      testNum: "",
      token: "",
      username: "",
      authCode:'',
      telephoneErrorMsg:'',  //当手机号出现错误时的提示信息
      authCodeErrorMsg:'',  //当验证码出现错误时的提示信息
    };
    
  },
  created() {
    // if(sessionStorage.token) {
    //     Toast.success('您已经登录过了')
    //             this.$router.push('/')
    // }
    this.loadToken();
  },
  methods: {
    //    获取token
    async loadToken() {
      const res = await this.$http.get("/sso/getToken");
      //   console.log(res.data.code)
      if (res.data.code == 200) {
        var token = res.data.data;
        sessionStorage.setItem("token", token);
      }
    },
    // 发送验证码
    async handlesms() {
      var thistoken = sessionStorage.getItem("token");
      var thisObj = { telephone: this.telephone, token: thistoken };

      var newkey = Object.keys(thisObj).sort();
      var newObj = {};
      var signStr = "";
      //序列化Map
      for (var i = 0; i < newkey.length; i++) {
        newObj[newkey[i]] = thisObj[newkey[i]];
      }
      // console.log(newObj)
      // console.log(newkey)
      for (let item in newObj) {
        signStr += item + newObj[item];
      }
      //MD5加密
      console.log(signStr);
      signStr = md5(signStr);

      var thisObj = { telephone: this.telephone, sign: signStr };
      // thisObj.sign = md5(signStr);
      console.log(thisObj);
      var res = await this.$http.get(
        "/sso/getAuthCode?" + "telephone=" + this.telephone + "&sign=" + signStr
      );

      console.log(res);
    },
    // 登陆
    async handlelogin() {
      this.checkForm()
      var thistoken = sessionStorage.getItem("token");
      var thisObj = {username:this.telephone,password:'123456', telephone: this.telephone,authCode:this.authCode, token: thistoken };

      var newkey = Object.keys(thisObj).sort();
      var newObj = {};
      var signStr = "";
      //序列化Map
      for (var i = 0; i < newkey.length; i++) {
        newObj[newkey[i]] = thisObj[newkey[i]];
      }
      // console.log(newObj)
      // console.log(newkey)
      for (let item in newObj) {
        signStr += item + newObj[item];
      }
      //MD5加密
      console.log(signStr);
      signStr = md5(signStr);

      var thisObj = { username:this.telephone,password:'123456', telephone: this.telephone,authCode:this.authCode, sign: signStr };
      // thisObj.sign = md5(signStr);
      console.log(thisObj);
         var res = await this.$http.post("/sso/register?"+ "username=" + this.telephone +"&password="+'123456'+ "&telephone=" + this.telephone +"&authCode=" + this.authCode+"&sign=" + signStr,);
         var memberId = res.data.data;
         var str = memberId.substring(9,500);
         var str1 = str.split(',')
         var str2= str1[1]
         var str3 =str2.split('=')
         var memberId = str3[1]
         console.log(memberId)
        //  var obj ={}
         if(res.data.code == 200){
           Toast.success('登录成功')
            sessionStorage.setItem("id", memberId);
             this.$router.push({name: 'home'})
         }
        //  var authCode = res.data.data
        //  console.log(authCode)
    },
    // 表单验证
     checkForm(){
              let isOk = true
              if(this.telephone.length!=11){
                  this.telephoneErrorMsg = "请输入11位手机号"
                  isOk=false
              }else{
                  this.telephoneErrorMsg = ''
              } 
              if(this.authCode.length!=6){
                  this.authCodeErrorMsg = '请输入6位验证码'
                  isOk = false
              }else{
                  this.authCodeErrorMsg = ''
              }

              return isOk 
           } 
  }
};
</script>
<style scoped>
.login {
  margin-left: 1%;
}
.van-button {
  display: block;

  margin: 0 auto;
}
.van-button--info {
  color: #fff;
  background-color: #ff1647;
  border: 1px solid #ff1647;
  width: 80%;
  border-radius: 20px;
  margin-top: 60px;
}
.van-button--primary {
  color: #ff1647;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  font-size: 18px;
}
h3 {
  font-weight: 300;
}
.van-nav-bar .van-icon {
  color: #ff1647;
  vertical-align: middle;
}
.van-nav-bar__text {
  color: #ff1647;
}
.van-nav-bar__left {
  left: 0%;
}
.van-button__text {
  font-size: 18px;
}
.xieyi {
  display: -webkit-flex;
  -webkit-justify-content: center;
  -webkit-align-items: center;
}
.red {
  color: #ff1b4c;
}
</style>

