<template>
	<!--模板必须用一个容器包着-->
	<div class="home">
		<v-banner></v-banner>
		<div></div>
		<div class="home-title">
			<img src="../assets/images/homepage_man.png" alt="" />
			<span v-on:click="showData">年轻怎能不放纵，约起来</span>
		</div>
		
		<v-homenav></v-homenav>
		<!-- activeMsg   传入自组键的 item 信息-->
		<v-active v-bind:activeMsgs="activeMsgs"></v-active>
	</div>
	
	
</template>

<script>
	import Banner from '@/components/banner.vue';
	import Homenav from '@/components/Homenav.vue';
	import activeList from '@/components/activeList.vue';
	import $ from 'jquery'
//	import Swiper from 'swiper'
	export default {
		name:'Home',
		data:function(){
			return {
				Msgs:[]   //传入子组件的activeMsgs就是 Msgs
			}
		},
		components:{
			'v-banner':Banner,
			'v-homenav':Homenav,
			'v-active':activeList
		},
		computed:{
			activeMsgs:function(){
				return this.Msgs;
			}
		},
		methods:{
			getDate(page){
				var that=this
//				console.log($)
				$.ajax({  //ajax存在指针指向的问题
					url:'http://localhost:3000/list',
					success:function(data){
						console.log(data.list)
						that.Msgs=data.list
					}
				})
				console.log('hello')
			},
			showData(){
				console.log(this.Msgs)
			}
		},
		beforeCreate(){
//			this.getDate()   //beforeCreate 组件实例刚被创建  ，组件计算属性之前
		}
		,
		created(){
			this.getDate()
//			console.log(this.Msgs)
		}
		
	}
	
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	.home{
		width: 100%;
		/*position: relative;*/
		/*padding-bottom: 180px;*/
		
	}
	
	.home .home-title{
		margin:30px auto ;
		font-size: 40px;
		border-bottom: 2px solid #000;
		width: 60%;
	}
</style>