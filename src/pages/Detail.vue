<template>
	<!--<transition v-bind:name="transitionName">-->
		
	
	<div class="detail" >
		<div class="detail-header">
			<img v-bind:src="travelPic" alt="" />
			<span>
				<i class="icon iconfont icon-kanguo"></i>
				<b>{{ msg.clicks }}</b>
			</span>
		</div>
		<div class="detail-title">
			<p>{{ msg.title }}</p>
			<p>
				<span>{{ msg.releaseUsername }}</span>
				<time>{{ createTime }}</time>
			</p>
		</div>
		
		<div class="activeDate date">
			<i class="icon iconfont icon-iconfontriyongbaihuo"></i>
			<p>
				<span>活动时间</span>
				<time>
					{{ beginTime }}
					至
					{{ endTime}}
				</time>
			</p>
		</div>
		
		<div class="overDate date">
			<i class="icon iconfont icon-iconfontriyongbaihuo"></i>
			<p>
				<span>报名截止</span>
				<time>{{ canJoinTime }}</time>
			</p>
		</div>
		<div class="address date">
			<i class="icon iconfont icon-dizhi"></i>
			<p>
				<span>活动地址</span>
				<!--time 标签-->
				<time>{{ msg.destination }}</time>
			</p>
		</div>
		<div class="price date">
			<i class="icon iconfont icon-zhifubaofukuan"></i>
			<p>
				<span>是否收费</span>
				<time>否</time>
			</p>
		</div>
		
		<div class="person date">
			<i class="icon iconfont icon-geren"></i>
			<p>
				<span>发布人</span>
				<time>{{ msg.releaseUsername }}</time>
			</p>
		</div>
		<button>报名</button>
		<!--当你改变路由但渲染同个组件时，原来的组件会被复用，不会再次执行钩子函数
			但是可以通过watch监听$route变化进行操作
		-->
		<router-link to='/step/57a492221532bc0060bc9087'>
			cj</router-link>
		<router-view></router-view>
	</div>
	
	<!--</transition>-->
	
	
</template>

<script>
	import $ from 'jquery'
	export default{
		name:'detail',
		data(){
			return{
				msg:{},
				allMsg:[]
			}
		},
		computed:{
			travelPic(){
				if(!this.msg){
					return
				}
//				console.log(this.msg)
				return this.msg.travelPic
			},
			createTime(){
				if(!this.msg){
					return
				}
//				console.log(this.msg.createdAt)
				return this.geShiTime(this.msg.createdAt);
			},
			beginTime(){
				if(!this.msg){
					return
				}
				return '3'
//				console.log(this.msg.beginTime.iso)//这个对象和第一个不同
				//return this.geShiTime(this.msg.beginTime.iso)
			},
			endTime(){
				if(!this.msg){
					return
				}
				return '2'
				//return this.geShiTime(this.msg.endTime.iso)
			},
			canJoinTime(){
				if(!this.msg){
					return
				}
			return '1'
				//return this.geShiTime(this.msg.cantJoinTime.iso)
			}
		},
		methods:{
			geShiTime(time){
				if(!time){
					return
				}
				return time.split('T')[0]+' '+time.split('T')[1].split('.')[0]
			}
		},
		beforeCreate(){
			var that=this
			$.ajax({//$.ajax会改变指针指向
				url:'http://localhost:3000/list',
				success:function(data){
//					console.log(data.list)
					that.allMsg=data.list
					var params=that.$route.params.objectId;
					
					data.list.forEach((curr,index,arr)=>{
						if(curr.objectId===params){
							
							that.msg=data.list[index]
						}
						
					})
//					that.msg=data.list[0]
//					console.log(that.$route.params)
				}
			})
//			console.log(this.transitionName)
		},
		watch:{//watch监听跳转到同个组件页面
			$route(to,from){
				console.log('路由改变了...')
				console.log(this.$route.params.objectId,this.allMsg)
				this.allMsg.forEach((curr,index)=>{
					if(curr.objectId===this.$route.params.objectId){
						this.msg=this.allMsg[index]
					}
				})
			}
		},
		beforeRouteEnter(to,from,next){
			alert('进入组件之前')
//			console.log(to)
			next();
		},
		beforeRouteUpdate(to,from,next){
			alert('当前路由改变，但组件被复用');
			console.log(this.$route)
			next();
		},
		beforeRouteLeave(to,from,next){
			window.confirm('你确定要离开')
			next()
		}
//		created(){
//			console.log(this.msg)
//			
//		},
//		beforeMount(){
//			console.log(this.msg)
//			console.log(this.$route.path)
//		},
//		mounted(){
//			console.log(this.msg)
//		}
	}
