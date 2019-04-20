<template>
<section class="aui-flexView">
            <header class="aui-navBar aui-navBar-fixed">
                <a href="javascript:;" class="aui-navBar-item">
                    <i class="icon icon-return"></i>
                </a>
                <div class="aui-center">
                    <span class="aui-center-title">订单详情</span>
                </div>
                <a href="javascript:;" class="aui-navBar-item">
                    <i class="icon icon-share"></i>
                </a>
            </header>
            <section class="aui-scrollView"  >
                <div class="aui-order-list">
                    <!-- <div class="aui-order-complete">
                        <i class="icon icon-complete"></i>
                        完成
                    
                    </div> -->
                    <div class="aui-order-process">
                        <div class="aui-order-process-hd">
                            <i class="icon icon-car"></i>
                            点击查看物流信息!
                        </div>
                        
                        <div class="aui-order-process-bd"></div>
                    </div>
                     <div class="aui-order-process1">
                        <div class="aui-order-process-hd">
                            <i class="icon icon-car"></i>
                            <span>{{this.receiverProvince}}</span><span>{{this.receiverCity}}</span><span>{{this.receiverRegion}}</span><span>{{this.receiverDetailAddress}}</span>
                        </div>
                        
                        <div class="aui-order-process-bd"></div>
                    </div>
                    
                </div>
                <!-- <div class="aui-palace clearfix">
                    <a href="javascript:;" class="aui-palace-grid">
                        <div class="aui-palace-grid-icon">
                            <img src="../assets/images/common/icon-item-001.png" alt="">
                        </div>
                        <div class="aui-palace-grid-text">
                            <h2>电脑发烧友</h2>
                        </div>
                    </a>
                    <a href="javascript:;" class="aui-palace-grid">
                        <div class="aui-palace-grid-icon">
                            <img src="../assets/images/common/icon-item-002.png" alt="">
                        </div>
                        <div class="aui-palace-grid-text">
                            <h2>手机数码</h2>
                        </div>
                    </a>
                    <a href="javascript:;" class="aui-palace-grid">
                        <div class="aui-palace-grid-icon">
                            <img src="../assets/images/common/icon-item-003.png" alt="">
                        </div>
                        <div class="aui-palace-grid-text">
                            <h2>潮流电子</h2>
                        </div>
                    </a>
                </div> -->
                <div class="divHeight"></div>
                <div class="aui-order-shop ">
                    <!-- <div class="aui-order-shop-hd">
                        <i class="icon icon-shop"></i>
                        嘻哈杂货铺
                    
                    </div> -->
                </div>
                <div class="aui-order-product" >
                    <div class="aui-order-product-hd"  v-for="item in itemList" :key="item.id">
                        <img :src=item.productPic alt="">
                    </div>
                    <div class="aui-order-product-bd">
                        <h2>{{this.promotionInfo}}</h2>
                        <!-- <p>数量:1 颜色:85W老款弯头18.5 4.6 A </p> -->
                        <div class="aui-order-text" v-for="item in itemList" :key="item.id">
                            <span class="aui-order-text-hd">￥{{item.giftGrowth}}
                            </span>
                            <span class="aui-order-text-bd">
                                <em>申请售后</em>
                                <!-- <em>加入购物车</em> -->
                            </span>
                        </div>
                    </div>
                </div>
                <div class="aui-order-service">
                    <div class="aui-order-service-hd">
                        <i class="icon icon-service"></i>
                        联系客服
                    
                    </div>
                </div>
                <div class="divHeight"></div>
                <div class="aui-order-service">
                    <div class="">发票类型:
                    </div>
                    <div class="">不开发票</div>
                </div>
                <div class="divHeight"></div>

                <div class="delist"  v-for="item in itemList" :key="item.id">
                <div class="aui-fk-list">
                    <div class="aui-fk-list-hd">
                        订单编号: <em>{{item.orderSn}}</em>
                    </div>
                    <div class="aui-fk-list-bd">
                        实付款: <em>￥{{item.giftGrowth}}</em>
                    </div>
                </div>
                <div class="aui-show-box">
                    <a href="javascript:;">
                        <div>下单时间:{{createTime | fmtDate}}</div>
                    </a>
                    <a href="javascript:;">
                        <div>支付方式:在线支付</div>
                     
                    </a>
                    <a href="javascript:;">
                        <div>配送方式:商城物流</div>
                        <div>工作日、双休与节假日均可送货</div>
                    </a>
                    <div class="divHeight"></div>
                    <!-- <a href="javascript:;">
                        <div>李嘉桦 185****8888</div>
                        <div>地址:北京市海淀区西三环北路43号首享科技</div>
                    </a> -->
                    <div class="divHeight"></div>
                    <!-- <div class="aui-order-up">
                        <div class="aui-order-up-flex">
                            <div class="aui-order-up-flex-hd">商品总额</div>
                            <div class="aui-order-up-flex-bd">￥199.20</div>
                        </div>
                        <div class="aui-order-up-flex">
                            <div class="aui-order-up-flex-hd">立减</div>
                            <div class="aui-order-up-flex-bd">-￥10.00</div>
                        </div>
                        <div class="aui-order-up-flex">
                            <div class="aui-order-up-flex-hd">运费</div>
                            <div class="aui-order-up-flex-bd">+￥0.00</div>
                        </div>
                    </div> -->
                </div>
              </div>
                
                
            </section>
            <!-- <footer class="aui-footer aui-footer-fixed">
                <a href="javascript:;" class="aui-tabBar-item aui-tabBar-item-active">
                    <span class="aui-tabBar-item-text">删除订单</span>
                </a>
                <a href="javascript:;" class="aui-tabBar-item ">
                    <span class="aui-tabBar-item-text">申请售后</span>
                </a>
                <a href="javascript:;" class="aui-tabBar-item ">
                    <span class="aui-tabBar-item-text">再次购买</span>
                </a>
                <a href="javascript:;" class="aui-tabBar-item ">
                    <span class="aui-tabBar-item-text">评价晒单</span>
                </a>
            </footer> -->
        </section>
