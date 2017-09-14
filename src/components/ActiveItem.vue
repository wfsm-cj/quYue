<template>
	<!--<span>hello</span>-->
	<div class="active-item">
		<!--v-bind:to=""解析为变量  和 直接to是解析为字符串-->
		<router-link v-bind:to="{path:'/step/'+oneActive.objectId}">
			<div class="haibao">
				<img v-bind:src="oneActive.travelPic" alt="" />
				<span>免费</span>
				<span>正在报名</span>
				<span><i>{{ oneActive.joinNum }}</i>人报名</span>
			</div>
			<div class="active-msg">
				<p>
					<span>{{ oneActive.title}}</span>
					<b><i class="iconfont icon-kanguos icon"></i>{{ oneActive.clicks}}</b>
				</p>
				<p>
					<span>{{ oneActive.releaseUserName }}</span>
					<time>{{ createdTime }}</time>
				</p>
			</div>
		</router-link>
	</div>
</template>

<script>
//	release释放
	export default {
		name:'activeItem',
		props:{
//			oneActive:Object //对象的验证必须有，否则数据不显示
			oneActive:{ // 数组/对象的默认值应当由一个工厂函数返回
				type:Object,
				default:function(){
					return {  "joinNum": 0, 
							  "title": "庐山游",
					          "releaseUsername": "哈哈"}
				}
			}
		},
//		data(){
//			return{
//				name:'cj',
//				oneActive:{
//					objectId:'111',
//					joinNum:45,
//					title:'title1',
//					releaseUserName:'aaa'
//				}
//			}
//		},
		computed:{
			createdTime(){
				let time=this.oneActive.createdAt;
//				return new Date()
				if(!time){
					return
				}
				return time.split('T')[0]+" "+time.split('T')[1].split('.')[0]
			}
		},
		methods:{
			
		},
		mounted(){
			console.log('adf')
		}
	}
</script>

<style scoped>
	.active-item{
		font-size: 50px;
		border: 1px solid #ccc;
		/*padding:10px 0;*/
		/*border-left: 0;*/
		/*border-right: 0;*/
		/*background-color: pink;*/
	}
	
	.active-item .haibao{
		width: 100%;
		position: relative;
		/*background-color: yellow;*/
		
	}
	.active-item .haibao img{
		width: 100%;
	}
	.active-item .haibao span{
		position: absolute;
		padding: 10px 20px;
		font-size: 40px;
		color: #fff;
	}
	.active-item .haibao span:nth-child(2){
		left: 30px;
		top: 60px;
		border-radius: 20%;
		background: rgba(4,255,4,.48);
	}
	.active-item .haibao span:nth-child(3){
		left: 30px;
		bottom: 60px;
		border-radius: 15%;
		background: rgba(0,125,255,.48);
	}
	.active-item .haibao span:nth-child(4){
		top: 60px;
		right: 0;
		border-radius: 15% 0 0 15% ;
		background: rgba(0,0,0,.37);
	}
	
	
	.active-item .active-msg p{
		padding: 10px 20px ;
		overflow: hidden;
	}
	.active-item .active-msg p span{
		float: left;
	}
	
	.active-item .active-msg p b,.active-item .active-msg p time{
		float: right;
		font-size: 40px;
		font-weight: 100;
		color: #555;
	}
	.active-item .active-msg p b i{
		margin: 0 20px;
	}
	.active-item .icon{
		font-size: 50px !important;
	}
	/*span{
		background-color: yellow;	
	}*/
</style>