</script>

<style scoped>
	.detail{
		background: #FAFAFA;
		width: 100%;
		height: 94%;
	}
	.detail .detail-header{
		width: 100%;
		overflow: hidden;
		position: relative;
	}
	.detail .detail-header img{
		width: 100%;
	}
	.detail .detail-header span{
		position: absolute;
		top: 60px;
		right: 0;
		width: 200px;
		height: 60px;
		font-size: 40px;
		line-height: 60px;
		border-radius: 20px 0 0 20px;
		color: #fff;
		background: rgba(0,0,0,.37);
	}
	
	.detail .detail-title{
		padding: 10px 40px;
		width: 100%;
		background-color: pink;
		margin-bottom: 40px;
		box-sizing: border-box;
	}
	.detail .detail-title p{
		line-height: 70px;
		text-align: left;
	}
	.detail .detail-title p span{
		margin: 0 20px;
		color: #76d49b;
	}
	
	.detail .date{
		background-color: #fff;
		text-align: left;
		border-bottom: 1px solid #eee;
		overflow: hidden;
	}
	
	.detail .date i{
		float: left;
		height: 100px;
		width: 82%;
	}
	
	.detail .date p span{
		display: inline-block;
		width: 30%;
		font-size: 50px;
		line-height: 100px;
	}
	.detail .date p time{
		color: #999;
		font-size: 40px;
		line-height: 40px;
		display:inline-block;
		width: 68%;
	}
	.detail button{
		border: 0;
		width: 90%;
		height: 120px;
		line-height: 120px;
		position: absolute;
		bottom: 120px;
		font-size: 50px;
		color: #fff;
		border-radius: 20px;
		right: 0;
		left: 0;
		margin: auto;
		background: #76d49b;
	}
	.detail .icon{
		font-size: 50px;
	}.detail{
		background: #fafafa;
		width: 100%;
		height: 94%;
	}
	.detail .detail-header{
		width: 100%;
		overflow: hidden;
		position: relative;
	}
	.detail .detail-header img{
		width: 100%;
	}
	.detail .detail-header span{
		position: absolute;
		top: 60px;
		right: 0;
		width: 200px;
		height: 60px;
		font-size: 40px;
		line-height: 60px;
		background: rgba(0,0,0,.37);
		border-radius: 20px 0 0 20px;
		color: white;
	}
	.detail .detail-title{
		padding: 10px 40px;
		box-sizing: border-box;
		width: 100%;
		background: #fff;
		margin-bottom: 40px;
	}
	.detail .detail-title p{
		line-height: 70px;
		text-align: left;
	}
	.detail .detail-title p span{
		margin: 0 20px;
		color: #76d49b;
	}
	.detail .date{
		overflow: hidden;
		background: #fff;
		text-align: left;
		border-bottom: 1px solid #eee;
	}
	.detail .date i{
		float: left;
		width: 18%;
		line-height: 100px;
		text-align: center;
	}
	.detail .date p{
		float: left;
		height: 100px;
		width: 82%;
	}
	.detail .date p span{
		display: inline-block;
		width: 30%;
		font-size: 50px;
		line-height: 100px;
	}	
	.detail .date p time{
		color: #999;
		font-size: 40px;
		line-height: 40px;
		display:inline-block;
		width: 68%;
	}
	.detail button{
		border: 0;
		width: 90%;
		height: 120px;
		line-height: 120px;
		position: absolute;
		bottom: 120px;
		font-size: 50px;
		color: #fff;
		border-radius: 20px;
		right: 0;
		left: 0;
		margin: auto;
		background: #76d49b;
	}
	.detail .icon{
		font-size: 50px;
	}
	
</style>