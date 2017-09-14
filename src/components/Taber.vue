<template>
	<div class="taber" v-if="isShowTaber">
	   <router-link to="/home"  class="nav nav-home">
	   		<img src="../assets/images/tab_home.png" alt="" />
	   		<span>首页</span>
	   </router-link>
	   <router-link to="/run"  class="nav nav-home" >
	   		<img src="../assets/images/tab_running.png" alt="" />
	   		<span>约跑</span>
	   </router-link>
	   <router-link to="/step"  class="nav nav-home" >
	   		<img src="../assets/images/tab_travel.png" alt="" />
	   		<span>约行</span>
	   </router-link>
	   <router-link to="/user"  class="nav nav-home">
	   		<img src="../assets/images/tab_user.png" alt="" />
	   		<span>我的</span>
	   </router-link>
    </div>
</template>

<script>
	export default{
		name: 'Taber',
		computed:{
			isShowTaber(){
				let routerPathLength=this.$route.path.split('/').length
				return routerPathLength>2?false:true
			}
		}
	}
</script>

<style>
	.taber{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 99;
		background: #fafafa;
		/*overflow: hidden;*/
	}
	.nav{
		width: 25%;
		height: 150px;
		line-height: 150px;
		float: left;
		color: #000;
		position: relative;
	}
	
	.nav img{
		height: 60px;
		position: absolute;
		top: 0;left: 0;right: 0;
		margin: auto;
	}
	.nav span{
		position: absolute;
		left: 0;
		right: 0;
		top: 20px;
		margin: auto;
	}
	
	.router-link-active{
		color: #76D49B;
	}
</style>