</template>
<script>
export default {
    data () {
        return {
            list:[],
            promotionInfo:'',
            itemList:[],
            createTime:'',
            receiverProvince:'',
            receiverCity:'',
            receiverRegion:'',
            receiverDetailAddress:''
        }
    },
    created(){
        this.handleDeta()
    },
    methods:{
            async handleDeta(){
            // const id = sessionStorage.getItem('id')
            const res = await this.$http.get("/order/getOrderById?"+"orderId="+18);
            console.log(res)
            this.list = res.data.data;
            this.promotionInfo = this.list.promotionInfo
            this.createTime = this.list.createTime
            this.receiverProvince = this.list.receiverProvince
            this.receiverCity = this.list.receiverCity
            this.receiverRegion = this.list.receiverRegion
            this.receiverDetailAddress = this.list.receiverDetailAddress
            this.itemList = this.list.orderItem.orderItems

            // console.log(this.createTime)
            
    }
    }
}
</script>

<style scoped>

html,body {
    color: #333;
    margin: 0;
    height: 100%;
    font-family: "Myriad Set Pro","Helvetica Neue",Helvetica,Arial,Verdana,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: normal;
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: #000;
}

a, label, button, input, select {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

img {
    border: 0;
}

body {
    background: #fff;
    color: #666;
}

html, body, div, dl, dt, dd, ol, ul, li, h1, h2, h3, h4, h5, h6, p, blockquote, pre, button, fieldset, form, input, legend, textarea, th, td {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
    color: #08acee;
}

button {
    outline: 0;
}

img {
    border: 0;
}

button,input,optgroup,select,textarea {
    margin: 0;
    font: inherit;
    color: inherit;
    outline: none;
}

li {
    list-style: none;
}

a {
    color: #666;
}

.clearfix::after {
    clear: both;
    content: ".";
    display: block;
    height: 0;
    visibility: hidden;
}

.clearfix {
}

/* 必要布局样式css */
.aui-flexView {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.aui-scrollView {
    width: 100%;
    height: 100%;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    position: relative;
    margin-top: 0;
    margin-bottom: 60px;
}

.aui-navBar {
    height: 44px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    z-index: 1002;
    background: #ffffff;
}

.aui-navBar:after {
    content: '';
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #e2e2e2;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
}

.aui-navBar-item {
    height: 44px;
    min-width: 25%;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 25%;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    padding: 0 0.9rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 0.7rem;
    white-space: nowrap;
    overflow: hidden;
    color: #a0a0a0;
    position: relative;
}

.aui-navBar-item:first-child {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
    margin-right: -25%;
    font-size: 0.9rem;
    font-weight: bold;
}

.aui-navBar-item:last-child {
    -webkit-box-ordinal-group: 4;
    -webkit-order: 3;
    -ms-flex-order: 3;
    order: 3;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}

.aui-center {
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    -ms-flex-order: 2;
    order: 2;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 44px;
    width: 50%;
    margin-left: 25%;
}

.aui-center-title {
    text-align: center;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
    font-size: 0.95rem;
    color: #333;
}

.icon {
    width: 20px;
    height: 20px;
    display: block;
    border: none;
    float: left;
    background-size: 20px;
    background-repeat: no-repeat;
}

.icon-return {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAEf0lEQVRoQ92bz4scVRDHq97MotngEHZgDssqG5jAsofZfq8FA8ZfuCARZBEMgqKHkIsomvgHaPIHyOaiJ8lBiYoRRERCQKOJOeyla2YbDCseBFk8DAiL4EbZ3imp2B06z56V6e6ZbV/fBrpe12fqvdevvlWN8D+55ufn752ZmXkHEZ8HgE8B4I0gCHZGdR9HNdiP+zudzsF6vX4ZER9JPf/VIAjeG9WfygO32+1Go9G4ioh+Go6ZV4noTaeAFxYWmtPT0wLbscD+3NnZ8cIw/NEZYK31LCJ+h4hHLKhbzPwUEX0/KqzcX8kp3el0Dk9NTV0DgPstqN9j2LU8sJUE1lovIuK3iNiy1uwWADxGRGFe2MoBG2NkrV5DxEMWbJ+Zn+h2uzeLwFYK2BhzFBGvAEDDgv01iqJjYRj+XBS2MsBa6yeVUl8CwAELSiAfD4LglzJgKwHsed5KrVa7BABTVmR/iiPbLwt234F93z/BzJ8gorJgb25vbz+6sbHxW5mw+wqstT6JiO8j4l2vRmYOBoPBcq/Xk1259Gtf3sPGmNOIuGrTMPNaFEXLYRj+UTppPODEgbXW55RSb2XAftPv95/Z3Ny8NS7YiU9p3/clu3klA1YyoZU86d6of86kIozGGFmvJzMcvBQEwQsAEI3qfJ77JwFc933/IwA4kRHZi0T0EgBwHufz2IwVuN1u39NoND5HxOMZsBeI6NQkYce6hufm5g60Wq0rlkpxm5uZzxPRmTwRKmozlgjHKoXAHs2I7FkiOlfU8bz2pQPvoVJIZM8Q0fm8zpZhVyrwMJWC/7lOdbvdC2U4XWSM0oB9338AAG7YKgUzDwDgZSK6WMTRsmxLAfY874hSSvSnWcuxaHd397ler/dFWQ4XHacwsKgUiHgVAJppZ5j5L2Z+ttvtXi7qZJn2hYCHqRQAUEhZLBPQHis38DCVgpkl01kmotzKYuWAl5aWjtVqtesZuazksAIbjNPpImPnirAxZg0RH7IevDUYDB4uQ1ksAvRftrmAfd//CgCeTgZnvn3232JmN4Hj05Qoivcl0KLUMLObU1og9zhVubdpJVGNIy2b16K1dtx7LSWAnucdUkp9nVG/de/gkUDHFXqBttNB946WCfSwhN/J5CGBHibpOJkepjYtEe0+A4AV+xDgnACQAlTGmA8Q8cUMaLcknhTgUC3aOREvHVVjzCoins6ItFsyrQV9FhHfzoB2S4i3oDMrhgDgXKnlDvceNWHniml3oI0xsnN/mCEeuFcuTail1QEApMBWT097JwviCaDW+rhSSuRbu5nFvZaHFHRmuxIzu9fUkkCL1AsAkmkdtKa3e21LKWjphRbou1oOAcC9xrTU9F5USl3PqGC413qYUk+kRnUjo5PWvebSlHqS2SsdK6JutQ+npvesRBoADlvnb/caxFORbtXrdWkUL1URzVV5sLOecf2OFVFpGP/XRx5RFD24vr7+w6jPrjSwwAxrkHHyM569FFFmfo2I3nUuwgmQfIrXbDZXmVk+xfuYiF4HgN1Rgf8GpVQ8W05O+xAAAAAASUVORK5CYII=');
}

.aui-order-list {
    background-image: url("../assets/images/common/组13.png");
    background-size: cover;
    height: 12rem;
    position: relative;
    margin-bottom: 30px;
    /* margin-top: 44px; */
}

.icon-complete {
    margin-right: 5px;
    background-size: 19px;
    height: 19px;
    background-image: url('data:image/png;base64,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');
}

.aui-order-complete {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    color: #fff;
    padding: 30px 15px;
    font-size: 0.99rem;
}

.aui-order-process {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    color: #fff;
    padding: 5%;
    font-size: 0.85rem;
    background: #fff;
    box-shadow: 0 3px 4px #ddd;
    border-radius: 5px;
    margin: 0 15px;
    position: absolute;
    width: 92%;
    bottom: -10px;
    height:80px;
    margin: -topZCVasS
}
.aui-order-process1 {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    color: #fff;
    padding: 5%;
    font-size: 0.85rem;
    background: #fff;
    box-shadow: 0 3px 4px #ddd;
    border-radius: 5px;
    margin: 0 15px;
    position: absolute;
    width: 92%;
    bottom: -60px;
    height:80px;
}

.aui-order-process-hd {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
    color: #333;
}

.aui-order-process-bd {
    text-align: right;
    color: #808080;
    padding-right: 13px;
    position: relative
}

.aui-order-process-bd:after {
    content: " ";
    display: inline-block;
    height: 6px;
    width: 6px;
    border-width: 2px 2px 0 0;
    border-color: #2e2d2d;
    border-style: solid;
    -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    margin-top: -4px;
    right: 2px;
    border-radius: 2px;
}

.icon-car {
    background-image: url('data:image/png;base64,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');
    margin-right: 5px;
}

.icon-share {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAEt0lEQVRoQ+2bX2gcRRjAv2/2cuESkYCQWKHVoq0+KP4JWJOinCS529lrLbQGCkqlVgy24JsIeREE8U1QLFTtg1VEaXwxkplzITXUlmCqBBGKNoU8KD4oakCSa2N2PplzI5vt3e1lk9zerrdvdzPfzPeb75uZb2e/QfifPViLt1Ao3EtE9xHRTkRM1zM2RLTkOM5J27YX66lfrU5vb29bT0/PkwBw93rbISIHAL5fXl7+anJy8nev/A3AuVyuM5VKHSei44h4x3o70/WJSEgpC2FkXRnGOb+IiI9soI2yKBF9yhh7fmJi4k/9ew1wLpfbbhjG+bCgXuU6Ozvbx8bGlsMozDnfi4gXwshWkZkjor1Syt/+Ax4YGOhJp9OXEHH7Rjsioj+klLeEbadQKPQT0cWw8lXkJoQQ+8rAw8PDxuLi4rcAcP9GOyGia0R0pFgsjoVty9XnPAD0h22jity2MrBlWS8CwJsVKs0opc4wxuaUUn8Hdc4YU6lUanZ8fPyvoLpB5XrR6u7u1pauubCutoOIRxDxaK12lVIHy41xzucrzNvTS0tLL0xNTa0EKRd1Oef8KQD4EBFrDg4RjWA+n7/LMIw5r9JENFsqlR5OEqy7Yo+gZVn7AOBzn5VGhRCvR225oP6rWZaIriPiWwDwks+QZeDnAOA9b4FS6kCxWBwP6jDK8lqwellyAyVZCXgEAE75gM1isfhFlEC1+g6ClVKesyzLBID4A9cD6+488QeuFzYRwOuBjT3wemFjDRwGNrbAYWFjCVwjXFwmIq63nlpbV6y2Jc65Puk4WyE21u/XB4QQxaAYITbAGhYRPwEAwwdVN2xsXHqzYDVwPp9/yDAM/Y7vfXI6lm6K0HIzYV1C5JyfQ8Ss+/t9IcTRpgDeAtgyYzabTXV0dPSvrKz8ZNv2vP4vcuCtgq22qEUK3GjYSC0cBWxkwNVgiWgFEffXs88G7cNN49KmaR5kjJ3177MalogObfVJS0PnMOf8ZgD4BRE7fUcvDYFtuEtblvUAAMxGBdtwYM55OyL+CAC3684b5cbeAW6oS7sh3zbG2MuI2A0Abwghvgm7AIWRazhwGCU3U6YFrEdTKdXU59IbsXjLwkmysJvRMAoA9yDiu0KIjxNr4b6+vkxXV9dVRLzNnQKKiHYnFtg0zSxj7EvvfFdKHUoscJVDvMMt4KQsWi0L/xu7t1y6vKglIdJquXTLpT07dKJd2jTNY4yx076IpOnTloLemEzTfIIx9pnvOGlYf3/Zj4hrcrKI6FUp5StBjTZzOed8FBFf8+roOM5jODQ0tKutre2KbyR+XlhY2D09PV1qZqhquulvSplMZgYRH1ytQzpN3nFuXc2m1cC7fNAflEqlY3HIt/Tq7cK+g4jP+gZkRgixZxX4BAC8XWHEviaiM4h4tZ704Si9wU01vBMRnwGAPX5diOhpKeVH3gRxfXqoz40T9xDRBSnloxpszRWA9vb2GQDYkTDiK/qySMVLHoODgzvS6fQUAOxMAjQRXXYc53Hbtn9d5bkhgzybzd6UyWROIKJOhYgruE54P0lEp6SU173G2/SLWlF5hlLqGiLOO47znW3bP1TTo64LFFFBbEW//wAqnbNN7yV2HQAAAABJRU5ErkJggg==');
}

.aui-palace {
    padding: 0;
    position: relative;
    overflow: hidden;
    /* margin-bottom: 15px; */
}

.aui-palace-grid {
    position: relative;
    float: left;
    padding: 15px 1px 15px 1px;
    width: 33.333333%;
    box-sizing: border-box;
}

.aui-palace-grid-icon {
    width: 50px;
    height: 50px;
    margin: 0 auto;
}

.aui-palace-grid-icon img {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
}

.aui-palace-grid-text {
    display: block;
    text-align: center;
    color: #333333;
    font-size: 13px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.aui-palace-grid-text h2 {
    font-size: 0.7rem;
    font-weight: normal;
}

.divHeight {
    /* background: #f6f6f6; */
    height: 40px;
    width: 100%;
    position: relative;
    overflow: hidden;
}

.aui-footer {
    width: 100%;
    position: relative;
    z-index: 100;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 12px 5px 12px 5px;
    background-color: #ffffff;
    /* box-shadow: 0 -1px 9px #ddd; */
}

.aui-footer:after {
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    /* border-top: 1px solid #D9D9D9; */
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
}

.aui-tabBar-item {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #979797;
}

.aui-tabBar-item-text {
    display: inline-block;
    font-size: 0.65rem;
    color: #252529;
    border: 1px solid #2e2d2d;
    border-radius: 20px;
    padding: 0.35rem 0.6rem;
}

.aui-tabBar-item-active .aui-tabBar-item-text {
    color: #000000;
    border: none;
}

.icon-home {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUVGNjY3MDQ5QUYzMTFFODhBQzVENjUyOTdDNDdGQTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUVGNjY3MDU5QUYzMTFFODhBQzVENjUyOTdDNDdGQTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRUY2NjcwMjlBRjMxMUU4OEFDNUQ2NTI5N0M0N0ZBMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxRUY2NjcwMzlBRjMxMUU4OEFDNUQ2NTI5N0M0N0ZBMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PskBAWIAAAOrSURBVHja7JxLSzJRGMfH7hhKhFBpi8LLojYFtijCSrss6iO07kO59iPkprSLRC0SdPO2KKUW3YyIKIouWu//deAl9Mx4ZpyrPc9CZM6x8/zmPFfOIcf397fwm6RN+GVCwARMwARMwATMkD9VMX7dDuOXrFQqmUzm7OwM3+/u7iKRSHt7u2GrOwyutJ6fn7e3t+/v7/8/8Xg8S0tLLperBYEvLy93dnbe3t5qnvf09ESj0eHh4ZYCzufzx8fHUss5HI6pqamJiYlWAP78/Nzd3b24uGg4c2RkZGFhobOz08bAj4+PW1tb+OSc39fXt7y8jE9bAp+fn+/v7398fDDyYdu/jPj19VU/1NXVNTc3Nzo6aidg/Fl4LPyWOep0OhcXF/EllUq9vr4y58Cf4dXwbRsAv7+/p9NpxGTm6MDAAPIQmPEdtMhSpVKJORNxOxaLdXd3WxoYORYMyLfM0bGxsZmZGdGeRYFVHx4enpycMOcjP+PtIFdbFPj09PTg4KBcLjNquo6O2dnZUCik7Q9NA8ZGHR0dSZXHPBslbxrj4+PT09M/TcNMYLgiws/t7W2Trijv/IODgwh1ovObCQxODYMtT3gHuWnAsGFYMjOdomCan59Xl06RwPf29lCiMRM4bBsWbjTwzy5Pj4JJvkQLBoPq+kqVwPVdnh4lsXwRrq6vVAMs1eWJTU84HJ6cnNQw1eVyuWw2y9RTRV+pGFimy9OvrZV/xYr6SgXAehiY8U7EC6xTCDE+THIB65cktE2EPH1lA2C9ywDjS50GwAgVhUJBanR9fb3JQq+ZYjaRSEiNBgIBhE/mkFwtfnV1JUMr7rBgksgvDbWhvGLgh4cHwbYipbwccH9/v32BpZSXA/b5fMg3dqSF2lCeOdTgbAnZPBQKwTzwwpLJpMU5V1dXRVWlaAWewzRfVWyxsTyq0vkwAbeYmHAgHo/Ha55sbGzQDhMwARMwARMwARMwARMw1dINxcjKmXaYgAmYgAmYgAnYpsD1FwqkTmgNkPqlOS8NKQDu7e2teSJ1+8AAqV+6Xr1mS8uhoaGaOx7ZbFaonlwZeVCMvQWtuHSNejw/V3CL5/r6enNz07LOuba25vV6tTRpb1WsScuvm7IoHYlEtL2Qr4lAJSimS1pyu90rKyuWYoYyUAmKcc5Xc9fy6ekpk8nApa1gydhbflqhmevDAC4Wizc3Ny8vL8w7azoJ8i0yEGKy3+9XEVMc9H88CJiACZiACZiATZO/AgwALtglWLw7NfgAAAAASUVORK5CYII=');
}

.icon-loan {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTA0MUZCRTI5QUU1MTFFODhBQzVENjUyOTdDNDdGQTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTA0MUZCRTM5QUU1MTFFODhBQzVENjUyOTdDNDdGQTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MDQxRkJFMDlBRTUxMUU4OEFDNUQ2NTI5N0M0N0ZBMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MDQxRkJFMTlBRTUxMUU4OEFDNUQ2NTI5N0M0N0ZBMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkboQ58AAAGFSURBVHja7NyxjYMwGIZhOOHGnWsvcGu4ZgoahqLJKKyRBajpaEDirJyUAiTbYLizlfcrI0T+RyaG/BjKdV2LT8pX8WEBDBgwYMCAAQMGDPiiVOGbPl8Zx3Ge56QMQgil1Pcr3o3LkH9L0zT1fT8MQ+Kjp7U2xkgpYw/pLLQ2tkhbauxv2B7GWWjfZltwLDivaSkWbGepvMDugv2z9H5Obts2pqCu627dofskwoUHYMCAAQMGDBgw4IvibwA8Ho/UWhzuCCGapjk/wkqpvMbQXbAfHNIoSirugoPAWutctLbUWLCNMSYL828T74JZWkpZ13VVVSlrbXm2SHfLsjjUl16WZfPJuU7FVR2PzX725XEeBgwYMGDAgAEDBnzrJffff2XkvUJGGDBgwIABAwYMGDBgwIABAwbsy4GOhxBis9hjfx/wH2PLu3iEE1/sEVjeAXDiiz0CyzsGTnbhg3dpx8lJK83FHiFLO94pT7zHI5Fn8g49gRcF5jwMGDBgwIBvyo8AAwDWcX+WB+EKbAAAAABJRU5ErkJggg==');
}

.icon-credit {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlCOTVFQTE5QUU3MTFFODhBQzVENjUyOTdDNDdGQTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDlCOTVFQTI5QUU3MTFFODhBQzVENjUyOTdDNDdGQTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MDQxRkJFNDlBRTUxMUU4OEFDNUQ2NTI5N0M0N0ZBMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0OUI5NUVBMDlBRTcxMUU4OEFDNUQ2NTI5N0M0N0ZBMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkUqPt4AAANfSURBVHja7JvLaupAGIBNYqvWKsGoC6EbF14oFBfShRtXBcEX8Nl8AcGNK/sMUkpRly7UlUKtGrzX6/k5i0OOaewkTpJxnH/5m4x8+e+TDHc4HBzXJLzjyoQBM2AGzIAZMMni1Pphv9+/v7+3Wq3FYvFPyXGcz+eTJOnx8TESiVwiMKfVeLy9vdXr9RN3xmKxbDYLj4ASlwbbnr4TLoCHcl0x3Gg0RqMRJcDgsSj3d7tdSoDT6XQqlbq7uzt9f6/XoyRp/SiyLJfLZaXG7/cXCgVqY1htcGXRohD49vbW6fyvdG+32/V6TUPjccLIk8lEqZnP5/AgUPoWU0UQBGiKEolEPB53uVzYypLX60XxaqCFvsVKh9/tdpBiarVaqVQaDAbYgBHD+Ne+xTyBEHt9fQV4s4DBpUkL1O/v74+PD0tdGrFvMU86nc5qtbLOpRH7FlND+se212kSMM/zz3/FMsJKpXIiV5luYYsFqqDantAFUgs8HA7Bh5Uaj8dzf3+PAZjMZkvtzKFQCNs8TGBl+vz8PNKEw2FswIiViWYL2wu82WzUfRXNwF9fX0dTPUwRbreb2hhWB7CWeSmJYXUAa2UsSlwaPWPRAAwTwnQ6VWo4jgsGg9QCqwNYFMWbmxucwEQ1W7r82WH4zQM5RtaVsXAC21WZLLIwIZVpNpstl0ulRhAESZKodWl1xgJanuepdWm9/nzxFrYOmJAY1puiL9vC4/EYBkOlBvoN6DqoBTbgz8aBSWi2LAUmwci6xuCLB/5xI/rXjIUZ2MpSjL4RjQ3Y3spkLIAv2KWNBfAFu7RhCzsN/6U6YNrtdrFYtGvrAyVjnWVh+IOjUmyjwJCktRGNDRgmz4eHB0KAE4kE4pVnfVyayWQQn6upEgwG4/G4FcBQmV5eXtT1yUoJBAK5XA49uLjzT6bByFKv1/v9PjQDR+OLeQKeBajRaDSZTOr6SJ1jR/EYMANmwAyYYMHWG0K2bzab0E7LsiyKIhSMp6cnLKea8K6MpyzBItVq9ejARyQSyefzZzJjXxmPS4MF1MdbQAN60lbGAwz+pktv48p4gLU+P9fS27gyHmCt/f5f3wNYvzIeYMicuvQ2rowHGOqE+jgxaEBP2srYpqXrqsOstWTADJgBM2Bz5I8AAwBCDgWKxsI1XgAAAABJRU5ErkJggg==');
}

.icon-me {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODVFRjYyQjc5QUY2MTFFODhBQzVENjUyOTdDNDdGQTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODVFRjYyQjg5QUY2MTFFODhBQzVENjUyOTdDNDdGQTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRUY2NjcwNjlBRjMxMUU4OEFDNUQ2NTI5N0M0N0ZBMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4NUVGNjJCNjlBRjYxMUU4OEFDNUQ2NTI5N0M0N0ZBMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po6qX0wAAAq4SURBVHja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');
}

.aui-footer-fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 49;
}

.aui-footer:after {
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-top: 1px solid #B2B2B2;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}

.aui-order-shop {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    color: #fff;
    font-size: 0.85rem;
    background: #fff;
    border-radius: 5px;
    position: relative;
    padding: 15px;
    width: 100%;
}

.icon-shop {
    margin-right: 10px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAHlUlEQVRoQ+1afYxcVRU/5+5Mp91VlgLSaKjln6IQPqwkKKLQxKQ6lp137y6bAAlQU79qaoOGVKFKRC1EidGmisQUlI+IYemcMzPQ5Q9KNgWhqWlQpPETlWYrWDSyjZaZ3XnvmNvMjHfevjfzZkmnUzv3v52955zf7557z7nn3Idwig08xfhCn/D/u8c78vD4+PiA7/vniMhyEUn1wuIEQRAcOXJk39TUVDkJnkSE165du3TRokVfBoDPAcBwEsXdnCMib4jI3YVC4S4AkFa22xI2xpwpInsQ8YJukliILRF5gJnXvVXCjwPA2oUAOBEyiHh1Pp9/Is52Sw97nvcRpdSekPCsiLyAiInOzHEmfToAXBKy8UsiumxBhLXWhIjaEf51uVy+cnJy8shxJpJYved5I0qpoisQBMHFhULhN1FKYj3sed5ypdRfAUDVBYMgGC0UCpQYTZcmaq2fQ8TLHXP3EtGGjghrrb+NiJsdoWkiWgEAQZd4JDajtV6HiD+pC4jIfyqVypmTk5OVsJJID2ez2UwmkzmMiKc5ApuJ6O7EKLo40eJdvHjx30Mpcz0R3Z+IsNZ6PSLucFasUqlUzu6lsxsmorXejogbnd/3EpG7zY/9K9LDWusDbt4VkR8z82e76LSOTRljLgSApkCllDpv586df3SVzSMck4ouIKLfdoyiywLh4CUi25l5U0vCxphHAWDcmfQ0EX20y9gXZC4cvABgplwuL3ODV5OHc7ncsoGBgb+5qQgANBEVFoSgy0JRwUtEbmDmh+tQmggbY74FAFvapCLM5XKXKqXe1mU+DXOIKNVq9UCpVPpHu+AlIs8w85XzCNdWx3r3DCc638LM363/nc1m35HJZPYj4vITRdaxa+8DtxPRVhfL2NjYyiAI/uD+5gavhoe11tch4s8cskcrlco73VSktd6IiNt7gOwxCCLyT2Y+K8LLTTevIAhs6XjsEtUgbIx5AABudIR3ENGnXWWe531MKfVkDxHex8wfCOMxxtwEAD91nPcCM7+/ibDW+neI+B5nkmFmjlBmF8EDgBN2hkXEFvkvBUGwrVgs/imMcWRk5KxUKvW6+3u5XB62u9Xd0jPuVbJara4olUoHe8WbneLQWh9CxHfV5Xzff2+xWPy9SzhAxMbfdnI+n3+1U0O9Mt8YYwPXSmfHrmLmX7mEX0dENwB8iIie7xUCneIwxlQBYKCRjhDPzefzr7hBawoArnJW5IvM/P1ODK1evTo1PDz8GUQ8GxHnUqnUtomJiX93omNkZGRwYGDgSwDwYQCYnp2d/equXbte60TH6OjoB0XEddabRDQYDlrfQMSvOYRfZma7JVp2AV0gxph7AaBRZFijzGyBJ66hjTFNPTTbTqpH2KSkjTGTAPBxZ/4TRHR1E2HP8y5SSr3oKhWRbcx8cxJDtVV91t1GNbnY7kNYb1S7xs4Rka8z8x1JcGitNyDiPSEejYwTvlraO3MuNPmedDq9aWJiwo8zaIw5X0SecqNiSMf9vu9/oVQqHY3TobW+DBF3x6U7e3mYnp7esn///rkWOEYB4BEAWOTMaerUNBEeHR1dEQSBrYWHQkr3iMjWdDq92yWezWZPy2Qym2pHwTUyD5OIvIyIWw8ePPiwC7rW5L9FRDYjYrvXjAM1HI+6OIwxl4jIp0INAIvB933/qmKx+ItG8AojM8bYVbIlYiPCOee6goh/AQDbTrHj0hiPPCsiV7hpLqTjzwBwuPabbakuCeMQkUlEzMZ4800AsDoqIrISEd8eM28jEf3Q/V9kx8PzvE8opXYCwOIk5yY057FUKnVttVq9VkQeiiLdRqcNcJ8koge11jcj4vcWgMGe+7uY+bawbGybVmv9PgAoIOK7kxgUEdshvCOdTn+nvt201tZDO+LOdoTeF33fv6FYLDaCZ62o+YFbxbXBc1hEPs/M1mHzRsuXB3u+bMACAJtbG9e0kJYZAJiwZ4uZbR+7adTyqq1UbkLEcyMw2O1p08jPiciCnJfCtNb2heFWRLweAM6JIbw3CIL7ZmdnH4pqz8ae4Shl9kKxdOnSK0TEkl4mIhlEPCQir8zMzDw/NTVlbzVtRy6Xu1gpVa+3j1ar1UNLlix5rVUGCCvN5XKrlFKNF0xErIrIS8z8RlsAcV3LJIIn65xWZ9g+Vdjm3W5m/lGvEzTGjIvINxExEJHbokpbyyGuLz2GiI85JMeIKN/LpLXW/0JEe9btOExEyxIHLa31nYh4qyNwJxG5zb2e4r5mzZqhoaGhpiIllUqlomJDpIeNMfbTga/UWcXltF5h3ScMAH0P17Zjf0vbheif4ZiLeD9onaAV6EfpfpT+39brR+lalL7dFvPOTesRZra1aE8OY4ztp9u+en3MEVFkjy2uxXONUmrCISyI+BwAJKp7u7kqImI/nLvcbQCGH8FdPJGEbdQbHBx8tUVzrJucFmJrHRHZ5995I7YeNsbYb6N7vg6O4ERENBb3YtKyp6W11rUX/7g+0kJW/7jIiIj9XGMLMzcewjvycH2y/ex/bm7OdjDjer/HhUAnSu1HLuVyeW+r5l1dX9sv4jsxfDLM7RM+Gbz0VjCech7+L6xvlWo5PW4xAAAAAElFTkSuQmCC');
}

.aui-order-shop-hd {
    color: #333;
    font-size: 0.85rem;
    position: relative;
    padding-right: 15px;
}

.aui-order-shop-hd:after {
    content: " ";
    display: inline-block;
    height: 6px;
    width: 6px;
    border-width: 2px 2px 0 0;
    border-color: #2e2d2d;
    border-style: solid;
    -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    margin-top: -4px;
    right: 2px;
    border-radius: 2px;
}

.aui-order-shop:after {
    content: '';
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #dedede;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
}

.aui-order-product {
    padding: 15px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.aui-order-product:after {
    content: '';
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #dedede;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
}

.aui-order-product-hd {
    margin-right: .8em;
    width: 70px;
    height: 70px;
    line-height: 70px;
    text-align: center;
}

.aui-order-product-hd img {
    width: 100%;
    max-height: 100%;
    vertical-align: top;
    border-radius: 5px;
}

.aui-order-product-bd {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
}

.aui-order-product-bd h2 {
    font-weight: 400;
    font-size: 0.9rem;
    color: #333;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    word-wrap: break-word;
    word-break: break-all;
    padding-bottom: 0.4rem;
}

.aui-order-product-bd p {
    color: #808080;
    font-size: 0.8rem;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}

.aui-order-text {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding-top: 0.5rem;
}

.aui-order-text-hd {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
    font-size: 0.8rem;
    color: #333;
}

.aui-order-text-bd em {
    font-style: normal;
    display: inline-block;
    font-size: 0.65rem;
    color: #252529;
    border: 1px solid #a9a9a9;
    border-radius: 20px;
    padding: 0.2rem 0.5rem;
}

.aui-order-service {
    padding: 15px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    color: #333;
    font-size: 0.8rem;
}

.aui-order-service:after {
    content: '';
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #dedede;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
}

.icon-service {
    /* background-image: url('data:image/png;base64,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'); */
    position: absolute;
    top: 0;
    left: 0;
}

.aui-order-service-hd {
    min-width: 0;
    font-size: 0.8rem;
    color: #333;
    text-align: center;
    width: 100px;
    margin: 0 auto;
    position: relative;
}

.aui-fk-list {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 15px;
    position: relative;
    font-size: 0.8rem;
    color: #333;
    margin-bottom: 15px;
}

.aui-fk-list-hd {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
}

.aui-fk-list-hd em {
    font-style: normal;
}

.aui-fk-list-bd em {
    font-style: normal;
    color: #f93824;
}

.aui-show-box {
    /* padding-top: 0.8rem; */
    /* display: none; */
    width: 100%;
    font-size: 0.8rem;
}

.aui-show-box p {
    color: #333333;
    font-size: 0.85rem;
    padding-bottom: 0.2rem;
    line-height: 1.5;
}

.aui-show-button {
    width: 120px;
    /* height: 20px; */
    margin: 0 auto;
    position: relative;
    font-style: normal;
    /* display: inline-block; */
    font-size: 0.65rem;
    color: #252529;
    border: 1px solid #a9a9a9;
    border-radius: 20px;
    padding: 0.2rem 0.5rem;
    text-align: center;
}

.aui-show-button a {
    display: block;
    width: 80px;
    /* height: 20px; */
    /* margin-top: 10px; */
}

.aui-show-button span {
    display: block;
    margin: 0 auto;
    position: relative;
    font-size: 0.8rem;
}

.fa-angle-right {
    background-size: 15px;
    position: absolute;
    top: 1px;
    right: 5px;
    /* background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAADDUlEQVRoQ+3YO4jUQBwG8O9/PhDXJqLNVttYTay10OZQDlEOfICCaGNroWCphY/OUtDyQBBOUItDkUW46kDsLDKCzbKwyzaCYRezvk5H5rgcYy6bTLKT3G5uts1dkt9830wmIWyzH20zLyy46onbhG3CFRsBW+mKBbqJYxO2CVdsBGylKxaoXbRspW2lKzYCttIVC9Su0rbSttIVGwFb6YoFaldpYoztF0I8IKKzAH4CWOz3+3e73e73aU+bMXYTwA0AuwE84ZzfJ9d13wM4quKEEMtBEJxut9s/phXtuu5DALcirscSLOJQ04xmjD0iousxrlUJ/gVgV1XQCVhJ/C3n8B0iujequjJpAKc453JgJvqXgpX3fls+h2dc130K4HICuglgfpLRGthnnuddDTceU43WxQL4q+60Zhhjz4nowjQlnYYVQrzgnF+UWOmKbi13MMYWpwWtib0E4E8YYtxeWgvNOT8DYHWrVrE82LiEw/vXQS9xzs9vBTovNgksj00kWgMrgzin1lhtYdrroUS/IqL5hIWstKQ1sYmtSwNL507G2EsN9MhRNTHPTWDTKq3epw5aLv//rYgmoPIcprBZwLpJG0drYJtZnhg6lY4m/ZqI5hLmtDG0DjbrljcrWNZLvkwvFY0uApu10huhZkBvbOmyzOeisLnB6wtJatIA1t5Qwn2sDloDO9brauZKqzetk3QWtA523E9PY4GVpN8S0WxCgqlJl4Edq9IqrtFo7KnVam800FcAbPqGpoFdCYLgpImPimMnHMI10Que511T0TpY3/fner3eUGcNSPsbY2B5oazosrHGKp2j3gtCiGDEp9S10wkhVkwmG96j0YQj9X5HRMfSKhZ3XAjxwff9WVM1Vq9RCFheoF6v73Ucp5kVLbEATnDOv+UZrLT/KQycB100tpA5HB1hNWkhBIjix7gMbClgJellIjoyYs5+BHC8qBqXMoejMMbYPgCfiageOfZlOBwearVa/bT5Z+J4oXM4pt4HHMf5REQH1x89XweDweFOp9MzgdE5xz82NwJwQfGB8wAAAABJRU5ErkJggg=='); */
}

.fa-angle-down {
    background-size: 15px;
    position: absolute;
    top: 7px;
    right: 0;
    /* background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAC70lEQVRoQ+3ZsYsTQRQG8O+dIpIIMW1MEVIJs2BpYyVIEOUEFRQEwUKwsfQfsBZEOLSzEIQT1OJQjuPkQLjeJtMHDCkTUmwQuXNkIANhyezOZHYnE5htk8y833xvJtkNwePVbrcvNRqNfQAMgADwazqd9obD4dhXGeRrom6326jVagMAFzNz/h6Px5dHo9HMRy1ewIyxCwCOiejKMpQQ4ngymfR8oCsHz7E/iOiqBgsigi90peAibHYBJDpN0xuDweBPVe1dGdgWq4BCiKM0TW9Vha4EvCrWB7p0cKvVqjWbzSPdnpUoIcQOETUBPNK1blVJlwqeYw+I6FoOZIdz/hzAVpIkH3yjSwNbYtV6GKEB3OSc/y3jICsFvCLWBn0AYLsMtDO40+mcr9frh4ZtrAvJJOlS0E7gOfY7EV032LNFHbnFGPtERPdzxnJGrwwuGauMZxhju1WiVwJXhLVCc85vAzgpapvs69Zgxtg5APsltbGuXpOk9zjn92zRVuA5do+IeiXs2aJwJPorEW3nzGWNNgZ7xirjWcbYlzLRRuA1YStBm4DlKn/z1Ma67jVN+i6A07y9UgQ2mUj9Ni7ak66vm9TymXP+MA+dBzaZwBd2sb2Lui0XrQMXYgG86vf7L1xjs/284XmiRS8DF34drAurFscFnQUXfuGvG7sC+gGAf+pzi+CNwdqgAXzs9/uPFVqBNw6bQef+1F1ES3DhbVkobaw74ExuZhSakiR5B+BZzmm5ltPY9vQ2QQsh3hJj7JSItjQTbARW1W6APpEJy3/xll0bhc2gtY+cJPg9gCcZ8UZilUH3UFEIsSsPLdnWL4noqRBC/qfzhnP+2nYPhfb+OVo+I5NPRuT1czab3Sm6eQjN4VxPBDsvYeADxIQDD8i5vJiw8xIGPkBMOPCAnMuLCTsvYeADxIQDD8i5vJiw8xIGPkBMOPCAnMuLCTsvYeADxIQDD8i5vJiw8xIGPkBMOPCAnMuLCTsvYeAD/AdVLs4DiX2YbwAAAABJRU5ErkJggg=='); */
}

.aui-order-up-flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 2px 15px;
    font-size: 0.8rem;
    color: #333;
    font-weight: bold;
}

.aui-order-up-flex-hd {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
}

.aui-show-box a {
    padding: 15px;
    display: block;
    position: relative;
}

.aui-show-box a:after {
    content: '';
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #dedede;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
}

.aui-fk-list:after {
    content: '';
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #dedede;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
}

.aui-shop-list {
    position: relative;
    overflow: hidden;
    padding-left: 8px;
    background: #f2f2f5;
    padding-top: 8px;
}

.aui-shop-list-item {
    width: 31%;
    float: left;
    position: relative;
    z-index: 0;
    padding: 0.32rem 0;
    font-size: 0.28rem;
    margin-right: 2%;
    border-radius: 4px;
}

.aui-shop-list-selected .aui-shop-list-item {
    width: 48%;
    padding: 0;
    overflow: hidden;
    margin-bottom: 8px;
    background: #fff;
}

.aui-shop-list-item-hd {
    position: relative;
}

.aui-shop-list-item-hd img {
    width: 100%;
    height: auto;
    display: block;
    border: none;
}

.aui-shop-list-selected .aui-shop-list-item-tag {
    padding: 1px 4px;
    color: #fff;
    font-size: 0.65rem;
    /* position: absolute; */
    /* left: 0; */
    /* bottom: 39px; */
    width: auto;
    text-align: center;
    background-color: #e4163a;
    border-radius: 20px;
}

.aui-shop-list-item-bd {
    text-align: center;
    font-size: 0.9rem;
    color: #333;
    padding: 0.5rem 0 0.01rem 0;
    font-weight: bold;
}

.aui-shop-list-selected .aui-shop-list-item-bd {
    text-align: left;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
}

.aui-shop-list-selected .aui-shop-list-item h3 {
    color: #333;
    font-size: 0.8rem;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-weight: normal;
    text-align: left;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

.aui-shop-list-selected .aui-special-etc {
    color: #e82440;
    font-weight: bold;
    /* padding-top: 10px; */
    font-size: 0.9rem;
}

.aui-shop-list-selected .aui-special-etc {
    color: #e82440;
    font-weight: bold;
    /* padding-top: 10px; */
    font-size: 0.9rem;
}

.aui-shop-list-selected .aui-special-etc .aui-special-etc-bd {
    text-decoration: line-through;
    color: #999;
    font-weight: normal;
    font-size: 0.7rem;
}

.aui-me-box {
    padding-top: 20px;
}

.aui-me-box-img img {
    width: 100%;
    height: auto;
    display: block;
    border: none;
}



</style>

