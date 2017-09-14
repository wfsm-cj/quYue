<template>
	<div class="shop">
		<div>
			<span>name</span>
			<span>price</span>
			<span>
				<i>-</i>
				amount
				<i>+</i>
			</span>
			<button>button</button>
		</div>
		<template v-for="item in products">
			<div>
				<span class="nameItem">{{ item.name }}</span>
				<span class="price">{{ item.price }}</span>
				<span>
					<i v-on:click="reduce" style="font-size: 60px;">-</i>
					<input class="amount" size="3" v-bind:value="item.amount" style="font-size: 30px;" type=""></input>
					<i v-on:click="increase" style="font-size: 60px;">+</i>
				</span>
				<button v-on:click="submitMsg">button</button>
			</div>
		</template>
	</div>
</template>

<script>
	import $ from "jquery"
	export default{
		name:'cart',
		data(){
			return{
//				products:[{
//					name:'cj',
//					price:1000,
//					amount:0
//				},{
//					name:'cc',
//					price:100,
//					amount:0
//				}]
			}
		},
		computed:{
			products(){
//				if(localStorage.products){
//					return JSON.parse(localStorage.products)
//				}
				return [{
					name:'cj',
					price:1000,
					amount:1
				},{
					name:'cc',
					price:100,
					amount:1
				}]
			}
		},
		methods:{
			submitMsg(e){
				var name=$(e.target).parent().children('.nameItem').text()
				var price=$(e.target).parent().children('.price').text()
				var amount=parseInt($(e.target).prev().children('.amount').val())
				console.log(typeof amount)
				if(amount<=0){
					alert('请输入有效的数据')
					return
				}
//				获取本地存储的数据  
				var index=null;
				var _product=localStorage.getItem('products') 
				_product=JSON.parse(_product) || []
				var isExist=_product.some((curr,idx)=>{//存在一个满足 函数返回true
					if(curr.name===name){
						index=idx
						return  true
					}
				})
//				console.log(isExist)
				if(isExist){
					console.log(index)
					
					_product[index].amount+=amount;
					localStorage.setItem("products",_product)
				}else{
					var product={
						name,
						price,
						amount
					}
					_product.push(product)
				}
				console.log(JSON.stringify(_product))
				localStorage.setItem("products",JSON.stringify(_product))
//				console.log(localStorage.products)//得到的是一个 字符串
				
			},
			reduce(e){
//				var name=$(e.target).parent().parent().children('.nameItem').text()
//				this.products.forEach((curr)=>{
//					if(curr.name===name){
//						console.log($(e.target).next().val())
//						
//					}
//				})
//				console.log('hah')
				var amount=$(e.target).next().val()
				amount--
				
				$(e.target).next().val(amount)
				
			},
			increase(e){
				var amount=$(e.target).prev().val()
				amount++
				$(e.target).prev().val(amount)
			}
		}
	}
</script>

<style>
	.shop div{
		width: 100%;
		height: 100px;
		border: 1px solid red;
		display: flex;
		line-height: 100px;
	}
	.shop div span{
		width: 25%;
		font-size: 40px;
		
		/*display: inline-block;*/
		/*float: left;
		width: 250px;
		
		border: 1px solid #000;*/
	}
	.shop div button{
		width: 25%;
		font-size: 60px;
		/*float: left;
		width: 200px;
		height: 100px;
		font-size: 60px;*/
	}
</style>