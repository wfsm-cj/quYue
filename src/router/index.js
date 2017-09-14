import Vue from 'vue'
import Router from 'vue-router'


import Hello from '@/components/Hello'
import Header from '@/components/Header.vue'
import Taber from '@/components/Taber.vue'
import Home from '@/pages/Home.vue'
import Run from '@/pages/Run.vue'
import Step from '@/pages/Step.vue'
import User from '@/pages/User.vue'
//import Detail from '@/pages/Detail.vue'
import Post from '@/pages/Post.vue'
import Other from '@/pages/Other.vue'
import Cart from '@/pages/Cart.vue'
import Shop from '@/pages/Shop.vue'
const Detail= resolve=>{ require.ensure([],()=>{ //路由懒加载
	resolve(require('@/pages/Detail.vue'))
})}


import Haha from '@/components/Haha.vue'
import Cj from '@/components/Cj.vue'

Vue.use(Router)

const router= new Router({
	
  routes: [
   {
    	path:'/',
    	component:Home
   },
   {
   		path:'/home',
   		component:Home
   },
   {
   		path:'/run',
   		components:{//单个组件是component 多个组件是components
   			default:Run,
   			test1:Haha,
   			test2:Cj
   			
   		},
   		name:'Run'//设置路由名字  可以实现通过路由名字跳转？
   },
   {
   		path:'/step',
   		component:Step
// 		beforeEnter(to,from,next){
// 			alert('某个路由独享的钩子');  //在路由位置设置某个路由独享钩子
// 			next()
// 		}
   },
   {
   		path:'/user',
   		component:User,
   		alias:'/register',//别名   给user取一个register别名 通过/register访问user，但不是重定向，因为访问的url不会改变
   		name:'User'
   },
   {
   		path:'/home/post', //只有二级页面才有返回键  没有taber
   		component:Post
   },
   {
   		path:'/step/:objectId',
   		component:Detail,
   		children:[//创建子路由 当访问 /step/:objectId/haha 时访问  动态路由要写
   		//正确，在detail组件中会出现数据错误 使得下面的子路由不能访问
   			{ path:'haha',component:Haha},//不是绝对路径
   			{ path:'cj',component:Cj}
   		]
   },
   {
   		path:'/login',
// 		redirect:'/user'//重定向，可以写对象也可以写返回路径的函数
//		redirect:{ path:'/user'},
		redirect:{name:'User'} //name是路由的名字不是组件的名字
   }
   ,
   {
   	path:'/other',
   	component:Other
   },{
   	path:'/shop',
   	component:Shop
   },
   {
   	path:'/cart',
   	component:Cart
   }
   ,{
   	path:'/*',//没有匹配到的路径，加载这个组件Cj 通常用来写404 或者将组件写为Home
   	component:Cj
   }
  ],
   mode: 'history',
  scrollBehavior(to,from,savedPosition){//？？？？？？？？1，静态高度太小，和不滚动没区别
  	//2，下面是异步加载，高度计算是在异步加载之前，高度不会被计算进去。
  	//3，如果想实现回退，可以使用iscroll计算滚动高度，用全局变量存储
	if(savedPosition){
		return savedPosition
	}else{
		return {x:0,y:0}
	}

	//console.log(to,from)
	//console.log(savedPosition)
  }
})

//router.beforeEach((to,from,next)=>{
//	console.log('go')
////	next(false);
////next()  
////	next('/')  next里面加路径前面要进行判断 ，否则会一直跳入那个路由，形成死循环
//})

router.afterEach((route)=>{//beforeEach会阻止页面跳转必须next 而afterEach不会阻止跳转
	setTimeout(function(){
		console.log('地方撒打发硕大的')//导航在所有钩子 resolve 完之前一直处于 等待中。
		//resolve完不包括对异步完全执行完  只是对钩子处理完 ，钩子也是异步解析执行的，
		//只是将函数加入队列
	},3000)
})


export default router