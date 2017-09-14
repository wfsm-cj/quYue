<template>
	<div class="travelList">
		<div class="list-title">
			<i class="icon iconfont icon-haoping"></i>
			<span>热门活动</span>
			<router-link to='/'>...</router-link>
		</div>
		
		<div class="step-list">
			<!--换个变量就可以了？？？-->
			<v-activeItem v-for="item in msg" v-bind:oneActive="item" v-bind:key="item.objectId"></v-activeItem>
			<!--<v-activeItem v-for="item in travelMsg"
				v-bind:oneActive="item"
				v-bing:key="item.objectId"></v-activeItem>-->
		</div>
	</div>
</template>

<script>
	import ActiveItem from '@/components/ActiveItem.vue'
	export default{
		name:'travelList',
		props:{
			msg:Array
		},
		components:{
			'v-activeItem':ActiveItem
		},
		created(){
			console.log(this.msg)
		}
	}
</script>

<style>
</style>