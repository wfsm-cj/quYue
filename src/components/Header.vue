<template>
	<div class="header">
		<span v-show="isShowBack" v-on:click="backPage"> &lt;</span>
		<span>{{ title }}</span>
		<span v-if="isShowList" v-bind:class="headerClass" 
			class="icon iconfont" v-on:click="goToMap"></span>
	</div>
</template>

<script>
	export default{
//		props:['title'],//接受一个title属性 --
		props:{  //属性验证  
			title:String,
			isShowBack:Boolean,
			isShowList:Boolean,
			headerClass:String
		},
		data:function(){
			return {
				
			}
		},
		methods:{
			goToMap(){
				alert('...开发中')
			},
			backPage(){
//				window.history.back()  //...
//				this.$router.push('/home')  //只能push根节点..如果没有根节点会将整个字符串push到路径后面替换完最后一个进行查找
				this.$router.go(-1)
//				this.$router.push({ path:'home'})
//				this.$router.push('http://www.baidu.com')  
//				this.$router.push('http://localhost:8090/home')
			}
		}
	}
</script>

<style>
	.header{
		height: 100px;
		width: 100%;
		background: #76d49b;
		position: relative;
		color: #fff;
	}
	
	.header span{
		float: left;
		line-height: 100px;
		font-size: 60px;
	}
	
	.header span:nth-child(1){
		margin-left: 10px;
		width: 67px;
		line-height: 100px;
		font-size: 80px;
	}
	.header span:nth-child(2){
		margin-left: 20px;
		font-size: 50px;	
	}
	
	.header span:nth-child(3){
		margin-right: 30px;
		width: 80px;
		height: 80px;
		margin-top: 10px;
		line-height: 80px;
		float: right;
	}
	.header .icon{
		font-size: 60px;
	}
</style>