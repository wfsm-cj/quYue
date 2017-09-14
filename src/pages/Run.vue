<template>
	<div>run
	
	<router-link to="/shop" style="color: red;">go to shop</router-link>
	<router-link to="/cart" style="color: blue;">go to cart</router-link>
	<b>{{ count }}</b>
	<button v-on:click="add">add</button>
	<i>{{ age }}</i>
	<strong>{{ name }}</strong>
<!--	<h1>{{ add }}</h1>-->
	<h3>{{ bigger }}</h3>
	<h3>{{ smaller }}</h3>
	</div>
</template>

<script>
	
	import { mapState,mapGetters} from 'vuex'//记得导入mapState和mapGetters...
	export default{
		name:'Run',
		data(){
			return {
				haha:'hello'
			}
		},
//		computed:mapState({//mapState里面的对象，变量对变量,这里面的state变量就是this.$state
//			//mapState没有this
//			count:state=>state.count,
////			age:state=>state.age,
//			age1:'age',//'age'相当于 state=>state.age  并返回赋值给age1
//			
//			name(state){
//				console.log(state)
//				return state.name+this.haha
//			}
//		}),
//		computed:mapState([
//			'count',
//			'age',
//			'name'
//		]),
//		computed:{
//			count(){
//				return this.$store.state.count
//			}
//		},
		computed:{//将单个state和mapState一起写入
			...mapState([
				'age',
				'name'
			]),
			count(){
				return this.$store.state.count
			},
//			add(){
//				return this.$store.getters.bigger.reduce(function(accumulater,curr){
//					return accumulater+curr
//				},0)
//			},
			...mapGetters([//如果你想将一个getter属性另取一个名字，使用对象形式
				'bigger',
				'smaller'
			])
		},
		methods:{
			add(){
				this.$store.commit('INCREMENT',{
					num:5
				})
			}
		},
		created(){
			console.log(this.$store)  //调用Vue中加$
		}
	}
</script>

<style scoped>
	button{
		width: 200px;
		height: 200px;
		font-size: 60px;
	}
</style>