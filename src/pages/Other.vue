<template>
	<!-- 在加载前设置  加载中.... -->
	<div>
		<div v-if="loading">loading...</div>
		<ul v-if="error">
			<li>{{ error}}</li>
			<li>{{ post.title}}</li>
			<li>{{ post.body}}</li>
			<li>1</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'other',
		data(){//给控制变量设常值
			return{
				loading:false,
				post:null,
				error:null
			}
		},
		created(){//组件创建完成后获取数据
			this.fetchData()
		},
		watch:{
//			$route:
		},
		methods:{
			fetchData(){
				this.error=this.post=null;
				this.loading=true;
				var that=this;
				(function(){
					//这里面加载数据，加载成功后将loading消失内容显示
					setTimeout(function(){
						that.loading=false;
						that.error=true;
						that.post={
							title:'haha',
							body:'cj'
						}
					},3000)
				})()
			}
		}
	}
</script>

<style>
</style>