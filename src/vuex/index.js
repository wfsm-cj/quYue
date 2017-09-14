import Vue from 'vue';
import Vuex from 'vuex';
import { increment } from './mutation-types.js'
Vue.use(Vuex);

const store=new Vuex.Store({
	state:{
		count:222,
		name:'cj',
		age:'19',
		arr:[1,2,3,4,5]
	},
	getters:{
		bigger(state){
			return state.arr.filter((curr)=>{
					if(curr>3){
						return true
					}
				})
		},
		smaller(state){
			return state.arr.filter((curr)=>{
					if(curr<3){
						return true
					}
				})
		}
	},
	mutations:{
		[increment](state,obj){
			state.count+=obj.num;
		}
	}
})




export default store  //定义仓库 然后导出  在main.js导入  给Vue对象设置store参数  即可使用
