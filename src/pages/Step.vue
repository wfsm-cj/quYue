<template>
	<!--必须要跳转的才会有数据-->
	<div class="step">
		<v-travelList v-bind:msg='msg'></v-traveLlist>
	</div>
</template>

<script>
	import TravelList from '@/components/TravelList.vue'
	import $ from 'jquery'
	let message=[];
	let isGetData=false;//是否得到数据
	export default{
		name:'Step',
		data:function(){
			return{
				msg:[]
			}
		},
		components:{
			'v-travelList':TravelList //注意大小写
		},
		computed:{
			
		},
		beforeRouteEnter(to,from,next){
			//console.log(this)
			$.ajax({
				url:'http://localhost:3000/step',
				success:function(data){
//					console.log(data.data)
					//message=data.data;
					next((vm)=>{ //beforeRouteEnter钩子不能访问this，不过你可以通过传一个回调给next来
						//来访问组件实例，在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数
						//vm 访问组件实例  vm   == this
						vm.msg = data.data
//						alert('跳转中')
					})
					
					
				}
			})
			
			//setTimeout(()=>{next(isGetData)},500);  //也不能写ajax 和setTimeout两个异步，异步不知道谁先执行完
			//alert('跳转中...')
		}
//		created(){
//			this.msg=message
//			if(this.msg.length!=0){
//				isGetData=true;
//			}
//		}
//		beforeRouteLeave(to,from,next){
//			alert('leave')
//			next()
//		},
//		beforeRouteUpdate(to,from,next){
//			alert('update')
//		}
//		beforeRouteEnter(to,from,next){
//			console.log('to')
//		}
//		beforeEach(){
//			console.log('adasd')
//		}
	}
</script>

<style>
	
	.step{
		background-color: #eee;
		overflow: hidden;
	}
	.step .list-title{
		margin: 30px auto;
		text-align: left;
		font-size: 40px;
		position: relative;
		line-height: 130px;
		background-color: #fff;
	}
	
	.step .list-title i{
		margin: 0 30px;
		color: red;
	}
	
	.step .list-title a{
		position: absolute;
		right: 30px;
	}
	
	.step .icon{
		font-size: 50px;
	}	
</style>