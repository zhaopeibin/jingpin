<template>
    <div class="set">
            <div id="app" class="mui-views" data-view="1">
			<div class="mui-view">
				<div class="mui-navbar">
				<div class="mui-navbar-inner mui-bar mui-bar-nav mui-navbar-center">
				<button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
					<span class="mui-icon mui-icon-left-nav"></span>
				</button>
				<h1 class="mui-center mui-title" style="margin-left: -15px;">设置</h1>
			</div></div>
				<div class="mui-pages">
				<div id="setting" class="mui-page mui-page-center">
			<!--页面标题栏开始-->
			
			<!--页面标题栏结束-->
			<!--页面主内容区开始-->
			<div class="mui-page-content">
				<div class="mui-scroll-wrapper" data-scroll="2">
					<div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;">
						<!-- <ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell mui-media">
								<a class="mui-navigate-right" href="#account">
									<img class="mui-media-object mui-pull-left head-img" id="head-img" src="">
									<div class="mui-media-body">
										个人信息										
									</div>
								</a>
							</li>
						</ul> -->
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<a href="#account" class="mui-navigate-right">个人资料</a>
							</li>
						</ul>
                        <ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<a href="#account" class="mui-navigate-right">修改手机号</a>
							</li>
						</ul>
						<ul class="mui-table-view mui-table-view-chevron">
							<!-- <li class="mui-table-view-cell">
								<a href="#notifications" class="mui-navigate-right">修改手机号</a>
							</li> -->
							<li class="mui-table-view-cell">
								<a href="#privacy" class="mui-navigate-right">隐私政策</a>
							</li>
                            
							<!-- <li class="mui-table-view-cell">
								<a href="#general" class="mui-navigate-right">通用</a>
							</li> -->
						</ul>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<a href="#about" class="mui-navigate-right">关于指动精品<i class="mui-pull-right update">折扣版</i></a>
							</li>
						</ul>
						<ul class="mui-table-view">
							<li class="mui-table-view-cell loginbtn" style="text-align: center;">
								<a>退出登录</a>
							</li>
						</ul>
					</div>
				<div class="mui-scrollbar mui-scrollbar-vertical"><div class="mui-scrollbar-indicator" style="transition-duration: 0ms; display: none; height: 617px; transform: translate3d(0px, 0px, 0px) translateZ(0px);"></div></div></div>
			</div>
			<!--页面主内容区结束-->
		</div></div>
			</div>
		</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
@import '../lib/mui-master/dist/css/mui.min.css';
.mui-scroll-wrapper[data-v-2bafb40d] {
    position: absolute;
    z-index: 2;
    top: 44px;
    bottom: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
}
.mui-table-view-cell,.mui-media {
    height: 43px;
}
.mui-table-view .loginbtn a {
color:#f2223b;
}
</style>


