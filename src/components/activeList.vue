<template>
	<div class="active-list">
		<div class="list-title">
			<i class="icon iconfont icon-haoping"></i>
			<span>热门活动</span>
			<router-link to='/step'>... </router-link>
		</div>
		<!--activeMsg 传入的 item 数据-->
		<v-activeItem v-for="item in activeMsgs"  v-bind:oneActive="item" 
			v-bind:key="item.objectId"></v-activeItem>
		<!--<v-activeitem></v-activeitem>-->
	</div>
</template>

<script>
	import ActiveItem from './ActiveItem.vue'
	
	export default{
		name:'activeList',
		props:{
			activeMsgs:Array
		},
//		data:function(){
//			return {
//				activeMsg:[{
//					objectId:'001',
//					name:'c'
//				},{
//					objectId:'002',
//					name:'j'
//				}]
//			}
//		},
		components:{
			'v-activeItem':ActiveItem
		}
	}
</script>

<style>
	.active-list .icon{
		font-size: 50px;
	}
	.active-list .list-title{
		margin: 30px auto;
	    text-align: left;
	    font-size: 40px;
	    position: relative;
	    line-height: 60px;
	}
	.active-list .list-title i{
		margin: 0 30px;
		color: red;
	}
	.active-list .list-title a{
		position: absolute;
    	right: 30px;
	}
</style>