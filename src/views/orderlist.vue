<template>
<div class="orderlist">
  <div class="mui-content">
			<div style="padding: 10px 10px;">
				<div id="segmentedControl" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-negative">
					<router-link to="allList" class="mui-control-item mui-active" >全部订单</router-link>
					<router-link to="waitMoney" class="mui-control-item" >待付款</router-link>
					<router-link to="waitGoods" class="mui-control-item" >待发货</router-link>
          <router-link to="peiSong" class="mui-control-item" >配送中</router-link>
				</div>
			</div>
            
			</div>
            <router-view></router-view>
   </div>         
</template>

<script>

export default {
   
}
</script>
<style scoped>
@import '../lib/mui-master/dist/css/mui.min.css';

</style>

