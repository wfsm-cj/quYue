<template>
  <div id="app">
    
    <!--<Home></Home>-->
    <!--传递动态数据  v-bind:属性="值"  传过去之后可以直接调用该属性-->
    <!-- v-if="变量"  v-show="变量"  用法相同，v-if是真正的条件渲染，组件会适当被销毁和重建   v-show 简单的
    	多，只是简单的css切换    如果需要非常频繁的切换  用v-show  如果在运行时条件不太可能改变用v-if
    -->
    <v-header v-bind:title="title" v-bind:isShowBack="isShowBack" v-bind:isShowList="isShowList"
    	v-bind:headerClass="headerClass"></v-header>
    	
		<div id="content">
			<!--命名视图-->
	    <router-view name="test1"></router-view>
	    <!--<transition v-bind:transitionName="transitionName">-->
		    <router-view>
		    	<!--<app></app>-->
		    </router-view>
	    <!--</transition>-->
	    	<!--<v-user></v-user>-->
	    <router-view name="test2"></router-view>
		</div>
    <v-taber></v-taber>
  </div>
</template>

<script>
//	taber		美国泰伯尔品牌
	import taber from '@/components/Taber.vue'
	import Header from '@/components/Header.vue'
	import User from '@/pages/User.vue'
	
export default {
  name: 'app',
  components:{
  	'v-taber':taber,
  	'v-header':Header
//	'v-user':User
  },
  computed:{
  	title(){
//		console.log(this.$route.path.slice(1))   这样如果是某个路由的子路由则不行
			switch(this.$route.path.split('/')[1]){
				case '':
					return 'Qu约';
				case 'home':
					return 'Qu约';
				case 'run':
					return '约跑';
				case 'step':
					return '约行'
				case 'user':
					return '我的'
			}
  	},
  	isShowBack(){
  		return this.$route.path.split('/').length>2?true:false;
//		return true
  	},
  	isShowList(){
  		return this.$route.path.split('/').length>2?false:true
//		return true
  	},
  	headerClass(){
  		let theName=this.$route.path.split('/')[1]
  		if(theName==='home' || theName===''){
		  		return "icon-dizhi"
  		}else{
  			return "icon-zonghe"
  		}
  	}
  	}
  }
//	,
//	watch:{
//		$route(to,from){
//			this.transitionName='cj'
//		}
//	}
//}

</script>

<style>
#app{
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	 /*-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;*/
   text-align: center;
   font-size: 50px;
   height: 100%;
   color: #2c3e50;
}

html,body,ul,li,p,h1{
	padding: 0;
	margin: 0;
}
html,body{
	height: 100%;
}
a{
	text-decoration: none;
	color: black;
}
/*.cj-enter-active{
	transform: scale(2);
}
.cj-enter,.cj-leave-active{
	opacity: 0;
}*/
</style>
